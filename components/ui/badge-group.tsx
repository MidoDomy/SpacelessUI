import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeGroupVariants = cva(
  'flex items-center gap-1.5 p-1 border rounded bg-auto-100 border-auto-200 text-auto-700 text-sm',
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
      rounded: { true: 'rounded-full' },
    },
    defaultVariants: {
      color: 'primary',
    },
  },
)

interface BadgeGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeGroupVariants> {
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger'
}

const BadgeGroup: React.FC<BadgeGroupProps> = ({
  className,
  color,
  rounded,
  ...props
}) => (
  <div
    className={cn(badgeGroupVariants({ color, rounded }), className)}
    {...props}
  />
)

export { BadgeGroup }
