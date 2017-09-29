import Button from './Button';
import GtkComponent from './GtkComponent';
import Label from './Label';
import ListBox from './ListBox';
import ListBoxRow from './ListBoxRow';
import TextInput from './TextInput';
import View from './View';

export { default as GtkComponent } from './GtkComponent';

export interface IntrinsicElements {
  [key: string]: new (...args: any[]) => GtkComponent;
}

export const elements: IntrinsicElements = {
  TextInput,
  View,
  Button,
  ListBox,
  ListBoxRow,
  Label,
};
