import { GtkElement, elements } from './elements';
import Logger from './logger';

const logger = new Logger('createElement()');

export default function createElement(type: string, props: any, root: any): GtkElement | undefined {
  const klass = elements[type];
  if (!klass) {
    // TODO warn that the element doesn't exist?
    // maybe throw an error?
    // what does react-dom do?
    logger.warn(`unknown intrinsic element type "${type}".`);
    return undefined;
  }
  return new klass(props);
}
