import { colors as baseColors } from '../tokens/colors';
import { spacing } from '../tokens/spacing';
import { fontFamily, fontSize, fontWeight, lineHeight } from '../tokens/typography';
import { borderRadius, borderWidth } from '../tokens/borders';
import { shadows } from '../tokens/shadows';

/**
 * Brutalist Retro Theme
 * Inspired by brutalist web design with 70s/80s color palette
 * Features: bold typography, high contrast, geometric shapes, burnt orange accent
 */
export const brutalistTheme = {
  name: 'brutalist',
  colors: {
    // Base colors - pure black and white for maximum contrast
    background: '0 0% 100%', // Pure white
    foreground: '0 0% 0%', // Pure black

    // Card backgrounds
    card: '0 0% 100%',
    'card-foreground': '0 0% 0%',

    // Popovers
    popover: '0 0% 100%',
    'popover-foreground': '0 0% 0%',

    // Primary - Burnt Orange/Coral (signature brutalist retro color)
    primary: {
      DEFAULT: '12 82% 60%', // Burnt orange #E56B51
      foreground: '0 0% 100%', // White text on orange
    },

    // Secondary - Charcoal gray for subtle elements
    secondary: {
      DEFAULT: '0 0% 20%', // Dark charcoal
      foreground: '0 0% 100%',
    },

    // Muted - Light gray backgrounds
    muted: {
      DEFAULT: '0 0% 96%', // Very light gray
      foreground: '0 0% 15%',
    },

    // Accent - Darker orange for hover states
    accent: {
      DEFAULT: '12 75% 50%', // Darker burnt orange
      foreground: '0 0% 100%',
    },

    // Destructive - Pure red for errors
    destructive: {
      DEFAULT: '0 84% 50%', // Pure red
      foreground: '0 0% 100%',
    },

    // Success - No subtle greens, use pure green
    success: {
      DEFAULT: '120 100% 35%', // Pure green
      foreground: '0 0% 100%',
    },

    // Warning - Bold yellow
    warning: {
      DEFAULT: '45 100% 50%', // Bold yellow
      foreground: '0 0% 0%',
    },

    // Error - Same as destructive
    error: {
      DEFAULT: '0 84% 50%',
      foreground: '0 0% 100%',
    },

    // Borders - Pure black, thick and bold
    border: '0 0% 0%',
    input: '0 0% 0%',
    ring: '12 82% 60%', // Orange focus ring

    // Muted foreground - medium gray for less important text
    'muted-foreground': '0 0% 40%',
  },

  spacing,

  typography: {
    fontFamily: {
      ...fontFamily,
      // Override with more brutalist fonts if needed
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ].join(', '),
    },
    fontSize: {
      ...fontSize,
      // Brutalist loves HUGE text
      '3xl': '2rem',
      '4xl': '2.5rem',
      '5xl': '3rem',
    },
    fontWeight: {
      ...fontWeight,
      // Prefer bold weights
      normal: '500',
      medium: '600',
      semibold: '700',
      bold: '900',
    },
    lineHeight: {
      ...lineHeight,
      // Tighter line-height for impact
      tight: '1.1',
      snug: '1.25',
    },
  },

  borders: {
    borderRadius: {
      ...borderRadius,
      // Brutalism uses sharp corners, minimal rounding
      none: '0',
      sm: '0',
      md: '2px', // Very minimal
      lg: '4px',
      xl: '6px',
      '2xl': '8px',
      full: '9999px',
    },
    borderWidth: {
      ...borderWidth,
      // Thick, bold borders
      DEFAULT: '2px',
      0: '0',
      2: '2px',
      4: '4px',
      8: '8px',
    },
  },

  shadows: {
    ...shadows,
    // Brutalism often avoids shadows, but when used they're harsh
    sm: 'none',
    md: '4px 4px 0px rgba(0, 0, 0, 1)', // Hard shadow
    lg: '8px 8px 0px rgba(0, 0, 0, 1)',
    xl: '12px 12px 0px rgba(0, 0, 0, 1)',
    '2xl': '16px 16px 0px rgba(0, 0, 0, 1)',
    inner: 'inset 2px 2px 4px rgba(0, 0, 0, 0.25)',
    none: 'none',
  },
};
