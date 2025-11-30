import { spacing } from '../tokens/spacing';
import { fontSize, lineHeight } from '../tokens/typography';

/**
 * Luminist Theme
 * Inspired by luminism art movement: light, clarity, atmospheric effects
 * Features: soft gradations, ethereal glow, subtle shadows, ocean-inspired blues
 */
export const oceanTheme = {
  name: 'luminist',
  colors: {
    // Base colors - Light ocean blues
    background: '208 100% 97%',        // #f0f8ff (alice blue)
    foreground: '180 25% 25%',         // #2f4f4f (dark slate gray)

    // Card backgrounds
    card: '0 0% 100%',                 // #ffffff
    'card-foreground': '180 25% 25%',  // #2f4f4f

    // Popovers
    popover: '0 0% 100%',              // #ffffff
    'popover-foreground': '180 25% 25%', // #2f4f4f

    // Primary - Sky blue
    primary: {
      DEFAULT: '197 71% 73%',          // #87ceeb (sky blue)
      foreground: '0 0% 0%',           // #000000
    },

    // Secondary - Light gray
    secondary: {
      DEFAULT: '0 0% 83%',             // #d3d3d3 (light gray)
      foreground: '180 25% 25%',       // #2f4f4f
    },

    // Muted - Very light blue
    muted: {
      DEFAULT: '210 100% 95%',         // #e6f2ff
      foreground: '181 25% 50%',       // #5f9ea0 (cadet blue)
    },

    // Accent - Light blue
    accent: {
      DEFAULT: '195 53% 79%',          // #add8e6 (light blue)
      foreground: '180 25% 25%',       // #2f4f4f
    },

    // Destructive - Tomato red
    destructive: {
      DEFAULT: '9 100% 64%',           // #ff6347 (tomato)
      foreground: '0 0% 100%',         // #ffffff
    },

    // Borders - Light steel blue
    border: '214 41% 78%',             // #b0c4de (light steel blue)
    input: '180 100% 94%',             // #e0ffff (light cyan)
    ring: '197 71% 73%',               // #87ceeb (sky blue)

    // Charts - Blues and purples
    'chart-1': '197 71% 73%',          // #87ceeb (sky blue)
    'chart-2': '248 53% 58%',          // #6a5acd (slate blue)
    'chart-3': '249 80% 67%',          // #7b68ee (medium slate blue)
    'chart-4': '207 44% 49%',          // #4682b4 (steel blue)
    'chart-5': '181 25% 50%',          // #5f9ea0 (cadet blue)

    // Sidebar colors
    sidebar: '180 100% 94%',                // #e0ffff (light cyan)
    'sidebar-foreground': '180 25% 25%',    // #2f4f4f
    'sidebar-primary': '197 71% 73%',       // #87ceeb (sky blue)
    'sidebar-primary-foreground': '0 0% 0%', // #000000
    'sidebar-accent': '195 53% 79%',        // #add8e6 (light blue)
    'sidebar-accent-foreground': '180 25% 25%', // #2f4f4f
    'sidebar-border': '214 41% 78%',        // #b0c4de (light steel blue)
    'sidebar-ring': '197 71% 73%',          // #87ceeb (sky blue)
  },

  spacing,

  typography: {
    fontFamily: {
      sans: '"Palatino Linotype", "Book Antiqua", Palatino, serif',
      serif: '"Palatino Linotype", "Book Antiqua", Palatino, serif',
      mono: '"Fira Code", monospace, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas',
    },
    fontSize,
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    lineHeight,
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },

  borders: {
    borderRadius: {
      none: '0px',
      sm: 'calc(0.5rem - 4px)',
      md: 'calc(0.5rem - 2px)',
      lg: '0.5rem',
      xl: 'calc(0.5rem + 4px)',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
  },

  shadows: {
    // Luminist soft, atmospheric shadows
    none: 'none',
    '2xs': '0px 4px 10px -2px hsl(213.9130 41.0714% 78.0392% / 0.15)',
    xs: '0px 4px 10px -2px hsl(213.9130 41.0714% 78.0392% / 0.15)',
    sm: '0px 4px 10px -2px hsl(213.9130 41.0714% 78.0392% / 0.30), 0px 1px 2px -3px hsl(213.9130 41.0714% 78.0392% / 0.30)',
    DEFAULT: '0px 4px 10px -2px hsl(213.9130 41.0714% 78.0392% / 0.30), 0px 1px 2px -3px hsl(213.9130 41.0714% 78.0392% / 0.30)',
    md: '0px 4px 10px -2px hsl(213.9130 41.0714% 78.0392% / 0.30), 0px 2px 4px -3px hsl(213.9130 41.0714% 78.0392% / 0.30)',
    lg: '0px 4px 10px -2px hsl(213.9130 41.0714% 78.0392% / 0.30), 0px 4px 6px -3px hsl(213.9130 41.0714% 78.0392% / 0.30)',
    xl: '0px 4px 10px -2px hsl(213.9130 41.0714% 78.0392% / 0.30), 0px 8px 10px -3px hsl(213.9130 41.0714% 78.0392% / 0.30)',
    '2xl': '0px 4px 10px -2px hsl(213.9130 41.0714% 78.0392% / 0.75)',
    inner: 'inset 0 2px 4px rgba(176, 196, 222, 0.1)',
  },
};

/**
 * Luminist Dark Theme
 * Deep ocean-inspired dark theme
 */
export const oceanDarkTheme = {
  name: 'luminist-dark',
  colors: {
    // Base colors - Deep ocean
    background: '197 63% 10%',         // #0f2027 (deep ocean)
    foreground: '180 100% 94%',        // #e0ffff (light cyan)

    // Card backgrounds
    card: '195 39% 20%',               // #1f3a44 (dark ocean blue)
    'card-foreground': '180 100% 94%', // #e0ffff

    // Popovers
    popover: '195 39% 20%',            // #1f3a44
    'popover-foreground': '180 100% 94%', // #e0ffff

    // Primary - Slate blue
    primary: {
      DEFAULT: '248 53% 58%',          // #6a5acd (slate blue)
      foreground: '0 0% 100%',         // #ffffff
    },

    // Secondary - Dark slate
    secondary: {
      DEFAULT: '192 23% 32%',          // #3e5c64
      foreground: '180 100% 94%',      // #e0ffff
    },

    // Muted - Very dark ocean
    muted: {
      DEFAULT: '195 32% 15%',          // #1a2c33
      foreground: '202 28% 69%',       // #9bb7c4
    },

    // Accent - Dark teal
    accent: {
      DEFAULT: '194 35% 26%',          // #2c4e58
      foreground: '180 100% 94%',      // #e0ffff
    },

    // Destructive - Crimson
    destructive: {
      DEFAULT: '348 100% 48%',         // #dc143c (crimson)
      foreground: '0 0% 100%',         // #ffffff
    },

    // Borders - Steel blue
    border: '207 44% 49%',             // #4682b4 (steel blue)
    input: '196 39% 21%',              // #203e4a
    ring: '248 53% 58%',               // #6a5acd (slate blue)

    // Charts - Blues and purples (inverted)
    'chart-1': '248 53% 58%',          // #6a5acd (slate blue)
    'chart-2': '197 71% 73%',          // #87ceeb (sky blue)
    'chart-3': '249 80% 67%',          // #7b68ee (medium slate blue)
    'chart-4': '181 25% 50%',          // #5f9ea0 (cadet blue)
    'chart-5': '207 44% 49%',          // #4682b4 (steel blue)

    // Sidebar colors
    sidebar: '195 39% 20%',                 // #1f3a44
    'sidebar-foreground': '180 100% 94%',   // #e0ffff
    'sidebar-primary': '248 53% 58%',       // #6a5acd (slate blue)
    'sidebar-primary-foreground': '0 0% 100%', // #ffffff
    'sidebar-accent': '194 35% 26%',        // #2c4e58
    'sidebar-accent-foreground': '180 100% 94%', // #e0ffff
    'sidebar-border': '207 44% 49%',        // #4682b4 (steel blue)
    'sidebar-ring': '248 53% 58%',          // #6a5acd (slate blue)
  },

  spacing,

  typography: {
    fontFamily: {
      sans: '"Palatino Linotype", "Book Antiqua", Palatino, serif',
      serif: '"Palatino Linotype", "Book Antiqua", Palatino, serif',
      mono: '"Fira Code", monospace, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas',
    },
    fontSize,
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    lineHeight,
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },

  borders: {
    borderRadius: {
      none: '0px',
      sm: 'calc(0.5rem - 4px)',
      md: 'calc(0.5rem - 2px)',
      lg: '0.5rem',
      xl: 'calc(0.5rem + 4px)',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
  },

  shadows: {
    // Dark mode shadows with deeper blue tones
    none: 'none',
    '2xs': '0px 5px 12px -2px hsl(196.8000 32.4675% 15.0980% / 0.25)',
    xs: '0px 5px 12px -2px hsl(196.8000 32.4675% 15.0980% / 0.25)',
    sm: '0px 5px 12px -2px hsl(196.8000 32.4675% 15.0980% / 0.50), 0px 1px 2px -3px hsl(196.8000 32.4675% 15.0980% / 0.50)',
    DEFAULT: '0px 5px 12px -2px hsl(196.8000 32.4675% 15.0980% / 0.50), 0px 1px 2px -3px hsl(196.8000 32.4675% 15.0980% / 0.50)',
    md: '0px 5px 12px -2px hsl(196.8000 32.4675% 15.0980% / 0.50), 0px 2px 4px -3px hsl(196.8000 32.4675% 15.0980% / 0.50)',
    lg: '0px 5px 12px -2px hsl(196.8000 32.4675% 15.0980% / 0.50), 0px 4px 6px -3px hsl(196.8000 32.4675% 15.0980% / 0.50)',
    xl: '0px 5px 12px -2px hsl(196.8000 32.4675% 15.0980% / 0.50), 0px 8px 10px -3px hsl(196.8000 32.4675% 15.0980% / 0.50)',
    '2xl': '0px 5px 12px -2px hsl(196.8000 32.4675% 15.0980% / 1.25)',
    inner: 'inset 0 2px 4px rgba(26, 44, 51, 0.3)',
  },
};
