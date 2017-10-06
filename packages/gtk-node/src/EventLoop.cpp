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
#include "./blockingconcurrentqueue.h"

using namespace std;

bool EventLoop::is_running = false;

uv_work_t ui_thread_work;
uv_async_t js_thread_work;
thread* js_event_queue_consumer_thread;
bool js_event_queue_consumer_running = false;
moodycamel::BlockingConcurrentQueue<function<void (void)>> js_event_queue;

void uv_call_fn(uv_async_t *async);
void js_event_queue_consumer();

void run_main_loop(uv_work_t *work) {
  auto application = (Gtk::Application *)work->data;
  EventLoop::is_running = true;
  application->run();
}

void on_main_loop_end(uv_work_t *work, int status) {
  EventLoop::is_running = false;
}

void EventLoop::init() {
  // init the uv_async_t with the uv_call_fn callback
  uv_async_init(uv_default_loop(), &js_thread_work, uv_call_fn); // TODO where should I call this. It MUST be called from the JS main thread1

  // start the js_event_queue_consumer
  js_event_queue_consumer_thread = new thread(js_event_queue_consumer);
}

void EventLoop::start(Gtk::Application &app) {
  ui_thread_work.data = &app;
  uv_queue_work(uv_default_loop(), &ui_thread_work, run_main_loop, on_main_loop_end);
}

void EventLoop::stop() {
  js_event_queue_consumer_running = false;
  EventLoop::enqueue_js_loop([]() {
  });
  uv_close((uv_handle_t *)(&js_thread_work), NULL);
}

void uv_call_fn(uv_async_t *async) {
  Nan::HandleScope scope;
  std::unique_ptr<std::shared_ptr<Callback<void>>> callback_pointer((std::shared_ptr<Callback<void>> *)async->data);
  auto callback = *callback_pointer;
  callback->execute();
}

void EventLoop::enqueue_js_loop(std::function<void (void)> fn) {
  js_event_queue.enqueue(fn);
}

void js_event_queue_consumer() {
  js_event_queue_consumer_running = true;
  while (js_event_queue_consumer_running) {
    function<void (void)> fn;
    js_event_queue.wait_dequeue(fn);
    auto prom = std::make_shared<std::promise<void>>();
    auto func = std::make_shared<std::function<void (void)>>(fn);
    auto callback = new std::shared_ptr<Callback<void>>(new Callback<void>(prom, func));
    js_thread_work.data = callback;
    uv_async_send(&js_thread_work);
    prom->get_future().wait();
  }
}
