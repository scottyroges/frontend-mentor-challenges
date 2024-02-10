import { createGlobalStyle } from "styled-components";

import { COLORS, WEIGHTS, FAMILIES, SIZES } from "../constants.ts";

const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
  font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* DESIGN TOKENS */
html {
   --color-dark-charcoal: ${COLORS.dark_charcoal};
   --color-dark-raspberry: ${COLORS.dark_raspberry};
   --color-brandy-red: ${COLORS.brandy_red};
   --color-wenge-brown: ${COLORS.wenge_brown};
   --color-eggshell: ${COLORS.eggshell};
   --color-white-coffee: ${COLORS.white_coffee};
   --color-snow: ${COLORS.snow};
   --color-white: ${COLORS.white};

  --font-weight-regular: ${WEIGHTS.regular};
  --font-weight-semi-bold: ${WEIGHTS.semi_bold};
  --font-weight-bold: ${WEIGHTS.bold};

  --font-family-serif: ${FAMILIES.serif}, serif;
  --font-family-sans-serif: ${FAMILIES.sans_serif}, sans-serif;
  
  --font-size-heading-large: ${SIZES.heading_large}rem;
  --font-size-heading-medium: ${SIZES.heading_medium}rem;
  --font-size-heading-small: ${SIZES.heading_small}rem;
  --font-size-body: ${SIZES.body}rem;
}

/* FONTS */
@font-face {
  font-family: 'Young Serif';
  src: url('@assets/fonts/young-serif/YoungSerif-Regular.ttf') format('truetype')
}

@font-face {
  font-family: 'Outfit';
  src: url('@assets/fonts/outfit/Outfit-VariableFont_wght.ttf') format('truetype')
}


/* GLOBAL STYLES */
*,
*:before,
*:after {
  box-sizing: border-box;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

#root {
  /*
    Create a stacking context, without a z-index.
    This ensures that all portal content (modals and tooltips) will
    float above the app.
  */
  isolation: isolate;
}

html, body, #root {
  height: 100%;
}

body {
  background-color: var(--color-eggshell);
  font-family: var(--font-family-sans-serif), sans-serif;
  color: var(--color-wenge-brown);
  font-size: var(--font-size-body);
}

h1 {
  color: var(--color-dark-charcoal);
  font-family: var(--font-family-serif);
  font-size: var(--font-size-heading-large);
  line-height: var(--font-size-heading-large);
  font-weight: var(--font-weight-regular);
}

h2 {
  color: var(--color-brandy-red);
  font-family: var(--font-family-serif);
  font-size: var(--font-size-heading-medium);
  line-height: var(--font-size-heading-medium);
  font-weight: var(--font-weight-regular);
  font-weight: var(--font-weight-regular);
  margin-bottom: 24px;
}

h3 {
  color: var(--color-dark-raspberry);
  font-family: var(--font-family-sans-serif);
  font-size: var(--font-size-heading-small);
  font-weight: var(--font-weight-semi-bold);
}


`;

export default GlobalStyles;
