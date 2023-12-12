import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center px-[7px] py-0.5 rounded font-medium text-xs text-white bg-auto-600 border-auto-600',
  {
    variants: {
      color: {
        primary: 'color-primary',
        secondary: 'color-secondary',
        info: 'color-info',
        success: 'color-success',
        warning: 'color-warning',
        danger: 'color-danger',
      },
      absolute: { true: 'absolute' },
      left: { true: 'left-0 -translate-x-1/2' },
      right: { true: 'right-0 translate-x-1/2' },
      top: { true: 'top-0 -translate-y-1/2' },
      bottom: { true: 'bottom-0 translate-y-1/2' },
      rounded: { true: 'rounded-full' },
      bordered: { true: 'border-2 border-white' },
      status: { true: 'rounded-full p-[4.5px]' },
    },
    defaultVariants: {
      color: 'primary',
    },
  },
)

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger'
}

const Badge: React.FC<BadgeProps> = ({
  className,
  color,
  absolute,
  left,
  right,
  top,
  bottom,
  rounded,
  bordered,
  status,
  ...props
}) => (
  <span
    className={cn(
      badgeVariants({
        color,
        absolute,
        left,
        right,
        top,
        bottom,
        rounded,
        bordered,
        status,
      }),
      className,
    )}
    {...props}
  />
)

export { Badge }
