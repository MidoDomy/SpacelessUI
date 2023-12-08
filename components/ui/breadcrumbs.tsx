import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'
import { Icon } from '@/components/ui/icon'

const Breadcrumbs = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center gap-1', className)}
    {...props}
  />
))
Breadcrumbs.displayName = 'Breadcrumbs'

interface BreadcrumbsItemProps extends React.HTMLAttributes<HTMLSpanElement> {
  asChild?: boolean
}

const BreadcrumbsItem = React.forwardRef<HTMLSpanElement, BreadcrumbsItemProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'span'

    return (
      <Comp
        ref={ref}
        className={cn(
          'inline-flex font-medium text-sm leading-none last:text-muted [a&]:text-inherit [a&]:hover:underline',
          className,
        )}
        {...props}
      />
    )
  },
)
BreadcrumbsItem.displayName = 'BreadcrumbsItem'

const BreadcrumbsDivider: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  className,
  children,
  ...props
}) => (
  <span className={cn('inline-flex text-muted', className)} {...props}>
    {children ? children : <Icon name="chevron-right" size="sm" />}
  </span>
)
BreadcrumbsDivider.displayName = 'BreadcrumbsDivider'

export { Breadcrumbs, BreadcrumbsItem, BreadcrumbsDivider }
