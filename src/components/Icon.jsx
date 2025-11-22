import React from 'react';
import { cn } from '../utils';

/**
 * Icon wrapper component for consistent sizing and theming
 * Works with any icon library (SVG, icon fonts, etc.)
 *
 * @param {Object} props
 * @param {'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'} props.size - Icon size
 * @param {'default' | 'primary' | 'secondary' | 'muted' | 'error' | 'success' | 'warning'} props.variant - Icon color variant
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Icon content (SVG or icon component)
 */
export const Icon = React.forwardRef(({
  size = 'md',
  variant = 'default',
  className,
  children,
  ...props
}, ref) => {
  const styles = cn(
    'inline-flex items-center justify-center shrink-0',
    'transition-colors duration-200',
    {
      // Size variants
      'h-3 w-3': size === 'xs',
      'h-4 w-4': size === 'sm',
      'h-5 w-5': size === 'md',
      'h-6 w-6': size === 'lg',
      'h-8 w-8': size === 'xl',
      'h-10 w-10': size === '2xl',

      // Color variants
      'text-foreground': variant === 'default',
      'text-primary': variant === 'primary',
      'text-secondary-foreground': variant === 'secondary',
      'text-muted-foreground': variant === 'muted',
      'text-error': variant === 'error',
      'text-success': variant === 'success',
      'text-warning': variant === 'warning',
    },
    className
  );

  return (
    <span ref={ref} className={styles} {...props}>
      {children}
    </span>
  );
});
Icon.displayName = 'Icon';

/**
 * Sample SVG icons for demonstration
 * In production, use an icon library like lucide-react, heroicons, etc.
 */

export const CheckIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const CloseIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const AlertIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

export const InfoIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export const HeartIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

export const SettingsIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6m-6-6h6m6 0h-6m-5.2-5.2l4.2 4.2m6 6l-4.2-4.2m0 8.4l4.2-4.2m-12-6l4.2 4.2" />
  </svg>
);
