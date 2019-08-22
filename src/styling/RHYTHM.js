import { getUnitName, getUnitValue, expToThreePlaces } from './utils';

// # UTILS
// # VERTICAL UNITS
/** Vertical Rhythm Units (based on FULL LINE HEIGHT)
/*  = (html/body/paragraph's root-font-size [1rem]) * (line-height of that text) <~~Height of FULL Line
/*  If font-size is 16px and the line-height is 1.4: one baseline is 16px * 1.4 = 22.4px.
/*  The sizes are kind of arbitrary, just to "whole" unit multiples. The sm is 1unit
/*  @createVertUnitsObj() returns an object of strings
*/
const createVertUnitsObj = (bodyFontSize = '18px', bodyLineHeight = 1.25) => {
  const fontSize = getUnitValue(bodyFontSize); // For maths...
  const lineHeight = getUnitValue(bodyLineHeight); // should *already* be unit-less!
  const unit = getUnitName(bodyFontSize);
  const vertUnit = fontSize * lineHeight;

  const vertUnitsObj = {};
  vertUnitsObj.xxxs = `${vertUnit * 0.25}${unit}`;
  vertUnitsObj.xxs = `${vertUnit * 0.5}${unit}`;
  vertUnitsObj.xs = `${vertUnit * 0.75}${unit}`;
  vertUnitsObj.sm = `${vertUnit}${unit}`;
  vertUnitsObj.md = `${vertUnit * 2}${unit}`;
  vertUnitsObj.lg = `${vertUnit * 3}${unit}`;
  vertUnitsObj.xl = `${vertUnit * 4}${unit}`;
  vertUnitsObj.xxl = `${vertUnit * 5}${unit}`;
  vertUnitsObj.xxxl = `${vertUnit * 6}${unit}`;
  return vertUnitsObj;
};

// # FONT SIZES
/** Create Obj of FONT-SIZES varying by a Modular Scale
/*
*/
const createModularFontScaleObj = (scale = 1.4, unit = 'rem') => {
  let scaleMod = parseFloat(scale);
  if (scaleMod <= 0 || isNaN(scaleMod)) { return Error; }

  const fontScaleObj = {};
  fontScaleObj.xxxs = `${expToThreePlaces(scaleMod, -4)}${unit}`;
  fontScaleObj.xxs = `${expToThreePlaces(scaleMod, -3)}${unit}`;
  fontScaleObj.xs = `${expToThreePlaces(scaleMod, -2)}${unit}`;
  fontScaleObj.sm = `1${unit}`;           // 1__
  fontScaleObj.md = `${scaleMod}${unit}`; // ${mod}__
  fontScaleObj.lg = `${expToThreePlaces(scaleMod, 2)}${unit}`;
  fontScaleObj.xl = `${expToThreePlaces(scaleMod, 3)}${unit}`;
  fontScaleObj.xxl = `${expToThreePlaces(scaleMod, 4)}${unit}`;
  fontScaleObj.xxxl = `${expToThreePlaces(scaleMod, 5)}${unit}`;

  return fontScaleObj;
};

export { createModularFontScaleObj, createVertUnitsObj };