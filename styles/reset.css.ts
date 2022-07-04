import { globalStyle } from '@vanilla-extract/css';

// Correct the line height in all browsers. Prevent adjustments of font size after orientation changes in iOS.
globalStyle('html', {
  lineHeight: '1.15',
  WebkitTextSizeAdjust: '100%',
});

// Remove the margin in all browsers.
globalStyle('body', {
  margin: 0,
});

// Render the main element consistently in IE.
globalStyle('main', {
  display: 'block',
});

// Correct the font size and margin on h1 elements within section and article contexts in Chrome, Firefox, and Safari.
globalStyle('h1', {
  fontSize: '2em',
  margin: '0.67em 0',
});

// Add the correct box sizing in Firefox, and show the overflow in Edge and IE.
globalStyle('hr', {
  boxSizing: 'content-box',
  height: '0',
  overflow: 'visible',
});

// Correct the inheritance and scaling of font size in all browsers, and correct the odd em font sizing in all browsers.
globalStyle('pre', {
  fontFamily: 'monospace, monospace',
  fontSize: '1em',
});

// Remove the gray background on active links in IE 10.
globalStyle('a', {
  backgroundColor: 'transparent',
});

// Remove the bottom border in Chrome 57-, and add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
globalStyle('abbr[title]', {
  borderBottom: 'none',
  textDecoration: 'underline dotted',
});

// Add the correct font weight in Chrome, Edge, and Safari.
globalStyle('b, strong', {
  fontWeight: 'bolder',
});

// Correct the inheritance and scaling of font size in all browsers, and correct the odd em font sizing in all browsers.
globalStyle('code, kbd, samp', {
  fontFamily: 'monospace, monospace',
  fontSize: '1em',
});

// Add the correct font size in all browsers.
globalStyle('small', {
  fontSize: '80%',
});

// Prevent sub and sup elements from affecting the line height in all browsers.
globalStyle('sub, sup', {
  fontSize: '75%',
  lineHeight: '0',
  position: 'relative',
  verticalAlign: 'baseline',
});

globalStyle('sub', {
  bottom: '-0.25em',
});

globalStyle('sup', {
  top: '-0.5em',
});

// Remove the border on images inside links in IE 10.
globalStyle('img', {
  borderStyle: 'none',
});

// Change the font styles in all browsers, and remove the margin in Firefox and Safari.
globalStyle('button, input, optgroup, select, textarea', {
  fontFamily: 'inherit',
  fontSize: '100%',
  lineHeight: '1.15',
  margin: '0',
});

// Show the overflow in Edge.
globalStyle('button, input', {
  overflow: 'visible',
});

// Remove the inheritance of text transform in Firefox.
globalStyle('button, select', {
  textTransform: 'none',
});

// Correct the inability to style clickable types in iOS and Safari.
globalStyle("button, [type='button'], [type='reset'], [type='submit']", {
  WebkitAppearance: 'button',
});

// Remove the inner border and padding in Firefox.
globalStyle(
  "button::-moz-focus-inner, [type='button']::-moz-focus-inner, [type='reset']::-moz-focus-inner, [type='submit']::-moz-focus-inner",
  {
    borderStyle: 'none',
    padding: '0',
  }
);

// Restore the focus styles unset by the previous rule.
globalStyle(
  "button:-moz-focusring, [type='button']:-moz-focusring, [type='reset']:-moz-focusring, [type='submit']:-moz-focusring",
  {
    outline: '1px dotted ButtonText',
  }
);

// Correct the padding in Firefox.
globalStyle('fieldset', {
  padding: '0.35em 0.75em 0.625em',
});

// Correct the text wrapping in Edge and IE. Correct the color inheritance from fieldset elements in IE. Remove the padding so developers are not caught out when they zero out fieldset elements in all browsers.
globalStyle('legend', {
  boxSizing: 'border-box',
  color: 'inherit',
  display: 'table',
  maxWidth: '100%',
  padding: '0',
  whiteSpace: 'normal',
});

// Add the correct vertical alignment in Chrome, Firefox, and Opera.
globalStyle('progress', {
  verticalAlign: 'baseline',
});

// Remove the default vertical scrollbar in IE 10+.
globalStyle('textarea', {
  overflow: 'auto',
});

// Add the correct box sizing in IE 10. Remove the padding in IE 10.
globalStyle("[type='checkbox'], [type='radio']", {
  boxSizing: 'border-box',
  padding: '0',
});

// Correct the cursor style of increment and decrement buttons in Chrome.
globalStyle(
  "[type='number']::-webkit-inner-spin-button, [type='number']::-webkit-outer-spin-button",
  {
    height: 'auto',
  }
);

// Correct the odd appearance in Chrome and Safari. Correct the outline style in Safari.
globalStyle("[type='search']", {
  WebkitAppearance: 'textfield',
  outlineOffset: '-2px',
});

// Remove the inner padding in Chrome and Safari on macOS.
globalStyle("[type='search']::-webkit-search-decoration", {
  WebkitAppearance: 'none',
});

// Correct the inability to style clickable types in iOS and Safari. Change font properties to inherit in Safari.
globalStyle('::-webkit-file-upload-button', {
  WebkitAppearance: 'button',
  font: 'inherit',
});

// Add the correct display in Edge, IE 10+, and Firefox.
globalStyle('details', {
  display: 'block',
});

// Add the correct display in all browsers.
globalStyle('summary', {
  display: 'list-item',
});

// Add the correct display in IE 10+.
globalStyle('template', {
  display: 'none',
});

// Add the correct display in IE 10.
globalStyle('[hidden]', {
  display: 'none',
});
