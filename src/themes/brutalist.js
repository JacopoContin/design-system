import { spacing } from '../tokens/spacing';
import { fontSize, lineHeight } from '../tokens/typography';

/**
 * Brutalist Theme
 * High-contrast design with vibrant colors, sharp edges, and bold shadows
 * Based on modern brutalist design principles
 */
export const brutalistTheme = {
  name: 'brutalist',
  colors: {
    // Base colors - pure black and white for maximum contrast
    background: '0 0% 100%', // oklch(1.0000 0 0)
    foreground: '0 0% 0%', // oklch(0 0 0)

    // Card backgrounds
    card: '0 0% 100%', // oklch(1.0000 0 0)
    'card-foreground': '0 0% 0%', // oklch(0 0 0)

    // Popovers
    popover: '0 0% 100%', // oklch(1.0000 0 0)
    'popover-foreground': '0 0% 0%', // oklch(0 0 0)

    // Primary - Vibrant orange
    primary: {
      DEFAULT: '27 100% 65%', // oklch(0.6489 0.2370 26.9728)
      foreground: '0 0% 100%',
    },

    // Secondary - Bright lime green
    secondary: {
      DEFAULT: '110 100% 69%', // oklch(0.9680 0.2110 109.7692)
      foreground: '0 0% 0%',
    },

    // Muted - Very light gray
    muted: {
      DEFAULT: '0 0% 96%', // oklch(0.9551 0 0)
      foreground: '0 0% 32%', // oklch(0.3211 0 0)
    },

    // Accent - Vibrant purple
    accent: {
      DEFAULT: '261 100% 56%', // oklch(0.5635 0.2408 260.8178)
      foreground: '0 0% 100%',
    },

    // Destructive - Pure black
    destructive: {
      DEFAULT: '0 0% 0%', // oklch(0 0 0)
      foreground: '0 0% 100%',
    },

    // Success - Bright green
    success: {
      DEFAULT: '142 100% 73%', // oklch(0.7323 0.2492 142.4953)
      foreground: '0 0% 0%',
    },

    // Warning - Bright pink/magenta
    warning: {
      DEFAULT: '328 100% 59%', // oklch(0.5931 0.2726 328.3634)
      foreground: '0 0% 100%',
    },

    // Error - Same as destructive
    error: {
      DEFAULT: '0 0% 0%',
      foreground: '0 0% 100%',
    },

    // Info - Same as accent
    info: {
      DEFAULT: '261 100% 56%',
      foreground: '0 0% 100%',
    },

    // Borders - Pure black
    border: '0 0% 0%', // oklch(0 0 0)
    input: '0 0% 0%', // oklch(0 0 0)
    ring: '27 100% 65%', // oklch(0.6489 0.2370 26.9728)

    // Muted foreground
    'muted-foreground': '0 0% 32%', // oklch(0.3211 0 0)
  },

  spacing,

  typography: {
    fontFamily: {
      sans: 'DM Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      mono: 'Space Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    },
    fontSize,
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '500', // Brutalist prefers heavier weights
      medium: '600',
      semibold: '700',
      bold: '900',
      extrabold: '900',
      black: '900',
    },
    lineHeight,
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em', // --tracking-normal from CSS
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
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
    // Brutalist hard shadows with 4px offset
    none: 'none',
    '2xs': '4px 4px 0px 0px hsl(0 0% 0% / 0.50)',
    xs: '4px 4px 0px 0px hsl(0 0% 0% / 0.50)',
    sm: '4px 4px 0px 0px hsl(0 0% 0% / 1.00), 4px 1px 2px -1px hsl(0 0% 0% / 1.00)',
    DEFAULT: '4px 4px 0px 0px hsl(0 0% 0% / 1.00), 4px 1px 2px -1px hsl(0 0% 0% / 1.00)',
    md: '4px 4px 0px 0px hsl(0 0% 0% / 1.00), 4px 2px 4px -1px hsl(0 0% 0% / 1.00)',
    lg: '4px 4px 0px 0px hsl(0 0% 0% / 1.00), 4px 4px 6px -1px hsl(0 0% 0% / 1.00)',
    xl: '4px 4px 0px 0px hsl(0 0% 0% / 1.00), 4px 8px 10px -1px hsl(0 0% 0% / 1.00)',
    '2xl': '4px 4px 0px 0px hsl(0 0% 0% / 2.50)',
    inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.25)',
  },
};
