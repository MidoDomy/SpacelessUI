import {
  AsideNavigation,
  AsideNavigationGroup,
  AsideNavigationGroupTitle,
  AsideNavigationLink,
} from '@/components/ui/aside-navigation'
import { TypographyH1, TypographyP } from '@/components/ui/typography'
import React from 'react'

export default function Accordion() {
  return (
    <>
      {/* Page main content */}
      <div className="grow">
        {/* Page intro info */}
        <TypographyH1>Accordion content</TypographyH1>
        <TypographyP className="text-muted">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat,
          reiciendis!
        </TypographyP>

        {/* Default section */}
        <section>First section</section>
      </div>

      {/* Page content aside links */}
      <div>
        <AsideNavigation>
          <AsideNavigationGroup>
            <AsideNavigationGroupTitle>Page content</AsideNavigationGroupTitle>

            <AsideNavigationLink href="/docs/components/accordion">
              Accordion
            </AsideNavigationLink>
            <AsideNavigationLink href="/docs/components/alert">
              Alert
            </AsideNavigationLink>
            <AsideNavigationLink href="/docs/components/aside-navigation">
              Aside-navigation
            </AsideNavigationLink>
            <AsideNavigationLink href="/docs/components/avatar-group">
              Avatar-group
            </AsideNavigationLink>
            <AsideNavigationLink href="/docs/components/avatar">
              Avatar
            </AsideNavigationLink>
            <AsideNavigationLink href="/docs/components/badge">
              Badge
            </AsideNavigationLink>
          </AsideNavigationGroup>
        </AsideNavigation>
      </div>
    </>
  )
}
