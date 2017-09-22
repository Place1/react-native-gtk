#include <gtkmm.h>
#include <sigc++/sigc++.h>
#include "nbind/nbind.h"
#include "./Window.hpp"
#include "./WidgetWrapper.hpp"

Window::Window() : WidgetWrapper(&this->widget) {}

Gtk::Window* Window::get_widget() {
  return (Gtk::Window *)WidgetWrapper::get_widget();
}

void Window::set_title(string title) {
  this->get_widget()->set_title(title);
}

void Window::set_default_size(int width, int height) {
  this->get_widget()->set_default_size(width, height);
}

void Window::add(WidgetWrapper *wrapper) {
  auto widget = wrapper->get_widget();
  this->get_widget()->add(*widget);
}

void Window::on_close(nbind::cbFunction &cb) {
  this->on_close_cb = new nbind::cbFunction(cb); // TODO: release this in destructor (and check nbind calls destructors on JS GC runs!)
  this->get_widget()->signal_delete_event().connect([this](GdkEventAny *event) {
    (*this->on_close_cb)();
    return false;
  });
}

NBIND_CLASS(Window) {
  inherit(WidgetWrapper);
  construct<>();
  method(set_title);
  method(set_default_size);
  method(add);
  method(on_close);
}
