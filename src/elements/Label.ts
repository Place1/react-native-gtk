import { default as GtkElement, GtkProps } from './GtkElement';
import { Gtk } from 'node-gir';
import * as signals from './util/signals';

export interface LabelProps extends GtkProps {
  text?: string;
}

export default class Label extends GtkElement<Gtk.Label, LabelProps> {
  node = new Gtk.Label();

  constructor(props: LabelProps) {
    super(props);
    signals.connect(this.node, 'size-allocate', this.onSizeAllocate); // TODO: disconnect
  }

  private onSizeAllocate = (_: any, rectangle: Gtk.Rectangle) => {
    const { width, height } = this.props.style!;
    if (width === undefined) {
      this.layout.setWidth(rectangle.width);
    }
    if (height === undefined) {
      this.layout.setHeight(rectangle.height);
    }
  }

  setProp(prop: string, value: any) {
    switch (prop) {
      case 'text':
        this.node.setText(value);
        break;
    }
  }
}
