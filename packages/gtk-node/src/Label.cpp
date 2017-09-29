#include "nbind/noconflict.h"
#include "./Label.hpp"

Label::Label() : Widget() {}

Label::Label(string text) : Widget() {
  this->get_widget()->set_text(text);
}

Gtk::Label* Label::get_widget() {
  return &this->widget;
}

IMPLEMENT_GETTER(Label, string, getText, get_text);
IMPLEMENT_SETTER(Label, string, setText, set_text);

NBIND_CLASS(Label) {
  NBIND_INHERIT(Widget);
  NBIND_CONSTRUCT<>();
  NBIND_CONSTRUCT<string>();
  NBIND_METHOD(setText);
  NBIND_METHOD(getText);
}
