import * as gtk from 'gtk-node';

import GtkContainer from './GtkContainer';
import Renderer from './Reconciler';

export function render(element: any) {
  const app = new gtk.Application();
  const window = new gtk.Window();
  const container = new GtkContainer(window);
  const root = Renderer.createContainer(container);

  // we want to quit the app when the window is closed
  // but we also need to unmount every react component
  // first, to allow devs a place to cleanup timers, async stuff
  // etc.
  window.onClose(() => {
    unmountComponentAtNode(root);
    app.quit();
  });

  // react inital render!
  Renderer.updateContainer(element, root, null, () => {
    // FIXME layout shouldn't happen here! It needs to be run when things update as well!
    container.layoutChildren();
  });

  // start the application
  app.run(window);
}

export function unmountComponentAtNode(container: GtkContainer) {
  Renderer.updateContainer(null, container, null);
}
