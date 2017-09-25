#include "./WidgetWrapper.hpp"
#include "nbind/noconflict.h"

WidgetWrapper::WidgetWrapper(Gtk::Widget *widgetHandle) {
  this->widget = widgetHandle;
}

Gtk::Widget* WidgetWrapper::get_widget() {
  return this->widget;
}

void WidgetWrapper::set_size_request(int width, int height) {
  this->get_widget()->set_size_request(width, height);
}

NBIND_CLASS(WidgetWrapper) {
  NBIND_CONSTRUCT<Gtk::Widget*>();
  NBIND_METHOD(set_size_request);
}
