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
DEFINE_EVENT(onRelease)
DEFINE_EVENT(onClick)
DEFINE_EVENT(onEnter)
DEFINE_EVENT(onLeave)
DEFINE_EVENT(onActivate)
DEFINE_GETTER(string, getLabel)
DEFINE_SETTER(string, setLabel)

public:
  Button(std::string label);
  void clicked();
};

#endif
