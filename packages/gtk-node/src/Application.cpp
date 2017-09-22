#include <gtkmm.h>
#include <string>
#include "nbind/nbind.h"
#include "./Application.hpp"
#include "./Window.hpp"
#include "./EventLoop.hpp"

using namespace std;

Application::Application() {
  this->gtk_application = Gtk::Application::create("org.gtk.example");
}

Application::Application(string application_id) {
  this->gtk_application = Gtk::Application::create(application_id);
}

void Application::run(Window *window) {
  EventLoop::start();
  Gtk::Window *gtk_window = window->get_widget();
  gtk_window->set_application(this->gtk_application);
  gtk_window->show_all();
}

void Application::quit() {
  EventLoop::stop();
  this->gtk_application->quit();
}

NBIND_CLASS(Application) {
  construct<>();
  construct<string>();
  method(run);
  method(quit);
}
