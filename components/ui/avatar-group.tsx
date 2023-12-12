import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const avatarGroupVariants = cva(
  'inline-flex -space-x-4 [&>span:hover]:z-10 [&>span>div:first-child:hover]:shadow-lg',
  {
    variants: {
      overlapFrom: {
        left: 'flex-row-reverse space-x-reverse',
        right: 'flex-row',
      },
    },
    defaultVariants: {
      overlapFrom: 'right',
    },
  },
)

interface AvatarGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarGroupVariants> {}

const AvatarGroup: React.FC<AvatarGroupProps> = ({
  className,
  overlapFrom,
  ...props
}) => (
  <div
    className={cn(avatarGroupVariants({ overlapFrom }), className)}
    {...props}
  />
)

export { AvatarGroup }
