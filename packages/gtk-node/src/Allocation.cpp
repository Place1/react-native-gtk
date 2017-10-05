#include "nbind/noconflict.h"
#include "./Allocation.hpp"
#include "./EventLoop.hpp"

Allocation::Allocation(Gtk::Allocation &allocation): allocation(allocation) {}

int Allocation::getX() {
  return EventLoop::exectute_on_gtk_loop<int>([this]() {
    return this->allocation.get_x();
  });
}

int Allocation::getY() {
  return EventLoop::exectute_on_gtk_loop<int>([this]() {
    return this->allocation.get_y();
  });
}

int Allocation::getWidth() {
  return EventLoop::exectute_on_gtk_loop<int>([this]() {
    return this->allocation.get_width();
  });
}

int Allocation::getHeight() {
  return EventLoop::exectute_on_gtk_loop<int>([this]() {
    return this->allocation.get_height();
  });
}

NBIND_CLASS(Allocation) {
  NBIND_METHOD(getX);
  NBIND_METHOD(getY);
  NBIND_METHOD(getWidth);
  NBIND_METHOD(getHeight);
}
