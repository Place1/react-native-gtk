#ifndef BUTTON_H
#define BUTTON_H

#include <gtkmm.h>
#include <string>
#include "nbind/api.h"
#include "./WidgetWrapper.hpp"

using namespace std;

class Button : public WidgetWrapper {
private:
  Gtk::Button widget;
  nbind::cbFunction *on_click_cb = NULL;

public:
  Button();
  Button(string label);
  Gtk::Button* get_widget();
  void on_click(nbind::cbFunction &cb);
};

#endif
