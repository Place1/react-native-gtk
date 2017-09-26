{
    "targets": [
        {
            "includes": [
                "auto.gypi"
            ],
            "sources": [
                "src/Application.cpp",
                "src/Window.cpp",
                # "src/EventLoop.cpp",
                # "src/EventLoopNested.cpp",
                "src/EventLoopMultithreaded.cpp",
                "src/Button.cpp",
                "src/Widget.cpp",
                "src/Container.cpp",
                "src/Fixed.cpp",
            ],
            "cflags_cc": [
                "<!@(pkg-config --cflags gtk+-3.0 gtkmm-3.0 sigc++-2.0) -Wall",
                "-std=c++14",
            ],
            "cflags_cc!": [
                "-fno-rtti",
                "-std=c++11"
            ],
            "ldflags": [
                "-Wl,-no-as-needed",
                "<!@(pkg-config --libs gtk+-3.0 gtkmm-3.0 sigc++-2.0)",
            ]
        }
    ],
    "includes": [
        "auto-top.gypi"
    ]
}
