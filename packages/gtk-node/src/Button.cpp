#include "./Button.hpp"
#include "./Widget.hpp"
#include "nbind/noconflict.h"
#include "./EventLoop.hpp"
#include <stdio.h>

Button::Button() : Widget() {}

Button::Button(std::string label) {
  this->get_widget()->set_label(label);
}

Gtk::Button* Button::get_widget() {
  return &this->widget;
}

void Button::setLabel(std::string label) {
  EventLoop::exectute_on_gtk_loop<void>([this, label]() {
    this->get_widget()->set_label(label);
  });
}

std::string Button::getLabel() {
  return EventLoop::exectute_on_gtk_loop<std::string>([this]() -> std::string {
    return this->get_widget()->get_label();
  });
}

IMPLEMENT_EVENT(Button, onClick, signal_clicked)

NBIND_CLASS(Button) {
  NBIND_INHERIT(Widget);
  NBIND_CONSTRUCT<>();
  NBIND_CONSTRUCT<std::string>();
  NBIND_METHOD(onClick);
  NBIND_METHOD(setLabel);
  NBIND_METHOD(getLabel);
}
