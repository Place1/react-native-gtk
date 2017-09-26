#ifndef BUTTON_H
#define BUTTON_H

#include <gtkmm.h>
#include <string>
#include "./AutoBindings/Events.hpp"
#include "./AutoBindings/Properties.hpp"
#include "./Widget.hpp"

using namespace std;

class Button : public Widget {
DEFINE_EVENT(onClick)
DEFINE_GETTER(string, getLabel)
DEFINE_SETTER(string, setLabel)

private:
  Gtk::Button widget;

public:
  Button();
  Button(std::string label);
  Gtk::Button* get_widget();
};

#endif
