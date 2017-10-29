import StyleAttributes from './StyleAttributes';

type StyleShorthands = {
  [key in keyof StyleAttributes]: any;
};

const styleShorthands: StyleShorthands = {
  margin: {
    marginTop: true,
    marginRight: true,
    marginBottom: true,
    marginLeft: true,
  },
  padding: {
    paddingTop: true,
    paddingRight: true,
    paddingBottom: true,
    paddingLeft: true,
  },
  borderColor: {
    borderTopColor: true,
    borderRightColor: true,
    borderBottomColor: true,
    borderLeftColor: true,
  },
  borderRadius: {
    borderTopLeftRadius: true,
    borderTopRightRadius: true,
    borderBottomRightRadius: true,
    borderBottomLeftRadius: true,
  },
  borderStyle: {
    borderTopStyle: true,
    borderRightStyle: true,
    borderBottomStyle: true,
    borderLeftStyle: true,
  },
  borderWidth: {
    borderTopWidth: true,
    borderRightWidth: true,
    borderBottomWidth: true,
    borderLeftWidth: true,
  },
};

/**
 * This function expands CSS style shortcuts like 'margin' and 'padding'
 * into their components i.e. 'marginTop, MarginLeft, marginRight, marginBottom'.
 *
 * Returns a new style object and does not modify the original!
 */
export function expandStyleShorthands(sourceStyle: StyleAttributes) {
  // there's currently a lot of gross type casting in this function.
  // it'd be nice to refactor it to reduce the clutter and make it more
  // readable.
  // All this function does is:
  // - copy the input style object
  // - for each key of the 'styleShorthands' object
  //    - check if the key is in the style object
  //    - if it is, then expand the shorthand by using the value
  //      of the styleShorthands[key].
  //    - delete the shorthand key
  const style = {...sourceStyle}; // make a copy!
  for (const [shorthandKey, expandedKeys] of Object.entries(styleShorthands)) {
    if (shorthandKey in style) {
      const value = style[(shorthandKey as keyof StyleAttributes)];
      for (const key of Object.keys(expandedKeys)) {
        style[key as keyof StyleAttributes] = value;
      }
      delete style[shorthandKey as keyof StyleAttributes];
    }
  }
  return style;
}
