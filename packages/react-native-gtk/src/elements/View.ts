import * as gtk from 'gtk-node';

import GtkContainerElement from './GtkContainerElement';

export default class View extends GtkContainerElement<gtk.Fixed> {
  node = new gtk.Fixed();

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
