#ifndef LIST_BOX_ROW_H
#define LIST_BOX_ROW_H

#include <gtkmm.h>
#include "./Container.hpp"
#include "./AutoBindings/Properties.hpp"

class ListBoxRow : public Container {
DEFINE_GETTER(bool, getSelectable)
DEFINE_SETTER(bool, setSelectable)

private:
  Gtk::ListBoxRow widget;

public:
  Gtk::ListBoxRow* get_widget();
};

#endif
