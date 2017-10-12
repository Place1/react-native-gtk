import * as gtk from 'gtk-node';
import { default as GtkComponent, GtkProps } from './GtkComponent';

export interface ListBoxProps extends GtkProps {

}

export default class ListBox extends GtkComponent<gtk.ListBox, ListBoxProps> {
  node = new gtk.ListBox();

  appendChild(child: GtkComponent) {
    super.appendChild(child);
    this.node.add(child.node);
  }

  removeChild(child: GtkComponent) {
    super.removeChild(child);
    this.node.remove(child.node);
  }
}
