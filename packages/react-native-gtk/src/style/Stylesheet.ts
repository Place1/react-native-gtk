import StyleAttributes from './StyleAttributes';

export interface Styles {
  [key: string]: StyleAttributes;
}

export function create(styles: Styles) {
  // dummy implementation
  return styles;
}
