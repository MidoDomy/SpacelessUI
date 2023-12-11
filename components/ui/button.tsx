import * as React from 'react'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Icon } from '@/components/ui/icon'
import { Loader } from '@/components/ui/loader'

const buttonVariants = cva(
  'inline-flex items-center justify-center border rounded font-medium transition-colors disabled:pointer-events-none disabled:opacity-60',
  {
    variants: {
      variant: {
        solid:
          'text-white hover:text-white border-auto-600 bg-auto-600 hover:bg-auto-700 hover:border-auto-700 active:bg-auto-800 active:border-auto-800 focus:ring-1 focus:ring-offset-1 focus:ring-auto-500',
        outline:
          'border-auto-600 text-auto-600 hover:bg-auto-600 hover:border-auto-600 hover:text-white active:bg-auto-700 active:border-auto-700 active:text-white focus:ring-1 focus:ring-offset-1 focus:ring-auto-500',
        ghost:
          'border-transparent text-auto-600 hover:bg-auto-100 hover:text-auto-700 active:bg-auto-200 active:text-auto-800 focus:ring-1 focus:ring-offset-1 focus:ring-auto-500',
        link: 'text-auto-600 hover:text-auto-700 active:text-auto-800',
      },
      color: {
        primary: 'color-primary',
        secondary: 'color-secondary',
        info: 'color-info',
        success: 'color-success',
        warning: 'color-warning',
        danger: 'color-danger',
      },
      size: {
        sm: 'gap-1.5 py-1.5 px-3.5 text-xs',
        md: 'gap-2 py-2 px-4 text-sm',
        lg: 'gap-2 py-2.5 px-6 text-base',
      },
      rounded: { true: 'rounded-full' },
      fullWidth: { true: 'w-full' },
      onlyIcon: { true: '' },
    },
    compoundVariants: [
      { onlyIcon: true, size: 'sm', className: 'px-1.5 min-w-[30px]' },
      { onlyIcon: true, size: 'md', className: 'px-2 min-w-[38px]' },
      { onlyIcon: true, size: 'lg', className: 'px-2.5 min-w-[46px]' },
      { variant: 'link', size: ['sm', 'md', 'lg'], className: 'p-0 border-0' },
    ],
    defaultVariants: {
      variant: 'solid',
      color: 'primary',
      size: 'md',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger'
  icon?: string
  iconLeft?: string
  iconRight?: string
  loading?: boolean
  disabled?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant,
      color,
      size,
      rounded,
      fullWidth,
      loading,
      disabled,
      icon,
      iconLeft,
      iconRight,
      onlyIcon,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({
            variant,
            color,
            size,
            rounded,
            fullWidth,
            onlyIcon,
          }),
          className,
        )}
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
        <Slottable>{children}</Slottable>

        {/* Icon right */}
        {iconRight && <Icon name={iconRight} size={size} />}
      </Comp>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
