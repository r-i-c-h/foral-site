import { css } from 'styled-components';

const stylesReset = css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
  /* prettier-ignore */
  html, body, div, form, p, ol, ul, li, dl, dt, dd, blockquote, figure, fieldset, label, legend, textarea, pre, iframe, hr, h1, h2, h3, h4, h5, h6 {
    margin: 0;  padding: 0;
  }
  /* prettier-ignore */
  main, article,aside,details,figcaption,figure,footer,header,hgroup,nav,section,summary {
    display: block;
  }
  /* prettier-ignore */
  address, button, input, select, textarea, optgroup {
    margin: 0;
    padding: 0;
    border: none;
    font-family: inherit;
    font-size: 100%;
    font-style: inherit;
    font-weight: inherit;
    line-height: 1.15;
    background-color: transparent;
    color: inherit;
  }
  /* * ** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ** * */
  button {
    -webkit-appearance: button;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  textarea {
    overflow: auto;
  }
  /* * ** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ** * */
  /* prettier-ignore */
  code, pre,kbd,samp { font-family: monospace, monospace; font-size: 1em; }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  /* prettier-ignore */
  sub { bottom: -0.25em; }
  /* prettier-ignore */
  sup { top: -0.5em; }
  /* prettier-ignore */
  small { font-size: 80%; }
  /* prettier-ignore */
  ul, ol {list-style-position: outside; list-style-type: none; list-style: none; } /* disc or decimal if ya want to */
  /* prettier-ignore */
  b, strong { font-weight: bolder; }
  /* prettier-ignore */
  u { text-decoration: underline; }
  /* prettier-ignore */
  i { font-style: italic; }
  /* prettier-ignore */
  em { font-style: italic; font-weight: bold; }
  /* prettier-ignore */
  a, a:visited{ text-decoration: none; color: inherit; background-color: transparent;}
  /* prettier-ignore */

  /* * ** Super Opinionated Bits~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ** * */
  a:focus,
  button:focus,
  input:focus,
  select:focus,
  textarea:focus {
    box-shadow: none;
    outline: #000 dotted 2px;
    outline-offset: 0.02em;
  }

/* img {  */
/* display: inline-block; */
/* border-style: none;  */
/* change max-width to width100% to allow images to scale UP */
/* max-width: 100%; */
/* height: auto;  */
/* vertical-align: middle;  */
/* }  */

html {
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
  font-size: 100%;
  font-style: normal;
  font-weight: normal;
}

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
`;

export default stylesReset;