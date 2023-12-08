import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'

const Steps = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center gap-3', className)}
    {...props}
  />
))
Steps.displayName = 'Steps'

interface StepsItemProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

const StepsItem = React.forwardRef<HTMLDivElement, StepsItemProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div'

    return (
      <Comp
        ref={ref}
        className={cn(
          'inline-flex flex-col items-center gap-0.5 px-2 text-center [a&]:text-inherit [a&]:hover:underline',
          className,
        )}
        {...props}
      />
    )
  },
)
StepsItem.displayName = 'StepsItem'

const StepsDivider: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => <div className={cn('grow border-t', className)} {...props} />
StepsDivider.displayName = 'StepsDivider'

const StepsTitle: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => <div className={cn('font-medium', className)} {...props} />
StepsTitle.displayName = 'StepsTitle'

const StepsDescription: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    className={cn('max-w-[120px] text-muted text-sm', className)}
    {...props}
  />
)
StepsDescription.displayName = 'StepsDescription'

export { Steps, StepsItem, StepsDivider, StepsTitle, StepsDescription }
