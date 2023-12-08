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
    <div className="flex gap-24">
      <div className="shrink-0">
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

      <div className="grow flex gap-20">{children}</div>
    </div>
  )
}
