/// <reference path="../types/jsx.d.ts" />

// React Renderer
export { render, unmountComponentAtNode } from './ReactNativeGtk';

// Style
export { StyleSheet } from './style';

// Components
// tslint:disable variable-name
export const Button = 'Button';
export const View = 'View';
export const TextInput = 'TextInput';

// !! the following exports aren't intended to be public !!
export const ListBox = 'ListBox';
export const ListBoxRow = 'ListBoxRow';
export const Label = 'Label';
// tslint:enable variable-name
