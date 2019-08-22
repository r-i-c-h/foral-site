import { css } from 'styled-components';
import { pxToScreenWidthEm, parseUnit } from './utils';

const BREAKPOINTS = {
  // mobileS: "320px",// OG IPHONE
  mobileM: "480px",// Start 4col to 8col transition resizes
  mobileL: "576px",// Start 8Col  (Material is at 600px so close enough?)
  tablet: "720px", // 8 Col w/Gutter++ (iPad @ 768)
  browserS: "960px",// Start 12-col << content max-width
  browserM: "1280px", // MACBOOK + MacPro[2560*.5]
  browserL: "1440px" // Full Laptop+
};


const minScreenQs = Object.keys(BREAKPOINTS).reduce((retObj, label) => {
  const pixelCount = parseUnit(BREAKPOINTS[label])[0];
  const emVal = pxToScreenWidthEm(pixelCount);
  retObj[label] = (...args) => css`
      @media (min-width: ${emVal}) {
        ${css(...args)};
      }
  `;
  return retObj;
}, {});

export { BREAKPOINTS, minScreenQs };