#include "nbind/noconflict.h"
#include "./Widget.hpp"
#include "./EventLoop.hpp"

Widget::Widget() {
 // no-op
}

void Widget::setSizeRequest(int width, int height) {
  EventLoop::exectute_on_gtk_loop<void>([this, width, height]() {
    this->get_widget()->set_size_request(width, height);
  });
}

void Widget::showAll() {
  EventLoop::exectute_on_gtk_loop<void>([this]() {
    this->get_widget()->show_all();
  });
}

NBIND_CLASS(Widget) {
  NBIND_CONSTRUCT<>();
  NBIND_METHOD(setSizeRequest);
  NBIND_METHOD(showAll);
}
