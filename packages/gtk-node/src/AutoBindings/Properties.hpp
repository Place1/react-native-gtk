#ifndef AUTO_BINDINGS_PROPERTIES_H
#define AUTO_BINDINGS_PROPERTIES_H

#include "../EventLoop.hpp"

#define DEFINE_GETTER(TYPE, JS_NAME) \
  public: \
    TYPE JS_NAME();


#define IMPLEMENT_GETTER(CLASS, TYPE, JS_NAME, GTK_NAME) \
  TYPE CLASS::JS_NAME() { \
    return EventLoop::exectute_on_gtk_loop<TYPE>([this]() { \
      return this->get_widget()->GTK_NAME(); \
    }); \
  }


#define DEFINE_SETTER(TYPE, JS_NAME) \
  public: \
    void JS_NAME(TYPE value);


#define IMPLEMENT_SETTER(CLASS, TYPE, JS_NAME, GTK_NAME) \
  void CLASS::JS_NAME(TYPE value) { \
    EventLoop::exectute_on_gtk_loop<void>([this, value]() { \
      this->get_widget()->GTK_NAME(value); \
    }); \
  }


#endif
