#ifndef CALLBACK_H
#define CALLBACK_H

#include <future>
#include <functional>

using namespace std;

class Callback {
private:
  shared_ptr<function<void(void)>> callback_function;
  shared_ptr<promise<void>> pending_result;

public:

  Callback(shared_ptr<promise<void>> prom, shared_ptr<function<void(void)>> func) {
    this->pending_result = prom;
    this->callback_function = func;
  }

  void execute() {
    (*this->callback_function)();
    this->pending_result->set_value();
  }
};

#endif
