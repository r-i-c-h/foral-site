/* Sauce: https://github.com/mattdesl/parse-unit */
const parseUnit = (str, duple = [0, '']) => {
  /* parseUnit("50 gold") returns [50, "gold"], "-20 foo"⇔[-20, "foo"],"5.5%"⇔[5.5,"%"], 5⇔[5, ""], "5"⇔[5, ""] */
  str = String(str);
  duple[0] = parseFloat(str, 10);
  duple[1] = str.match(/[\d.\-\+]*\s*(.*)/)[1] || ''; //eslint-disable-line
  return duple;
};
const getUnitName = str => parseUnit(str)[1]; // "px"
const getUnitValue = str => parseUnit(str)[0]; // "50"

const pxToScreenWidthEm = (px) => { return `${px / 16}em`; }; // (base html 100% is 16px)
const pxToRem = px => { return `${parseFloat(px, 10) / 16}rem`; }; // (assumes html 100% is 16px)

const roundDecs = (val, numOfDecimalPlaces) => {
  return Number(Math.round(val + 'e' + numOfDecimalPlaces) + 'e-' + numOfDecimalPlaces);
};
const expToThreePlaces = (val, power) => { // <~~Depends on roundDecs()
  let rawNum = Math.pow(val, power);
  return roundDecs(rawNum, 3);
};

export { parseUnit, getUnitName, getUnitValue, pxToScreenWidthEm, pxToRem, roundDecs, expToThreePlaces };