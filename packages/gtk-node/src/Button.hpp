#ifndef BUTTON_H
#define BUTTON_H

#include <gtkmm.h>
#include <string>
#include "./AutoBindings/Events.hpp"
#include "./AutoBindings/Properties.hpp"
#include "./AutoBindings/BasicWidget.hpp"
#include "./Widget.hpp"

using namespace std;

class Button : public Widget {
BASIC_WIDGET(Gtk::Button, Button)
DEFINE_EVENT(onClick)
DEFINE_GETTER(string, getLabel)
DEFINE_SETTER(string, setLabel)

public:
  Button(std::string label);
};

#endif
