declare module 'gtk-node' {

  type int = number;

  class Widget { // WidgetWrapper
    set_size_request(width: int, height: int): void;
  }

  export class Application {
    constructor();
    constructor(applicationId: string);
    run(window: Window): void;
    quit(): void;
  }

  export class Window extends Widget {
    constructor();
    add(widget: Widget): void;
    set_title(title: string): void;
    set_default_size(width: int, height: int): void;
    on_close(callback: Function): void;
    show_all(): void;
  }

  export class Fixed extends Widget {
    constructor();
    add(widget: Widget): void;
    put(widget: Widget, x: int, y: int): void;
    move(widget: Widget, x: int, y: int): void;
  }

  export class Button extends Widget {
    constructor();
    constructor(label: string);
    on_click(callback:Function): void;
  }
}
