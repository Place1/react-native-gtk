"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ComponentTypes_1 = require("./ComponentTypes");
function createElement(type, props, root) {
    const Klass = ComponentTypes_1.ComponentTypes[type];
    const instance = Klass ? new Klass(props, root) : undefined;
    return instance;
}
exports.default = createElement;
