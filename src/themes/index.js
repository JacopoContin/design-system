/**
 * Theme presets for the design system
 */

export { defaultTheme } from './default';
export { darkTheme } from './dark';
export { oceanTheme as luministTheme } from './ocean';
export { brutalistTheme } from './brutalist';

/**
 * All available themes
 */
export const allThemes = {
  default: null, // Will be lazy loaded
  dark: null,    // Will be lazy loaded
  luminist: null,   // Will be lazy loaded
  brutalist: null, // Will be lazy loaded
};

// Synchronous export for convenience
import { defaultTheme } from './default';
import { darkTheme } from './dark';
import { oceanTheme as luministTheme } from './ocean';
import { brutalistTheme } from './brutalist';

export const themes = {
  default: defaultTheme,
  dark: darkTheme,
  luminist: luministTheme,
  brutalist: brutalistTheme,
};
