import { createGlobalStyle } from 'styled-components';

import reset from './css-reset.css';
import COLORS from './COLORS';
import { breakpointDefs, mediaQueriesObj } from './BREAKPOINTS';

const styleVars = {
  ...COLORS,
  ...mediaQueriesObj,
  bodyFont: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
  titleFont: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",

};
export { styleVars };

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    color: ${styleVars.black};
  }
  body,p {
    font-family: ${styleVars.bodyFont};
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: ${styleVars.titleFont};
  }
`;

export default GlobalStyle;
