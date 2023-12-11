import {
  AsideNavigation,
  AsideNavigationGroup,
  AsideNavigationGroupTitle,
  AsideNavigationLink,
} from '@/components/ui/aside-navigation'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid grid-cols-12 gap-14">
      {/* Aside navigation (left) */}
      <div className="col-span-2">
        <AsideNavigation className="sticky top-4">
          {/* Getting started */}
          <AsideNavigationGroup>
            <AsideNavigationGroupTitle>
              Getting started
            </AsideNavigationGroupTitle>

            <AsideNavigationLink href="/docs/introduction">
              Introduction
            </AsideNavigationLink>
          </AsideNavigationGroup>

          {/* Components */}
          <AsideNavigationGroup>
            <AsideNavigationGroupTitle> Components </AsideNavigationGroupTitle>

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
            <AsideNavigationLink href="/docs/components/button">
              Button
            </AsideNavigationLink>
          </AsideNavigationGroup>
        </AsideNavigation>
      </div>

      {/* Main content */}
      <div className="col-span-10 grid grid-cols-12 gap-14">{children}</div>
    </div>
  )
}
