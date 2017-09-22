import GtkComponent from './components/GtkComponent';
import * as gtk from 'gtk-node';
export default class GtkContainer {
    private window;
    constructor(window: gtk.Window);
    appendChild(child: GtkComponent): void;
}
