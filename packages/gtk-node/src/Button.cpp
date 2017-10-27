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

IMPLEMENT_EVENT(Button, onRelease, signal_released)
IMPLEMENT_EVENT(Button, onClick, signal_clicked)
IMPLEMENT_EVENT(Button, onEnter, signal_enter)
IMPLEMENT_EVENT(Button, onLeave, signal_leave)
IMPLEMENT_EVENT(Button, onActivate, signal_activate)
IMPLEMENT_GETTER(Button, string, getLabel, get_label)
IMPLEMENT_SETTER(Button, string, setLabel, set_label)

NBIND_CLASS(Button) {
  NBIND_INHERIT(Widget);
  NBIND_CONSTRUCT<>();
  NBIND_CONSTRUCT<std::string>();
  NBIND_METHOD(onRelease);
  NBIND_METHOD(onClick);
  NBIND_METHOD(onEnter);
  NBIND_METHOD(onLeave);
  NBIND_METHOD(onActivate);
  NBIND_METHOD(setLabel);
  NBIND_METHOD(getLabel);
  NBIND_METHOD(clicked);
}
