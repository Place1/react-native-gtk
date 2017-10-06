#ifndef BASIC_WIDGET_H
#define BASIC_WIDGET_H

#define BASIC_WIDGET(GTK_WIDGET_CLASS, CLASS) \
  private: \
    GTK_WIDGET_CLASS widget; \
  public: \
    CLASS() { \
      EventLoop::exectute_on_gtk_loop<void>([this]() { \
        this->widget = GTK_WIDGET_CLASS(); \
      }); \
    } \
    GTK_WIDGET_CLASS* get_widget() { \
      return &this->widget; \
    } \
  private: \

#endif
