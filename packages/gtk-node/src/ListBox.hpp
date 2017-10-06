#ifndef LIST_BOXx_H
#define LIST_BOXx_H

#include <gtkmm.h>
#include "./AutoBindings/BasicWidget.hpp"
#include "./Container.hpp"

class ListBox : public Container {
BASIC_WIDGET(Gtk::ListBox, ListBox)

public:
  void insert(Widget *widget, int position);
};

#endif
