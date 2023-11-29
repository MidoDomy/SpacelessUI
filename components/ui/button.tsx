import * as React from 'react';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { Icon } from '@/components/ui/icon';
import { Loader } from '@/components/ui/loader';

const buttonSolidVariants = cva('text-white',  {
  variants: {
    variant: {
      primary: 'border-primary-600 bg-primary-600 hover:bg-primary-700 hover:border-primary-700 active:bg-primary-800 active:border-primary-800 focus:ring-primary-500',
      secondary: 'border-secondary-600 bg-secondary-600 hover:bg-secondary-700 hover:border-secondary-700 active:bg-secondary-800 active:border-secondary-800 focus:ring-secondary-500',
      info: 'border-info-600 bg-info-600 hover:bg-info-700 hover:border-info-700 active:bg-info-800 active:border-info-800 focus:ring-info-500',
      success: 'border-success-600 bg-success-600 hover:bg-success-700 hover:border-success-700 active:bg-success-800 active:border-success-800 focus:ring-success-500',
      warning: 'border-warning-600 bg-warning-600 hover:bg-warning-700 hover:border-warning-700 active:bg-warning-800 active:border-warning-800 focus:ring-warning-500',
      danger: 'border-danger-600 bg-danger-600 hover:bg-danger-700 hover:border-danger-700 active:bg-danger-800 active:border-danger-800 focus:ring-danger-500',
    },
  },
});

const buttonOutlineVariants = cva('', {
  variants: {
    variant: {
      primary: 'border-primary-700 text-primary-700 hover:bg-primary-50 hover:border-primary-700 active:bg-primary-100 focus:ring-primary-500',
      secondary: 'border-secondary-700 text-secondary-700 hover:bg-secondary-50 hover:border-secondary-700 active:bg-secondary-100 focus:ring-secondary-500',
      info: 'border-info-700 text-info-700 hover:bg-info-50 hover:border-info-700 active:bg-info-100 focus:ring-info-500',
      success: 'border-success-700 text-success-700 hover:bg-success-50 hover:border-success-700 active:bg-success-100 focus:ring-success-500',
      warning: 'border-warning-700 text-warning-700 hover:bg-warning-50 hover:border-warning-700 active:bg-warning-100 focus:ring-warning-500',
      danger: 'border-danger-700 text-danger-700 hover:bg-danger-50 hover:border-danger-700 active:bg-danger-100 focus:ring-danger-500',
    },
  },
});

const buttonGhostVariants = cva('border-transparent', {
  variants: {
    variant: {
      primary: 'text-primary-700 hover:bg-primary-50 active:bg-primary-100 focus:ring-primary-500',
      secondary: 'text-secondary-700 hover:bg-secondary-50 active:bg-secondary-100 focus:ring-secondary-500',
      info: 'text-info-700 hover:bg-info-50 active:bg-info-100 focus:ring-info-500',
      success: 'text-success-700 hover:bg-success-50 active:bg-success-100 focus:ring-success-500',
      warning: 'text-warning-700 hover:bg-warning-50 active:bg-warning-100 focus:ring-warning-500',
      danger: 'text-danger-700 hover:bg-danger-50 active:bg-danger-100 focus:ring-danger-500',
    },
  },
});

const buttonVariants = cva('inline-flex items-center justify-center border rounded font-medium transition-colors focus:ring-1 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-60', {
  variants: {
    variant: {
      primary: buttonSolidVariants({ variant: 'primary' }),
      'primary-outline': buttonOutlineVariants({ variant: 'primary' }),
      'primary-ghost': buttonGhostVariants({ variant: 'primary' }),
      secondary: buttonSolidVariants({ variant: 'secondary' }),
      'secondary-outline': buttonOutlineVariants({ variant: 'secondary' }),
      'secondary-ghost': buttonGhostVariants({ variant: 'secondary' }),
      info: buttonSolidVariants({ variant: 'info' }),
      'info-outline': buttonOutlineVariants({ variant: 'info' }),
      'info-ghost': buttonGhostVariants({ variant: 'info' }),
      success: buttonSolidVariants({ variant: 'success' }),
      'success-outline': buttonOutlineVariants({ variant: 'success' }),
      'success-ghost': buttonGhostVariants({ variant: 'success' }),
      warning: buttonSolidVariants({ variant: 'warning' }),
      'warning-outline': buttonOutlineVariants({ variant: 'warning' }),
      'warning-ghost': buttonGhostVariants({ variant: 'warning' }),
      danger: buttonSolidVariants({ variant: 'danger' }),
      'danger-outline': buttonOutlineVariants({ variant: 'danger' }),
      'danger-ghost': buttonGhostVariants({ variant: 'danger' }),
    },
    size: {
      sm: 'gap-1.5 py-1.5 px-4 text-xs',
      md: 'gap-2 py-2 px-4 text-sm',
      lg: 'gap-2 py-2.5 px-6 text-base',
    },
    rounded: { true: 'rounded-full' },
    fullWidth: { true: 'w-full' },
    onlyIcon: { true: '' }
  },
  compoundVariants: [
    {
      onlyIcon: true,
      size: 'sm',
      className: 'px-1.5',
    },
    {
      onlyIcon: true,
      size: 'md',
      className: 'px-2',
    },
    {
      onlyIcon: true,
      size: 'lg',
      className: 'px-2.5',
    },
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, 
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: string;
  iconLeft?: string;
  iconRight?: string;
  loading?: boolean;
  disabled?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, size, rounded, fullWidth, loading, disabled, icon, iconLeft, iconRight, onlyIcon, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, rounded, fullWidth, onlyIcon, className }))}
        ref={ref}
        {...props}
        disabled={disabled || loading}
      >
        {/* Loader or icon left */}
        {loading ? (
          <Loader size={size} />
        ) : iconLeft ? (
          <Icon name={iconLeft} size={size} />
        ) : icon ? (
          <Icon name={icon} size={size} />
        ) : null}

        {/* Children content */}
        <Slottable>
          {!onlyIcon && children}
        </Slottable>

        {/* Icon right */}
        {iconRight && !onlyIcon && <Icon name={iconRight} size={size} />}
      </Comp>
    )
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
