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

IMPLEMENT_EVENT(Button, onClick, signal_clicked)

NBIND_CLASS(Button) {
  NBIND_INHERIT(Widget);
  NBIND_CONSTRUCT<>();
  NBIND_CONSTRUCT<std::string>();
  NBIND_METHOD(onClick);
}
