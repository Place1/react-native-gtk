#ifndef EVENT_LOOP_H
#define EVENT_LOOP_H

#include <gtkmm.h>
#include <functional>
#include <future>

class EventLoop {
public:
  static void start(Gtk::Application &app);
  static void stop();

  static void enqueue_js_loop(std::function<void(void)> f);
  static void enqueue_gtk_loop(std::function<void(void)> f);
  static void exectute_on_gtk_loop(std::function<void(void)> f); // TODO this should be a template method to return the result of the function as the future value
};

#endif
