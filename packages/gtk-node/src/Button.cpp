#include "./Button.hpp"
#include "./WidgetWrapper.hpp"
#include "nbind/nbind.h"

Button::Button() : WidgetWrapper(&this->widget) {}

Button::Button(string label) : WidgetWrapper(&this->widget) {
  this->get_widget()->set_label(label);
}

Gtk::Button* Button::get_widget() {
  return (Gtk::Button *)WidgetWrapper::get_widget();
}

void Button::on_click(nbind::cbFunction &cb) {
  this->on_click_cb = new nbind::cbFunction(cb);
  this->get_widget()->signal_clicked().connect([this]() {
    (*this->on_click_cb)();
  });
}

NBIND_CLASS(Button) {
  inherit(WidgetWrapper);
  construct<>();
  construct<string>();
  method(on_click);
}
