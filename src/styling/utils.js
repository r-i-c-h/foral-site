//** Math Helpers **/
const roundDecs = (val, numOfDecimalPlaces) => {
  return Number(Math.round(val + 'e' + numOfDecimalPlaces) + 'e-' + numOfDecimalPlaces);
};
const expToThreePlaces = (val, power) => { // <~Requires roundDecs()
  let rawNum = Math.pow(val, power);
  return roundDecs(rawNum, 3);
};
//** CSS Unit Math **/
const parseUnit = (str, duple = [null, '']) => {
  /* (Sauce: https://github.com/mattdesl/parse-unit) */
  /* parseUnit("50 gold") returns [50, "gold"], "-20 foo"⇔[-20, "foo"],"5.5%"⇔[5.5,"%"], 5⇔[5, ""], "5"⇔[5, ""] */
  str = String(str);
  duple[0] = parseFloat(str, 10);
  duple[1] = str.match(/[\d.\-\+]*\s*(.*)/)[1] || ''; //eslint-disable-line
  return duple;
};
const getUnitStr = str => parseUnit(str)[1]; // "px"
const getUnitVal = str => parseUnit(str)[0]; // "50"
const pxToRemVal = px => parseFloat(px, 10) / 16;                     /* These functions all     */
const pxToRemStr = px => `${pxToRemVal(px)}rem`;                      /* assume a device default */
const pxToScreenWidthEm = px => pxToRemStr(px).replace(/rem$/, 'em'); /* rem unit of 16px!       */
//** Color Utils **/
function hexStrToRgbStr(str, opacity) {
  let r, g, b;
  let hexStr = str.replace(/^#/, "");
  if (hexStr.length === 3) {
    hexStr = hexStr[0] + hexStr[0] + hexStr[1] + hexStr[1] + hexStr[2] + hexStr[2];
  }
  if (hexStr.length !== 6) { return false; }
  r = parseInt(hexStr.slice(0, 2), 16);
  g = parseInt(hexStr.slice(2, 4), 16);
  b = parseInt(hexStr.slice(4, 6), 16);
  if (opacity) {
    let a = opacity;
    if (a > 1) {
      a = a / 100;
    }
    return `rgba(${r},${g},${b},${a})`;
  }
  return `rgb(${r},${g},${b})`;
}

//!! FONT SIZES (Vert Units below) **/
/** Create Obj of FONT-SIZES varying by a Modular Scale **/
// Staying in `rem` allows all sizing to be controlled by a single
// variable of html{ font-size: ___ }
const createModularFontSizing = (modScale = 1.4, bodyLineHeight = 1.5) => {
  const scale = getUnitVal(modScale);            // should be unit-less
  const lineHeight = getUnitVal(bodyLineHeight); // should be unit-less

  const calcOffsetFromVertGrid = (fontSizeRem, bodyLineHeight) => {
    //** Formula for "leftover" spacing to get large fonts back onto vertical grid:  **/
    //**`ceil(big-font-size ÷ base-line-height) * (base-line-height ÷ big-font-size)`**/
    const rawNum = Math.ceil(fontSizeRem / bodyLineHeight) * (bodyLineHeight / fontSizeRem);
    return roundDecs(rawNum, 3);
  };

  let sizesObj = { body: { remSize: 1, remStr: '1rem', lh: lineHeight } };
  for (let i = 0; i < 7; i++) { // "h0"[hero]-h6
    const level = 'h'.concat(i);
    const multiplier = 6 - i;
    const remSize = expToThreePlaces(scale, multiplier);
    const remStr = `${remSize}rem`;
    const lh = calcOffsetFromVertGrid(remSize, lineHeight);
    sizesObj[level] = { remSize, remStr, lh };
  }
  return sizesObj; // {h0:{ remSize, remStr, lh },...base:{remSize,remStr,lh}...}
  //  // let scaledFontsObj = {};
  //  // scaledFontsObj.base = `1rem`; // body\h6 scale^0
  //  // scaledFontsObj.h5 = `${scale}rem`; // ${mod}__ //h5   scale^1
  //  // scaledFontsObj.h4 = `${expToThreePlaces(scale, 2)}rem`; //h4 scale^2
  //  // scaledFontsObj.h3 = `${expToThreePlaces(scale, 3)}rem`; //h3 scale^3
  //  // scaledFontsObj.h2 = `${expToThreePlaces(scale, 4)}rem`; //h2 scale^4
  //  // scaledFontsObj.h1 = `${expToThreePlaces(scale, 5)}rem`; //h1 scale^5
  //  // scaledFontsObj.h0 = `${expToThreePlaces(scale, 6)}rem`; //__ scale^6
  //  // scaledFontsObj.sm = `${expToThreePlaces(scale, -1)}rem`;
  //  // scaledFontsObj.xs = `${expToThreePlaces(scale, -2)}rem`;
  //  // scaledFontsObj.xxs = `${expToThreePlaces(scale, -3)}rem`;
  //  // return scaledFontsObj;
};
// ** VERTICAL UNITS **//
/** Vertical Rhythm Units (based on "FULL" LINE HEIGHT)
/*  = (html/body/paragraph's root-font-size [1rem]) * (line-height of that text) <~~Height of FULL Line
/*  If font-size is 16px and the line-height is 1.4: one baseline is 16px * 1.4 = 22.4px.
/*  The sizes are kind of arbitrary, just to "whole" unit multiples. The sm is 1unit
/*  @createVerticalSpacingObj() returns an object of strings */
const createVerticalSpacingObj = (bodyFontSize = '18px', bodyLineHeight = 1.5) => {
  const lineHeight = getUnitVal(bodyLineHeight); // should be unit-less
  const fontSize = getUnitVal(bodyFontSize); // should be px
  let vertUnit = lineHeight * fontSize; // number
  if (getUnitStr(bodyFontSize) === 'px') { // expected
    vertUnit = pxToRemVal(vertUnit);
  }

  const vertUnitsObj = {};
  vertUnitsObj.xxxs = `${vertUnit * 0.25}rem`;
  vertUnitsObj.xxs = `${vertUnit * 0.5}rem`;
  vertUnitsObj.xs = `${vertUnit * 0.75}rem`;
  vertUnitsObj.sm = `${vertUnit}rem`;
  vertUnitsObj.md = `${vertUnit * 1.5}rem`;
  vertUnitsObj.lg = `${vertUnit * 2}rem`;
  vertUnitsObj.xl = `${vertUnit * 3}rem`;
  vertUnitsObj.xxl = `${vertUnit * 4}rem`;
  vertUnitsObj.xxxl = `${vertUnit * 5}rem`;
  return vertUnitsObj;
};

export {
  roundDecs,        // val, #-of-places
  expToThreePlaces, // val, exponent
  parseUnit,        // @any, opt:existing-duple
  getUnitStr,       // req parseUnit
  getUnitVal,       // req parseUnit
  pxToRemVal,       // @any -> num
  pxToRemStr,       // @any -> str
  pxToScreenWidthEm,// @any -> str
  hexStrToRgbStr,   // @str -> str
  createModularFontSizing, // scale:num, line-height:num
  createVerticalSpacingObj // fontSizePx:str, line-height:num
};