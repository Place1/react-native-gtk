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

void Widget::onSizeAllocate(nbind::cbFunction &cb) {
  this->on_size_allocate_cb = make_unique<nbind::cbFunction>(cb);
  EventLoop::exectute_on_gtk_loop<void>([this]() {
    this->get_widget()->signal_size_allocate().connect([this](Gtk::Allocation &gtk_allocation) {
      auto allocation = Allocation(gtk_allocation);
      EventLoop::enqueue_js_loop([this, allocation]() {
        (*this->on_size_allocate_cb)(allocation);
      });
    });
  });
}

Allocation Widget::getAllocation() {
  return EventLoop::exectute_on_gtk_loop<Allocation>([this]() {
    auto gtk_allocation = this->get_widget()->get_allocation();
    return Allocation(gtk_allocation);
  });
}

NBIND_CLASS(Widget) {
  NBIND_CONSTRUCT<>();
  NBIND_METHOD(onSizeAllocate);
  NBIND_METHOD(getAllocation);
  NBIND_METHOD(setSizeRequest);
  NBIND_METHOD(showAll);
}
