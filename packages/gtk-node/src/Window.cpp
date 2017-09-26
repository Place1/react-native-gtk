#include <gtkmm.h>
#include <sigc++/sigc++.h>
#include "nbind/noconflict.h"
#include "./Window.hpp"
#include "./EventLoop.hpp"

Window::Window() : Container() {}

Gtk::Window* Window::get_widget() {
  return &this->widget;
}

void Window::setTitle(std::string title) {
  EventLoop::exectute_on_gtk_loop<void>([this, title]() {
    this->get_widget()->set_title(title);
  });
}

void Window::setDefaultSize(int width, int height) {
  EventLoop::exectute_on_gtk_loop<void>([this, width, height]() {
    this->get_widget()->set_default_size(width, height);
  });
}

void Window::onClose(nbind::cbFunction &cb) {
  this->on_close_cb = std::make_unique<nbind::cbFunction>(cb);
  this->get_widget()->signal_delete_event().connect([this](GdkEventAny *event) {
    EventLoop::enqueue_js_loop([this]() {
      (*this->on_close_cb)();
    });
    return false;
  });
}

void Window::showAll() {
  EventLoop::exectute_on_gtk_loop<void>([this]() {
    this->get_widget()->show_all();
  });
}

NBIND_CLASS(Window) {
  NBIND_INHERIT(Container);
  NBIND_CONSTRUCT<>();
  NBIND_METHOD(setTitle);
  NBIND_METHOD(setDefaultSize);
  NBIND_METHOD(onClose);
  NBIND_METHOD(showAll);
}
