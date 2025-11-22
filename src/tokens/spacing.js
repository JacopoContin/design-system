/**
 * Spacing tokens for consistent layout
 */

export const spacing = {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
  '4xl': '6rem',   // 96px
  '5xl': '8rem',   // 128px
};

/**
 * Component-specific spacing presets
 */
export const componentSpacing = {
  button: {
    paddingX: {
      sm: spacing.md,
      md: spacing.lg,
      lg: spacing.xl,
    },
    paddingY: {
      sm: spacing.xs,
      md: spacing.sm,
      lg: spacing.md,
    },
    gap: spacing.sm,
  },
  input: {
    paddingX: spacing.md,
    paddingY: spacing.sm,
  },
  dialog: {
    padding: spacing.xl,
    gap: spacing.lg,
  },
};
