/**
 * This file contains the event loop integration (slightly modified) from
 * Jasper St. Pierre, the author of https://github.com/GNOME/gnode/blob/master/src/loop.cc
 * The goal here was to nest NodeJS's uv loop inside glib's main loop (nesting the loop).
 * This provided good results for the NodeJS bindings because in 'Application.run()' we
 * could call to start the loop nesting to make sure javascript would still run
 * despite the blocking call to Application.run() (it blocks because it starts the glib main loop).
 * This sounds good but it left some problems:
 * - synchronous code following Application.run() would still be blocked.
 * - v8 microtasks never get run.
 * the first of these issues wasn't a deal breaker, becuase it's reasonable to assume
 * a gtk-node application would run Application.run() as the last thing in it's entrypoint,
 * similar to how gtk_main() is suppose to be used or g_application_run() in C gtk apps.
 * But the second issue is a deal breaker because it means Promises, process.nextTick() and
 * Object.observe() will never fire! These all result in v8 micro tasks and not macro tasks.
 * I'm still unsure how micro tasks are scheduled and run. There was some hope in the form of
 * the v8 Isolate API `v8::Isolate::GetCurrent()->RunMicrotasks()` but I was unable to get
 * that working.
 *
 * Instead the event loop integration we're using is in EventLoop.cpp.
 *
 * I've included this file in the repo in the hopes that some magician can get it to work!
 */
#include "./EventLoop.hpp"
#include <glib.h>
#include <uv.h>

struct uv_loop_source {
    GSource source;
    uv_loop_t *loop;
};

static gboolean uv_loop_source_prepare (GSource *base, int *timeout) {
    struct uv_loop_source *source = (struct uv_loop_source *) base;
    uv_update_time (source->loop);

    bool loop_alive = uv_loop_alive (source->loop);

    /* If the loop is dead, we can simply sleep forever until a GTK+ source
     * (presumably) wakes us back up again. */
    if (!loop_alive)
        return false;

    /* Otherwise, check the timeout. If the timeout is 0, that means we're
     * ready to go. Otherwise, keep sleeping until the timeout happens again. */
    int t = uv_backend_timeout (source->loop);
    *timeout = t;

    if (t == 0)
        return true;
    else
        return false;
}

static gboolean uv_loop_source_dispatch (GSource *base, GSourceFunc callback, gpointer user_data) {
    struct uv_loop_source *source = (struct uv_loop_source *) base;
    uv_run (source->loop, UV_RUN_NOWAIT);
    return G_SOURCE_CONTINUE;
}

static GSourceFuncs uv_loop_source_funcs = {
    uv_loop_source_prepare,
    NULL,
    uv_loop_source_dispatch,
    NULL,

    NULL, NULL,
};

static GSource *uv_loop_source_new (uv_loop_t *loop) {
    struct uv_loop_source *source = (struct uv_loop_source *) g_source_new (&uv_loop_source_funcs, sizeof (*source));
    source->loop = loop;
    g_source_add_unix_fd (&source->source,
                          uv_backend_fd (loop),
                          (GIOCondition) (G_IO_IN | G_IO_OUT | G_IO_ERR));
    return &source->source;
}


void EventLoop::start() {
    GSource *source = uv_loop_source_new (uv_default_loop ());
    g_source_attach (source, NULL);

}

void EventLoop::stop () {
  // TODO
}
