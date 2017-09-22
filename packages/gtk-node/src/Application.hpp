#ifndef APPLICATION_H
#define APPLICATION_H

#include <gtkmm.h>
#include <string>
#include "./Window.hpp"

using namespace std;

class Application {
private:
  Glib::RefPtr<Gtk::Application> gtk_application;

public:
  Application();
  Application(string application_id);
  void run(Window *window);
  void quit();
};

#endif
