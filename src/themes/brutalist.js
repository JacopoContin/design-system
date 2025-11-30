import { spacing } from '../tokens/spacing';
import { fontSize, lineHeight } from '../tokens/typography';

/**
 * Brutalist Theme
 * High-contrast design with sharp edges, bold shadows, and strong borders
 * Based on modern brutalist design principles with zero border radius
 */
export const brutalistTheme = {
  name: 'brutalist',
  colors: {
    // Base colors
    background: '0 0% 97%',        // #f8f8f8
    foreground: '0 0% 10%',        // #1a1a1a

    // Card backgrounds
    card: '0 0% 100%',             // #ffffff
    'card-foreground': '0 0% 10%', // #1a1a1a

    // Popovers
    popover: '0 0% 100%',             // #ffffff
    'popover-foreground': '0 0% 10%', // #1a1a1a

    // Primary - Dark gray
    primary: {
      DEFAULT: '0 0% 20%',         // #333333
      foreground: '0 0% 100%',     // #ffffff
    },

    // Secondary - Light gray
    secondary: {
      DEFAULT: '0 0% 80%',         // #cccccc
      foreground: '0 0% 10%',      // #1a1a1a
    },

    // Muted - Very light gray
    muted: {
      DEFAULT: '0 0% 92%',         // #eaeaea
      foreground: '0 0% 33%',      // #555555
    },

    // Accent - Light gray
    accent: {
      DEFAULT: '0 0% 87%',         // #dddddd
      foreground: '0 0% 10%',      // #1a1a1a
    },

    // Destructive - Red
    destructive: {
      DEFAULT: '0 100% 40%',       // #cc0000
      foreground: '0 0% 100%',     // #ffffff
    },

    // Borders - Pure black
    border: '0 0% 0%',             // #000000
    input: '0 0% 97%',             // #f8f8f8
    ring: '0 0% 0%',               // #000000

    // Charts
    'chart-1': '0 0% 20%',         // #333333
    'chart-2': '0 0% 33%',         // #555555
    'chart-3': '0 0% 47%',         // #777777
    'chart-4': '0 0% 60%',         // #999999
    'chart-5': '0 0% 73%',         // #bbbbbb

    // Sidebar colors
    sidebar: '0 0% 88%',                    // #e0e0e0
    'sidebar-foreground': '0 0% 10%',       // #1a1a1a
    'sidebar-primary': '0 0% 20%',          // #333333
    'sidebar-primary-foreground': '0 0% 100%', // #ffffff
    'sidebar-accent': '0 0% 80%',           // #cccccc
    'sidebar-accent-foreground': '0 0% 10%', // #1a1a1a
    'sidebar-border': '0 0% 0%',            // #000000
    'sidebar-ring': '0 0% 0%',              // #000000
  },

  spacing,

  typography: {
    fontFamily: {
      sans: '"Architects Daughter", cursive, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      serif: 'Georgia, serif',
      mono: '"Fira Code", monospace, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas',
    },
    fontSize,
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '500',
      medium: '600',
      semibold: '700',
      bold: '900',
      extrabold: '900',
      black: '900',
    },
    lineHeight,
    letterSpacing: {
      tighter: '-0.04em',
      tight: '-0.015em',
      normal: '0.01em',  // --tracking-normal
      wide: '0.035em',
      wider: '0.06em',
      widest: '0.11em',
    },
  },

  borders: {
    borderRadius: {
      none: '0px',
      sm: '0px',
      md: '0px',
      lg: '0px',
      xl: '0px',
      '2xl': '0px',
      '3xl': '0px',
      full: '9999px',
    },
    borderWidth: {
      DEFAULT: '2px',
      0: '0px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
  },

  shadows: {
    // Brutalist hard shadows with 2px offset
    none: 'none',
    '2xs': '2px 2px 0px 0px hsl(0 0% 20% / 0.50)',
    xs: '2px 2px 0px 0px hsl(0 0% 20% / 0.50)',
    sm: '2px 2px 0px 0px hsl(0 0% 20% / 1.00), 2px 1px 2px -1px hsl(0 0% 20% / 1.00)',
    DEFAULT: '2px 2px 0px 0px hsl(0 0% 20% / 1.00), 2px 1px 2px -1px hsl(0 0% 20% / 1.00)',
    md: '2px 2px 0px 0px hsl(0 0% 20% / 1.00), 2px 2px 4px -1px hsl(0 0% 20% / 1.00)',
    lg: '2px 2px 0px 0px hsl(0 0% 20% / 1.00), 2px 4px 6px -1px hsl(0 0% 20% / 1.00)',
    xl: '2px 2px 0px 0px hsl(0 0% 20% / 1.00), 2px 8px 10px -1px hsl(0 0% 20% / 1.00)',
    '2xl': '2px 2px 0px 0px hsl(0 0% 20% / 2.50)',
    inner: 'inset 0 2px 4px rgba(51, 51, 51, 0.25)',
  },
};

/**
 * Brutalist Dark Theme
 */
export const brutalistDarkTheme = {
  name: 'brutalist-dark',
  colors: {
    // Base colors - inverted
    background: '0 0% 10%',        // #1a1a1a
    foreground: '0 0% 97%',        // #f8f8f8

    // Card backgrounds
    card: '0 0% 0%',               // #000000
    'card-foreground': '0 0% 97%', // #f8f8f8

    // Popovers
    popover: '0 0% 0%',               // #000000
    'popover-foreground': '0 0% 97%', // #f8f8f8

    // Primary - Light gray
    primary: {
      DEFAULT: '0 0% 73%',         // #bbbbbb
      foreground: '0 0% 10%',      // #1a1a1a
    },

    // Secondary - Dark gray
    secondary: {
      DEFAULT: '0 0% 33%',         // #555555
      foreground: '0 0% 97%',      // #f8f8f8
    },

    // Muted - Very dark gray
    muted: {
      DEFAULT: '0 0% 16%',         // #2a2a2a
      foreground: '0 0% 67%',      // #aaaaaa
    },

    // Accent - Dark gray
    accent: {
      DEFAULT: '0 0% 24%',         // #3d3d3d
      foreground: '0 0% 97%',      // #f8f8f8
    },

    // Destructive - Red (same as light)
    destructive: {
      DEFAULT: '0 100% 40%',       // #cc0000
      foreground: '0 0% 97%',      // #f8f8f8
    },

    // Borders - Light gray/white
    border: '0 0% 97%',            // #f8f8f8
    input: '0 0% 10%',             // #1a1a1a
    ring: '0 0% 97%',              // #f8f8f8

    // Charts - inverted
    'chart-1': '0 0% 73%',         // #bbbbbb
    'chart-2': '0 0% 60%',         // #999999
    'chart-3': '0 0% 47%',         // #777777
    'chart-4': '0 0% 33%',         // #555555
    'chart-5': '0 0% 20%',         // #333333

    // Sidebar colors
    sidebar: '0 0% 13%',                    // #222222
    'sidebar-foreground': '0 0% 97%',       // #f8f8f8
    'sidebar-primary': '0 0% 73%',          // #bbbbbb
    'sidebar-primary-foreground': '0 0% 10%', // #1a1a1a
    'sidebar-accent': '0 0% 33%',           // #555555
    'sidebar-accent-foreground': '0 0% 97%', // #f8f8f8
    'sidebar-border': '0 0% 97%',           // #f8f8f8
    'sidebar-ring': '0 0% 97%',             // #f8f8f8
  },

  spacing,

  typography: {
    fontFamily: {
      sans: '"Architects Daughter", cursive, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      serif: 'Georgia, serif',
      mono: '"Fira Code", monospace, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas',
    },
    fontSize,
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '500',
      medium: '600',
      semibold: '700',
      bold: '900',
      extrabold: '900',
      black: '900',
    },
    lineHeight,
    letterSpacing: {
      tighter: '-0.04em',
      tight: '-0.015em',
      normal: '0.01em',
      wide: '0.035em',
      wider: '0.06em',
      widest: '0.11em',
    },
  },

  borders: {
    borderRadius: {
      none: '0px',
      sm: '0px',
      md: '0px',
      lg: '0px',
      xl: '0px',
      '2xl': '0px',
      '3xl': '0px',
      full: '9999px',
    },
    borderWidth: {
      DEFAULT: '2px',
      0: '0px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
  },

  shadows: {
    // Brutalist hard shadows with light color for dark mode
    none: 'none',
    '2xs': '2px 2px 0px 0px hsl(0 0% 80% / 0.50)',
    xs: '2px 2px 0px 0px hsl(0 0% 80% / 0.50)',
    sm: '2px 2px 0px 0px hsl(0 0% 80% / 1.00), 2px 1px 2px -1px hsl(0 0% 80% / 1.00)',
    DEFAULT: '2px 2px 0px 0px hsl(0 0% 80% / 1.00), 2px 1px 2px -1px hsl(0 0% 80% / 1.00)',
    md: '2px 2px 0px 0px hsl(0 0% 80% / 1.00), 2px 2px 4px -1px hsl(0 0% 80% / 1.00)',
    lg: '2px 2px 0px 0px hsl(0 0% 80% / 1.00), 2px 4px 6px -1px hsl(0 0% 80% / 1.00)',
    xl: '2px 2px 0px 0px hsl(0 0% 80% / 1.00), 2px 8px 10px -1px hsl(0 0% 80% / 1.00)',
    '2xl': '2px 2px 0px 0px hsl(0 0% 80% / 2.50)',
    inner: 'inset 0 2px 4px rgba(204, 204, 204, 0.25)',
  },
};
