const nbind = require('nbind');
const path = require('path');

const { lib } = nbind.init(path.join(__dirname, '..'));
const gtk = lib;

module.exports = gtk;
