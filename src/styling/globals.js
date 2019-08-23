import { createGlobalStyle } from 'styled-components';
import stylesReset from './reset.js';

import FONTS from './FONTS';
import COLORS from './COLORS';
import { BREAKPOINTS, minScreenQs } from './BREAKPOINTS';
//  FONTS.fontModScale
const styleVars = {
  ...COLORS,
  ...FONTS,
  BREAKPOINTS,
  minScreenQs
};
export { styleVars };

const GlobalStyle = createGlobalStyle`
  ${stylesReset}
  html {
    font-size: ${styleVars.bodyFontSize};
  }
  body {
    color: ${styleVars.blackish};
    background-color: ${styleVars.base};
    font-size: 1rem;
    font-family: ${styleVars.bodyFont};
    line-height: ${styleVars.bodyFontLineHeight};
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: ${styleVars.titleFont};
  }
  h1 {
  font-size: 3rem;
  /* line-height: 3rem; */
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
h2 {
  font-size: 2.1rem;
  /* line-height: 3rem;       */
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
h3 {
  font-size: 1.45rem;
  /* line-height: 1.5rem;   */
  margin-top: 1.5rem;
  margin-bottom: 0rem;
}
h4 {
  font-size: 1rem;
  /* line-height: 1.5rem; */
  margin-top: 1.5rem;
  margin-bottom: 0rem;
}
h5 {
  font-size: 1rem;
  /* line-height: 1.5rem; */
  margin-top: 1.5rem;
  margin-bottom: 0;
}
p, ul, ol, pre, table, blockquote {
  margin-top: 0;
  margin-bottom: 1.5rem;
}
ul ul, ol ol, ul ol, ol ul {
  margin-top: 0;
  margin-bottom: 0;
}
`;
export default GlobalStyle;