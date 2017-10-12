import * as gtk from 'gtk-node';
import { default as GtkComponent, GtkProps } from './GtkComponent';

export interface ButtonProps extends GtkProps {
  label?: string;
  onClick?(): void;
}

export default class Button extends GtkComponent<gtk.Button, ButtonProps> {

  node = new gtk.Button();

  constructor(props: ButtonProps) {
    super(props);
    this.node.onSizeAllocate(this.onSizeAllocate);
  }

  private onSizeAllocate = (allocation: gtk.Allocation) => {
    const { width, height } = this.props.style!;
    if (width === undefined) {
      this.layout.setWidth(allocation.getWidth());
    }
    if (height === undefined) {
      this.layout.setHeight(allocation.getHeight());
    }
  }

  setProp(prop: string, value: any) {
    switch (prop) {
      case 'label':
        this.node.setLabel(value);
        break;

      case 'onClick':
        this.node.onClick(value);
        break;
    }
  }
}
