#include "./WidgetWrapper.hpp"
#include "nbind/nbind.h"

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
  construct<Gtk::Widget*>();
  method(set_size_request);
}
