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
  const components = [
    { name: 'Accordion', url: 'accordion' },
    { name: 'Alert', url: 'alert' },
    { name: 'Aside navigation', url: 'aside-navigation' },
    { name: 'Avatar', url: 'avatar' },
    { name: 'Avatar group', url: 'avatar-group' },
    { name: 'Badge', url: 'badge' },
    { name: 'Badge group', url: 'badge-group' },
    { name: 'Breadcrumbs', url: 'breadcrumbs' },
    { name: 'Button', url: 'button' },
    { name: 'Button group', url: 'button-group' },
  ]

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

            {components.map((component) => (
              <AsideNavigationLink href={`/docs/components/${component.url}`}>
                {component.name}
              </AsideNavigationLink>
            ))}
          </AsideNavigationGroup>
        </AsideNavigation>
      </div>

      {/* Main content */}
      <div className="col-span-10 grid grid-cols-12 gap-14">{children}</div>
    </div>
  )
}