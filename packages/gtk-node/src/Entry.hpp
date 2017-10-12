#ifndef ENTRY_H
#define ENTRY_H

#include <string>
#include "gtkmm.h"
#include "./Widget.hpp"
#include "./AutoBindings/BasicWidget.hpp"
#include "./AutoBindings/Properties.hpp"
#include "./AutoBindings/Events.hpp"

using namespace std;

class Entry : public Widget {
BASIC_WIDGET(Gtk::Entry, Entry)
DEFINE_EVENT(onChange)
DEFINE_EVENT(onActivate)
DEFINE_GETTER(string, getText)
DEFINE_SETTER(string, setText)
};

#endif
