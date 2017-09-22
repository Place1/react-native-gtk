import * as gtk from 'gtk-node';

import GtkContainer from './GtkContainer';
import Renderer from './Reconciler';


export default function render(element: any) {
  const app = new gtk.Application();
  const window = new gtk.Window();

  // we want to quit the app when the window is closed
  // but we also need to unmount every react component
  // first, to allow devs a place to cleanup timers, async stuff
  // etc.
  window.on_close(() => app.quit());

  // react inital render!
  const root = Renderer.createContainer(new GtkContainer(window));
  Renderer.updateContainer(element, root, null);

  // start the application
  app.run(window);
}
