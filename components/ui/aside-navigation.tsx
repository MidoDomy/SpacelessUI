import * as React from 'react'

import { cn } from '@/lib/utils'

const AsideNavigation = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <aside ref={ref} className={cn('flex flex-col', className)} {...props} />
))
AsideNavigation.displayName = 'AsideNavigation'

const AsideNavigationGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col pb-5 last:pb-0', className)}
    {...props}
  />
))
AsideNavigationGroup.displayName = 'AsideNavigationGroup'

const AsideNavigationSubGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex flex-col pl-2.5', className)} {...props} />
))
AsideNavigationSubGroup.displayName = 'AsideNavigationSubGroup'

const AsideNavigationGroupTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    className={cn('mb-1.5 font-medium text-sm', className)}
    {...props}
  />
))
AsideNavigationGroupTitle.displayName = 'AsideNavigationGroupTitle'

interface AsideNavigationLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean
}

const AsideNavigationLink = React.forwardRef<
  HTMLAnchorElement,
  AsideNavigationLinkProps
>(({ className, active, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      'mb-1 last:mb-0 p-0.5 text-sm text-muted hover:underline active:text-primary-700',
      active ? 'text-primary-700' : 'hover:text-muted',
      className,
    )}
    {...props}
  />
))
AsideNavigationLink.displayName = 'AsideNavigationLink'

export {
  AsideNavigation,
  AsideNavigationGroup,
  AsideNavigationSubGroup,
  AsideNavigationGroupTitle,
  AsideNavigationLink,
}
