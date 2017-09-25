const gtk = require('../');

const app = new gtk.Application();
const window = new gtk.Window();
app.run(window);

const button = new gtk.Button("Hello world!");
window.add(button);

window.show_all();
