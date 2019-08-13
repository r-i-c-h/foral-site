/* Sauce: https://github.com/mattdesl/parse-unit */
const parseUnit = (str, duple = [0, '']) => {
  str = String(str);
  duple[0] = parseFloat(str, 10);
  duple[1] = str.match(/[\d.\-\+]*\s*(.*)/)[1] || '';
  return duple;
};

const pxToScreenWidthEm = (px) => { return `${px / 16}em`; }; // (base html 100% is 16px)
const pxToRem = px => { return `${parseFloat(px, 10) / 16}rem`; }; // (assumes html 100% is 16px)



export { pxToRem, pxToScreenWidthEm, parseUnit };