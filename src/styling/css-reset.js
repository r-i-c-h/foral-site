import { css } from 'styled-components';

const stylesReset = css`
  *,
  *:before,
  *:after {
    box-sizing:border-box;
    -webkit-box-sizing:border-box;
  }
  html,body,div,h1,h2,h3,h4,h5,h6,a,p,ol,ul,li,span,img,iframe,
  header,footer,main,nav,article,section,aside,hgroup,canvas,details,embed,
  table,caption,tbody,tfoot,thead,tr,th,td,hr,dl,dt,dd,pre,code,
  blockquote,q,cite,figure,figcaption,form,fieldset,label,legend,
  time,address,audio, video {
    margin:0;padding:0;border:0;font:inherit;vertical-align:baseline;
  }
  /* prettier-ignore */
  header, footer,main,nav,article,aside,section,canvas,hgroup,figcaption,figure {
    display:block;
  }
  /* prettier-ignore */
  sub,sup { font-size:75%;line-height:0;position:relative;vertical-align:baseline;}
  /* prettier-ignore */
  sub { bottom:-0.25em;}
  /* prettier-ignore */
  sup { top:-0.5em;}
  /* prettier-ignore */
  small { font-size:80%;}
  /* prettier-ignore */
  b,strong { font-weight:bolder;}
  /* prettier-ignore */
  em { font-style:italic;font-weight:bold;}
  /* prettier-ignore */
  u { text-decoration:underline;}
  /* prettier-ignore */
  i { font-style:italic;}
  /* prettier-ignore */
  code,pre,kbd,samp { font-family:monospace, monospace;font-size:1em;}

  /* * Opinionated Bits~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ** * */
  /* prettier-ignore */
  button { -webkit-appearance:button;}
  /* prettier-ignore */
  button, input { overflow:visible;}
  /* prettier-ignore */
  button, select { text-transform:none;}
  /* prettier-ignore */
  textarea { overflow:auto;}
    /* prettier-ignore */
  address, button, input, select, textarea, optgroup {
    margin:0;
    padding:0;
    border:none;
    font-family:inherit;
    font-size:100%;
    font-style:inherit;
    font-weight:inherit;
    line-height:1.15;
    background-color:transparent;
    color:inherit;
  }
  /* prettier-ignore */
  a,a:visited{ text-decoration:none;color:inherit;background-color:transparent;}
  /* prettier-ignore */
  ul, ol {list-style-position:outside;list-style-type:none;list-style:none;} /* disc or decimal if ya want to */
  /* prettier-ignore */
  table { border-collapse:collapse;border-spacing:0;}
  /* prettier-ignore */


  /* * ** Super Opinionated Bits~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ** * */
  a:focus,
  button:focus,
  input:focus,
  select:focus,
  textarea:focus {
    box-shadow:none;
    outline:#000 dotted 2px;
    outline-offset:0.02em;
  }

/* img {  */
/* display:inline-block;*/
/* border-style:none; */
/* change max-width to width100% to allow images to scale UP */
/* max-width:100%;*/
/* height:auto; */
/* vertical-align:middle; */
/* }  */

html {
  -webkit-text-size-adjust:100%;
  text-size-adjust:100%;
  font-size:100%;
  font-style:normal;
  font-weight:normal;
}
html,
body {
  height:100%;
  width:100%;
}
body {
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  text-rendering:optimizeLegibility;
}
`;

export default stylesReset;