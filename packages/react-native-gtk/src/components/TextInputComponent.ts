import GtkComponent from './GtkComponent';
import * as gtk from 'gtk-node';

export default class TextInputComponent extends GtkComponent<gtk.Entry> {
  node = new gtk.Entry();

  setProp(prop: string, value: any) {
    switch (prop) {
      case 'value':
        this.node.setText(value);
        break;

      case 'onTextChanged':
        this.node.onChange(() => value(this.node.getText()));
        break;
    }
  }
}
