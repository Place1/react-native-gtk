import { Gtk } from 'node-gir';
import { Node } from 'yoga-layout';

import flex from '../flexbox/flex';
import StyleAttributes from '../style/StyleAttributes';
import { expandStyleShorthands } from '../style/styleShorthands';
import * as signals from './util/signals';
import { StyleProp, ViewStyle } from 'react-native';
import { Key } from 'react';

export interface GtkProps {
  key?: Key | null;
  style?: ViewStyle;
}

export default abstract class GtkElement<NodeType extends Gtk.Widget = Gtk.Widget, Props = {}> {

  static defaultProps: GtkProps & GtkProps = {
    style: {},
  };

  static defaultStyle: Partial<GtkProps['style']> = {};

  abstract node: NodeType;
  props: Props & GtkProps;
  children = new Array<GtkElement>();
  layout: Node = Node.createDefault();

  constructor(props: Props) {
    this.acceptProps(props);
  }

  private acceptProps(props: any) {
    this.props = {
      ...(this.constructor as typeof GtkElement).defaultProps,
      ...props,
    };
    this.props.style = {
      ...(this.constructor as typeof GtkElement).defaultStyle,
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

  appendChild(child: GtkElement): void {
    this.children.push(child);
    this.layout.insertChild(child.layout, this.layout.getChildCount());
  }

  unmount(): void {
    signals.disconnectAll(this.node);
  }

  removeChild(child: GtkElement): void {
    // O(n) removal of children needs to be optimised at some point! (react keys?)
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
    this.layout.removeChild(child.layout);
  }

  layoutChildren(): void {
    for (const child of this.children) {
      child.layoutChildren();
    }
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
    const expandedStyles = expandStyleShorthands(copy);

    // apply flexbox styles
    flex(expandedStyles, this.layout);

    // set widget size request
    let { width, height } = expandedStyles;
    if (width === undefined) {
      width = -1; // -1 tell's Gtk to unset the size request
    }
    if (height === undefined) {
      height = -1; // -1 tell's Gtk to unset the size request
    }
    this.node.setSizeRequest(width, height);
  }
}
