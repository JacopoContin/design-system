import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../utils';

/**
 * Heading component for h1-h6 elements
 * Provides consistent typography styling
 *
 * @param {Object} props
 * @param {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'} props.as - Heading level
 * @param {boolean} props.asChild - Render as child element using Radix Slot
 * @param {string} props.className - Additional CSS classes
 */
export const Heading = React.forwardRef(({
  as: Component = 'h2',
  asChild = false,
  className,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : Component;

  const styles = cn(
    'font-semibold tracking-tight text-foreground',
    {
      'text-4xl lg:text-5xl': Component === 'h1',
      'text-3xl lg:text-4xl': Component === 'h2',
      'text-2xl lg:text-3xl': Component === 'h3',
      'text-xl lg:text-2xl': Component === 'h4',
      'text-lg lg:text-xl': Component === 'h5',
      'text-base lg:text-lg': Component === 'h6',
    },
    className
  );

  return <Comp ref={ref} className={styles} {...props} />;
});
Heading.displayName = 'Heading';

/**
 * Text component for body text
 * Provides consistent text styling with size variants
 *
 * @param {Object} props
 * @param {'xs' | 'sm' | 'base' | 'lg' | 'xl'} props.size - Text size
 * @param {'default' | 'muted' | 'error' | 'success' | 'warning'} props.variant - Text color variant
 * @param {boolean} props.asChild - Render as child element using Radix Slot
 * @param {string} props.className - Additional CSS classes
 */
export const Text = React.forwardRef(({
  size = 'base',
  variant = 'default',
  asChild = false,
  className,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : 'p';

  const styles = cn(
    'leading-relaxed',
    {
      // Size variants
      'text-xs': size === 'xs',
      'text-sm': size === 'sm',
      'text-base': size === 'base',
      'text-lg': size === 'lg',
      'text-xl': size === 'xl',

      // Color variants
      'text-foreground': variant === 'default',
      'text-muted-foreground': variant === 'muted',
      'text-error': variant === 'error',
      'text-success': variant === 'success',
      'text-warning': variant === 'warning',
    },
    className
  );

  return <Comp ref={ref} className={styles} {...props} />;
});
Text.displayName = 'Text';

/**
 * Code component for inline code
 * Provides consistent monospace styling
 */
export const Code = React.forwardRef(({ className, ...props }, ref) => (
  <code
    ref={ref}
    className={cn(
      'relative rounded bg-muted px-[0.3rem] py-[0.2rem]',
      'font-mono text-sm font-semibold',
      className
    )}
    {...props}
  />
));
Code.displayName = 'Code';
