import GtkComponent from './GtkComponent';
import ButtonComponent from './ButtonComponent';
import ViewComponent from './ViewComponent';

export interface ComponentRegistry {
  [key: string]: new (props: any, root: any) => GtkComponent;
}

export const Button = 'Button';
export const Box = 'Box';
export const View = 'View';

export const ComponentTypes: ComponentRegistry = {
  [Button]: ButtonComponent,
  [View]: ViewComponent
}
