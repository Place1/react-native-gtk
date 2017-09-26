import GtkComponent from './GtkComponent';
import * as gtk from 'gtk-node';

export default class ButtonComponent extends GtkComponent<gtk.Button> {

  node: gtk.Button;

  constructor(props: any, root: any) {
    super(props, root);
    this.node = new gtk.Button(props.label);
  }

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
