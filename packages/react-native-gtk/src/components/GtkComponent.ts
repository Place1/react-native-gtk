import flex from '../flexbox/flex';
import { Node } from 'yoga-layout';
import * as gtk from 'gtk-node';

export default abstract class GtkComponent<T extends gtk.Widget = gtk.Widget> {
  abstract node: T;
  props: any;
  root: any;
  children = new Array<GtkComponent>();

  layout: Node = Node.createDefault();

  constructor(props: any, root: any) {
    this.props = props;
    this.root = root;
  }

  commitMount(): void {
    this.update();
  }

  commitUpdate(newProps: any): void {
    this.props = newProps;
    this.update();
  }

  private update() {
    this.setProps();
    this.layoutChildren();
  }

  appendChild(child: GtkComponent): void {
    this.children.push(child);
    this.layout.insertChild(child.layout, this.layout.getChildCount());
  }

  layoutChildren(): void {}

  private setProps(): void {
    for (const [key, value] of Object.entries(this.props)) {
      if (key === 'style') {
        this.applyStyles(value);
      }
      this.setProp(key, value);
    }
  }

  setProp(prop: string, value: any) {}

  private applyStyles(style: StyleAttribute) {
    flex(style, this.layout);
    if ('width' in style && 'height' in style) {
      this.node.set_size_request(style.width as number, style.height as number);
    }
  }
}
