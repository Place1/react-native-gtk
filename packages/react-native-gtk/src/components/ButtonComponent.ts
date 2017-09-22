import GtkComponent from './GtkComponent';
import * as gtk from 'gtk-node';

export default class ButtonComponent extends GtkComponent {

  node: gtk.Button;

  constructor(props: any, root: any) {
    super(props, root);
    this.node = new gtk.Button(props.label);
  }
}
