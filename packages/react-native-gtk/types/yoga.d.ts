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
    removeChild(child: Node): void;
    getChildCount(): number;
    getChild(childIndex: number): Node;
    setDisplay(display: any): void;
    setFlexDirection(direction: any): void;
    setJustifyContent(justification: any): void;
    setAlignItems(alignment: any): void;
    setWidth(width: number): void;
    setHeight(height: number): void;
    setMargin(edge: any, value: number): void;
    setPadding(edge: any, value: number): void;
    setFlex(flex: number): void;
    setMeasureFunc(measureFunc: MeasureFuncion): void;
    markDirty(): void;
    free(): void;
    freeRecursive(): void;
  }

  export const DIRECTION_LTR: any;
  export const FLEX_DIRECTION_ROW: any;
  export const FLEX_DIRECTION_COLUMN: any;
  export const FLEX_DIRECTION_ROW_REVERSE: any;
  export const FLEX_DIRECTION_COLUMN_REVERSE: any;
  export const JUSTIFY_SPACE_AROUND: any;
  export const JUSTIFY_SPACE_BETWEEN: any;
  export const JUSTIFY_FLEX_START: any;
  export const JUSTIFY_FLEX_END: any;
  export const JUSTIFY_CENTER: any;
  export const ALIGN_SPACE_AROUND: any;
  export const ALIGN_STRETCH: any;
  export const ALIGN_BASELINE: any;
  export const ALIGN_SPACE_BETWEEN: any;
  export const ALIGN_FLEX_END: any;
  export const ALIGN_FLEX_START: any;
  export const ALIGN_CENTER: any;
  export const EDGE_TOP: any;
  export const EDGE_RIGHT: any;
  export const EDGE_BOTTOM: any;
  export const EDGE_LEFT: any;
  export const MEASURE_MODE_EXACTLY: any;
  export const MEASURE_MODE_AT_MOST: any;
  export const DISPLAY_FLEX: any;

  export interface MeasureFuncion {
    (width: number, widthMode: any, height: number, heightMode: any): Partial<YogaSize>;
  }

  export interface YogaSize {
    width: number;
    height: number;
  }
}
