/**
 * Main entry point for the design system
 * Export all components, contexts, themes, and utilities
 */

// Import styles
import './index.css';

// Components
export {
  Button,
  Input,
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
  Switch,
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipPortal,
  TooltipContent,
  TooltipArrow,
} from './components';

// Theme system
export { ThemeProvider, useTheme } from './contexts';
export { defaultTheme, darkTheme, luministTheme, brutalistTheme, themes } from './themes';

// Design tokens
export {
  colors,
  spacing,
  componentSpacing,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  borderRadius,
  borderWidth,
  componentBorders,
  shadows,
  componentShadows,
} from './tokens';

// Utilities
export { cn } from './utils';
