import * as gtk from 'gtk-node';

import { default as GtkComponent, GtkProps } from './GtkComponent';

export interface TextInputProps extends GtkProps {
  value?: string;
  onTextChanged?(value: string): void;
  onSubmitEditing?(): void;
}

export default class TextInput extends GtkComponent<gtk.Entry, TextInputProps> {
  node = new gtk.Entry();

  setProp(prop: string, value: any) {
    switch (prop) {
      case 'value':
        this.node.setText(value);
        break;

      case 'onTextChanged':
        this.node.onChange(() => value(this.node.getText()));
        break;

      case 'onSubmitEditing':
        this.node.onActivate(value);
        break;
    }
  }
}
