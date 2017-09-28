#ifndef LABEL_H
#define LABEL_H

#include <gtkmm.h>
#include <string>
#include "./Widget.hpp"

using namespace std;

class Label : public Widget {
private:
  Gtk::Label widget;

public:
  Label();
  Label(string text);
  Gtk::Label* get_widget();
};

#endif
