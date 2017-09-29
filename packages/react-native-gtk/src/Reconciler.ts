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
    type: any,
    props: any,
    rootContainerInstance: any,
    hostContext: any,
    internalInstanceHandle: any,
  ) {
    return createElement(type, props, rootContainerInstance);
  },

  appendInitialChild(
    parentInstance: any,
    child: any,
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
    parentInstance: any,
    child: any,
    beforeChild: any,
  ) {
    return undefined;
  },

  // finalizeInitialChildren is the final HostConfig method called before
  // flushing the root component to the host environment
  finalizeInitialChildren(
    instance: any,
    type: any,
    props: any,
    rootContainerInstance: any,
  ) {
    return true;
  },

  // prepare update is where you compute the diff for an instance. This is done
  // here to separate computation of the diff to the applying of the diff. Fiber
  // can reuse this work even if it pauses or aborts rendering a subset of the
  // tree.
  prepareUpdate(
    instance: any,
    type: any,
    oldProps: any,
    newProps: any,
  ) {
    // TODO
    // return newProps;
    return true;
  },

  commitUpdate(
    instance: GtkComponent,
    updatePayload: boolean,
    // this is the type of component.
    // I'm not sure if it's ANY react component or
    // just the raw GtkComponent's that we implement.
    type: UNKNOWN_TYPE,
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
    type: UNKNOWN_TYPE,
    newProps: UNKNOWN_TYPE,
    internalInstanceHandle: UNKNOWN_TYPE,
  ) {
    instance.commitMount();
  },

  getPublicInstance(instance: UNKNOWN_TYPE) {
    return instance;
  },

  getRootHostContext(rootContainerInstance: UNKNOWN_TYPE) {
    return {};
  },

  getChildHostContext(parentHostContext: UNKNOWN_TYPE, type: UNKNOWN_TYPE, rootContainerInstance: UNKNOWN_TYPE) {
    return {};
  },

  // the prepareForCommit and resetAfterCommit methods are necessary for UNKNOWN_TYPE
  // global side-effects you need to trigger in the host environment. In
  // ReactDOM this does things like disable the ReactDOM events to ensure no
  // callbacks are fired during DOM manipulations
  prepareForCommit() {
    return undefined;
  },

  resetAfterCommit() {
    return undefined;
  },

  // the following four methods are regarding TextInstances. In our example
  // renderer we don’t have specific text nodes like the DOM does so we’ll just
  // noop all of them.
  shouldSetTextContent(props: UNKNOWN_TYPE) {
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
    return text;
  },

  commitTextUpdate(
    textInstance: UNKNOWN_TYPE,
    newText: any,
  ) {
    throw new Error('commitTextUpdate should not be called');
  },

  scheduleAnimationCallback() {
    return undefined;
  },

  scheduleDeferredCallback() {
    return undefined;
  },

  useSyncScheduling: true,
});

export default Renderer;
