#ifndef LABEL_H
#define LABEL_H

#include <gtkmm.h>
#include <string>
#include "./Widget.hpp"
#include "./AutoBindings/Properties.hpp"

using namespace std;

class Label : public Widget {
DEFINE_GETTER(string, getText)
DEFINE_SETTER(string, setText)

private:
  Gtk::Label widget;

public:
  Label();
  Label(string text);
  Gtk::Label* get_widget();
};

#endif
