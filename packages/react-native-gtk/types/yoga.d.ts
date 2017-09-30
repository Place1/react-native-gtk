declare module 'yoga-layout' {
  interface Layout {
    top: number;
    bottom: number;
    left: number;
    right: number;
    width: number;
    height: number;
  }

  export class Node {
    static createDefault(): Node;
    calculateLayout(...args: any[]): void;
    getComputedLayout(): Layout;
    getComputedLeft(): number;
    getComputedTop(): number;
    getComputedHeight(): number;
    getComputedWidth(): number;
    insertChild(child: Node, position: number): void;
    getChildCount(): number;
    getChild(childIndex: number): Node;
    setFlexDirection(direction: any): void;
    setJustifyContent(justification: any): void;
    setWidth(width: number): void;
    setHeight(height: number): void;
    setMargin(edge: any, value: number): void;
    setMargin(edge: any, value: number): void;
    setMargin(edge: any, value: number): void;
    setMargin(edge: any, value: number): void;
    setFlex(flex: number): void;
    free(): void;
    freeRecursive(): void;
  }

  export const DIRECTION_LTR: any;
  export const FLEX_DIRECTION_ROW: any;
  export const FLEX_DIRECTION_COLUMN: any;
  export const JUSTIFY_SPACE_AROUND: any;
  export const ALIGN_SPACE_AROUND: any;
  export const JUSTIFY_SPACE_BETWEEN: any;
  export const ALIGN_SPACE_BETWEEN: any;
  export const EDGE_TOP: any;
  export const EDGE_RIGHT: any;
  export const EDGE_BOTTOM: any;
  export const EDGE_LEFT: any;
}
