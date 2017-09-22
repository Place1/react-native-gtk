import { ComponentTypes } from './ComponentTypes';
import GtkComponent from './GtkComponent';

export default function createElement(type: string, props: any, root: any): GtkComponent | undefined {
  const Klass = ComponentTypes[type];
  const instance = Klass ? new Klass(props, root) : undefined;
  return instance;
}
