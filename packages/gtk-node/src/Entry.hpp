#ifndef ENTRY_H
#define ENTRY_H

#include <string>
#include "gtkmm.h"
#include "./Widget.hpp"
#include "./AutoBindings/Properties.hpp"
#include "./AutoBindings/Events.hpp"

using namespace std;

class Entry : public Widget {
DEFINE_EVENT(onChange)
DEFINE_GETTER(string, getText)
DEFINE_SETTER(string, setText)

private:
  Gtk::Entry widget;

public:
  Gtk::Entry* get_widget();
};

#endif
