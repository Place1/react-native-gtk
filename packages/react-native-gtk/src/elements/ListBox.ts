import { Gtk } from 'node-gir';

import GtkContainerElement from './GtkContainerElement';

export default class ListBox extends GtkContainerElement<Gtk.ListBox> {
  node = new Gtk.ListBox();
}
