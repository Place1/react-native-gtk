"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flex_1 = require("../flexbox/flex");
const yoga_layout_1 = require("yoga-layout");
class GtkComponent {
    constructor(props, root) {
        this.children = new Array();
        this.layout = yoga_layout_1.Node.createDefault();
        this.props = props;
        this.root = root;
    }
    commitMount() {
        this.update();
    }
    commitUpdate(newProps) {
        this.props = newProps;
        this.update();
    }
    update() {
        this.setProps();
        this.layoutChildren();
    }
    appendChild(child) {
        this.children.push(child);
        this.layout.insertChild(child.layout, this.layout.getChildCount());
    }
    layoutChildren() { }
    setProps() {
        for (const [key, value] of Object.entries(this.props)) {
            if (key === 'style') {
                this.applyStyles(value);
            }
            this.setProp(key, value);
        }
    }
    setProp(prop, value) { }
    applyStyles(style) {
        flex_1.default(style, this.layout);
        if ('width' in style && 'height' in style) {
            this.node.set_size_request(style.width, style.height);
        }
    }
}
exports.default = GtkComponent;
