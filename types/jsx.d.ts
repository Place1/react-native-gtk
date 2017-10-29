import Button from '../src/elements/Button';
import Label from '../src/elements/Label';
import ListBox from '../src/elements/ListBox';
import ListBoxRow from '../src/elements/ListBoxRow';
import TextInput from '../src/elements/TextInput';
import View from '../src/elements/View';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      Button: Button['props'];
      View: View['props'];
      TextInput: TextInput['props'];
      ListBox: ListBox['props'];
      ListBoxRow: ListBoxRow['props'];
      Label: Label['props'];
    }
  }
}
