"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cssToYogaValue_1 = require("./cssToYogaValue");
function flex(style, styleNode) {
    for (const [key, value] of Object.entries(style)) {
        switch (key) {
            case 'flexDirection':
                styleNode.setFlexDirection(cssToYogaValue_1.default(key, value));
                break;
            case 'justifyContent':
                styleNode.setJustifyContent(cssToYogaValue_1.default(key, value));
                break;
            case 'width':
                styleNode.setWidth(value);
                break;
            case 'height':
                styleNode.setHeight(value);
                break;
        }
    }
}
exports.default = flex;
