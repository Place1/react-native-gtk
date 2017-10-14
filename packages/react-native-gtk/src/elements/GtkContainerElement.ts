import * as gtk from 'gtk-node';

import { default as GtkElement, GtkProps } from './GtkElement';

export interface GtkContainerProps extends GtkProps {
  children?: any; // FIXME what type should this be?
}

export default abstract class GtkContainerElement<
  NodeType extends gtk.Container = gtk.Container,
  Props extends GtkContainerProps = GtkContainerProps
> extends GtkElement<NodeType, Props> {

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
