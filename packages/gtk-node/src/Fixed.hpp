#ifndef FIXED_H
#define FIXED_H

#include <gtkmm.h>
#include "./Container.hpp"

class Fixed : public Container {
private:
  Gtk::Fixed widget;

public:
  Fixed();
  Gtk::Fixed* get_widget();
  void put(Widget *widget, int x, int y);
  void move(Widget *widget, int x, int y);
};

#endif
