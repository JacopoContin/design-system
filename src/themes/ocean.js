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
 * Luminist Theme
 * Inspired by luminism art movement: light, clarity, atmospheric effects
 * Features: soft gradations, ethereal glow, subtle shadows, radiant whites
 */
export const oceanTheme = {
  name: 'luminist',
  colors: {
    // Primary - Soft golden light (sunrise/sunset glow)
    primary: {
      DEFAULT: '43 74% 66%',      // Soft golden yellow
      foreground: '40 20% 20%',    // Warm dark text
    },

    // Secondary - Atmospheric blue-gray
    secondary: {
      DEFAULT: '210 17% 82%',      // Soft blue-gray (atmospheric haze)
      foreground: '210 15% 25%',
    },

    // Base - Radiant whites and soft grays
    background: '40 40% 99%',      // Warm white (sunlit)
    foreground: '30 8% 20%',       // Soft charcoal (not pure black)

    // Card - Slightly elevated, glowing white
    card: '40 50% 98%',
    'card-foreground': '30 8% 20%',

    // Popover
    popover: '40 50% 98%',
    'popover-foreground': '30 8% 20%',

    // Muted - Atmospheric grays
    muted: {
      DEFAULT: '40 20% 94%',       // Soft warm gray
      foreground: '30 6% 45%',     // Medium gray
    },

    // Accent - Luminous sky blue
    accent: {
      DEFAULT: '200 60% 75%',      // Ethereal sky blue
      foreground: '200 40% 25%',
    },

    // Borders - Barely visible, atmospheric
    border: '40 15% 88%',          // Very soft, warm border
    input: '40 15% 88%',
    ring: '43 74% 66%',            // Golden glow for focus

    // Muted foreground
    'muted-foreground': '30 6% 50%',

    // Destructive - Soft sunset red
    destructive: {
      DEFAULT: '3 65% 65%',        // Soft coral red
      foreground: '0 0% 100%',
    },

    // Success - Luminous sage green
    success: {
      DEFAULT: '145 40% 60%',      // Soft sage green
      foreground: '145 30% 20%',
    },

    // Warning - Warm amber glow
    warning: {
      DEFAULT: '38 85% 65%',       // Warm amber
      foreground: '38 40% 20%',
    },

    // Error - Same as destructive
    error: {
      DEFAULT: '3 65% 65%',
      foreground: '0 0% 100%',
    },

    // Info - Atmospheric blue
    info: {
      DEFAULT: '200 60% 70%',
      foreground: '200 40% 20%',
    },
  },

  spacing,

  typography: {
    fontFamily,
    fontSize,
    fontWeight: {
      ...fontWeight,
      // Luminist prefers lighter weights for ethereal feel
      normal: '300',
      medium: '400',
      semibold: '500',
      bold: '600',
    },
    lineHeight: {
      ...lineHeight,
      // More breathing room for atmospheric feel
      normal: '1.75',
      relaxed: '1.85',
    },
  },

  borders: {
    borderRadius: {
      ...borderRadius,
      // Soft, gentle curves
      sm: '0.25rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1rem',
      '2xl': '1.5rem',
    },
    borderWidth,
  },

  shadows: {
    // Luminist shadows are soft, diffused, atmospheric
    none: 'none',
    '2xs': '0 1px 2px rgba(0, 0, 0, 0.03), 0 1px 1px rgba(0, 0, 0, 0.02)',
    xs: '0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.02)',
    sm: '0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
    DEFAULT: '0 4px 6px rgba(0, 0, 0, 0.03), 0 2px 4px rgba(0, 0, 0, 0.02)',
    md: '0 4px 6px rgba(0, 0, 0, 0.03), 0 2px 4px rgba(0, 0, 0, 0.02)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.04), 0 4px 6px rgba(0, 0, 0, 0.02)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.02)',
    '2xl': '0 25px 50px rgba(0, 0, 0, 0.06), 0 15px 15px rgba(0, 0, 0, 0.02)',
    inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.03)',
    glow: '0 0 20px rgba(255, 248, 220, 0.5)', // Soft golden glow
  },
};
