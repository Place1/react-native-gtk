#ifndef CONTAINER_H
#define CONTAINER_H

#include <gtkmm.h>
#include "./Widget.hpp"

class Container : public Widget {
public:
  Gtk::Container* get_widget();
  void add(Widget *widget);
  void remove(Widget *widget);
};

#endif
