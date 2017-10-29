declare module 'node-gir' {
  class GObject {
    connect(signal: string, callback: Function): number;
    disconnect(signalHandlerId: number): void;
  }

  export namespace Gtk {
    function main(): void;
    function mainQuit(): void;

    class Application extends GObject {
      addWindow(window: Window): void;
    }

    class Widget extends GObject {
      showAll(): void;
      setSizeRequest(width: number, height: number): void;
      getAllocatedWidth(): number;
      getAllocatedHeight(): number;
    }

    class Container extends Widget {
      add(widget: Widget): void;
      remove(widget: Widget): void;
    }

    class Window extends Container {
      constructor(options: {
        type: WindowType,
        title: string,
      });
    }

    class Button extends Widget {
      setLabel(label: string): void;
    }

    class Label extends Widget {
      setText(text: string): void;
    }

    class ListBox extends Container {}

    class ListBoxRow extends Container {}

    class Entry extends Widget {
      text: string;
      setText(text: string): void;
    }

    class Fixed extends Container {
      move(widget: Widget, x: number, y: number): void;
    }

    enum WindowType {
      toplevel,
    }

    class Allocation {
      getWidth(): number;
      getHeight(): number;
    }
  }
}
