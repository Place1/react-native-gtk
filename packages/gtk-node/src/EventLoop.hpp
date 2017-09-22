#ifndef EVENT_LOOP_H
#define EVENT_LOOP_H

class EventLoop {
public:
  static void start();
  static void stop();
  static void run_until_empty(); // experimental!
};

#endif
