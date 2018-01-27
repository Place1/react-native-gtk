import { Gtk } from 'node-gir';
import { default as GtkElement } from './GtkElement';
import * as signals from './util/signals';
import { ButtonProperties } from 'react-native';


export default class Button extends GtkElement<Gtk.Button, ButtonProperties> {

  node = new Gtk.Button();

  constructor(props: ButtonProperties) {
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
      case 'title':
        this.node.setLabel(value);
        break;

      case 'onPress':
        signals.connect(this.node, 'clicked', value);
        break;
    }
  }
}
