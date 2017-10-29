import { Gtk } from 'node-gir';

type SignalName = string;
type SignalHandlerId = number;

const signalInstanceMap = new Map<Gtk.Widget, Map<SignalName, SignalHandlerId>>();

function getSignalMapForInstance(instance: Gtk.Widget) {
  if (!signalInstanceMap.has(instance)) {
    signalInstanceMap.set(instance, new Map());
  }
  return signalInstanceMap.get(instance) as Map<SignalName, SignalHandlerId>;
}

export function connect(instance: Gtk.Widget, signalName: string, callback?: Function) {
  disconnectByName(instance, signalName);
  if (callback) {
    const handlerId = instance.connect(signalName, callback);
    const signalMap = getSignalMapForInstance(instance);
    signalMap.set(signalName, handlerId);
  }
}

export function disconnectByName(instance: Gtk.Widget, signalName: string) {
  const signalMap = getSignalMapForInstance(instance);
  if (signalMap.has(signalName)) {
    instance.disconnect(signalMap.get(signalName) as SignalHandlerId);
  }
  if (signalMap.size == 0) {
    signalInstanceMap.delete(instance);
  }
}

export function disconnectAll(instance: Gtk.Widget) {
  const signalMap = getSignalMapForInstance(instance);
  for (const signalName of signalMap.keys()) {
    disconnectByName(instance, signalName);
  }
}
