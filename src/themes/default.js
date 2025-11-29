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
    // Base colors
    background: '0 0% 100%',        // #ffffff
    foreground: '0 0% 4%',          // #0a0a0a

    // Card colors
    card: '0 0% 100%',              // #ffffff
    'card-foreground': '0 0% 4%',   // #0a0a0a

    // Popover colors
    popover: '0 0% 100%',           // #ffffff
    'popover-foreground': '0 0% 4%', // #0a0a0a

    // Primary colors
    primary: {
      DEFAULT: '0 0% 9%',           // #171717
      foreground: '0 0% 98%',       // #fafafa
    },

    // Secondary colors
    secondary: {
      DEFAULT: '0 0% 96%',          // #f5f5f5
      foreground: '0 0% 9%',        // #171717
    },

    // Muted colors
    muted: {
      DEFAULT: '0 0% 96%',          // #f5f5f5
      foreground: '0 0% 45%',       // #737373
    },

    // Accent colors
    accent: {
      DEFAULT: '0 0% 96%',          // #f5f5f5
      foreground: '0 0% 9%',        // #171717
    },

    // Destructive colors
    destructive: {
      DEFAULT: '358 100% 45%',      // #e7000b
      foreground: '0 0% 100%',      // #ffffff
    },

    border: '0 0% 90%',             // #e5e5e5
    input: '0 0% 90%',              // #e5e5e5
    ring: '0 0% 63%',               // #a1a1a1
    'muted-foreground': '0 0% 45%', // #737373

    // Semantic colors (keeping these for compatibility)
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
      DEFAULT: '358 100% 45%',      // #e7000b (same as destructive)
      foreground: '0 0% 100%',
      light: '358 100% 60%',
      dark: '358 100% 30%',
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
    borderRadius: {
      none: '0px',
      sm: 'calc(0.625rem - 4px)',   // --radius-sm: calc(var(--radius) - 4px)
      md: 'calc(0.625rem - 2px)',   // --radius-md: calc(var(--radius) - 2px)
      lg: '0.625rem',               // --radius-lg: var(--radius) = 0.625rem (10px)
      xl: 'calc(0.625rem + 4px)',   // --radius-xl: calc(var(--radius) + 4px)
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },
    borderWidth,
  },

  shadows: {
    none: 'none',
    '2xs': '0 1px 3px 0px hsl(0 0% 0% / 0.05)',
    xs: '0 1px 3px 0px hsl(0 0% 0% / 0.05)',
    sm: '0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10)',
    DEFAULT: '0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10)',
    md: '0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 2px 4px -1px hsl(0 0% 0% / 0.10)',
    lg: '0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 4px 6px -1px hsl(0 0% 0% / 0.10)',
    xl: '0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 8px 10px -1px hsl(0 0% 0% / 0.10)',
    '2xl': '0 1px 3px 0px hsl(0 0% 0% / 0.25)',
    inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)',
  },
};
