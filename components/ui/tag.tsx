import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const tagVariants = cva(
  'inline-flex items-center gap-1.5 min-h-[16px] min-w-[16px] border rounded font-medium text-sm transition-colors',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-50 border-primary-700 text-primary-700 hover:bg-primary-100',
        secondary:
          'bg-secondary-50 border-secondary-700 text-secondary-700 hover:bg-secondary-100',
        info: 'bg-info-50 border-info-700 text-info-700 hover:bg-info-100',
        success:
          'bg-success-50 border-success-700 text-success-700 hover:bg-success-100',
        warning:
          'bg-warning-50 border-warning-700 text-warning-700 hover:bg-warning-100',
        danger:
          'bg-danger-50 border-danger-700 text-danger-700 hover:bg-danger-100',
      },
      size: {
        sm: 'px-2',
        md: 'px-2 py-0.5',
        lg: 'px-2.5 py-1',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {}

const Tag: React.FC<TagProps> = ({ className, variant, size, ...props }) => (
  <span className={cn(tagVariants({ variant, size }), className)} {...props} />
)

export { Tag }
