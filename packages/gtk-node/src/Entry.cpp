#include "nbind/noconflict.h"
#include "./Entry.hpp"

Gtk::Entry* Entry::get_widget() {
  return &this->widget;
}

IMPLEMENT_EVENT(Entry, onChange, signal_changed)
IMPLEMENT_GETTER(Entry, string, getText, get_text)
IMPLEMENT_SETTER(Entry, string, setText, set_text)

NBIND_CLASS(Entry) {
  NBIND_INHERIT(Widget);
  NBIND_CONSTRUCT<>();
  NBIND_METHOD(onChange);
  NBIND_METHOD(getText);
  NBIND_METHOD(setText);
}
