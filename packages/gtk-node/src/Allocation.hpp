#ifndef ALLOCATION_H
#define ALLOCATION_H

#include <gtkmm.h>

class Allocation {
private:
  Gtk::Allocation allocation;

public:
  Allocation(Gtk::Allocation &allocation);
  int getX();
  int getY();
  int getWidth();
  int getHeight();
};

#endif
