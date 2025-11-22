/**
 * Color tokens using HSL format for better theme manipulation
 * Format: "hue saturation% lightness%"
 */

export const colors = {
  // Primary colors
  primary: {
    DEFAULT: '220 90% 56%',     // Blue
    foreground: '0 0% 100%',    // White
    light: '220 90% 70%',
    dark: '220 90% 40%',
  },

  // Secondary colors
  secondary: {
    DEFAULT: '220 14% 96%',     // Light gray
    foreground: '220 9% 46%',   // Dark gray
    light: '220 14% 98%',
    dark: '220 14% 90%',
  },

  // Neutral colors
  neutral: {
    50: '220 14% 98%',
    100: '220 14% 96%',
    200: '220 13% 91%',
    300: '220 9% 78%',
    400: '220 9% 65%',
    500: '220 9% 46%',
    600: '220 13% 35%',
    700: '220 14% 24%',
    800: '220 17% 17%',
    900: '222 47% 11%',
  },

  // Semantic colors
  success: {
    DEFAULT: '142 71% 45%',     // Green
    foreground: '0 0% 100%',
    light: '142 71% 60%',
    dark: '142 71% 30%',
  },

  warning: {
    DEFAULT: '38 92% 50%',      // Orange
    foreground: '0 0% 100%',
    light: '38 92% 65%',
    dark: '38 92% 35%',
  },

  error: {
    DEFAULT: '0 84% 60%',       // Red
    foreground: '0 0% 100%',
    light: '0 84% 75%',
    dark: '0 84% 45%',
  },

  info: {
    DEFAULT: '199 89% 48%',     // Cyan
    foreground: '0 0% 100%',
    light: '199 89% 63%',
    dark: '199 89% 33%',
  },

  // Base colors
  background: '0 0% 100%',
  foreground: '222 47% 11%',

  // UI element colors
  muted: {
    DEFAULT: '220 14% 96%',
    foreground: '220 9% 46%',
  },

  border: '220 13% 91%',
  input: '220 13% 91%',
  ring: '220 90% 56%',
};
