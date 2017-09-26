#ifndef BUTTON_H
#define BUTTON_H

#include <gtkmm.h>
#include <string>
#include "./AutoBindings/Events.hpp"
#include "./Widget.hpp"

class Button : public Widget {
DEFINE_EVENT(onClick)

private:
  Gtk::Button widget;

public:
  Button();
  Button(std::string label);
  Gtk::Button* get_widget();
};

#endif
