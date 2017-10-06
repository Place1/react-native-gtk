#ifndef LIST_BOX_ROW_H
#define LIST_BOX_ROW_H

#include <gtkmm.h>
#include "./Container.hpp"
#include "./AutoBindings/BasicWidget.hpp"
#include "./AutoBindings/Properties.hpp"

class ListBoxRow : public Container {
BASIC_WIDGET(Gtk::ListBoxRow, ListBoxRow)
DEFINE_GETTER(bool, getSelectable)
DEFINE_SETTER(bool, setSelectable)
};

#endif
