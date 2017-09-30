#ifndef WINDOW_H
#define WINDOW_H

#include <gtkmm.h>
#include <string>
#include "nbind/api.h"
#include "./Container.hpp"

class Window : public Container {
private:
  Gtk::Window widget;
  std::unique_ptr<nbind::cbFunction> on_close_cb;
  std::unique_ptr<nbind::cbFunction> on_configure_cb;

public:
  Window();
  Gtk::Window* get_widget();
  void setTitle(std::string title);
  void setDefaultSize(int width, int height);
  void onClose(nbind::cbFunction &cb);
  void onConfigure(nbind::cbFunction &cb);
};

#endif
