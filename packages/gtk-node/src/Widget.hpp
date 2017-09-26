#ifndef WIDGET_WRAPPER_H
#define WIDGET_WRAPPER_H

#include <gtkmm.h>

class Widget {
public:
  Widget();

  /**
   * The get_widget() method is actually a virtual
   * method but NBind doesn't support abstract classes
   * so we need to pretend this is a real method.
   * It's implementation returns a nullptr! All concrete
   * subclasses are expected to implement this method to
   * return an actual pointer to an instance!
   * Perhaps we should just throw an error so that
   * accidently forgetting to implement it can be caught
   * quickly.
   * @abstract
   */
  virtual Gtk::Widget* get_widget() {
    return nullptr;
  }

  void set_size_request(int width, int height);
};

#endif
