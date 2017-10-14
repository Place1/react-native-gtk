import { default as GtkElement, GtkProps } from './GtkElement';
import * as gtk from 'gtk-node';

export interface LabelProps extends GtkProps {
  text?: string;
}

export default class Label extends GtkElement<gtk.Label, LabelProps> {
  node = new gtk.Label();

  constructor(props: LabelProps) {
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
      case 'text':
        this.node.setText(value);
        break;
    }
  }
}
