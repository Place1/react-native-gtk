#include "nbind/noconflict.h"
#include "./ListBox.hpp"
#include "./EventLoop.hpp"

void ListBox::insert(Widget *widget, int position) {
  EventLoop::exectute_on_gtk_loop<void>([this, widget, position]() {
    this->get_widget()->insert(*widget->get_widget(), position);
  });
}

NBIND_CLASS(ListBox) {
  NBIND_INHERIT(Container);
  NBIND_CONSTRUCT<>();
  NBIND_METHOD(insert);
}
