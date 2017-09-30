import StyleAttributes from '../style/StyleAttributes';
import * as gtk from 'gtk-node';
import { Node } from 'yoga-layout';

import flex from '../flexbox/flex';

export interface GtkProps {
  key?: string | number;
  style?: StyleAttributes;
  children?: any; // FIXME what type should this be?
}

export default abstract class GtkComponent<T extends gtk.Widget = gtk.Widget, P extends GtkProps = GtkProps> {
  abstract node: T;
  props: P;
  children = new Array<GtkComponent>();
  layout: Node = Node.createDefault();

  constructor(props: P) {
    this.props = props;
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
    this.node.showAll(); // if chil nodes are added we want to show them automatically!
  }

  appendChild(child: GtkComponent): void {
    this.children.push(child);
    this.layout.insertChild(child.layout, this.layout.getChildCount());
  }

  removeChild(child: GtkComponent): void {
    // no-op
    return undefined;
  }

  layoutChildren(): void {
    // no-op
    return undefined;
  }

  private setProps(): void {
    for (const [key, value] of Object.entries(this.props)) {
      if (key === 'style') {
        this.applyStyles(value);
      }
      this.setProp(key, value);
    }
  }

  setProp(prop: string, value: any): void {
    // no-op
    return undefined;
  }

  private applyStyles(style: StyleAttributes) {
    flex(style, this.layout);
    if (style.width !== undefined && style.height !== undefined) {
      this.node.setSizeRequest(style.width, style.height);
    }
  }
}
