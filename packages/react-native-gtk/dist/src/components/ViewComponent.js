"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gtk = require("gtk-node");
const GtkComponent_1 = require("./GtkComponent");
class ViewComponent extends GtkComponent_1.default {
    constructor(props, root) {
        super(props, root);
        this.node = new gtk.Fixed();
    }
    appendChild(child) {
        super.appendChild(child);
        this.node.add(child.node);
    }
    layoutChildren() {
        this.layout.calculateLayout(); // TODO this should be called once per react render! not on every node that lays out children!
        for (const child of this.children) {
            const computedLayout = child.layout.getComputedLayout();
            this.node.move(child.node, computedLayout.left, computedLayout.top);
        }
    }
}
exports.default = ViewComponent;
