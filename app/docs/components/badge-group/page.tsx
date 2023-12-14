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
import { Badge } from '@/components/ui/badge'
import { BadgeGroup } from '@/components/ui/badge-group'
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

export default function BadgeGroupPage() {
  return (
    <>
      {/* Page main content */}
      <div className="col-span-9 space-y-10">
        {/* Page intro info */}
        <div>
          <Breadcrumbs className="mb-5">
            <BreadcrumbsItem>Docs</BreadcrumbsItem>
            <BreadcrumbsDivider />
            <BreadcrumbsItem>Badge group</BreadcrumbsItem>
          </Breadcrumbs>

          <TypographyH1 className="mb-1">Badge group</TypographyH1>
        </div>

        {/* Default section */}
        <section id="default">
          <ComponentPreview
            title="Default"
            preview={
              <BadgeGroup>
                <Badge>Badge</Badge> Badge group text here
              </BadgeGroup>
            }
            code={`import { BadgeGroup } from '@/components/ui/badge-group'
import { Badge } from '@/components/ui/badge'

export default function BadgeGroupDefault() {
  return (
    <BadgeGroup>
      <Badge>Badge</Badge> Badge group text here
    </BadgeGroup>
  )
}`}
          />
        </section>

        {/* Usage section */}
        <section id="usage" className="space-y-5">
          <TypographyH2 className="pb-2 border-b">Usage</TypographyH2>

          <Code>
            {`import { BadgeGroup } from '@/components/ui/badge-group'
import { Badge } from '@/components/ui/badge'`}
          </Code>
          <Code>
            {`<BadgeGroup>
  <Badge>Badge</Badge> Badge group text here
</BadgeGroup>`}
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
                <TableCell>color</TableCell>
                <TableCell></TableCell>
                <TableCell>'primary'</TableCell>
                <TableCell>
                  'primary' | 'secondary' | 'info' | 'success' | 'warning' |
                  'danger'
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>rounded</TableCell>
                <TableCell></TableCell>
                <TableCell>false</TableCell>
                <TableCell>boolean</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        {/* Examples */}
        <section id="examples" className="space-y-6">
          <TypographyH2 className="pb-2 border-b">Examples</TypographyH2>

          {/* Colors section */}
          <ComponentPreview
            id="colors"
            title="Colors"
            preview={
              <div className="flex flex-col gap-2.5">
                <BadgeGroup color="primary">
                  <Badge color="primary">Primary</Badge> Badge group text here
                </BadgeGroup>
                <BadgeGroup color="secondary">
                  <Badge color="secondary">Secondary</Badge> Badge group text
                  here
                </BadgeGroup>
                <BadgeGroup color="info">
                  <Badge color="info">Info</Badge> Badge group text here
                </BadgeGroup>
                <BadgeGroup color="success">
                  <Badge color="success">Success</Badge> Badge group text here
                </BadgeGroup>
                <BadgeGroup color="warning">
                  <Badge color="warning">Warning</Badge> Badge group text here
                </BadgeGroup>
                <BadgeGroup color="danger">
                  <Badge color="danger">Danger</Badge> Badge group text here
                </BadgeGroup>
              </div>
            }
            code={`<BadgeGroup color="primary">
  <Badge color="primary">Primary</Badge> Badge group text here
</BadgeGroup>

<BadgeGroup color="secondary">
  <Badge color="secondary">Secondary</Badge> Badge group text
  here
</BadgeGroup>

<BadgeGroup color="info">
  <Badge color="info">Info</Badge> Badge group text here
</BadgeGroup>

<BadgeGroup color="success">
  <Badge color="success">Success</Badge> Badge group text here
</BadgeGroup>

<BadgeGroup color="warning">
  <Badge color="warning">Warning</Badge> Badge group text here
</BadgeGroup>

<BadgeGroup color="danger">
  <Badge color="danger">Danger</Badge> Badge group text here
</BadgeGroup>`}
          />

          {/* Rounded section */}
          <ComponentPreview
            id="rounded"
            title="Rounded"
            preview={
              <div className="flex flex-col gap-2.5">
                <BadgeGroup color="primary" rounded>
                  <Badge color="primary" rounded>
                    Primary
                  </Badge>
                  Badge group text here
                </BadgeGroup>
                <BadgeGroup color="secondary" rounded>
                  <Badge color="secondary" rounded>
                    Secondary
                  </Badge>
                  Badge group text here
                </BadgeGroup>
                <BadgeGroup color="info" rounded>
                  <Badge color="info" rounded>
                    Info
                  </Badge>
                  Badge group text here
                </BadgeGroup>
                <BadgeGroup color="success" rounded>
                  <Badge color="success" rounded>
                    Success
                  </Badge>
                  Badge group text here
                </BadgeGroup>
                <BadgeGroup color="warning" rounded>
                  <Badge color="warning" rounded>
                    Warning
                  </Badge>
                  Badge group text here
                </BadgeGroup>
                <BadgeGroup color="danger" rounded>
                  <Badge color="danger" rounded>
                    Danger
                  </Badge>
                  Badge group text here
                </BadgeGroup>
              </div>
            }
            code={` <BadgeGroup color="primary" rounded>
  <Badge color="primary" rounded>
    Primary
  </Badge>
  Badge group text here
</BadgeGroup>

<BadgeGroup color="secondary" rounded>
  <Badge color="secondary" rounded>
    Secondary
  </Badge>
  Badge group text here
</BadgeGroup>

<BadgeGroup color="info" rounded>
  <Badge color="info" rounded>
    Info
  </Badge>
  Badge group text here
</BadgeGroup>

<BadgeGroup color="success" rounded>
  <Badge color="success" rounded>
    Success
  </Badge>
  Badge group text here
</BadgeGroup>

<BadgeGroup color="warning" rounded>
  <Badge color="warning" rounded>
    Warning
  </Badge>
  Badge group text here
</BadgeGroup>

<BadgeGroup color="danger" rounded>
  <Badge color="danger" rounded>
    Danger
  </Badge>
  Badge group text here
</BadgeGroup>`}
          />

          {/* Status section */}
          <ComponentPreview
            id="status"
            title="Status"
            preview={
              <div className="flex flex-col gap-2.5">
                <BadgeGroup color="primary">
                  <Badge color="primary" status></Badge> Badge group text here
                </BadgeGroup>
                <BadgeGroup color="secondary">
                  <Badge color="secondary" status></Badge> Badge group text here
                </BadgeGroup>
                <BadgeGroup color="info">
                  <Badge color="info" status></Badge> Badge group text here
                </BadgeGroup>
                <BadgeGroup color="success">
                  <Badge color="success" status></Badge> Badge group text here
                </BadgeGroup>
                <BadgeGroup color="warning">
                  <Badge color="warning" status></Badge> Badge group text here
                </BadgeGroup>
                <BadgeGroup color="danger">
                  <Badge color="danger" status></Badge> Badge group text here
                </BadgeGroup>
              </div>
            }
            code={`<BadgeGroup color="primary">
  <Badge color="primary" status></Badge> Badge group text here
</BadgeGroup>

<BadgeGroup color="secondary">
  <Badge color="secondary" status></Badge> Badge group text here
</BadgeGroup>

<BadgeGroup color="info">
  <Badge color="info" status></Badge> Badge group text here
</BadgeGroup>

<BadgeGroup color="success">
  <Badge color="success" status></Badge> Badge group text here
</BadgeGroup>

<BadgeGroup color="warning">
  <Badge color="warning" status></Badge> Badge group text here
</BadgeGroup>

<BadgeGroup color="danger">
  <Badge color="danger" status></Badge> Badge group text here
</BadgeGroup>`}
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

const badgeGroupVariants = cva(
  'flex items-center gap-1.5 p-1 border rounded bg-auto-100 border-auto-200 text-auto-700 text-sm',
  {
    variants: {
      color: {
        primary: 'color-primary',
        secondary: 'color-secondary',
        info: 'color-info',
        success: 'color-success',
        warning: 'color-warning',
        danger: 'color-danger',
      },
      rounded: { true: 'rounded-full' },
    },
    defaultVariants: {
      color: 'primary',
    },
  },
)

interface BadgeGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeGroupVariants> {
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger'
}

const BadgeGroup: React.FC<BadgeGroupProps> = ({
  className,
  color,
  rounded,
  ...props
}) => (
  <div
    className={cn(badgeGroupVariants({ color, rounded }), className)}
    {...props}
  />
)

export { BadgeGroup }`}
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
              <AsideNavigationLink href="#colors">Colors</AsideNavigationLink>
              <AsideNavigationLink href="#rounded">Rounded</AsideNavigationLink>
              <AsideNavigationLink href="#status">Status</AsideNavigationLink>
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
