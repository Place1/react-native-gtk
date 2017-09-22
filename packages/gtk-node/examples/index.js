const gtk = require('../');

// Create our GTK application instance
const app = new gtk.Application('app.example');

// Create a GTK window with a title and size
const window = new gtk.Window();
window.set_default_size(200, 200);
window.set_title('My App');

// Create a GTK Fixed layout container
// and put add it to the window
const fixed = new gtk.Fixed();
window.add(fixed);

// add a button to the layout
const button = new gtk.Button('Move me');
let moved = false;
button.on_click(() => {
  fixed.move(button, moved ? 0 : 20, moved ? 0 : 20);
  moved = !moved;
});
fixed.put(button, 0, 0);

// add another button to the layout
// this time with an 'on click' callback
const button2 = new gtk.Button('Click me!');
button2.on_click(() => console.log('I was clicked!'));
fixed.put(button2, 0, 40);

// when the window is closed let's make sure to
// quit the GTK app!
window.on_close(() => {
  console.log('The window was closed! Quitting the app now!');
  app.quit();
});

setTimeout(() => {
  fixed.move(button, 100, 100);
}, 5000);

// run the application
app.run(window);

console.log("The application has started!");
