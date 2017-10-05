#include <atomic>
#include <uv.h>
#include <stdlib.h>
#include "./doctest.h"
#include "../src/EventLoop.hpp"

using namespace std;

TEST_CASE("Example Test") {

  uv_loop_t *loop = (uv_loop_t *)malloc(sizeof(uv_loop_t));
  uv_loop_init(loop);

  int iterations = 1000;
  atomic_int counter;

  for (int i = 0; i < iterations; i++) {
    EventLoop::enqueue_js_loop([&counter]() {
      counter++;
    });
  }

  uv_run(loop, UV_RUN_DEFAULT);
  free(loop);

  CHECK(counter == iterations);
}
