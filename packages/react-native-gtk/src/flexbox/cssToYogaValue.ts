import * as Yoga from 'yoga-layout';

function isAlignAttribute(attribute: string) {
  return attribute === 'alignItems' || attribute === 'alignContent' || attribute === 'alignSelf';
}

export default function cssToYogaValue(attribute: string, value: string): any {
  switch (value) {
    case 'row':
      return Yoga.FLEX_DIRECTION_ROW;

    case 'row-reverse':
      return Yoga.FLEX_DIRECTION_ROW_REVERSE;

    case 'column':
      return Yoga.FLEX_DIRECTION_COLUMN;

    case 'column-reverse':
      return Yoga.FLEX_DIRECTION_COLUMN_REVERSE;

    case 'space-around':
      if (attribute === 'justifyContent') {
        return Yoga.JUSTIFY_SPACE_AROUND;
      } else if (isAlignAttribute(attribute)) {
        return Yoga.ALIGN_SPACE_AROUND;
      }
      break;

    case 'space-between':
      if (attribute === 'justifyContent') {
        return Yoga.JUSTIFY_SPACE_BETWEEN;
      } else if (isAlignAttribute(attribute)) {
        return Yoga.ALIGN_SPACE_BETWEEN;
      }
      break;

    case 'stretch':
      return Yoga.ALIGN_STRETCH;

    case 'baseline':
      return Yoga.ALIGN_BASELINE;

    case 'flex-start':
      if (attribute === 'justifyContent') {
        return Yoga.JUSTIFY_FLEX_START;
      } else if (isAlignAttribute(attribute)) {
        return Yoga.ALIGN_FLEX_START;
      }
      break;

    case 'flex-end':
      if (attribute === 'justifyContent') {
        return Yoga.JUSTIFY_FLEX_END;
      } else if (isAlignAttribute(attribute)) {
        return Yoga.ALIGN_FLEX_END;
      }
      break;

    case 'center':
      if (attribute === 'justifyContent') {
        return Yoga.JUSTIFY_CENTER;
      } else if (isAlignAttribute(attribute)) {
        return Yoga.ALIGN_CENTER;
      }
      break;
  }
}
