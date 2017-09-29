import { default as GtkComponent, GtkProps } from './GtkComponent';
import * as gtk from 'gtk-node';

export interface LabelProps extends GtkProps {
  text?: string;
}

export default class Label extends GtkComponent<gtk.Label, LabelProps> {
  node = new gtk.Label();

  setProp(prop: string, value: any) {
    switch (prop) {
      case 'text':
        this.node.setText(value);
        break;
    }
  }
}
