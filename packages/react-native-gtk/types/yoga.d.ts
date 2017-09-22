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
    calculateLayout(): void;
    getComputedLayout(): Layout;
    insertChild(child: Node, position: number): void;
    getChildCount(): number;
    getChild(childIndex: number): Node;
    setFlexDirection(direction: any): void;
    setJustifyContent(justification: any): void;
    setWidth(width: number): void;
    setHeight(height: number): void;
  }

  export const FLEX_DIRECTION_ROW: any;
  export const FLEX_DIRECTION_COLUMN: any;
  export const JUSTIFY_SPACE_AROUND: any;
  export const ALIGN_SPACE_AROUND: any;
  export const JUSTIFY_SPACE_BETWEEN: any;
  export const ALIGN_SPACE_BETWEEN: any;
}
