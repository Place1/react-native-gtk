import * as gtk from 'gtk-node';
import GtkComponent from './GtkComponent';
export default class ViewComponent extends GtkComponent<gtk.Fixed> {
    node: gtk.Fixed;
    constructor(props: any, root: any);
    appendChild(child: GtkComponent): void;
    layoutChildren(): void;
}
