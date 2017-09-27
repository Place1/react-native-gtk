interface StyleAttribute {
  flex?: number;
  flexDirection?: 'row' | 'column';
  justifyContent?: 'space-between' | 'space-around';
  width?: number;
  height?: number;
}

interface GtkAttributes {
  style?: StyleAttribute
}

interface ButtonAttributes {
  label?: string;
  onClick?(): void;
}

interface TextInputAttributes {
  value?: string;
  onTextChanged?(value: string): void;
}

interface ViewAttributes {}

type DetailedProps<E> = GtkAttributes & E;

declare namespace JSX {
  interface IntrinsicElements {
    Button: DetailedProps<ButtonAttributes>;
    View: DetailedProps<ViewAttributes>;
    TextInput: DetailedProps<TextInputAttributes>;
  }
}
