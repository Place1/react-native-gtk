#include "./Button.hpp"
#include "nbind/noconflict.h"

Button::Button(std::string label): Button() {
  this->get_widget()->set_label(label);
}

void Button::clicked() {
  EventLoop::exectute_on_gtk_loop<void>([this]() {
    this->get_widget()->clicked();
  });
}

IMPLEMENT_EVENT(Button, onClick, signal_clicked)
IMPLEMENT_GETTER(Button, string, getLabel, get_label)
IMPLEMENT_SETTER(Button, string, setLabel, set_label)

NBIND_CLASS(Button) {
  NBIND_INHERIT(Widget);
  NBIND_CONSTRUCT<>();
  NBIND_CONSTRUCT<std::string>();
  NBIND_METHOD(onClick);
  NBIND_METHOD(setLabel);
  NBIND_METHOD(getLabel);
  NBIND_METHOD(clicked);
}
