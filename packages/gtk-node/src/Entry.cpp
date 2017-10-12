#include "nbind/noconflict.h"
#include "./Entry.hpp"

IMPLEMENT_EVENT(Entry, onChange, signal_changed)
IMPLEMENT_EVENT(Entry, onActivate, signal_activate)
IMPLEMENT_GETTER(Entry, string, getText, get_text)
IMPLEMENT_SETTER(Entry, string, setText, set_text)

NBIND_CLASS(Entry) {
  NBIND_INHERIT(Widget);
  NBIND_CONSTRUCT<>();
  NBIND_METHOD(onChange);
  NBIND_METHOD(onActivate);
  NBIND_METHOD(getText);
  NBIND_METHOD(setText);
}
