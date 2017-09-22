import GtkComponent from './components/GtkComponent';
import * as gtk from 'gtk-node';

export default class GtkContainer {
  constructor(private window: gtk.Window) {}

  appendChild(child: GtkComponent) {
    this.window.add(child.node);
  }
}
