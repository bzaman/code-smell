const size = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};


// Small devices (landscape phones, 576px and up)
export const BreakpointUpSmall = `@media (min-width: ${size.sm}px)`;

// Medium devices (tablets, 768px and up)
export const BreakpointUpMedium = `@media (min-width: ${size.md}px)`;

// Large devices (desktops, 992px and up)
export const BreakpointUpLarge = `@media (min-width: ${size.lg}px)`;

export const BreakpointUpContainer = `@media (min-width: 1030px)`;

// Extra large devices (large desktops, 1200px and up)
export const BreakpointUpExtraLarge = `@media (min-width: ${size.xl}px)`;

// Extra small devices (portrait phones, less than 576px)
export const BreakpointDownSmall = `@media (max-width: ${size.sm - Number(0.02).toFixed(2)}px)`;

// Small devices (landscape phones, less than 768px)
export const BreakpointDownMedium = `@media (max-width: ${size.md - Number(0.02).toFixed(2)}px)`;

// Medium devices (tablets, less than 992px)
export const BreakpointDownLarge = `@media (min-width: ${size.lg - Number(0.02).toFixed(2)}px)`;

// Large devices (desktops, less than 1200px)
export const BreakpointDownExtraLarge = `@media (min-width: ${size.xl - Number(0.02).toFixed(2)}px)`;
