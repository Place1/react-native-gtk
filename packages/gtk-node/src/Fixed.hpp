#ifndef FIXED_H
#define FIXED_H

#include <gtkmm.h>
#include "./WidgetWrapper.hpp"

class Fixed : public WidgetWrapper {
private:
  Gtk::Fixed widget;

public:
  Fixed();
  Gtk::Fixed* get_widget();
  void add(WidgetWrapper *widget);
  void put(WidgetWrapper *widget, int x, int y);
  void move(WidgetWrapper *widget, int x, int y);
};

#endif
