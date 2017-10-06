#ifndef FIXED_H
#define FIXED_H

#include <gtkmm.h>
#include "./Container.hpp"
#include "./AutoBindings/BasicWidget.hpp"

class Fixed : public Container {
BASIC_WIDGET(Gtk::Fixed, Fixed)

public:
  void put(Widget *widget, int x, int y);
  void move(Widget *widget, int x, int y);
};

#endif
