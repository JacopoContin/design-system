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
    // Base colors
    background: '0 0% 4%',          // #0a0a0a
    foreground: '0 0% 98%',         // #fafafa

    // Card colors
    card: '0 0% 9%',                // #171717
    'card-foreground': '0 0% 98%',  // #fafafa

    // Popover colors
    popover: '0 0% 15%',            // #262626
    'popover-foreground': '0 0% 98%', // #fafafa

    // Primary colors
    primary: {
      DEFAULT: '0 0% 90%',          // #e5e5e5
      foreground: '0 0% 9%',        // #171717
    },

    // Secondary colors
    secondary: {
      DEFAULT: '0 0% 15%',          // #262626
      foreground: '0 0% 98%',       // #fafafa
    },

    // Muted colors
    muted: {
      DEFAULT: '0 0% 15%',          // #262626
      foreground: '0 0% 63%',       // #a1a1a1
    },

    // Accent colors
    accent: {
      DEFAULT: '0 0% 25%',          // #404040
      foreground: '0 0% 98%',       // #fafafa
    },

    // Destructive colors
    destructive: {
      DEFAULT: '359 100% 69%',      // #ff6467
      foreground: '0 0% 98%',       // #fafafa
    },

    border: '0 0% 16%',             // #282828
    input: '0 0% 20%',              // #343434
    ring: '0 0% 45%',               // #737373
    'muted-foreground': '0 0% 63%', // #a1a1a1

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
      DEFAULT: '359 100% 69%',      // #ff6467 (same as destructive)
      foreground: '0 0% 98%',
      light: '359 100% 80%',
      dark: '359 100% 50%',
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
