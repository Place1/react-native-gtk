#include <gtkmm.h>
#include <sigc++/sigc++.h>
#include "nbind/noconflict.h"
#include "./Window.hpp"
#include "./EventLoop.hpp"

Window::Window() : Container() {}

Gtk::Window* Window::get_widget() {
  return &this->widget;
}

void Window::set_title(std::string title) {
  EventLoop::exectute_on_gtk_loop([this, title]() {
    this->get_widget()->set_title(title);
  });
}

void Window::set_default_size(int width, int height) {
  EventLoop::exectute_on_gtk_loop([this, width, height]() {
    this->get_widget()->set_default_size(width, height);
  });
}

void Window::on_close(nbind::cbFunction &cb) {
  this->on_close_cb = std::make_shared<nbind::cbFunction>(cb);
  this->get_widget()->signal_delete_event().connect([this](GdkEventAny *event) {
    EventLoop::enqueue_js_loop([this]() {
      (*this->on_close_cb)();
    });
    return false;
  });
}

void Window::show_all() {
  EventLoop::exectute_on_gtk_loop([this]() {
    this->get_widget()->show_all();
  });
}

NBIND_CLASS(Window) {
  NBIND_INHERIT(Container);
  NBIND_CONSTRUCT<>();
  NBIND_METHOD(set_title);
  NBIND_METHOD(set_default_size);
  NBIND_METHOD(on_close);
  NBIND_METHOD(show_all);
}
