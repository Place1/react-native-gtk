import ButtonComponent from './ButtonComponent';
import GtkComponent from './GtkComponent';
import TextInputComponent from './TextInputComponent';
import ViewComponent from './ViewComponent';

export interface ComponentRegistry {
  [key: string]: new (props: any, root: any) => GtkComponent;
}

// tslint:disable variable-name
export const Button = 'Button';
export const View = 'View';
export const TextInput = 'TextInput';

export const ComponentTypes: ComponentRegistry = {
  [Button]: ButtonComponent,
  [View]: ViewComponent,
  [TextInput]: TextInputComponent,
};
// tslint:enable variable-name
