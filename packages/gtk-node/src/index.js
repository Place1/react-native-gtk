const nbind = require('nbind');

function tryLoad(path) {
  try {
    return require.resolve(path);
  } catch (error) {
    return undefined;
  }
}

const bindingsPaths = [
  '../build/Debug/nbind.node',
  '../build/Release/nbind.node',
];

let bindingsPath;
for (const path of bindingsPaths) {
  bindingsPath = tryLoad(path);
  if (bindingsPath) {
    break;
  }
}

if (!bindingsPath) {
  console.log('The nbind bindings library wasn\'t found!');
  process.exit(1);
}

const { lib } = nbind.init(bindingsPath);
const gtk = lib;

module.exports = gtk;
