#ifndef LABEL_H
#define LABEL_H

#include <gtkmm.h>
#include <string>
#include "./Widget.hpp"
#include "./AutoBindings/BasicWidget.hpp"
#include "./AutoBindings/Properties.hpp"

using namespace std;

class Label : public Widget {
BASIC_WIDGET(Gtk::Label, Label)
DEFINE_GETTER(string, getText)
DEFINE_SETTER(string, setText)

public:
  Label(string text);
};

#endif
