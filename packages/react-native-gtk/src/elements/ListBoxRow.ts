import * as gtk from 'gtk-node';

import { default as GtkComponent, GtkProps } from './GtkComponent';

export interface ListBoxRowProps extends GtkProps {

}

export default class ListBoxRow extends GtkComponent<gtk.ListBoxRow, ListBoxRowProps> {

  static defaultStyle = {
    padding: 2,
  };

  node = new gtk.ListBoxRow();

  appendChild(child: GtkComponent) {
    super.appendChild(child);
    this.node.add(child.node);
  }
}
