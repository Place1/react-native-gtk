import GtkContainer from './GtkContainer';
import createElement from './createElement';
import { GtkComponent } from './elements';

// tslint:disable-next-line
const ReactFiberReconciler = require('react-dom/lib/ReactFiberReconciler');

// anthing in this file with this type
// can be considerer untyped. I'm still learning
// how React Fiber's reconciler works and so many
// of the function arguments/types are yet to be
// used and I'm yet to understand their meaning!
type UNKNOWN_TYPE = any;

// tslint:disable-next-line variable-name
const Renderer = ReactFiberReconciler({
  createInstance(
    type: string,
    props: any,
    rootContainerInstance: GtkContainer,
    hostContext: UNKNOWN_TYPE,
    internalInstanceHandle: UNKNOWN_TYPE,
  ) {
    return createElement(type, props, rootContainerInstance);
  },

  appendInitialChild(
    parentInstance: GtkComponent | GtkComponent,
    child: GtkComponent,
  ) {
    parentInstance.appendChild(child);
  },

  appendChild(
    parentInstance: GtkContainer | GtkComponent,
    child: GtkComponent,
  ) {
    parentInstance.appendChild(child);
  },

  removeChild(
    parentInstance: GtkComponent | GtkContainer,
    child: GtkComponent,
  ) {
    parentInstance.removeChild(child);
  },

  insertBefore(
    parentInstance: GtkComponent,
    child: GtkComponent,
    beforeChild: GtkComponent,
  ) {
    return undefined;
  },

  // finalizeInitialChildren is the final HostConfig method called before
  // flushing the root component to the host environment
  finalizeInitialChildren(
    instance: GtkComponent,
    type: string,
    props: any,
    rootContainerInstance: GtkContainer,
  ) {
    return true;
  },

  // prepare update is where you compute the diff for an instance. This is done
  // here to separate computation of the diff to the applying of the diff. Fiber
  // can reuse this work even if it pauses or aborts rendering a subset of the
  // tree.
  prepareUpdate(
    instance: GtkComponent,
    type: string,
    oldProps: any,
    newProps: any,
    rootContainerInstance: GtkContainer,
    hostContext: UNKNOWN_TYPE,
  ) {
    return true;
  },

  commitUpdate(
    instance: GtkComponent,
    updatePayload: boolean,
    type: string,
    oldProps: any,
    newProps: any,
    finishedWorkFiber: UNKNOWN_TYPE, // I think this is some internal React Fiber object
  ) {
    instance.commitUpdate(newProps);
  },

  // commitMount is called after initializeFinalChildren *if*
  // `initializeFinalChildren` returns true.
  commitMount(
    instance: GtkComponent,
    type: string,
    newProps: any,
    internalInstanceHandle: UNKNOWN_TYPE,
  ) {
    instance.commitMount();
  },

  getPublicInstance(instance: UNKNOWN_TYPE) {
    return instance;
  },

  getRootHostContext(rootContainerInstance: GtkContainer) {
    return {};
  },

  getChildHostContext(
    parentHostContext: UNKNOWN_TYPE,
    type: string,
    rootContainerInstance: GtkContainer,
  ) {
    return {};
  },

  // the prepareForCommit and resetAfterCommit methods are necessary for any
  // global side-effects you need to trigger in the host environment. In
  // ReactDOM this does things like disable the ReactDOM events to ensure no
  // callbacks are fired during DOM manipulations
  prepareForCommit() {
    // no-op
    return undefined;
  },

  resetAfterCommit() {
    // no-op
    return undefined;
  },

  // the following four methods are regarding TextInstances. In our example
  // renderer we don’t have specific text nodes like the DOM does so we’ll just
  // noop all of them.
  shouldSetTextContent(props: any) {
    if (typeof props.children === 'string') {
      return true;
    }
    return false;
  },

  resetTextContent(instance: UNKNOWN_TYPE) {
    return undefined;
  },

  createTextInstance(
    text: UNKNOWN_TYPE,
    rootContainerInstance: UNKNOWN_TYPE,
    hostContext: UNKNOWN_TYPE,
    internalInstanceHandle: UNKNOWN_TYPE,
  ) {
    // this should never be called because
    // we currently don't support text instances
    return text;
  },

  commitTextUpdate(
    textInstance: UNKNOWN_TYPE,
    newText: any,
  ) {
    // we don't support text instances yet
    // and i'm not sure if we should. React native
    // forces the use of <Text />
    throw new Error('commitTextUpdate should not be called');
  },

  scheduleAnimationCallback() {
    // no-op
    return undefined;
  },

  scheduleDeferredCallback() {
    // no-op
    return undefined;
  },

  useSyncScheduling: true,
});

export default Renderer;
