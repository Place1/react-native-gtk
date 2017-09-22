"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GtkContainer {
    constructor(window) {
        this.window = window;
    }
    appendChild(child) {
        this.window.add(child.node);
    }
}
exports.default = GtkContainer;
