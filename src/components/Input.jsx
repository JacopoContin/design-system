import React from 'react';
import { cn } from '../utils';

/**
 * Input component with validation states
 *
 * @param {Object} props
 * @param {'default' | 'error' | 'success'} props.state - Validation state
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.disabled - Disabled state
 */
export const Input = React.forwardRef(({
  state = 'default',
  className,
  disabled,
  type = 'text',
  ...props
}, ref) => {
  const inputStyles = cn(
    // Base styles
    'flex w-full rounded-md px-4 py-2.5 text-base',
    'border-2 bg-background',
    'transition-all duration-200',
    'placeholder:text-muted-foreground',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',

    // State styles
    {
      'border-input focus-visible:ring-ring hover:border-primary/50':
        state === 'default',

      'border-error focus-visible:ring-error hover:border-error/70':
        state === 'error',

      'border-success focus-visible:ring-success hover:border-success/70':
        state === 'success',
    },

    className
  );

  return (
    <input
      ref={ref}
      type={type}
      className={inputStyles}
      disabled={disabled}
      {...props}
    />
  );
});

Input.displayName = 'Input';
