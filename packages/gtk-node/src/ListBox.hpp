#ifndef LIST_BOXx_H
#define LIST_BOXx_H

#include <gtkmm.h>
#include "./Container.hpp"

class ListBox : public Container {
private:
  Gtk::ListBox widget;

public:
  Gtk::ListBox* get_widget();
  void insert(Widget *widget, int position);
};

#endif
