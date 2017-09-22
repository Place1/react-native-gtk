import * as gtk from 'gtk-node';

import GtkComponent from './GtkComponent';

export default class ViewComponent extends GtkComponent<gtk.Fixed> {
  node: gtk.Fixed;

  constructor(props: any, root: any) {
    super(props, root);
    this.node = new gtk.Fixed();
  }

  appendChild(child: GtkComponent) {
    super.appendChild(child);
    this.node.add(child.node);
  }

  layoutChildren() {
    // TODO calculateLayout should be called once per react render!
    // not on every node that lays out children!
    this.layout.calculateLayout();
    for (const child of this.children) {
      const computedLayout = child.layout.getComputedLayout();
      this.node.move(child.node, computedLayout.left, computedLayout.top);
    }
  }
}
