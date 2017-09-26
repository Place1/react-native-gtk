#include "nbind/noconflict.h"
#include "./Container.hpp"
#include "./EventLoop.hpp"

Gtk::Container* Container::get_widget() {
  return (Gtk::Container *)Widget::get_widget();
}

void Container::add(Widget *widget) {
  EventLoop::exectute_on_gtk_loop<void>([this, widget]() {
    this->get_widget()->add(*widget->get_widget());
  });
}

NBIND_CLASS(Container) {
  NBIND_INHERIT(Widget);
  NBIND_CONSTRUCT<>();
  NBIND_METHOD(add);
}
