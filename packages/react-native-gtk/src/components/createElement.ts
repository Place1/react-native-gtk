import { ComponentTypes } from './ComponentTypes';
import GtkComponent from './GtkComponent';

export default function createElement(type: string, props: any, root: any): GtkComponent | undefined {
  const klass = ComponentTypes[type];
  const instance = klass ? new klass(props, root) : undefined;
  return instance;
}
