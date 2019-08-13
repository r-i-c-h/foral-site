const pxToScreenWidthEm = (px) => { return `${px / 16}em`; }; // (base html 100% is 16px)
const pxToRem = px => { px = parseFloat(px); return `${px / 16}rem`; }; // (assumes html 100% is 16px)
