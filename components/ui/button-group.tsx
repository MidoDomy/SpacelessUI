import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonGroupVariants = cva('flex', {
  variants: {
    direction: {
      horizontal:
        'flex-row [&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none [&>*:not(:last-child)]:border-r-0',
      vertical:
        'flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:rounded-b-none [&>*:not(:last-child)]:border-b-0',
    },
  },
  defaultVariants: {
    direction: 'horizontal',
  },
})

interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupVariants> {}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  className,
  direction,
  ...props
}) => (
  <div
    className={cn(buttonGroupVariants({ direction }), className)}
    {...props}
  />
)

export { ButtonGroup }
