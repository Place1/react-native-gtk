"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GtkComponent_1 = require("./GtkComponent");
const gtk = require("gtk-node");
class ButtonComponent extends GtkComponent_1.default {
    constructor(props, root) {
        super(props, root);
        this.node = new gtk.Button(props.label);
    }
}
exports.default = ButtonComponent;
