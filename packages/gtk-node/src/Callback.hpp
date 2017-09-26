#ifndef CALLBACK_H
#define CALLBACK_H

#include <future>
#include <functional>

using namespace std;

template<typename T>
class Callback {
private:
  shared_ptr<function<T (void)>> callback_function;
  shared_ptr<promise<T>> pending_result;

public:
  Callback(shared_ptr<promise<T>> prom, shared_ptr<function<T (void)>> func) {
    this->pending_result = prom;
    this->callback_function = func;
  }

  void execute() {
    T result = (*this->callback_function)();
    this->pending_result->set_value(result);
  }
};

template<>
inline void Callback<void>::execute() {
  (*this->callback_function)();
  this->pending_result->set_value();
}

#endif
