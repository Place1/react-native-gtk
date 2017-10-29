import Button from './Button';
import GtkElement from './GtkElement';
import Label from './Label';
import ListBox from './ListBox';
import ListBoxRow from './ListBoxRow';
import TextInput from './TextInput';
import View from './View';

export { default as GtkElement } from './GtkElement';

export interface IntrinsicElements {
  [key: string]: new (...args: any[]) => GtkElement;
}

export const elements: IntrinsicElements = {
  TextInput,
  View,
  Button,
  ListBox,
  ListBoxRow,
  Label,
};
