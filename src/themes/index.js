/**
 * Theme presets for the design system
 */

export { defaultTheme } from './default';
export { darkTheme } from './dark';
export { oceanTheme } from './ocean';

/**
 * All available themes
 */
export const allThemes = {
  default: null, // Will be lazy loaded
  dark: null,    // Will be lazy loaded
  ocean: null,   // Will be lazy loaded
};

// Synchronous export for convenience
import { defaultTheme } from './default';
import { darkTheme } from './dark';
import { oceanTheme } from './ocean';

export const themes = {
  default: defaultTheme,
  dark: darkTheme,
  ocean: oceanTheme,
};
