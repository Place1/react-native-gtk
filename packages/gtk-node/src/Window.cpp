#include <gtkmm.h>
#include <sigc++/sigc++.h>
#include "nbind/noconflict.h"
#include "./Window.hpp"
#include "./WidgetWrapper.hpp"
#include "./EventLoop.hpp"
#include <stdio.h>

Window::Window() : WidgetWrapper(&this->widget) {}

Gtk::Window* Window::get_widget() {
  return (Gtk::Window *)WidgetWrapper::get_widget();
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

void Window::add(WidgetWrapper *wrapper) {
  printf("window::add\n");
  EventLoop::exectute_on_gtk_loop([this, wrapper]() {
    printf("gtk loop: window::add\n");
    this->get_widget()->add(*wrapper->get_widget());
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
  NBIND_INHERIT(WidgetWrapper);
  NBIND_CONSTRUCT<>();
  NBIND_METHOD(set_title);
  NBIND_METHOD(set_default_size);
  NBIND_METHOD(add);
  NBIND_METHOD(on_close);
  NBIND_METHOD(show_all);
}
