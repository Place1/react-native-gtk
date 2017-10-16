export default interface StyleAttributes {
  position?: 'absolute' | 'relative';
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;

  flex?: number;
  flexDirection?: 'row' | 'column';
  justifyContent?: 'space-between' | 'space-around';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch';

  width?: number;
  height?: number;

  margin?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;

  padding?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;

  borderColor?: string;
  borderTopColor?: string;
  borderRightColor?: string;
  borderLeftColor?: string;
  borderBottomColor?: string;

  borderRadius?: number;
  borderTopLeftRadius?: string;
  borderTopRightRadius?: string;
  borderBottomLeftRadius?: string;
  borderBottomRightRadius?: string;

  borderStyle?: BorderStyle;
  borderTopStyle?: BorderStyle;
  borderRightStyle?: BorderStyle;
  borderLeftStyle?: BorderStyle;
  borderBottomStyle?: BorderStyle;

  borderWidth?: number;
  borderTopWidth?: number;
  borderRightWidth?: number;
  borderLeftWidth?: number;
  borderBottomWidth?: number;
}

export type BorderStyle = 'none' | 'solid';
