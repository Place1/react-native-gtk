#ifndef AUTO_BINDINGS_EVENTS_H
#define AUTO_BINDINGS_EVENTS_H

#include <memory>
#include "nbind/api.h"
#include "../EventLoop.hpp"


#define DEFINE_EVENT(JS_EVENT_NAME) \
  private: \
    std::unique_ptr<nbind::cbFunction> JS_EVENT_NAME ## Callback; \
    sigc::connection JS_EVENT_NAME ## Connection; \
  public: \
    void JS_EVENT_NAME(nbind::cbFunction &cb);


#define IMPLEMENT_EVENT(CLASS, JS_EVENT_NAME, GTK_SIGNAL_NAME) \
  void CLASS::JS_EVENT_NAME(nbind::cbFunction &cb) { \
    this->JS_EVENT_NAME ## Callback = std::make_unique<nbind::cbFunction>(cb); \
    this->JS_EVENT_NAME ## Connection.disconnect(); \
    this->JS_EVENT_NAME ## Connection = this->get_widget()->GTK_SIGNAL_NAME().connect([this]() { \
      EventLoop::enqueue_js_loop([this]() { \
        (*this->JS_EVENT_NAME ## Callback)(); \
      }); \
    }); \
  }

#endif
