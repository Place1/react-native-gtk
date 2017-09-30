import * as gtk from 'gtk-node';

import GtkComponent from './GtkComponent';

export default class View extends GtkComponent<gtk.Fixed> {
  node = new gtk.Fixed();

  appendChild(child: GtkComponent) {
    super.appendChild(child);
    this.node.add(child.node);
  }

  layoutChildren() {
    // layout the view's widgets based on the flex layout.
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

      // layout this child's children (recursively)
      child.layoutChildren();
    }
  }
}
