import * as gtk from 'gtk-node';
import { Node } from 'yoga-layout';

import flex from '../flexbox/flex';
import StyleAttributes from '../style/StyleAttributes';
import { expandStyleShorthands } from '../style/styleShorthands';

export interface GtkProps {
  key?: string | number;
  style?: StyleAttributes;
  children?: any; // FIXME what type should this be?
}

export default abstract class GtkComponent<
  NodeType extends gtk.Widget = gtk.Widget, Props extends GtkProps = GtkProps> {

  static defaultProps: GtkProps = {
    style: {},
  };

  static defaultStyle: StyleAttributes = {};

  abstract node: NodeType;
  props: Props;
  children = new Array<GtkComponent>();
  layout: Node = Node.createDefault();

  constructor(props: Props) {
    this.acceptProps(props);
  }

  private acceptProps(props: any) {
    this.props = {
      ...(this.constructor as typeof GtkComponent).defaultProps,
      ...props,
    };
    this.props.style = {
      ...(this.constructor as typeof GtkComponent).defaultStyle,
      ...this.props.style,
    };
  }

  commitMount(): void {
    this.update();
  }

  commitUpdate(newProps: Props): void {
    this.acceptProps(newProps);
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
    const copy = {...style};
    const expanded = expandStyleShorthands(copy);
    flex(expanded, this.layout);
    if (expanded.width !== undefined && expanded.height !== undefined) {
      this.node.setSizeRequest(expanded.width, expanded.height);
    }
  }
}
