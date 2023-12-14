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
import { Badge } from '@/components/ui/badge'
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
            <BreadcrumbsItem>Badge</BreadcrumbsItem>
          </Breadcrumbs>

          <TypographyH1 className="mb-1">Badge</TypographyH1>
          <TypographyP>
            Badges help highlight important information, such as notifications
            or new and unread messages.
          </TypographyP>
        </div>

        {/* Default section */}
        <section id="default">
          <ComponentPreview
            title="Default"
            preview={<Badge>Default badge</Badge>}
            code={`import { Badge } from '@/components/ui/badge'

export default function BadgeDefault() {
  return <Badge>Badge</Badge>
}`}
          />
        </section>

        {/* Usage section */}
        <section id="usage" className="space-y-5">
          <TypographyH2 className="pb-2 border-b">Usage</TypographyH2>

          <Code>{`import { Badge } from '@/components/ui/badge'`}</Code>
          <Code>{`<Badge>Content</Badge>`}</Code>
        </section>

        {/* Props section */}
        <section id="props" className="space-y-5">
          <TypographyH2 className="pb-2 border-b">Props</TypographyH2>

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
                <TableCell>color</TableCell>
                <TableCell></TableCell>
                <TableCell>'primary'</TableCell>
                <TableCell>
                  'primary' | 'secondary' | 'info' | 'success' | 'warning' |
                  'danger'
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>absolute</TableCell>
                <TableCell>
                  Sets the position of the badge to absolute, the element on the
                  basis of which the position will be determined must be
                  relative.
                </TableCell>
                <TableCell>false</TableCell>
                <TableCell>boolean</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>top</TableCell>
                <TableCell>Only available if prop absolute is used.</TableCell>
                <TableCell>false</TableCell>
                <TableCell>boolean</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>right</TableCell>
                <TableCell>Only available if prop absolute is used.</TableCell>
                <TableCell>false</TableCell>
                <TableCell>boolean</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>bottom</TableCell>
                <TableCell>Only available if prop absolute is used.</TableCell>
                <TableCell>false</TableCell>
                <TableCell>boolean</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>left</TableCell>
                <TableCell>Only available if prop absolute is used.</TableCell>
                <TableCell>false</TableCell>
                <TableCell>boolean</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>rounded</TableCell>
                <TableCell></TableCell>
                <TableCell>false</TableCell>
                <TableCell>boolean</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>bordered</TableCell>
                <TableCell></TableCell>
                <TableCell>false</TableCell>
                <TableCell>boolean</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>status</TableCell>
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
              <div className="flex gap-2.5">
                <Badge color="primary">Primary</Badge>
                <Badge color="secondary">Secondary</Badge>
                <Badge color="info">Info</Badge>
                <Badge color="success">Success</Badge>
                <Badge color="warning">Warning</Badge>
                <Badge color="danger">Danger</Badge>
              </div>
            }
            code={`<Badge color='primary'>Primary</Badge>
<Badge color='secondary'>Secondary</Badge>
<Badge color='info'>Info</Badge>
<Badge color='success'>Success</Badge>
<Badge color='warning'>Warning</Badge>
<Badge color='danger'>Danger</Badge>`}
          />

          {/* Rounded section */}
          <ComponentPreview
            id="rounded"
            title="Rounded"
            preview={
              <div className="flex gap-2.5">
                <Badge color="primary" rounded>
                  Primary
                </Badge>
                <Badge color="secondary" rounded>
                  Secondary
                </Badge>
                <Badge color="info" rounded>
                  Info
                </Badge>
                <Badge color="success" rounded>
                  Success
                </Badge>
                <Badge color="warning" rounded>
                  Warning
                </Badge>
                <Badge color="danger" rounded>
                  Danger
                </Badge>
              </div>
            }
            code={`<Badge color="primary" rounded>Primary</Badge>
<Badge color="secondary" rounded>Secondary</Badge>
<Badge color="info" rounded>Info</Badge>
<Badge color="success" rounded>Success</Badge>
<Badge color="warning" rounded>Warning</Badge>
<Badge color="danger" rounded>Danger</Badge>`}
          />

          {/* Position section */}
          <ComponentPreview
            id="position"
            title="Position"
            preview={
              <div className="flex gap-7">
                <Button
                  className="relative"
                  icon="home"
                  onlyIcon
                  aria-label="Example position top-left"
                >
                  <Badge color="danger" rounded absolute top left>
                    1
                  </Badge>
                </Button>

                <Button
                  className="relative"
                  icon="home"
                  onlyIcon
                  aria-label="Example position top-right"
                >
                  <Badge color="danger" rounded absolute top right>
                    1
                  </Badge>
                </Button>

                <Button
                  className="relative"
                  icon="home"
                  onlyIcon
                  aria-label="Example position bottom-left"
                >
                  <Badge color="danger" rounded absolute bottom left>
                    1
                  </Badge>
                </Button>

                <Button
                  className="relative"
                  icon="home"
                  onlyIcon
                  aria-label="Example position bottom-right"
                >
                  <Badge color="danger" rounded absolute bottom right>
                    1
                  </Badge>
                </Button>
              </div>
            }
            code={`<Button className='relative'
  icon='home' 
  onlyIcon
  aria-label='Example position top-left'
>
  <Badge color='danger' rounded absolute top left>1</Badge>
</Button>

<Button className='relative'
  icon='home' 
  onlyIcon
  aria-label='Example position top-right'
>
  <Badge color='danger' rounded absolute top right>1</Badge>
</Button>

<Button className='relative'
  icon='home' 
  onlyIcon
  aria-label='Example position bottom-left'
>
  <Badge color='danger' rounded absolute bottom left>1</Badge>
</Button>

<Button className='relative'
  icon='home' 
  onlyIcon
  aria-label='Example position bottom-right'
>
  <Badge color='danger' rounded absolute bottom right>1</Badge>
</Button>`}
          />

          {/* Bordered section */}
          <ComponentPreview
            id="bordered"
            title="Bordered"
            preview={
              <div className="flex gap-2.5">
                <Button
                  className="relative"
                  icon="home"
                  onlyIcon
                  aria-label="Example position top-left"
                >
                  <Badge color="danger" rounded bordered absolute top right>
                    1
                  </Badge>
                </Button>
              </div>
            }
            code={`<Button className='relative'
  icon='home' 
  onlyIcon
  aria-label='Example position top-left'
>
  <Badge color='danger' rounded bordered absolute top right>1</Badge>
</Button>`}
          />

          {/* Status section */}
          <ComponentPreview
            id="status"
            title="Status"
            preview={
              <div className="flex items-center gap-2.5">
                <Badge color="primary" status></Badge>
                <Badge color="secondary" status></Badge>
                <Badge color="info" status></Badge>
                <Badge color="success" status></Badge>
                <Badge color="warning" status></Badge>
                <Badge color="danger" status></Badge>
              </div>
            }
            code={`<Badge color='primary' status></Badge>
<Badge color='secondary' status></Badge>
<Badge color='info' status></Badge>
<Badge color='success' status></Badge>
<Badge color='warning' status></Badge>
<Badge color='danger' status></Badge>`}
          />
        </section>

        {/* Manualy */}
        <section id="manually" className="space-y-4">
          <TypographyH2 className="pb-2 border-b">Add manually</TypographyH2>
          <TypographyP>
            You can use this component in your other projects. Just copy paste!
          </TypographyP>

          <Code>
            {`import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center px-[7px] py-0.5 rounded font-medium text-xs text-white bg-auto-600 border-auto-600',
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
      absolute: { true: 'absolute' },
      left: { true: 'left-0 -translate-x-1/2' },
      right: { true: 'right-0 translate-x-1/2' },
      top: { true: 'top-0 -translate-y-1/2' },
      bottom: { true: 'bottom-0 translate-y-1/2' },
      rounded: { true: 'rounded-full' },
      bordered: { true: 'border-2 border-white' },
      status: { true: 'rounded-full p-1' },
    },
    defaultVariants: {
      color: 'primary',
    },
  },
)

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger'
}

const Badge: React.FC<BadgeProps> = ({
  className,
  color,
  absolute,
  left,
  right,
  top,
  bottom,
  rounded,
  bordered,
  status,
  ...props
}) => (
  <span
    className={cn(
      badgeVariants({ color, absolute, left, right, top, bottom, rounded, bordered, status }),
      className,
    )}
    {...props}
  />
)

export { Badge }`}
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
              <AsideNavigationLink href="#position">
                Position
              </AsideNavigationLink>
              <AsideNavigationLink href="#bordered">
                Bordered
              </AsideNavigationLink>
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
