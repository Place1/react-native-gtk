"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Yoga = require("yoga-layout");
function isAlignAttribute(attribute) {
    return attribute === 'alignItems' || attribute === 'alignContent' || attribute === 'alignSelf';
}
function cssToYogaValue(attribute, value) {
    switch (value) {
        case 'row':
            return Yoga.FLEX_DIRECTION_ROW;
        case 'column':
            return Yoga.FLEX_DIRECTION_COLUMN;
        case 'space-around':
            if (attribute === 'justifyContent') {
                return Yoga.JUSTIFY_SPACE_AROUND;
            }
            else if (isAlignAttribute(attribute)) {
                return Yoga.ALIGN_SPACE_AROUND;
            }
            break;
        case 'space-between':
            if (attribute === 'justifyContent') {
                return Yoga.JUSTIFY_SPACE_BETWEEN;
            }
            else if (isAlignAttribute(attribute)) {
                return Yoga.ALIGN_SPACE_BETWEEN;
            }
            break;
    }
}
exports.default = cssToYogaValue;
