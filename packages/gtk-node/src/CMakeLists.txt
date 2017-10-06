project(gtk-node-bindings)
set(CMAKE_CXX_STANDARD 14)
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -Wall")
set(NODE_MODULES "../node_modules")


# src
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


# target - bindings
# the library must be called 'nbind.node' for nbind's
# js runtime to find it.
add_library(nbind SHARED ${SOURCE_FILES} ${NBIND_SOURCE_FILES})
set_target_properties(nbind PROPERTIES PREFIX "" SUFFIX ".node")


# target library links
target_link_libraries(nbind ${CMAKE_JS_LIB})
target_link_libraries(nbind ${GTK_LIBRARIES})
target_link_libraries(nbind ${GTKMM_LIBRARIES})
target_link_libraries(nbind ${SIGC++_LIBRARIES})
