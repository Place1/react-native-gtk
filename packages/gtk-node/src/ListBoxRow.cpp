#include "nbind/noconflict.h"
#include "./ListBoxRow.hpp"

IMPLEMENT_GETTER(ListBoxRow, bool, getSelectable, get_selectable)
IMPLEMENT_SETTER(ListBoxRow, bool, setSelectable, set_selectable)

NBIND_CLASS(ListBoxRow) {
  NBIND_INHERIT(Container);
  NBIND_CONSTRUCT<>();
  NBIND_METHOD(getSelectable);
  NBIND_METHOD(setSelectable);
}
