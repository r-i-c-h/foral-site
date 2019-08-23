//*** Fonts <link> are imported in SEO.js INSIDE THE <Helmet> SEO Component ***/
// `font-family: 'Jaldi', sans-serif;`;
// `font-family: 'Roboto', sans-serif;`;
// `font-family: 'Roboto Slab', serif;`;
// `font-family: 'Open Sans', sans-serif;`;
// `font-family: 'Jacques Francois', serif;`;
//TODO: FIGURE OUT FONT WEIGHTS/Characters */
// <link href="https://fonts.googleapis.com/css?family=Jacques+Francois|Jaldi|Open+Sans|Roboto|Roboto+Slab&display=swap" rel="stylesheet">
// <link href="https://fonts.googleapis.com/css?family=Jacques+Francois|Roboto|Roboto+Slab&display=swap" rel="stylesheet">
// <link href="https://fonts.googleapis.com/css?family=Jacques+Francois|Open+Sans|Roboto|Jaldi|Roboto+Slab&display=swap" rel="stylesheet">
// <link href="https://fonts.googleapis.com/css?family=Jacques+Francois|Open+Sans&display=swap" rel="stylesheet" />
// <link href="https://fonts.googleapis.com/css?family=Roboto+Slab|Jacques+Francois&display=swap" rel="stylesheet" />
// <link href="https://fonts.googleapis.com/css?family=Jacques+Francois|Quicksand:500,700&display=swap" rel="stylesheet" />

const bodyFont = `'Open Sans', sans-serif;`;
const titleFont = `'Jacques Francois', serif;`;

const googleFontsLink = `<link href="https://fonts.googleapis.com/css?family=Jacques+Francois|Open+Sans&display=swap" rel="stylesheet" />`;
export { googleFontsLink };

const bodyFontSize = `16px`;
const bodyFontLineHeight = 1.5;
const fontModScale = 1.446;
const FONTS = { bodyFont, titleFont, bodyFontSize, bodyFontLineHeight, fontModScale };
export default FONTS;

// export const H1 = styled.h1`
//   font-size: 30px;
// `;
// export const H2 = H1.withComponent('h2').extend`
//   font-size: 24px;
// `;

// export const H3 = H1.withComponent('h3').extend`
//   font-size: 18px;
// `;

// export const H4 = H1.withComponent('h4').extend`
//   font-size: 15px;
// `;

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// System Font Stacks.... FYI
// const monoFonts = `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;`;
// const gitHubStack = `font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";`;
// const mediumStack = `font-family: -apple-system, BlinkMacSystemFont,"Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;`;
