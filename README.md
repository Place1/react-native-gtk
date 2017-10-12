# React Native GTK (WIP)
[![CircleCI](https://circleci.com/gh/Place1/react-native-gtk/tree/master.svg?style=shield)](https://circleci.com/gh/Place1/react-native-gtk/tree/master)

This repository is a mono-repo containing the 'react-native-gtk' npm package and the 'gtk-node' npm package.
The 'gtk-node' package is a library that provides bindings for the GTK 3 native UI toolkit.
The 'react-native-gtk' package allows developers to write ReactJS apps for desktop with native UI components!

## Developing
You can setup the project locally in 2 commands!
```
npm install
./node_modules/.bin/lerna bootstrap
```
_you can also install `lerna` globally if you like._

## Examples
Each package includes a quick example application. You can run it using these commands:
```
lerna run --scope gtk-node example

# and

lerna run --scope react-native-gtk example

# or if you like, you can just run the npm scripts directly

cd packages/gtk-node && npm run example

# and

cd packages/react-native-gtk && npm run example
```

## React GTK Todo App:
There is an example Todo App in `packages/react-native-gtk/example/TodoApp.tsx`.
You can run the app by:
```
lerna bootstrap
cd packages/react-native-gtk
./node_modules/.bin/tsnode ./examples/TodoApp.tsx
```
