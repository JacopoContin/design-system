/**
 * Theme presets for the design system
 */

import { defaultTheme } from './default';
import { darkTheme } from './dark';
import { oceanTheme as luministTheme } from './ocean';
import { brutalistTheme, brutalistDarkTheme } from './brutalist';

// Re-export individual themes
export { defaultTheme } from './default';
export { darkTheme } from './dark';
export { oceanTheme as luministTheme } from './ocean';
export { brutalistTheme, brutalistDarkTheme } from './brutalist';

/**
 * All available themes
 */
export const allThemes = {
  default: null, // Will be lazy loaded
  dark: null,    // Will be lazy loaded
  luminist: null,   // Will be lazy loaded
  brutalist: null, // Will be lazy loaded
  'brutalist-dark': null, // Will be lazy loaded
};

/**
 * Synchronous themes object
 */
export const themes = {
  default: defaultTheme,
  dark: darkTheme,
  luminist: luministTheme,
  brutalist: brutalistTheme,
  'brutalist-dark': brutalistDarkTheme,
};
