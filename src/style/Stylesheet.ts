import { StyleSheet, RegisteredStyle } from 'react-native';

export function create<T extends StyleSheet.NamedStyles<T>>(styles: T): {[P in keyof T]: RegisteredStyle<T[P]>} {
  // dummy implementation
  return styles;
}
