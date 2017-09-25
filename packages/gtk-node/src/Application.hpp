#ifndef APPLICATION_H
#define APPLICATION_H

#include <gtkmm.h>
#include <string>
#include "./Window.hpp"
#include <stdio.h>

class Application {
private:
  bool is_running = false;
  Glib::RefPtr<Gtk::Application> gtk_application;

public:
  Application();
  Application(std::string application_id);
  void run(Window *window);
  void quit();
};

#endif
