#include "./Fixed.hpp"
#include "nbind/nbind.h"
#include "./EventLoop.hpp"

Fixed::Fixed() : WidgetWrapper(&this->widget) {}

Gtk::Fixed* Fixed::get_widget() {
  return (Gtk::Fixed *)WidgetWrapper::get_widget();
}

void Fixed::add(WidgetWrapper *widget) {
  this->get_widget()->add(*widget->get_widget());
}

void Fixed::put(WidgetWrapper *widget, int x, int y) {
  this->get_widget()->put(*widget->get_widget(), x, y);
}

void Fixed::move(WidgetWrapper *widget, int x, int y) {
  this->get_widget()->move(*widget->get_widget(), x, y);
  EventLoop::run_until_empty();
}

NBIND_CLASS(Fixed) {
  inherit(WidgetWrapper);
  construct<>();
  method(add);
  method(put);
  method(move);
}
