import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';

import { space, breakpoints } from './constants';

const responsiveProperties = defineProperties({
  conditions: {
    xs: {},
    sm: { '@media': `screen and (min-width: ${breakpoints.sm})` },
    md: { '@media': `screen and (min-width: ${breakpoints.md})` },
    lg: { '@media': `screen and (min-width: ${breakpoints.lg})` },
    xl: { '@media': `screen and (min-width: ${breakpoints.xl})` },
  },
  defaultCondition: 'xs',
  properties: {
    // Aspect Ratio
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      portrait: '9 / 16',
      landscape: '16 / 9',
    },

    // Display
    display: ['none', 'block', 'flex', 'table', 'grid'],

    // Object Fit
    objectFit: ['contain', 'cover', 'fill', 'none'],

    // Position
    position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],

    flexDirection: ['row', 'column'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
    ],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,

    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,

    rowGap: space,
    columnGap: space,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],

    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],

    gap: ['rowGap', 'columnGap'],

    placeItems: ['justifyContent', 'alignItems'],
  },
});

const colors = {
  'blue-50': '#eff6ff',
  'blue-100': '#dbeafe',
  'blue-200': '#bfdbfe',
  'gray-700': '#374151',
  'gray-800': '#1f2937',
  'gray-900': '#111827',
  // etc.
};

export const colorProperties = defineProperties({
  conditions: {
    light: { selector: 'html.light &' },
    dark: { selector: 'html.dark &' },
  },
  responsiveArray: ['light', 'dark'],
  defaultCondition: ['light', 'dark'],
  properties: {
    background: colors,
  },
});

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];
