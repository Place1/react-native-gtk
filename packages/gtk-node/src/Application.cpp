#include <gtkmm.h>
#include <string>
#include "nbind/noconflict.h"
#include "./Application.hpp"
#include "./Window.hpp"
#include "./EventLoop.hpp"
#include <stdio.h>

Application::Application() {
  EventLoop::init();
  this->gtk_application = Gtk::Application::create("org.gtk.example");
}

Application::Application(std::string application_id) {
  EventLoop::init();
  this->gtk_application = Gtk::Application::create(application_id);
}

void Application::run(Window *window) {
  EventLoop::start(*this->gtk_application.operator->());
  this->is_running = true; // perhaps a race condition is possible here because the main gtk main loop actually starts in a UV thread inside the 'EventLoop' class.
  this->gtk_application->signal_startup().connect([this, window]() {
    Gtk::Window *gtk_window = window->get_widget();
    gtk_window->set_application(this->gtk_application);
    gtk_window->show_all();
  });
}

void Application::quit() {
  if (this->is_running) {
    EventLoop::stop();
    EventLoop::enqueue_gtk_loop<void>([this]() {
      this->gtk_application->quit();
    });
    this->is_running = false;
  }
}

NBIND_CLASS(Application) {
  NBIND_CONSTRUCT<>();
  NBIND_CONSTRUCT<std::string>();
  NBIND_METHOD(run);
  NBIND_METHOD(quit);
}
