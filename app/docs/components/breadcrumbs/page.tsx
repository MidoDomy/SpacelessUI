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

export default function BadgePage() {
  return (
    <>
      {/* Page main content */}
      <div className="col-span-9 space-y-10">
        {/* Page intro info */}
        <div>
          <Breadcrumbs className="mb-5">
            <BreadcrumbsItem>Docs</BreadcrumbsItem>
            <BreadcrumbsDivider />
            <BreadcrumbsItem>Breadcrumbs</BreadcrumbsItem>
          </Breadcrumbs>

          <TypographyH1 className="mb-1">Breadcrumbs</TypographyH1>
          <TypographyP>
            Indicate the current page’s location within a navigational
            hierarchy.
          </TypographyP>
        </div>

        {/* Default section */}
        <section id="default">
          <ComponentPreview
            title="Default"
            preview={
              <Breadcrumbs>
                <BreadcrumbsItem>Item one</BreadcrumbsItem>
                <BreadcrumbsDivider />
                <BreadcrumbsItem>Item two</BreadcrumbsItem>
                <BreadcrumbsDivider />
                <BreadcrumbsItem>Active item</BreadcrumbsItem>
              </Breadcrumbs>
            }
            code={`import { Badge } from '@/components/ui/badge'

export default function BadgeDefault() {
  return (
    <Breadcrumbs>
      <BreadcrumbsItem>Item one</BreadcrumbsItem>
      <BreadcrumbsDivider />
      <BreadcrumbsItem>Item two</BreadcrumbsItem>
      <BreadcrumbsDivider />
      <BreadcrumbsItem>Active item</BreadcrumbsItem>
    </Breadcrumbs>
  )
}`}
          />
        </section>

        {/* Usage section */}
        <section id="usage" className="space-y-5">
          <TypographyH2 className="pb-2 border-b">Usage</TypographyH2>

          <Code>{`import { Breadcrumbs, BreadcrumbsDivider, BreadcrumbsItem } from '@/components/ui/breadcrumbs'`}</Code>
          <Code>
            {`<Breadcrumbs>
  <BreadcrumbsItem>Item one</BreadcrumbsItem>
  <BreadcrumbsDivider />
  <BreadcrumbsItem>Item two</BreadcrumbsItem>
  <BreadcrumbsDivider />
  <BreadcrumbsItem>Active item</BreadcrumbsItem>
</Breadcrumbs>`}
          </Code>
        </section>

        {/* Props section */}
        <section id="props" className="space-y-5">
          <TypographyH2 className="pb-2 border-b">Props</TypographyH2>

          {/* Breadcrumb item props */}
          <div>
            <TypographyH6 className="mb-2">Breadcrumbs item</TypographyH6>
            <Table>
              <TableCaption>
                Besides these props, you can also use the default{' '}
                <code>span</code> props.
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
                  <TableCell>asChild</TableCell>
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
              <Breadcrumbs>
                <BreadcrumbsItem>Item one</BreadcrumbsItem>
                <BreadcrumbsDivider />
                <BreadcrumbsItem>Item two</BreadcrumbsItem>
                <BreadcrumbsDivider />
                <BreadcrumbsItem>Active item</BreadcrumbsItem>
              </Breadcrumbs>
            }
            code={`<Breadcrumbs>
  <BreadcrumbsItem>Item one</BreadcrumbsItem>
  <BreadcrumbsDivider />
  <BreadcrumbsItem>Item two</BreadcrumbsItem>
  <BreadcrumbsDivider />
  <BreadcrumbsItem>Active item</BreadcrumbsItem>
</Breadcrumbs>`}
          />

          {/* Custom divider section */}
          <ComponentPreview
            id="custom-divider"
            title="Custom divider"
            preview={
              <Breadcrumbs>
                <BreadcrumbsItem>Item one</BreadcrumbsItem>
                <BreadcrumbsDivider>/</BreadcrumbsDivider>
                <BreadcrumbsItem>Item two</BreadcrumbsItem>
                <BreadcrumbsDivider>/</BreadcrumbsDivider>
                <BreadcrumbsItem>Active item</BreadcrumbsItem>
              </Breadcrumbs>
            }
            code={`<Breadcrumbs>
  <BreadcrumbsItem>Item one</BreadcrumbsItem>
  <BreadcrumbsDivider>/</BreadcrumbsDivider>
  <BreadcrumbsItem>Item two</BreadcrumbsItem>
  <BreadcrumbsDivider>/</BreadcrumbsDivider>
  <BreadcrumbsItem>Active item</BreadcrumbsItem>
</Breadcrumbs>`}
          />

          {/* As child section */}
          <ComponentPreview
            id="as-child"
            title="As child"
            preview={
              <Breadcrumbs>
                <BreadcrumbsItem>Item one</BreadcrumbsItem>
                <BreadcrumbsDivider>/</BreadcrumbsDivider>
                <BreadcrumbsItem asChild>
                  <a href="#">Item two</a>
                </BreadcrumbsItem>
                <BreadcrumbsDivider>/</BreadcrumbsDivider>
                <BreadcrumbsItem>Active item</BreadcrumbsItem>
              </Breadcrumbs>
            }
            code={`<Breadcrumbs>
  <BreadcrumbsItem>Item one</BreadcrumbsItem>
  <BreadcrumbsDivider>/</BreadcrumbsDivider>
  <BreadcrumbsItem asChild>
    <a href="#">Item two</a>
  </BreadcrumbsItem>
  <BreadcrumbsDivider>/</BreadcrumbsDivider>
  <BreadcrumbsItem>Active item</BreadcrumbsItem>
</Breadcrumbs>`}
          />
        </section>

        {/* Manualy */}
        <section id="manually" className="space-y-4">
          <TypographyH2 className="pb-2 border-b">Add manually</TypographyH2>
          <TypographyP>
            You can use this component in your other projects. Just copy paste!
          </TypographyP>

          <Code>{`npm install @radix-ui/react-slot`}</Code>

          <Code>
            {`import * as React from 'react'
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
          'inline-flex font-medium text-sm leading-none last:text-muted last:font-normal [a&]:text-inherit [a&]:hover:underline',
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

export { Breadcrumbs, BreadcrumbsItem, BreadcrumbsDivider }`}
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
              <AsideNavigationLink href="#custom-divider">
                Custom divider
              </AsideNavigationLink>
              <AsideNavigationLink href="#as-child">
                As child
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
