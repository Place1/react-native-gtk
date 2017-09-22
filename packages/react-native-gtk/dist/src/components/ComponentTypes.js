"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ButtonComponent_1 = require("./ButtonComponent");
const ViewComponent_1 = require("./ViewComponent");
exports.Button = 'Button';
exports.Box = 'Box';
exports.View = 'View';
exports.ComponentTypes = {
    [exports.Button]: ButtonComponent_1.default,
    [exports.View]: ViewComponent_1.default
};
