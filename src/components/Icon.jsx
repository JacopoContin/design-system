import React from 'react';
import { cn } from '../utils';

/**
 * Icon wrapper component for consistent sizing and theming
 * Built with Lucide React icons
 *
 * @param {Object} props
 * @param {'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'} props.size - Icon size
 * @param {'default' | 'primary' | 'secondary' | 'muted' | 'error' | 'success' | 'warning'} props.variant - Icon color variant
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Lucide icon component
 */
export const Icon = React.forwardRef(({
  size = 'md',
  variant = 'default',
  className,
  children,
  ...props
}, ref) => {
  const sizeMap = {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32,
    '2xl': 40,
  };

  const styles = cn(
    'inline-flex items-center justify-center shrink-0',
    'transition-colors duration-200',
    {
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

  // Clone the Lucide icon child and pass size
  const icon = React.isValidElement(children)
    ? React.cloneElement(children, { size: sizeMap[size] })
    : children;

  return (
    <span ref={ref} className={styles} {...props}>
      {icon}
    </span>
  );
});
Icon.displayName = 'Icon';

/**
 * Commonly used Lucide React icons
 * Re-exported for convenience
 */
export {
  Check as CheckIcon,
  X as CloseIcon,
  AlertCircle as AlertIcon,
  Info as InfoIcon,
  Heart as HeartIcon,
  Settings as SettingsIcon,
  Star as StarIcon,
  ChevronDown as ChevronDownIcon,
  ChevronUp as ChevronUpIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Search as SearchIcon,
  Menu as MenuIcon,
  Home as HomeIcon,
  User as UserIcon,
  Mail as MailIcon,
  Bell as BellIcon,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  Download as DownloadIcon,
  Upload as UploadIcon,
  Trash as TrashIcon,
  Edit as EditIcon,
  Plus as PlusIcon,
  Minus as MinusIcon,
  TrendingUp as TrendingUpIcon,
} from 'lucide-react';
