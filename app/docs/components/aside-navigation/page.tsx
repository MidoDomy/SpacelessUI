import React from 'react'

import {
  AsideNavigation,
  AsideNavigationGroup,
  AsideNavigationSubGroup,
  AsideNavigationGroupTitle,
  AsideNavigationLink,
} from '@/components/ui/aside-navigation'
import {
  TypographyH1,
  TypographyH2,
  TypographyH6,
  TypographyP,
} from '@/components/ui/typography'
import { Code } from '@/components/ui/code'
import {
  Breadcrumbs,
  BreadcrumbsDivider,
  BreadcrumbsItem,
} from '@/components/ui/breadcrumbs'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import ComponentPreview from '@/components/partials/component-preview'

export default function AsideNavigationPage() {
  return (
    <>
      {/* Page main content */}
      <div className="col-span-9 space-y-10">
        {/* Page intro info */}
        <div>
          <Breadcrumbs className="mb-5">
            <BreadcrumbsItem>Docs</BreadcrumbsItem>
            <BreadcrumbsDivider />
            <BreadcrumbsItem>Aside navigation</BreadcrumbsItem>
          </Breadcrumbs>

          <TypographyH1 className="mb-1">Aside navigation</TypographyH1>
          <TypographyP>
            A collection of links for navigating websites.
          </TypographyP>
        </div>

        {/* Default section */}
        <section id="default">
          <ComponentPreview
            title="Default"
            preview={
              <AsideNavigation>
                <AsideNavigationGroup>
                  <AsideNavigationGroupTitle>
                    Group title
                  </AsideNavigationGroupTitle>

                  <AsideNavigationLink href="#">Link one</AsideNavigationLink>
                  <AsideNavigationLink href="#" active>
                    Link two
                  </AsideNavigationLink>

                  <AsideNavigationSubGroup>
                    <AsideNavigationLink href="#">
                      SubGroup link one
                    </AsideNavigationLink>
                    <AsideNavigationLink href="#">
                      SubGroup link two
                    </AsideNavigationLink>
                  </AsideNavigationSubGroup>

                  <AsideNavigationLink href="#">Link three</AsideNavigationLink>
                </AsideNavigationGroup>
              </AsideNavigation>
            }
            code={`import { AsideNavigation, AsideNavigationGroup, AsideNavigationSubGroup, AsideNavigationGroupTitle, AsideNavigationLink } from '@/components/ui/aside-navigation'

export default function AsideNavigationDefault() {
  return (
    <AsideNavigation>
      <AsideNavigationGroup>
        <AsideNavigationGroupTitle>Group title</AsideNavigationGroupTitle>

        <AsideNavigationLink href='#'>Link one</AsideNavigationLink>
        <AsideNavigationLink href='#' active>Link two</AsideNavigationLink>

        <AsideNavigationSubGroup>
          <AsideNavigationLink href='#'>SubGroup link one</AsideNavigationLink>
          <AsideNavigationLink href='#'>SubGroup link two</AsideNavigationLink>
        </AsideNavigationSubGroup>

        <AsideNavigationLink href='#'>Link three</AsideNavigationLink>
      </AsideNavigationGroup>
    </AsideNavigation>
  )
}`}
          />
        </section>

        {/* Usage section */}
        <section id="usage" className="space-y-5">
          <TypographyH2 className="pb-2 border-b">Usage</TypographyH2>

          <Code>
            {`import { AsideNavigation, AsideNavigationGroup, AsideNavigationSubGroup, AsideNavigationGroupTitle, AsideNavigationLink } from '@/components/ui/aside-navigation'`}
          </Code>
          <Code>
            {`<AsideNavigation>
  <AsideNavigationGroup>
    <AsideNavigationGroupTitle>Group title</AsideNavigationGroupTitle>

    <AsideNavigationLink href='#'>Link one</AsideNavigationLink>
    <AsideNavigationLink href='#' active>Link two</AsideNavigationLink>

    <AsideNavigationSubGroup>
      <AsideNavigationLink href='#'>SubGroup link one</AsideNavigationLink>
      <AsideNavigationLink href='#'>SubGroup link two</AsideNavigationLink>
    </AsideNavigationSubGroup>

    <AsideNavigationLink href='#'>Link three</AsideNavigationLink>
  </AsideNavigationGroup>
</AsideNavigation>`}
          </Code>
        </section>

        {/* Props section */}
        <section id="props" className="space-y-5">
          <TypographyH2 className="pb-2 border-b">Props</TypographyH2>

          {/* Link props */}
          <div>
            <TypographyH6 className="mb-2">Aside navigation link</TypographyH6>
            <Table>
              <TableCaption>
                Besides these props, you can also use other <code>a</code>{' '}
                props.
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Default</TableHead>
                  <TableHead>Type</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>active</TableCell>
                  <TableCell></TableCell>
                  <TableCell>false</TableCell>
                  <TableCell>boolean</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Examples */}
        <section id="examples" className="space-y-6">
          <TypographyH2 className="pb-2 border-b">Examples</TypographyH2>

          {/* Standard section */}
          <ComponentPreview
            id="standard"
            title="Standard"
            preview={
              <AsideNavigation>
                <AsideNavigationLink href="#">Link one</AsideNavigationLink>
                <AsideNavigationLink href="#">Link two</AsideNavigationLink>
                <AsideNavigationLink href="#">Link three</AsideNavigationLink>
              </AsideNavigation>
            }
            code={`<AsideNavigation>
  <AsideNavigationLink href='#'>Link one</AsideNavigationLink>
  <AsideNavigationLink href='#'>Link two</AsideNavigationLink>
  <AsideNavigationLink href='#'>Link three</AsideNavigationLink>
</AsideNavigation>`}
          />

          {/* Groups section */}
          <ComponentPreview
            id="groups"
            title="Groups"
            preview={
              <AsideNavigation>
                <AsideNavigationGroup>
                  <AsideNavigationGroupTitle>
                    Group one
                  </AsideNavigationGroupTitle>

                  <AsideNavigationLink href="#">Link one</AsideNavigationLink>
                  <AsideNavigationLink href="#">Link two</AsideNavigationLink>
                  <AsideNavigationLink href="#">Link three</AsideNavigationLink>
                </AsideNavigationGroup>

                <AsideNavigationGroup>
                  <AsideNavigationGroupTitle>
                    Group two
                  </AsideNavigationGroupTitle>

                  <AsideNavigationLink href="#">Link one</AsideNavigationLink>
                  <AsideNavigationLink href="#">Link two</AsideNavigationLink>
                  <AsideNavigationLink href="#">Link three</AsideNavigationLink>
                </AsideNavigationGroup>
              </AsideNavigation>
            }
            code={`<AsideNavigation>
  <AsideNavigationGroup>
    <AsideNavigationGroupTitle>Group one title</AsideNavigationGroupTitle>

    <AsideNavigationLink href='#'>Link one</AsideNavigationLink>
    <AsideNavigationLink href='#'>Link two</AsideNavigationLink>
    <AsideNavigationLink href='#'>Link three</AsideNavigationLink>
  </AsideNavigationGroup>

  <AsideNavigationGroup>
    <AsideNavigationGroupTitle>Group two title</AsideNavigationGroupTitle>

    <AsideNavigationLink href='#'>Link one</AsideNavigationLink>
    <AsideNavigationLink href='#'>Link two</AsideNavigationLink>
    <AsideNavigationLink href='#'>Link three</AsideNavigationLink>
  </AsideNavigationGroup>
</AsideNavigation>`}
          />

          {/* SubGroup section */}
          <ComponentPreview
            id="subgroup"
            title="SubGroup"
            preview={
              <AsideNavigation>
                <AsideNavigationGroup>
                  <AsideNavigationGroupTitle>
                    Group title
                  </AsideNavigationGroupTitle>

                  <AsideNavigationLink href="#">Link one</AsideNavigationLink>
                  <AsideNavigationLink href="#">Link two</AsideNavigationLink>

                  <AsideNavigationSubGroup>
                    <AsideNavigationLink href="#">
                      SubGroup link one
                    </AsideNavigationLink>
                    <AsideNavigationLink href="#">
                      SubGroup link two
                    </AsideNavigationLink>
                  </AsideNavigationSubGroup>

                  <AsideNavigationLink href="#">Link three</AsideNavigationLink>
                </AsideNavigationGroup>
              </AsideNavigation>
            }
            code={`<AsideNavigation>
  <AsideNavigationGroup>
    <AsideNavigationGroupTitle>Group title</AsideNavigationGroupTitle>

    <AsideNavigationLink href='#'>Link one</AsideNavigationLink>
    <AsideNavigationLink href='#'>Link two</AsideNavigationLink>

    <AsideNavigationSubGroup>
      <AsideNavigationLink href='#'>SubGroup link one</AsideNavigationLink>
      <AsideNavigationLink href='#'>SubGroup link two</AsideNavigationLink>
    </AsideNavigationSubGroup>

    <AsideNavigationLink href='#'>Link three</AsideNavigationLink>
  </AsideNavigationGroup>
</AsideNavigation>`}
          />

          {/* Active link section */}
          <ComponentPreview
            id="active-link"
            title="Active link"
            preview={
              <AsideNavigation>
                <AsideNavigationLink href="#">Link one</AsideNavigationLink>
                <AsideNavigationLink href="#" active>
                  Link two
                </AsideNavigationLink>
                <AsideNavigationLink href="#">Link three</AsideNavigationLink>
              </AsideNavigation>
            }
            code={`<AsideNavigation>
  <AsideNavigationLink href='#'>Link one</AsideNavigationLink>
  <AsideNavigationLink href='#' active>Link two</AsideNavigationLink>
  <AsideNavigationLink href='#'>Link three</AsideNavigationLink>
</AsideNavigation>`}
          />
        </section>

        {/* Manualy */}
        <section id="manually" className="space-y-4">
          <TypographyH2 className="pb-2 border-b">Add manually</TypographyH2>
          <TypographyP>
            You can use this component in your other projects. Just copy paste!
          </TypographyP>

          <Code>
            {`import * as React from 'react'

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
}`}
          </Code>
        </section>
      </div>

      {/* Page content aside links */}
      <div className="col-span-3">
        <AsideNavigation className="sticky top-4">
          <AsideNavigationGroup>
            <AsideNavigationGroupTitle>Page content</AsideNavigationGroupTitle>

            <AsideNavigationLink href="#default">Default</AsideNavigationLink>
            <AsideNavigationLink href="#usage">Usage</AsideNavigationLink>
            <AsideNavigationLink href="#props">Props</AsideNavigationLink>
            <AsideNavigationLink href="#examples">Examples</AsideNavigationLink>
            <AsideNavigationSubGroup>
              <AsideNavigationLink href="#standard">
                Standard
              </AsideNavigationLink>
              <AsideNavigationLink href="#groups">Groups</AsideNavigationLink>
              <AsideNavigationLink href="#subgroup">
                SubGroup
              </AsideNavigationLink>
              <AsideNavigationLink href="#active-link">
                Active link
              </AsideNavigationLink>
            </AsideNavigationSubGroup>
            <AsideNavigationLink href="#manually">
              Add manually
            </AsideNavigationLink>
          </AsideNavigationGroup>
        </AsideNavigation>
      </div>
    </>
  )
}
