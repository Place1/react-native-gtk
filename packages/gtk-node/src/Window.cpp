#include <gtkmm.h>
#include <gdk/gdk.h>
#include <sigc++/sigc++.h>
#include "nbind/noconflict.h"
#include "./Window.hpp"
#include "./EventLoop.hpp"

Window::Window() : Container() {}

Gtk::Window* Window::get_widget() {
  return &this->widget;
}

void Window::setTitle(std::string title) {
  EventLoop::exectute_on_gtk_loop<void>([this, title]() {
    this->get_widget()->set_title(title);
  });
}

void Window::setDefaultSize(int width, int height) {
  EventLoop::exectute_on_gtk_loop<void>([this, width, height]() {
    this->get_widget()->set_default_size(width, height);
  });
}

void Window::onClose(nbind::cbFunction &cb) {
  this->on_close_cb = std::make_unique<nbind::cbFunction>(cb);
  this->get_widget()->signal_delete_event().connect([this](GdkEventAny *event) {
    EventLoop::enqueue_js_loop([this]() {
      (*this->on_close_cb)();
    });
    return false;
  });
}

class EventConfigure {
public:
  int x;
  int y;
  int width;
  int height;

  EventConfigure(int x, int y, int width, int height) {
    this->x = x;
    this->y = y;
    this->width = width;
    this->height = height;
  }

  int getX() {
    return this->x;
  }

  int getY() {
    return this->y;
  }

  int getWidth() {
    return this->width;
  }

  int getHeight() {
    return this->height;
  }

  void setX(int value) {
    this->x = value;
  }

  void setY(int value) {
    this->y = value;
  }

  void setWidth(int value) {
    this->width = value;
  }

  void setHeight(int value) {
    this->height = value;
  }
};

/** no idea if this works yet as I can't get the gdk event to happen :( */
void Window::onConfigure(nbind::cbFunction &cb) {
  this->on_configure_cb = std::make_unique<nbind::cbFunction>(cb);
  this->get_widget()->signal_configure_event().connect([this](GdkEventConfigure *event) {
    EventLoop::enqueue_js_loop([this, event]() {
      auto configEvent = EventConfigure(event->x,
        event->y,
        event->width,
        event->height
      );
      (*this->on_configure_cb)(configEvent);
    });
    return false;
  });
}

NBIND_CLASS(EventConfigure) {
  NBIND_GETSET(getX, setX);
  NBIND_GETSET(getY, setY);
  NBIND_GETSET(getWidth, setWidth);
  NBIND_GETSET(getHeight, setHeight);
}

NBIND_CLASS(Window) {
  NBIND_INHERIT(Container);
  NBIND_CONSTRUCT<>();
  NBIND_METHOD(setTitle);
  NBIND_METHOD(setDefaultSize);
  NBIND_METHOD(onClose);
  NBIND_METHOD(onConfigure);
}
