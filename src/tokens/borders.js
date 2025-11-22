/**
 * Border tokens for consistent border styling
 */

export const borderRadius = {
  none: '0',
  sm: '0.25rem',    // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  full: '9999px',   // Fully rounded
};

export const borderWidth = {
  none: '0',
  sm: '1px',
  md: '2px',
  lg: '4px',
  xl: '8px',
};

/**
 * Component-specific border presets
 */
export const componentBorders = {
  button: {
    radius: borderRadius.md,
    width: borderWidth.sm,
  },
  input: {
    radius: borderRadius.md,
    width: borderRadius.sm,
  },
  dialog: {
    radius: borderRadius.lg,
    width: borderWidth.none,
  },
  card: {
    radius: borderRadius.lg,
    width: borderWidth.sm,
  },
};
