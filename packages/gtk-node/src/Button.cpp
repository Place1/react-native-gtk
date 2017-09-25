#include "./Button.hpp"
#include "./WidgetWrapper.hpp"
#include "nbind/noconflict.h"
#include "./EventLoop.hpp"
#include <stdio.h>

Button::Button() : WidgetWrapper(&this->widget) {}

Button::Button(std::string label) : WidgetWrapper(&this->widget) {
  this->get_widget()->set_label(label);
}

Gtk::Button* Button::get_widget() {
  return (Gtk::Button *)WidgetWrapper::get_widget();
}

void Button::on_click(nbind::cbFunction &cb) {
  this->on_click_cb = std::make_shared<nbind::cbFunction>(cb);
  this->get_widget()->signal_clicked().connect([this]() {
    EventLoop::enqueue_js_loop([this]() {
      (*this->on_click_cb)();
    });
  });
}

Button::~Button() {
  printf("descructor\n");
}

NBIND_CLASS(Button) {
  NBIND_INHERIT(WidgetWrapper);
  NBIND_CONSTRUCT<>();
  NBIND_CONSTRUCT<std::string>();
  NBIND_METHOD(on_click);
}
