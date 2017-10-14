import * as gtk from 'gtk-node';

import GtkContainerElement from './GtkContainerElement';

export default class ListBoxRow extends GtkContainerElement<gtk.ListBoxRow> {

  static defaultStyle = {
    padding: 2,
  };

  node = new gtk.ListBoxRow();
}
