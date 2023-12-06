import * as React from 'react'

import { cn } from '@/lib/utils'

const AsideNavigation = React.forwardRef<
  HTMLDivElement, 
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <aside
      ref={ref}
      className={cn('', className)}
      {...props}
    />
  )
)
AsideNavigation.displayName = 'AsideNavigation'

const AsideNavigationGroup = React.forwardRef<
  HTMLDivElement, 
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col gap-1 pb-6', className)}
      {...props}
    />
  )
)
AsideNavigationGroup.displayName = 'AsideNavigationGroup'

const AsideNavigationGroupTitle = React.forwardRef<
  HTMLHeadingElement, 
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h4
      ref={ref}
      className={cn('mb-1 font-medium text-sm', className)}
      {...props}
    />
  )
)
AsideNavigationGroupTitle.displayName = 'AsideNavigationGroupTitle'

const AsideNavigationLink = React.forwardRef<
  HTMLAnchorElement, 
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
    <a
      ref={ref}
      className={cn('py-0.5 text-sm text-muted hover:text-link-hover', className)}
      {...props}
    />
  )
)
AsideNavigationLink.displayName = 'AsideNavigationLink'

export { 
  AsideNavigation,
  AsideNavigationGroup,
  AsideNavigationGroupTitle,
  AsideNavigationLink
};
