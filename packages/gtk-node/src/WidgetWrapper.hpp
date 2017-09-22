#ifndef WIDGET_WRAPPER_H
#define WIDGET_WRAPPER_H

#include <gtkmm.h>

class WidgetWrapper {
private:
  Gtk::Widget *widget;

public:
  WidgetWrapper(Gtk::Widget *widgetHandle);
  Gtk::Widget* get_widget();
  void set_size_request(int width, int height);
};

#endif
