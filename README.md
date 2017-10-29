# React Native GTK (WIP)
[![CircleCI](https://circleci.com/gh/Place1/react-native-gtk/tree/master.svg?style=shield)](https://circleci.com/gh/Place1/react-native-gtk/tree/master)

React Native GTK allows developers to write ReactJS apps for desktop with native UI elements!

## Developing
You can setup the project locally to develop in 1 command!
```
npm install
```

## Check/Test
```
npm run lint
npm test
```

## Examples
There are example applications in the `examples/` directory. You can run any of these examples
with the following command:
```
./node_modules/.bin/ts-node ./examples/<file>.tsx

# e.g. running the todo app

./node_modules/.bin/ts-node ./examples/TodoApp.tsx
```

## Debug / develop the GI Bindings
This package makes use of [node-gir](https://github.com/Place1/node-gir). The node-gir package provides the
[GObject Introspection](https://wiki.gnome.org/Projects/GObjectIntrospection) bindings that this library uses
to interact with [GTK](https://developer.gnome.org/gtk3/stable/). In some cases you might want to
debug/develop these two libraries (node-gir and react-native-gtk) together. Thankfully NPM provides a nice
tool to do this called `npm link`

```
git clone https://github.com/Place1/react-native-gtk
git clone https://github.com/Place1/node-gir

cd react-native-gtk
npm link ../node-gir

# now 'react-native-gtk' will use your local copy of node-gir!
```
