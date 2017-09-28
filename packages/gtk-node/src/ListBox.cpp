#include "./ListBox.hpp"
#include "nbind/noconflict.h"

Gtk::ListBox* ListBox::get_widget() {
  return &this->widget;
}

NBIND_CLASS(ListBox) {
  NBIND_INHERIT(Container);
  NBIND_CONSTRUCT<>();
}
