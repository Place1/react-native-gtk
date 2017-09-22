"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gtk = require("gtk-node");
const GtkContainer_1 = require("./GtkContainer");
const Reconciler_1 = require("./Reconciler");
function render(element) {
    const app = new gtk.Application();
    const window = new gtk.Window();
    // we want to quit the app when the window is closed
    // but we also need to unmount every react component
    // first, to allow devs a place to cleanup timers, async stuff
    // etc.
    window.on_close(() => app.quit());
    // react inital render!
    const root = Reconciler_1.default.createContainer(new GtkContainer_1.default(window));
    Reconciler_1.default.updateContainer(element, root, null);
    // start the application
    app.run(window);
}
exports.default = render;
