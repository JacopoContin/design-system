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
 * Ocean branded theme
 * A blue/teal themed variant for branded client projects
 */
export const oceanTheme = {
  name: 'ocean',
  colors: {
    // Primary colors - Ocean blue/teal
    primary: {
      DEFAULT: '192 76% 46%',      // Teal
      foreground: '0 0% 100%',
      light: '192 76% 61%',
      dark: '192 76% 31%',
    },

    // Secondary colors - Deep blue
    secondary: {
      DEFAULT: '210 60% 96%',
      foreground: '210 60% 20%',
      light: '210 60% 98%',
      dark: '210 60% 90%',
    },

    // Base colors
    background: '0 0% 100%',
    foreground: '210 24% 16%',

    // UI element colors
    muted: {
      DEFAULT: '210 40% 96%',
      foreground: '210 10% 45%',
    },

    border: '210 30% 91%',
    input: '210 30% 91%',
    ring: '192 76% 46%',

    // Semantic colors - Ocean palette
    success: {
      DEFAULT: '152 69% 38%',      // Sea green
      foreground: '0 0% 100%',
      light: '152 69% 53%',
      dark: '152 69% 23%',
    },
    warning: {
      DEFAULT: '35 91% 56%',       // Coral
      foreground: '0 0% 100%',
      light: '35 91% 71%',
      dark: '35 91% 41%',
    },
    error: {
      DEFAULT: '351 83% 55%',      // Coral red
      foreground: '0 0% 100%',
      light: '351 83% 70%',
      dark: '351 83% 40%',
    },
    info: {
      DEFAULT: '203 87% 51%',      // Ocean blue
      foreground: '0 0% 100%',
      light: '203 87% 66%',
      dark: '203 87% 36%',
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
