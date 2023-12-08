import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const avatarGroupVariants = cva(
  'inline-flex -space-x-4 [&>span:hover]:z-10 [&>span>div:first-child:hover]:shadow-lg',
  {
    variants: {
      overlap: {
        fromLeft: 'flex-row-reverse space-x-reverse',
        fromRight: 'flex-row',
      },
    },
    defaultVariants: {
      overlap: 'fromRight',
    },
  },
)

interface AvatarGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarGroupVariants> {}

const AvatarGroup: React.FC<AvatarGroupProps> = ({
  className,
  overlap,
  ...props
}) => (
  <div className={cn(avatarGroupVariants({ overlap }), className)} {...props} />
)

export { AvatarGroup }
