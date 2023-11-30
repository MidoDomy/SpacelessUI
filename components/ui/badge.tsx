import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva('inline-flex items-center min-h-[16px] min-w-[16px] px-2 py-0.5 border rounded-full font-medium text-xs text-white', {
  variants: {
    variant: {
      primary: 'bg-primary-600 border-primary-600',
      secondary: 'bg-secondary-600 border-secondary-600',
      info: 'bg-info-600 border-info-600',
      success: 'bg-success-600 border-success-600',
      warning: 'bg-warning-600 border-warning-600',
      danger: 'bg-danger-600 border-danger-600',
    },
    absolute: { true: 'absolute' },
    left: { true: 'left-0 -translate-x-1/2' },
    right: { true: 'right-0 translate-x-1/2' },
    top: { true: 'top-0 -translate-y-1/2' },
    bottom: { true: 'bottom-0 translate-y-1/2' },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

interface BadgeProps 
  extends React.HTMLAttributes<HTMLSpanElement>, 
    VariantProps<typeof badgeVariants> {}

const Badge: React.FC<BadgeProps> = ({ className, variant, absolute, left, right, top, bottom, ...props }) => (
  <span className={cn(badgeVariants({ variant, absolute, left, right, top, bottom }), className)} {...props} />
);

export { Badge };
