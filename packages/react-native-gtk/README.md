# React GTK3 (experiment)

This project uses the WIP [node-gtk3](https://github.com/jamrizzi/node-gtk3) bindings.

## Setup
```
# install this project's dependencies
npm install

# clone the node-gtk3 bindings and set them up locally
# because this project is still experimenting i've got some
# work in my fork on an experimental branch
git clone https://github.com/place1/node-gtk3
cd node-gtk3
git checkout experimenting
npm install
make
cd ..

# now link the bindings to this project
npm link ./node-gtk3
```

## Example
```
npm run example
```
