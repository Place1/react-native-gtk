import { Gtk } from 'node-gir';
import { Node } from 'yoga-layout';

import { GtkElement } from './elements';

export default class GtkContainer {
  private window: Gtk.Window;
  private layout = Node.createDefault();
  private children = new Array<GtkElement>();

  constructor(window: Gtk.Window) {
    this.window = window;
  }

  appendChild(child: GtkElement) {
    this.layout.insertChild(child.layout, this.layout.getChildCount());
    this.children.push(child);
    this.window.add(child.node);
    this.window.showAll();
  }

  removeChild(child: GtkElement) {
    // TODO this is not where we want to clean
    // up the layout tree. We need to design how
    // components create/update/mount/unmount/destroy.
    // properly. This will be part of the unmount
    // phase. The problem here is that components
    // that unmount deeper in the tree will not
    // free their layout nodes until the entire
    // tree is unmounted (the container is unmounted).
    this.window.remove(child.node);
    this.children.splice(this.children.indexOf(child), 1);
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
function debugLayoutAux(component: GtkElement | GtkContainer) {
  const layoutNode = (component as any).layout;
  const layout: any = {};
  layout.component = component.constructor.name;
  layout.width = layoutNode.getComputedWidth();
  layout.height = layoutNode.getComputedHeight();
  layout.left = layoutNode.getComputedLeft();
  layout.top = layoutNode.getComputedTop();
  if (layoutNode.getChildCount() === 0) {
    return layout;
  }
  layout.children = [];
  const childCount = (component as any).children.length;
  for (let i = 0; i < childCount; i++) {
    layout.children.push(debugLayoutAux((component as any).children[i]));
  }
  return layout;
}
(global as any).debugLayout = (component: GtkElement | GtkContainer) => {
  const result = debugLayoutAux(component);
  console.log(JSON.stringify(result, undefined, 2)); // tslint:disable-line no-magic-numbers no-console
  return result;
};
