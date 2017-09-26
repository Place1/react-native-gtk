#include "./Widget.hpp"
#include "nbind/noconflict.h"

Widget::Widget() {
 // no-op
}

void Widget::set_size_request(int width, int height) {
  this->get_widget()->set_size_request(width, height);
}

NBIND_CLASS(Widget) {
  NBIND_CONSTRUCT<>();
  NBIND_METHOD(set_size_request);
}
