#include "./EventLoop.hpp"
#include "./Callback.hpp"
#include <uv.h>
#include <nan.h>
#include <gtkmm.h>
#include <gtk/gtk.h>
#include <future>
#include <functional>
#include <thread>
#include <stdio.h>
#include <iostream>
#include <string>
#include <memory>

using namespace std;

bool EventLoop::is_running = false;

uv_work_t ui_thread_work;
uv_async_t js_thread_work;

void uv_call_fn(uv_async_t *async);

void run_main_loop(uv_work_t *work) {
  auto application = (Gtk::Application *)work->data;
  EventLoop::is_running = true;
  application->run();
}

void on_main_loop_end(uv_work_t *work, int status) {
  printf("main loop ended!\n");
  EventLoop::is_running = false;
  uv_close((uv_handle_t *)(&js_thread_work), NULL);
}

void EventLoop::init() {
  uv_async_init(uv_default_loop(), &js_thread_work, uv_call_fn); // TODO where should I call this. It MUST be called from the JS main thread1
}

void EventLoop::start(Gtk::Application &app) {
  ui_thread_work.data = &app;
  uv_queue_work(uv_default_loop(), &ui_thread_work, run_main_loop, on_main_loop_end);
}

void EventLoop::stop() {
  // no-op (does this method even need to exist for the API in the future?)
}

void uv_call_fn(uv_async_t *async) {
  Nan::HandleScope scope;
  auto callback = (std::function<void (void)> *)async->data;
  (*callback)();
  delete callback; // FIXME we need a datastructure that can let us notify the sender instead of cleaning up memory for them!
}

void EventLoop::enqueue_js_loop(std::function<void (void)> callback) {
  // FIXME i think there's a race condition possible here as this
  // method is supposed to be called from the UI thread. If two
  // calls happen before a single 'uv_call_fn()' happens then the first
  // won't ever be called because the '.data' property will be overridden!
  js_thread_work.data = new std::function<void (void)>(callback);
  uv_async_send(&js_thread_work);
}
