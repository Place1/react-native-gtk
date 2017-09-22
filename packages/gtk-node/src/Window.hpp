#ifndef WINDOW_H
#define WINDOW_H

#include <gtkmm.h>
#include <string>
#include "nbind/api.h"
#include "./WidgetWrapper.hpp"

using namespace std;

class Window : public WidgetWrapper {
private:
  Gtk::Window widget;
  nbind::cbFunction *on_close_cb = NULL;

public:
  Window();
  Gtk::Window* get_widget();
  void add(WidgetWrapper *wrapper);
  void set_title(string title);
  void set_default_size(int width, int height);
  void on_close(nbind::cbFunction &cb);
};

#endif
