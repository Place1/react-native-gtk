import { default as GtkComponent, GtkProps } from './GtkComponent';
import * as gtk from 'gtk-node';

export interface ListBoxRowProps extends GtkProps {

}

export default class ListBoxRow extends GtkComponent<gtk.ListBoxRow, ListBoxRowProps> {
  node = new gtk.ListBoxRow();

  appendChild(child: GtkComponent) {
    super.appendChild(child);
    this.node.add(child.node);
  }
}
