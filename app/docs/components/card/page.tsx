import React from 'react'

import {
  AsideNavigation,
  AsideNavigationGroup,
  AsideNavigationGroupTitle,
  AsideNavigationLink,
} from '@/components/ui/aside-navigation'
import {
  TypographyH1,
  TypographyH2,
  TypographyH6,
  TypographyP,
} from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import { Code } from '@/components/ui/code'
import {
  Breadcrumbs,
  BreadcrumbsDivider,
  BreadcrumbsItem,
} from '@/components/ui/breadcrumbs'
import { Table, TableCaption } from '@/components/ui/table'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import ComponentPreview from '@/components/partials/component-preview'

export default function CardPage() {
  return (
    <>
      {/* Page main content */}
      <div className="col-span-9 space-y-10">
        {/* Page intro info */}
        <div>
          <Breadcrumbs className="mb-5">
            <BreadcrumbsItem>Docs</BreadcrumbsItem>
            <BreadcrumbsDivider />
            <BreadcrumbsItem>Card</BreadcrumbsItem>
          </Breadcrumbs>

          <TypographyH1 className="mb-1">Card</TypographyH1>
          <TypographyP>
            A card is a flexible and extensible content container.
          </TypographyP>
        </div>

        {/* Default section */}
        <section id="default">
          <ComponentPreview
            title="Default"
            preview={
              <Card className="w-96">
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Pariatur labore dicta nihil quidem exercitationem. Nihil
                    esse distinctio nobis! Reiciendis, sit!
                  </p>
                </CardContent>

                <CardFooter>
                  <Button variant="outline" color="secondary">
                    Close
                  </Button>
                  <Button>Save</Button>
                </CardFooter>
              </Card>
            }
            code={`import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function CardDefault() {
  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Pariatur labore dicta nihil quidem exercitationem. Nihil
          esse distinctio nobis! Reiciendis, sit!
        </p>
      </CardContent>

      <CardFooter>
        <Button variant="outline" color="secondary">
          Close
        </Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  )
}`}
          />
        </section>

        {/* Usage section */}
        <section id="usage" className="space-y-5">
          <TypographyH2 className="pb-2 border-b">Usage</TypographyH2>

          <Code>
            {`import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'`}
          </Code>
          <Code>
            {`<Card className="w-96">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>

  <CardContent>
    <p className="text-sm">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Pariatur labore dicta nihil quidem exercitationem. Nihil
      esse distinctio nobis! Reiciendis, sit!
    </p>
  </CardContent>

  <CardFooter>
    <Button variant="outline" color="secondary">
      Close
    </Button>
    <Button>Save</Button>
  </CardFooter>
</Card>`}
          </Code>
        </section>

        {/* Props section */}
        <section id="props" className="space-y-5">
          <TypographyH2 className="pb-2 border-b">Props</TypographyH2>

          <div>
            <TypographyH6 className="pb-2 border-b">
              Card, Card header, Card content, Card footer
            </TypographyH6>
            <Table>
              <TableCaption>
                You can use the default <code>div</code> props.
              </TableCaption>
            </Table>
          </div>

          <div>
            <TypographyH6 className="pb-2 border-b">Card title</TypographyH6>
            <Table>
              <TableCaption>
                You can use the default <code>heading</code> props.
              </TableCaption>
            </Table>
          </div>

          <div>
            <TypographyH6 className="pb-2 border-b">
              Card description
            </TypographyH6>
            <Table>
              <TableCaption>
                You can use the default <code>paragraph</code> props.
              </TableCaption>
            </Table>
          </div>
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

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('rounded-lg border bg-body-bg body-bg-color', className)}
    {...props}
  />
))
Card.displayName = 'Card'

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('space-y-0.5 px-4 py-3 border-b', className)}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn('text-xl font-semibold', className)} {...props} />
))
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-sm text-muted', className)} {...props} />
))
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-4', className)} {...props} />
))
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex items-center justify-end space-x-2 px-4 py-3 border-t',
      className,
    )}
    {...props}
  />
))
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }`}
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
            <AsideNavigationLink href="#manually">
              Add manually
            </AsideNavigationLink>
          </AsideNavigationGroup>
        </AsideNavigation>
      </div>
    </>
  )
}
