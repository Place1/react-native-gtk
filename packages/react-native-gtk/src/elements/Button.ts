import * as gtk from 'gtk-node';
import { default as GtkComponent, GtkProps } from './GtkComponent';

export interface ButtonProps extends GtkProps {
  label?: string;
  onClick?(): void;
}

export default class Button extends GtkComponent<gtk.Button, ButtonProps> {

  node = new gtk.Button();;

  setProp(prop: string, value: any) {
    switch (prop) {
      case 'label':
        this.node.setLabel(value);
        break;

      case 'onClick':
        this.node.onClick(value);
        break;
    }
  }
}
