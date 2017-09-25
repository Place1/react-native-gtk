#include "./Fixed.hpp"
#include "nbind/noconflict.h"
#include "./EventLoop.hpp"

Fixed::Fixed() : WidgetWrapper(&this->widget) {}

Gtk::Fixed* Fixed::get_widget() {
  return (Gtk::Fixed *)WidgetWrapper::get_widget();
}

void Fixed::add(WidgetWrapper *widget) {
  EventLoop::exectute_on_gtk_loop([this, widget]() {
    this->get_widget()->add(*widget->get_widget());
  });
}

void Fixed::put(WidgetWrapper *widget, int x, int y) {
  EventLoop::exectute_on_gtk_loop([this, widget, x, y]() {
    this->get_widget()->put(*widget->get_widget(), x, y);
  });
}

void Fixed::move(WidgetWrapper *widget, int x, int y) {
  EventLoop::exectute_on_gtk_loop([this, widget, x, y]() {
    this->get_widget()->move(*widget->get_widget(), x, y);
  });
}

NBIND_CLASS(Fixed) {
  NBIND_INHERIT(WidgetWrapper);
  NBIND_CONSTRUCT<>();
  NBIND_METHOD(add);
  NBIND_METHOD(put);
  NBIND_METHOD(move);
}
