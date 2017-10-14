import * as gtk from 'gtk-node';

import GtkContainerElement from './GtkContainerElement';

export default class ListBox extends GtkContainerElement<gtk.ListBox> {
  node = new gtk.ListBox();
}
