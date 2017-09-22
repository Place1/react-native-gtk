"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("./components");
const ReactFiberReconciler = require('react-dom/lib/ReactFiberReconciler');
const Renderer = ReactFiberReconciler({
    createInstance(type, props, rootContainerInstance, hostContext, internalInstanceHandle) {
        return components_1.createElement(type, props, rootContainerInstance);
    },
    appendInitialChild(parentInstance, child) {
        parentInstance.appendChild(child);
    },
    appendChild(parentInstance, child) {
        parentInstance.appendChild(child);
    },
    removeChild(parentInstance, child) {
        return undefined;
    },
    insertBefore(parentInstance, child, beforeChild) {
        return undefined;
    },
    // finalizeInitialChildren is the final HostConfig method called before
    // flushing the root component to the host environment
    finalizeInitialChildren(instance, type, props, rootContainerInstance) {
        return true;
    },
    // prepare update is where you compute the diff for an instance. This is done
    // here to separate computation of the diff to the applying of the diff. Fiber
    // can reuse this work even if it pauses or aborts rendering a subset of the
    // tree.
    prepareUpdate(instance, type, oldProps, newProps) {
        // TODO
        // return newProps;
        return true;
    },
    commitUpdate(instance, type, oldProps, newProps) {
        instance.commitUpdate(newProps);
    },
    // commitMount is called after initializeFinalChildren *if*
    // `initializeFinalChildren` returns true.
    commitMount(instance, type, newProps, internalInstanceHandle) {
        instance.commitMount();
    },
    getPublicInstance(instance) {
        return instance;
    },
    getRootHostContext(rootContainerInstance) {
        return {};
    },
    getChildHostContext(parentHostContext, type, rootContainerInstance) {
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
    shouldSetTextContent(props) {
        if (typeof props.children === 'string') {
            return true;
        }
        return false;
    },
    resetTextContent(instance) {
        return undefined;
    },
    createTextInstance(text, rootContainerInstance, hostContext, internalInstanceHandle) {
        return text;
    },
    commitTextUpdate(textInstance, newText) {
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
exports.default = Renderer;
