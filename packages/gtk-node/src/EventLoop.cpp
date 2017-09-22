#include "./EventLoop.hpp"
#include <uv.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/time.h>
#include <poll.h>
#include <nan.h>
#include <iostream>

#include <gtk/gtk.h>
#include <gdk/gdk.h>
#include <gdk/gdkx.h>
#include <X11/Xlib.h>

// platform specific
static gboolean stepsQuit = FALSE;
static gboolean (*iteration)(gboolean) = NULL;

int uiEventsPending() {
  return gtk_events_pending();
}

int uiConnectionNumber() {
  GdkDisplay *gd = gdk_display_get_default();
  Display *d = gdk_x11_display_get_xdisplay(gd);
  int fd = ConnectionNumber(d);
  return fd;
}


static gboolean stepsIteration(gboolean block) {
  gtk_main_iteration_do(block);
  return stepsQuit;
}

void uiMainSteps(void) {
  iteration = stepsIteration;
}

int uiMainStep(int wait) {
  gboolean block;
  block = FALSE;
  if (wait)
    block = TRUE;
  return (*iteration)(block) == FALSE;
}

static gboolean quit(gpointer data) {
	if (iteration == stepsIteration)
		stepsQuit = TRUE;
		// TODO run a gtk_main() here just to do the cleanup steps of syncing the clipboard and other stuff gtk_main() does before it returns
	else
		gtk_main_quit();
	return FALSE;
}

void uiQuit(void) {
	gdk_threads_add_idle(quit, NULL);
}

// non platform specific
uv_thread_t *thread;
bool running = false;

void asyncClosed(uv_handle_t* handle) {
  delete handle;
}

static void eventsPending(uv_async_t* handle) {
  Nan::HandleScope scope; // no idea what this does or how it works, but it's required for callbacks to work!
  while(uiEventsPending()) {
    uiMainStep(0);
  }
}

void pollEvents(void* arg) {
  int fd = uiConnectionNumber();
  struct pollfd fds;
  fds.fd = fd;
  fds.events = POLLIN | POLLPRI;

  uv_async_t * asyncCall = new uv_async_t();
  uv_async_init(uv_default_loop(), asyncCall, eventsPending);

  while(running) {
    if (poll(&fds, 1, 50) == 1) {
      uv_async_send(asyncCall);
    }

  }
  uv_close((uv_handle_t*) asyncCall, asyncClosed);
}

void EventLoop::start() {
  if (running) {
    return;
  }

  running = true;
  uiMainSteps();

  thread = new uv_thread_t();
  uv_thread_create(thread, pollEvents, NULL);
}

void EventLoop::stop () {
  if (!running) {
    return;
  }
  running = false;

  uiQuit();
  uv_thread_join(thread);
  delete thread;
}

/**
 * This method exists because currently we only poll
 * the X11 display for XEvents. If something causes
 * events to be added to the GTK main loop outside
 * of an input event from X11 then the current
 * `pollEvents()` method will not notice it and
 * so it will not enqueue a `eventsPending()` task.
 * As a result, I had trouble with NodeJS `setTimeout()`'s
 * and other async callbacks that would use GTK APIs
 * to change the UI but it wouldn't update (re-render).
 * Bindings can use this method to force a `pendingEvents()`
 * task to be enqueued if they know a re-render will be
 * required (or any other reason to run the GTK event loop)
 * as a result of their use of GTK.
 *
 * Ideally this wouldn't be required. Ideally we could poll
 * for more GTK event sources than just X11 so this would
 * automatically happen. It will be error prone to force
 * binding implementations to know when to call this, and
 * it may have a performance impact as well in the case
 * where the GTK event loop didn't need to be run but
 * someone called `run_until_empty()` (who knows though!).
 */
void EventLoop::run_until_empty() {
  std::cerr << "EventLoop::run_until_empty() is experimental!" << std::endl;
  uv_async_t * asyncCall = new uv_async_t();
  uv_async_init(uv_default_loop(), asyncCall, eventsPending);
  uv_async_send(asyncCall);
}
