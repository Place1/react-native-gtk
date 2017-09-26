#ifndef EVENT_LOOP_H
#define EVENT_LOOP_H

#include <functional>
#include <future>
#include <memory>
#include <gtkmm.h>
#include <gtk/gtk.h>
#include <uv.h>
#include "./Callback.hpp"

using namespace std;

class EventLoop {
public:
  static bool is_running;

public:
  static void start(Gtk::Application &app);
  static void stop();

  static void enqueue_js_loop(std::function<void (void)> f);
  static void enqueue_gtk_loop(std::function<void (void)> f);

  template<typename T>
  static T exectute_on_gtk_loop(std::function<T(void)> f); // TODO this should be a template method to return the result of the function as the future value
};

template<typename T>
gboolean gtk_call_fn(void* data) {
  std::unique_ptr<std::shared_ptr<Callback<T>>> callback_pointer((std::shared_ptr<Callback<T>> *)data);
  auto callback = *callback_pointer;
  callback->execute();
  return false;
}

template<typename T>
T EventLoop::exectute_on_gtk_loop(std::function<T (void)> f) {
  if (!EventLoop::is_running) {
    return f();
  }
  auto prom = std::make_shared<std::promise<T>>();
  auto func = std::make_shared<std::function<T (void)>>(f);
  auto callback = new std::shared_ptr<Callback<T>>(new Callback<T>(prom, func));
  gdk_threads_add_idle(gtk_call_fn<T>, callback);
  return prom->get_future().get();
}

#endif
