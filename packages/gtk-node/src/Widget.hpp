#ifndef WIDGET_WRAPPER_H
#define WIDGET_WRAPPER_H

#include <gtkmm.h>
#include <memory>
#include <nbind/api.h>
#include "./Allocation.hpp"
#include "./AutoBindings/Properties.hpp"
#include "./AutoBindings/Events.hpp"

using namespace std;

class Widget {
DEFINE_GETTER(Allocation, getAllocation)
DEFINE_EVENT(onSizeAllocate)

private:
  unique_ptr<nbind::cbFunction> on_size_allocate_cb;

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

  void setSizeRequest(int width, int height);
  void showAll();
};

#endif
