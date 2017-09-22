{
    "targets": [
        {
            "includes": [
                "auto.gypi"
            ],
            "sources": [
                "src/Application.cpp",
                "src/Window.cpp",
                "src/EventLoop.cpp",
                # "src/EventLoopNested.cpp",
                "src/Button.cpp",
                "src/WidgetWrapper.cpp",
                "src/Fixed.cpp",
            ],
            "cflags_cc": [
                "<!@(pkg-config --cflags gtk+-3.0 gtkmm-3.0 sigc++-2.0) -Wall",
                "-std=c++11",
            ],
            "cflags_cc!": [
                "-fno-rtti"
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
