import StyleAttributes from '../StyleAttributes';
import { expandStyleShorthands } from '../styleShorthands';

describe('expandStyleShorthands()', () => {
  test('it should correctly expand shorthands', () => {
    const style: StyleAttributes = {
      margin: 10,
      padding: 15,
      borderRadius: 2,
      borderWidth: 1,
      borderColor: 'red',
      borderStyle: 'solid',
    };
    const result = expandStyleShorthands(style);
    expect(result).toEqual({
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10,
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 15,
      paddingRight: 15,
      borderTopColor: 'red',
      borderRightColor: 'red',
      borderBottomColor: 'red',
      borderLeftColor: 'red',
      borderTopLeftRadius: 2,
      borderTopRightRadius: 2,
      borderBottomRightRadius: 2,
      borderBottomLeftRadius: 2,
      borderTopStyle: 'solid',
      borderRightStyle: 'solid',
      borderBottomStyle: 'solid',
      borderLeftStyle: 'solid',
      borderTopWidth: 1,
      borderRightWidth: 1,
      borderBottomWidth: 1,
      borderLeftWidth: 1,
    });
  });

  test('it should remove the shorthand key', () => {
    const style: StyleAttributes = {
      padding: 10,
    };
    const result = expandStyleShorthands(style);
    expect(result).not.toHaveProperty('padding');
  });

  test('it should not modify the input object', () => {
    const style: StyleAttributes = {
      padding: 6,
      flexDirection: 'column',
    };
    expandStyleShorthands(style);
    expect(style).toEqual({
      padding: 6,
      flexDirection: 'column',
    });
  });
});
