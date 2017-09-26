import Renderer from './Reconciler';
import GtkContainer from './GtkContainer';

export default function unmountComponentAtNode(container: GtkContainer) {
  Renderer.updateContainer(null, container, null);
}
