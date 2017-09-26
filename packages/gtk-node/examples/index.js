const gtk = require('../');

// Create our GTK application instance
let app = new gtk.Application('app.example');

// Create a GTK window with a title and size
let window = new gtk.Window();
window.setDefaultSize(200, 200);
window.setTitle('My App');

// Create a GTK Fixed layout container
// and put add it to the window
let fixed = new gtk.Fixed();
window.add(fixed);

// add a button to the layout
let button = new gtk.Button('Click me');
let moved = false;
button.onClick(() => {
  console.log(`Button with label "${button.getLabel()}" was clicked!`);
  if (!moved) {
    fixed.move(button, 10, 10);
  } else {
    fixed.move(button, 0, 0);
  }
  moved = !moved;
});
fixed.put(button, 0, 0);

// when the window is closed let's make sure to
// quit the GTK app!
window.onClose(() => {
  console.log('The window was closed! Quitting the app now!');
  app.quit();
});

// run the application
app.run(window);

console.log("The application has started!");
