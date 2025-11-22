import {
  colors,
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
 * Default light theme
 */
export const defaultTheme = {
  name: 'default',
  colors: {
    // Primary colors
    primary: {
      DEFAULT: colors.primary.DEFAULT,
      foreground: colors.primary.foreground,
      light: colors.primary.light,
      dark: colors.primary.dark,
    },

    // Secondary colors
    secondary: {
      DEFAULT: colors.secondary.DEFAULT,
      foreground: colors.secondary.foreground,
      light: colors.secondary.light,
      dark: colors.secondary.dark,
    },

    // Base colors
    background: colors.background,
    foreground: colors.foreground,

    // UI element colors
    muted: {
      DEFAULT: colors.muted.DEFAULT,
      foreground: colors.muted.foreground,
    },

    border: colors.border,
    input: colors.input,
    ring: colors.ring,

    // Semantic colors
    success: {
      DEFAULT: colors.success.DEFAULT,
      foreground: colors.success.foreground,
      light: colors.success.light,
      dark: colors.success.dark,
    },
    warning: {
      DEFAULT: colors.warning.DEFAULT,
      foreground: colors.warning.foreground,
      light: colors.warning.light,
      dark: colors.warning.dark,
    },
    error: {
      DEFAULT: colors.error.DEFAULT,
      foreground: colors.error.foreground,
      light: colors.error.light,
      dark: colors.error.dark,
    },
    info: {
      DEFAULT: colors.info.DEFAULT,
      foreground: colors.info.foreground,
      light: colors.info.light,
      dark: colors.info.dark,
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
