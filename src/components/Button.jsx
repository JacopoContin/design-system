import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../utils';

/**
 * Button component with multiple variants
 * Built on Radix Slot for composition
 *
 * @param {Object} props
 * @param {'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'} props.variant - Button variant
 * @param {'sm' | 'md' | 'lg'} props.size - Button size
 * @param {boolean} props.asChild - Render as child element using Radix Slot
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.disabled - Disabled state
 */
export const Button = React.forwardRef(({
  variant = 'primary',
  size = 'md',
  asChild = false,
  className,
  disabled,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : 'button';

  const baseStyles = cn(
    // Base styles
    'inline-flex items-center justify-center gap-2 rounded-md font-medium',
    'transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',

    // Variant styles
    {
      // Primary
      'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 active:scale-[0.98]':
        variant === 'primary',

      // Secondary
      'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 active:scale-[0.98]':
        variant === 'secondary',

      // Outline
      'border-2 border-border bg-transparent hover:bg-muted hover:border-primary active:scale-[0.98]':
        variant === 'outline',

      // Ghost
      'bg-transparent hover:bg-muted active:bg-muted/80':
        variant === 'ghost',

      // Destructive
      'bg-error text-error-foreground shadow-sm hover:bg-error/90 active:scale-[0.98]':
        variant === 'destructive',
    },

    // Size styles
    {
      'h-9 px-3 text-sm': size === 'sm',
      'h-11 px-6 text-base': size === 'md',
      'h-14 px-8 text-lg': size === 'lg',
    },

    className
  );

  return (
    <Comp
      ref={ref}
      className={baseStyles}
      disabled={disabled}
      {...props}
    />
  );
});

Button.displayName = 'Button';
