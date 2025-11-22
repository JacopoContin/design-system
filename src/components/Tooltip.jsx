import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '../utils';

/**
 * Tooltip component built on Radix Tooltip
 * Provides accessible tooltips with customizable positioning
 */

// Provider - wrap your app with this
export const TooltipProvider = TooltipPrimitive.Provider;

// Root
export const Tooltip = TooltipPrimitive.Root;

// Trigger - element that triggers the tooltip
export const TooltipTrigger = TooltipPrimitive.Trigger;

// Portal - for rendering tooltip in a portal
export const TooltipPortal = TooltipPrimitive.Portal;

// Content - the tooltip content
export const TooltipContent = React.forwardRef(
  ({ className, sideOffset = 4, ...props }, ref) => (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 overflow-hidden rounded-md bg-foreground px-3 py-1.5',
        'text-sm text-background shadow-md',
        'animate-in fade-in-0 zoom-in-95',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
        'data-[side=bottom]:slide-in-from-top-2',
        'data-[side=left]:slide-in-from-right-2',
        'data-[side=right]:slide-in-from-left-2',
        'data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  )
);
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// Arrow - optional arrow for tooltip
export const TooltipArrow = React.forwardRef(({ className, ...props }, ref) => (
  <TooltipPrimitive.Arrow
    ref={ref}
    className={cn('fill-foreground', className)}
    {...props}
  />
));
TooltipArrow.displayName = TooltipPrimitive.Arrow.displayName;
