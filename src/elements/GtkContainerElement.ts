import { Gtk } from 'node-gir';

import { default as GtkElement, GtkProps } from './GtkElement';

export interface GtkContainerProps {
  children?: JSX.Element | JSX.Element[];
}

export default abstract class GtkContainerElement<NodeType extends Gtk.Container = Gtk.Container, Props = {}>
  extends GtkElement<NodeType, Props & GtkContainerProps> {

  abstract node: NodeType;

  appendChild(child: GtkElement) {
    super.appendChild(child);
    this.node.add(child.node);
  }

  removeChild(child: GtkElement) {
    super.removeChild(child);
    this.node.remove(child.node);
  }
}
