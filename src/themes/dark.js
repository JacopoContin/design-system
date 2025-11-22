import {
  spacing,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  borderRadius,
  borderWidth,
  shadows
} from '../tokens';

/**
 * Dark theme
 */
export const darkTheme = {
  name: 'dark',
  colors: {
    // Primary colors - slightly lighter for dark mode
    primary: {
      DEFAULT: '220 90% 60%',
      foreground: '0 0% 100%',
      light: '220 90% 75%',
      dark: '220 90% 45%',
    },

    // Secondary colors
    secondary: {
      DEFAULT: '220 17% 20%',
      foreground: '220 14% 85%',
      light: '220 17% 25%',
      dark: '220 17% 15%',
    },

    // Base colors - inverted
    background: '222 47% 11%',
    foreground: '220 14% 96%',

    // UI element colors
    muted: {
      DEFAULT: '220 17% 20%',
      foreground: '220 9% 65%',
    },

    border: '220 17% 24%',
    input: '220 17% 24%',
    ring: '220 90% 60%',

    // Semantic colors - adjusted for dark mode
    success: {
      DEFAULT: '142 71% 50%',
      foreground: '0 0% 100%',
      light: '142 71% 65%',
      dark: '142 71% 35%',
    },
    warning: {
      DEFAULT: '38 92% 55%',
      foreground: '0 0% 100%',
      light: '38 92% 70%',
      dark: '38 92% 40%',
    },
    error: {
      DEFAULT: '0 84% 65%',
      foreground: '0 0% 100%',
      light: '0 84% 80%',
      dark: '0 84% 50%',
    },
    info: {
      DEFAULT: '199 89% 53%',
      foreground: '0 0% 100%',
      light: '199 89% 68%',
      dark: '199 89% 38%',
    },
  },

  spacing,

  typography: {
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
  },

  borders: {
    borderRadius,
    borderWidth,
  },

  shadows,
};
