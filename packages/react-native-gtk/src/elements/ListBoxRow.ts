import { Gtk } from 'node-gir';

import GtkContainerElement from './GtkContainerElement';

export default class ListBoxRow extends GtkContainerElement<Gtk.ListBoxRow> {

  static defaultStyle = {
    padding: 2,
  };

  node = new Gtk.ListBoxRow();
}
