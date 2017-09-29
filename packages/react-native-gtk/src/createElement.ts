import { elements, GtkComponent } from './elements';

export default function createElement(type: string, props: any, root: any): GtkComponent | undefined {
  const klass = elements[type];
  if (!klass) {
    // TODO warn that the element doesn't exist?
    // maybe throw an error?
    // what does react-dom do?
    return undefined;
  }
  return new klass(props);
}
