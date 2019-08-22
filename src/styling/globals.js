import { createGlobalStyle } from 'styled-components';
import stylesReset from './reset.js';

import COLORS from './COLORS';
import { BREAKPOINTS, minScreenQs } from './BREAKPOINTS';

// const monoFonts = `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;`;
// const gitHubStack = `font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";`;
// const mediumStack = `font-family: -apple-system, BlinkMacSystemFont,"Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;`;
const FONTS = {
  bodyFont: "'Quicksand', sans-serif;",
  titleFont: "'Jacques Francois', serif;"
};


/* eslint-disable */
const bodyFontSize = "24px";
const bodyLineHeight = 1.5;
const modScale = 1.3;
/* eslint-enable */



const styleVars = {
  ...COLORS,
  ...FONTS,
  BREAKPOINTS,
  minScreenQs
};
export { styleVars };

const GlobalStyle = createGlobalStyle`
  ${stylesReset}
  body {
    color: ${styleVars.text};
  }
  body,p {
    font-family: ${styleVars.bodyFont};
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: ${styleVars.titleFont};
  }
`;
export default GlobalStyle;