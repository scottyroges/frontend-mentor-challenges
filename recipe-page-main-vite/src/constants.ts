export const COLORS = {
  dark_charcoal: "hsl(30 5% 18%)",
  dark_raspberry: "hsl(332 51% 32%)",
  brandy_red: "hsl(14 45% 36%)",
  wenge_brown: "hsl(30 11% 34%)",
  eggshell: "hsl(30 54% 90%)",
  white_coffee: "hsl(30 18% 87%)",
  snow: "hsl(331 100% 98%)",
  white: "hsl(0 0% 100%)",
};
export const WEIGHTS = {
  regular: 400,
  semi_bold: 600,
  bold: 700,
};
export const FAMILIES = {
  serif: "Young Serif",
  sans_serif: "Outfit",
};

export const SIZES = {
  heading_large: 40 / 16,
  heading_medium: 28 / 16,
  heading_small: 20 / 16,
  body: 16 / 16,
};

export const BREAKPOINTS = {
  PhoneMax: 550,
  TabletMax: 1100,
  LaptopMax: 1500,
};

export const QUERIES = {
  phoneAndDown: `(max-width: ${BREAKPOINTS.PhoneMax / 16}rem)`,
  tabletAndDown: `(max-width: ${BREAKPOINTS.TabletMax / 16}rem)`,
  laptopAndDown: `(max-width: ${BREAKPOINTS.LaptopMax / 16}rem)`,
};
