import { Gtk } from 'node-gir';

import GtkContainerElement from './GtkContainerElement';
import { ViewProperties } from 'react-native';

export default class View extends GtkContainerElement<Gtk.Fixed, ViewProperties> {

  node = new Gtk.Fixed();

  layoutChildren() {
    super.layoutChildren();
    for (const child of this.children) {
      child.node.setSizeRequest(
        child.layout.getComputedWidth(),
        child.layout.getComputedHeight(),
      );
      this.node.move(
        child.node,
        child.layout.getComputedLeft(),
        child.layout.getComputedTop(),
      );
    }
  }
}
