import GtkComponent from './components/GtkComponent';
import * as gtk from 'gtk-node';

export default class GtkContainer {
  private window: gtk.Window;

  constructor(window: gtk.Window) {
    this.window = window;
  }

  appendChild(child: GtkComponent) {
    this.window.add(child.node);
  }
}
