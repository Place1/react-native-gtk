import { GtkComponent } from './elements';
import * as gtk from 'gtk-node';

export default class GtkContainer {
  private window: gtk.Window;

  constructor(window: gtk.Window) {
    this.window = window;
  }

  appendChild(child: GtkComponent) {
    this.window.add(child.node);
  }

  removeChild(child: GtkComponent) {
    // TODO this is not where we want to clean
    // up the layout tree. We need to design how
    // components create/update/mount/unmount/destroy.
    // properly. This will be part of the unmount
    // phase.
    child.layout.freeRecursive();
  }
}
