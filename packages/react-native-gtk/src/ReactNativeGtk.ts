import * as gtk from 'gtk-node';

import GtkContainer from './GtkContainer';
import Renderer from './Reconciler';

export function render(element: any) {
  const app = new gtk.Application();
  const window = new gtk.Window();
  const container = new GtkContainer(window);
  const root = Renderer.createContainer(container);

  const hackLayoutInterval = setInterval(() => {
    // I haven't implemented the layout system at all
    // yet so i'll just do a layout every 100ms
    container.layoutChildren();
  },                                     0);

  // we want to quit the app when the window is closed
  // but we also need to unmount every react component
  // first, to allow devs a place to cleanup timers, async stuff
  // etc.
  window.onClose(() => {
    clearInterval(hackLayoutInterval);
    unmountComponentAtNode(root);
    app.quit();
  });

  // react inital render!
  Renderer.updateContainer(element, root);

  // start the application
  app.run(window);
}

export function unmountComponentAtNode(container: GtkContainer) {
  Renderer.updateContainer(null, container, null);
}
