import * as gtk from 'gtk-node';

import GtkContainer from './GtkContainer';
import Renderer from './Reconciler';

const app = new gtk.Application();
const window = new gtk.Window();
const rootContainer = new GtkContainer(window);
const root = Renderer.createContainer(rootContainer);
let hackLayoutInterval: any;

let hasStarted = false;

export function render(element: any) {
  unmountComponentAtNode(root);
  // react inital render!
  Renderer.updateContainer(element, root);

  // start the application
  if (!hasStarted) {
    hasStarted = true;
    hackLayoutInterval = setInterval(
      () => {
        // I haven't implemented the layout system at all
        // yet so i'll just do a layout in an interval
        rootContainer.layoutChildren();
      },
      0,
    );
    // we want to quit the app when the window is closed
    // but we also need to unmount every react component
    // first, to allow devs a place to cleanup timers, async stuff
    // etc.
    window.onClose(() => {
      clearInterval(hackLayoutInterval);
      unmountComponentAtNode(root);
      app.quit();
    });
    app.run(window);
  }
}

export function unmountComponentAtNode(container: GtkContainer) {
  clearInterval(hackLayoutInterval);
  Renderer.updateContainer(null, container, null);
}
