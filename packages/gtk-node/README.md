# gtk-node

This project is a work in progress

## System Dependencies
- gtk+-3.0
- gtkmm-3.0
- sigc++-2.0

## System setup (ubuntu)
```
sudo apt install \
  cmake \
  libgtkmm-3.0-dev \
  libgtkmm-3.0-dev \
  libsigc++-2.0-dev
```

## System setup (macos, experimental)
```
brew install \
  pkg-config \
  gtk+3 \
  gtkmm3

# you'll need to export the below environment variable so that
# `pkg-config` knows where to search for libraries on your system.
export PKG_CONFIG_PATH=/usr/local/lib/pkgconfig
```

## Setup
```
npm install
```

## Run the example
```
npm run example
```

## Docs
The docs are automatically generated from a typescript declaration file that NBIND builds for us!
```
npm run build:docs # outputs into ./docs/
```
