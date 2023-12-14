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
  TypographyP,
} from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
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

export default function ButtonGroupPage() {
  return (
    <>
      {/* Page main content */}
      <div className="col-span-9 space-y-10">
        {/* Page intro info */}
        <div>
          <Breadcrumbs className="mb-5">
            <BreadcrumbsItem>Docs</BreadcrumbsItem>
            <BreadcrumbsDivider />
            <BreadcrumbsItem>Button group</BreadcrumbsItem>
          </Breadcrumbs>

          <TypographyH1 className="mb-1">Button group</TypographyH1>
          <TypographyP>
            Group a series of buttons together on a single line or stack them in
            a vertical column.
          </TypographyP>
        </div>

        {/* Default section */}
        <section id="default">
          <ComponentPreview
            title="Default"
            preview={
              <ButtonGroup>
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
              </ButtonGroup>
            }
            code={`import { ButtonGroup } from '@/components/ui/button-group'
import { Button } from '@/components/ui/button'

export default function ButtonGroupDefault() {
  return (
    <ButtonGroup>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </ButtonGroup>
  )
}`}
          />
        </section>

        {/* Usage section */}
        <section id="usage" className="space-y-5">
          <TypographyH2 className="pb-2 border-b">Usage</TypographyH2>

          <Code>
            {`import { ButtonGroup } from '@/components/ui/button-group'
import { Button } from '@/components/ui/button'`}
          </Code>
          <Code>
            {`<ButtonGroup>
  <Button>Button</Button>
  <Button>Button</Button>
  <Button>Button</Button>
</ButtonGroup>`}
          </Code>
        </section>

        {/* Props section */}
        <section id="props" className="space-y-5">
          <TypographyH2 className="pb-2 border-b">Props</TypographyH2>

          <Table>
            <TableCaption>
              Besides these props, you can also use the default <code>div</code>{' '}
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
                <TableCell>direction</TableCell>
                <TableCell></TableCell>
                <TableCell>'horizontal'</TableCell>
                <TableCell>'horizontal' | 'vertical'</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        {/* Examples */}
        <section id="examples" className="space-y-6">
          <TypographyH2 className="pb-2 border-b">Examples</TypographyH2>

          {/* Horizontal section */}
          <ComponentPreview
            id="horizontal"
            title="Horizontal"
            preview={
              <ButtonGroup direction="horizontal">
                <Button variant="outline">Primary</Button>
                <Button variant="outline">Primary</Button>
                <Button variant="outline">Primary</Button>
              </ButtonGroup>
            }
            code={`<ButtonGroup direction='horizontal'>
  <Button variant='outline'>Primary</Button>
  <Button variant='outline'>Primary</Button>
  <Button variant='outline'>Primary</Button>
</ButtonGroup>`}
          />

          {/* Vertical section */}
          <ComponentPreview
            id="vertical"
            title="Vertical"
            preview={
              <ButtonGroup direction="vertical">
                <Button variant="outline">Primary</Button>
                <Button variant="outline">Primary</Button>
                <Button variant="outline">Primary</Button>
              </ButtonGroup>
            }
            code={`<ButtonGroup direction='vertical'>
  <Button variant='outline'>Primary</Button>
  <Button variant='outline'>Primary</Button>
  <Button variant='outline'>Primary</Button>
</ButtonGroup>`}
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
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonGroupVariants = cva('flex', {
  variants: {
    direction: {
      horizontal:
        'flex-row [&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none [&>*:not(:last-child)]:border-r-0',
      vertical:
        'flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:rounded-b-none [&>*:not(:last-child)]:border-b-0',
    },
  },
  defaultVariants: {
    direction: 'horizontal',
  },
})

interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupVariants> {}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  className,
  direction,
  ...props
}) => (
  <div
    className={cn(buttonGroupVariants({ direction }), className)}
    {...props}
  />
)

export { ButtonGroup }`}
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
              <AsideNavigationLink href="#horizontal">
                Horizontal
              </AsideNavigationLink>
              <AsideNavigationLink href="#vertical">
                Vertical
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
