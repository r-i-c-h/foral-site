import { createGlobalStyle } from 'styled-components';
import { createModularFontSizing, createVerticalSpacingObj } from './utils';
import stylesReset from './css-reset.js';

import COLORS from './COLORS';
import FONTS from './FONTS';
import { BREAKPOINTS, minScreenQs } from './BREAKPOINTS';

const { bodyFontSize, bodyLineHeight, fontModScale } = FONTS;

const fsz = createModularFontSizing(fontModScale, bodyLineHeight);
const { h0, h1, h2, h3, h4, h5, h6 } = fsz;
const vrt = createVerticalSpacingObj(bodyFontSize, bodyLineHeight);

const themeVars = {
  ...COLORS,
  ...FONTS,
  BREAKPOINTS,
  minScreenQs,
  fsz,
  vrt,
  maximumWidth: '1140px' // 1140?
};
export { themeVars };

const GlobalStyle = createGlobalStyle`
  ${stylesReset}
  html {
    font-size: ${themeVars.bodyFontSize};
  }
  body {
    color: ${themeVars.blackish};
    background-color: ${themeVars.base};
    font-size: 1rem;
    font-family: ${themeVars.bodyFont};
    line-height: ${themeVars.bodyLineHeight};
  }
  p {
    margin-top: ${vrt.md};
    margin-bottom: ${vrt.md};
  }
  h1,h2,h3,h4,h5,h6,
  .h0,.h1,.h2,.h3,.h4,.h5,.h6 {
    font-family: ${themeVars.titleFont};
    margin-top: 0;
    margin-bottom: ${vrt.sm}
  }
  .h0 {
    font-size: ${h0.remStr};
    line-height: ${h0.lh};
  }
  h1,.h1 {
    font-size: ${h1.remStr};
    line-height: ${h1.lh};
  }
  h2,.h2 {
    font-size: ${h2.remStr};
    line-height: ${h2.lh};
  }
  h3,.h3 {
    font-size: ${h3.remStr};
    line-height: ${h3.lh};
  }
  h4,.h4 {
    font-size: ${h4.remStr};
    line-height: ${h4.lh};
  }
  h5,.h5 {
    font-size: ${h5.remStr};
    line-height: ${h5.lh};
  }
  h6,.h6 {
    font-size: ${h6.remStr};
    line-height: ${h6.lh};
  }
  .push { margin-bottom: ${vrt.md}; }
  .push-sm { margin-bottom: ${vrt.sm}; }
  .push-lg { margin-bottom: ${vrt.lg}; }
  .push-xl { margin-bottom: ${vrt.xl}; }

  ul, ol, pre, table, blockquote {
    margin-bottom: ${vrt.sm};
  }
`;
export default GlobalStyle;


/*
*/