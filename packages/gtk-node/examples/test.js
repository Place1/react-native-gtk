const gtk = require('../');

// Create our GTK application instance
let app = new gtk.Application('gtknode.widget.gallery');

// Create a GTK window with a title and size
let window = new gtk.Window();

const button = new gtk.Button("hello world");
button.onClick(() => console.log('hello world'));
window.add(button);

app.run(window);
