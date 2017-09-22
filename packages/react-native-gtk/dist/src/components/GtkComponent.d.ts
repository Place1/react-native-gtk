import { Node } from 'yoga-layout';
import * as gtk from 'gtk-node';
export default abstract class GtkComponent<T extends gtk.Widget = gtk.Widget> {
    abstract node: T;
    props: any;
    root: any;
    children: GtkComponent<gtk.Widget>[];
    layout: Node;
    constructor(props: any, root: any);
    commitMount(): void;
    commitUpdate(newProps: any): void;
    private update();
    appendChild(child: GtkComponent): void;
    layoutChildren(): void;
    private setProps();
    setProp(prop: string, value: any): void;
    private applyStyles(style);
}
