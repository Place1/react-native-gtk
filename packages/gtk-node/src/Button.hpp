#ifndef BUTTON_H
#define BUTTON_H

#include <gtkmm.h>
#include <string>
#include "nbind/api.h"
#include "./WidgetWrapper.hpp"

class Button : public WidgetWrapper {
private:
  Gtk::Button widget;
  std::shared_ptr<nbind::cbFunction> on_click_cb;

public:
  Button();
  Button(std::string label);
  ~Button();
  Gtk::Button* get_widget();
  void on_click(nbind::cbFunction &cb);
};

#endif
