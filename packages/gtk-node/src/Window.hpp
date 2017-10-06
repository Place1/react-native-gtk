#ifndef WINDOW_H
#define WINDOW_H

#include <gtkmm.h>
#include <string>
#include "nbind/api.h"
#include "./AutoBindings/BasicWidget.hpp"
#include "./Container.hpp"

class Window : public Container {
BASIC_WIDGET(Gtk::Window, Window)

private:
  std::unique_ptr<nbind::cbFunction> on_close_cb;
  std::unique_ptr<nbind::cbFunction> on_configure_cb;

public:
  void setTitle(std::string title);
  void setDefaultSize(int width, int height);
  void onClose(nbind::cbFunction &cb);
  void onConfigure(nbind::cbFunction &cb);
};

#endif
