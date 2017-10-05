project(tests)
set(CMAKE_CXX_STANDARD 14)
set(NODE_MODULES "../node_modules")

# test src
file(GLOB SOURCE_FILES "./*")
include_directories("./")


# cmake-js
include_directories(${CMAKE_JS_INC})


# nbind
add_definitions(-DBUILDING_NODE_EXTENSION)
add_definitions(-DUSING_V8_SHARED)
add_definitions(-DUSING_UV_SHARED)
add_definitions(-DV8_DEPRECATION_WARNINGS)
file(GLOB NBIND_SOURCE_FILES "${NODE_MODULES}/nbind/src/*.cc" "${NODE_MODULES}/nbind/src/v8/*.cc")
include_directories(${NODE_MODULES}/nbind/include)


# gtk dependencies
find_package(PkgConfig REQUIRED)
# gtk
pkg_check_modules(GTK REQUIRED gtk+-3.0)
include_directories(${GTK_INCLUDE_DIRS})
link_directories(${GTK_LIBRARY_DIRS})
# gtkmm
pkg_check_modules(GTKMM REQUIRED gtkmm-3.0)
include_directories(${GTKMM_INCLUDE_DIRS})
link_directories(${GTKMM_LIBRARY_DIRS})
# sigc++
pkg_check_modules(SIGC++ REQUIRED sigc++-2.0)
include_directories(${SIGC++_INCLUDE_DIRS})
link_directories(${SIGC++_LIBRARY_DIRS})

add_executable(tests ${SOURCE_FILES} ${NBIND_SOURCE_FILES})

target_link_libraries(tests nbind)
target_link_libraries(tests ${CMAKE_JS_LIB})
target_link_libraries(tests ${GTK_LIBRARIES})
target_link_libraries(tests ${GTKMM_LIBRARIES})
target_link_libraries(tests ${SIGC++_LIBRARIES})

add_test(NAME MyTest COMMAND tests)
