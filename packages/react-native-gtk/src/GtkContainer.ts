import * as gtk from 'gtk-node';
import { Node } from 'yoga-layout';

import { GtkComponent } from './elements';

export default class GtkContainer {
  private window: gtk.Window;
  private layout = Node.createDefault();
  private children = new Array<GtkComponent>();

  constructor(window: gtk.Window) {
    this.window = window;
  }

  appendChild(child: GtkComponent) {
    this.layout.insertChild(child.layout, this.layout.getChildCount());
    this.children.push(child);
    this.window.add(child.node);
    this.window.showAll();
  }

  removeChild(child: GtkComponent) {
    // TODO this is not where we want to clean
    // up the layout tree. We need to design how
    // components create/update/mount/unmount/destroy.
    // properly. This will be part of the unmount
    // phase. The problem here is that components
    // that unmount deeper in the tree will not
    // free their layout nodes until the entire
    // tree is unmounted (the container is unmounted).
    child.layout.freeRecursive();
  }

  layoutChildren() {
    this.layout.calculateLayout();
    this.children.forEach((child) => child.layoutChildren());
  }
}

// I'm not sure where to put this yet.
// it's a quick global function to print the entire
// tree of layout nodes as a json object. It's useful
// to call from the debugger to see what Yoga thinks the
// layout should look like vs. what the layout actually is.
function debugLayoutAux(node: Node) {
  const layout: any = {};
  layout.width = node.getComputedWidth();
  layout.height = node.getComputedHeight();
  layout.left = node.getComputedLeft();
  layout.top = node.getComputedTop();
  if (node.getChildCount() === 0) {
    return layout;
  }
  layout.children = [];
  for (let i = 0; i < node.getChildCount(); i++) {
    layout.children.push(debugLayoutAux(node.getChild(i)));
  }
  return layout;
}
(global as any).debugLayout = (node: Node) => {
  const result = debugLayoutAux(node);
  console.log(JSON.stringify(result, undefined, 2)); // tslint:disable-line no-magic-numbers no-console
};
