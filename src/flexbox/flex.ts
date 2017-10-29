import * as Yoga from 'yoga-layout';

import StyleAttributes from '../style/StyleAttributes';
import cssToYogaValue from './cssToYogaValue';

export default function flex(style: StyleAttributes, styleNode: Yoga.Node) {
  styleNode.setDisplay(Yoga.DISPLAY_FLEX);
  for (const [key, value] of Object.entries(style)) {
    switch (key) {
      case 'position':
        styleNode.setPositionType(cssToYogaValue(key, value));
        break;

      case 'top':
        styleNode.setPosition(Yoga.EDGE_TOP, value);
        break;

      case 'right':
        styleNode.setPosition(Yoga.EDGE_RIGHT, value);
        break;

      case 'bottom':
        styleNode.setPosition(Yoga.EDGE_BOTTOM, value);
        break;

      case 'left':
        styleNode.setPosition(Yoga.EDGE_LEFT, value);
        break;

      case 'flex':
        styleNode.setFlex(value);
        break;

      case 'flexDirection':
        styleNode.setFlexDirection(cssToYogaValue(key, value));
        break;

      case 'justifyContent':
        styleNode.setJustifyContent(cssToYogaValue(key, value));
        break;

      case 'alignItems':
        styleNode.setAlignItems(cssToYogaValue(key, value));
        break;

      case 'width':
        styleNode.setWidth(value);
        break;

      case 'height':
        styleNode.setHeight(value);
        break;

      case 'marginTop':
        styleNode.setMargin(Yoga.EDGE_TOP, value);
        break;

      case 'marginRight':
        styleNode.setMargin(Yoga.EDGE_RIGHT, value);
        break;

      case 'marginBottom':
        styleNode.setMargin(Yoga.EDGE_BOTTOM, value);
        break;

      case 'marginLeft':
        styleNode.setMargin(Yoga.EDGE_LEFT, value);
        break;

      case 'paddingTop':
        styleNode.setPadding(Yoga.EDGE_TOP, value);
        break;

      case 'paddingRight':
        styleNode.setPadding(Yoga.EDGE_RIGHT, value);
        break;

      case 'paddingBottom':
        styleNode.setPadding(Yoga.EDGE_BOTTOM, value);
        break;

      case 'paddingLeft':
        styleNode.setPadding(Yoga.EDGE_LEFT, value);
        break;
    }
  }
}
