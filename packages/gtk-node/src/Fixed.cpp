#include "./Fixed.hpp"
#include "nbind/noconflict.h"
#include "./EventLoop.hpp"

void Fixed::put(Widget *widget, int x, int y) {
  EventLoop::exectute_on_gtk_loop<void>([this, widget, x, y]() {
    this->get_widget()->put(*widget->get_widget(), x, y);
  });
}

void Fixed::move(Widget *widget, int x, int y) {
  EventLoop::exectute_on_gtk_loop<void>([this, widget, x, y]() {
    this->get_widget()->move(*widget->get_widget(), x, y);
  });
}

NBIND_CLASS(Fixed) {
  NBIND_INHERIT(Container);
  NBIND_CONSTRUCT<>();
  NBIND_METHOD(put);
  NBIND_METHOD(move);
}
