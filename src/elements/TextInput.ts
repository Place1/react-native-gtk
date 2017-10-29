import { Gtk } from 'node-gir';

import { default as GtkElement, GtkProps } from './GtkElement';
import * as signals from './util/signals';

export interface TextInputProps extends GtkProps {
  value?: string;
  onTextChanged?(value: string): void;
  onSubmitEditing?(): void;
}

export default class TextInput extends GtkElement<Gtk.Entry, TextInputProps> {
  node = new Gtk.Entry();

  setProp(prop: string, value: any) {
    switch (prop) {
      case 'value':
        this.node.setText(value);
        break;

      case 'onTextChanged':
        signals.connect(this.node, 'changed', () => value(this.node.text)); // TODO: disconnect
        break;

      case 'onSubmitEditing':
        signals.connect(this.node, 'activate', value); // TODO: disconnect
        break;
    }
  }
}
