const gtk = require('../');

// Create our GTK application instance
let app = new gtk.Application('gtknode.widget.gallery');

// Create a GTK window with a title and size
let window = new gtk.Window();
window.setTitle('GTK Node Widget Gallery');
// when the window is closed let's make sure to
// quit the GTK app!
window.onClose(() => {
  console.log('The window was closed! Quitting the app now!');
  app.quit();
});

// Create a GTK Fixed layout container
// and put add it to the window
let fixed = new gtk.Fixed();
window.add(fixed);

// add a button to the layout
let button = new gtk.Button('Click to move me');
let moved = false;
button.onClick(() => {
  if (!moved) {
    fixed.move(button, 10, 10);
  } else {
    fixed.move(button, 0, 0);
  }
  moved = !moved;
});
fixed.put(button, 0, 0);

const listBox = new gtk.ListBox();
const row = new gtk.ListBoxRow();
row.setSelectable(false);
row.add(new gtk.Label("hello world"));
listBox.add(row);
fixed.put(listBox, 0, 40);

// run the application
app.run(window);

console.log("The application has started!");
