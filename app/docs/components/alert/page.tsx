'use client'
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
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
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

export default function AlertPage() {
  return (
    <>
      {/* Page main content */}
      <div className="col-span-9 space-y-10">
        {/* Page intro info */}
        <div>
          <Breadcrumbs className="mb-5">
            <BreadcrumbsItem>Docs</BreadcrumbsItem>
            <BreadcrumbsDivider />
            <BreadcrumbsItem>Alert</BreadcrumbsItem>
          </Breadcrumbs>

          <TypographyH1 className="mb-1">Alert</TypographyH1>
          <TypographyP>
            Alerts are an important method of communicating with important users
            and providing feedback.
          </TypographyP>
        </div>

        {/* Default section */}
        <section id="default">
          <ComponentPreview
            title="Default"
            preview={
              <Alert>
                <AlertTitle>Alert title</AlertTitle>
                <AlertDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, repudiandae.
                </AlertDescription>
              </Alert>
            }
            code={`import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export default function AlertDefault() {
  return (
    <Alert>
      <AlertTitle>Alert title</AlertTitle>
      <AlertDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nostrum, repudiandae.
      </AlertDescription>
    </Alert>
  )
}`}
          />
        </section>

        {/* Usage section */}
        <section id="usage" className="space-y-5">
          <TypographyH2 className="pb-2 border-b">Usage</TypographyH2>

          <Code>
            {`import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'`}
          </Code>
          <Code>
            {`<Alert>
  <AlertTitle>Alert title</AlertTitle>
  <AlertDescription>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Nostrum, repudiandae.
  </AlertDescription>
</Alert>`}
          </Code>
        </section>

        {/* Props section */}
        <section id="props" className="space-y-5">
          <TypographyH2 className="pb-2 border-b">Props</TypographyH2>

          <div>
            <TypographyH6 className="mb-2">Alert</TypographyH6>
            <Table>
              <TableCaption>
                Besides these props, you can also use the default{' '}
                <code>div</code> props.
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
                  <TableCell>icon</TableCell>
                  <TableCell>
                    There are already predefined icon values for certain colors.
                  </TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>string</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>onClose</TableCell>
                  <TableCell>If set then an 'x' icon is displayed.</TableCell>
                  <TableCell>null</TableCell>
                  <TableCell>function</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
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
                <Alert color="primary">
                  <AlertTitle>Alert primary title</AlertTitle>
                  <AlertDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, repudiandae.
                  </AlertDescription>
                </Alert>
                <Alert color="secondary">
                  <AlertTitle>Alert secondary title</AlertTitle>
                  <AlertDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, repudiandae.
                  </AlertDescription>
                </Alert>
                <Alert color="info">
                  <AlertTitle>Alert info title</AlertTitle>
                  <AlertDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, repudiandae.
                  </AlertDescription>
                </Alert>
                <Alert color="success">
                  <AlertTitle>Alert success title</AlertTitle>
                  <AlertDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, repudiandae.
                  </AlertDescription>
                </Alert>
                <Alert color="warning">
                  <AlertTitle>Alert warning title</AlertTitle>
                  <AlertDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, repudiandae.
                  </AlertDescription>
                </Alert>
                <Alert color="danger">
                  <AlertTitle>Alert danger title</AlertTitle>
                  <AlertDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, repudiandae.
                  </AlertDescription>
                </Alert>
              </div>
            }
            code={`<Alert color='primary'>
  <AlertTitle>Alert primary title</AlertTitle>
  <AlertDescription>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Nostrum, repudiandae.
  </AlertDescription>
</Alert>

<Alert color='secondary'>
  <AlertTitle>Alert secondary title</AlertTitle>
  <AlertDescription>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Nostrum, repudiandae.
  </AlertDescription>
</Alert>

<Alert color='info'>
  <AlertTitle>Alert info title</AlertTitle>
  <AlertDescription>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Nostrum, repudiandae.
  </AlertDescription>
</Alert>

<Alert color='success'>
  <AlertTitle>Alert success title</AlertTitle>
  <AlertDescription>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Nostrum, repudiandae.
  </AlertDescription>
</Alert>

<Alert color='warning'>
  <AlertTitle>Alert warning title</AlertTitle>
  <AlertDescription>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Nostrum, repudiandae.
  </AlertDescription>
</Alert>

<Alert color='danger'>
  <AlertTitle>Alert danger title</AlertTitle>
  <AlertDescription>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Nostrum, repudiandae.
  </AlertDescription>
</Alert>`}
          />

          {/* Closable section */}
          <ComponentPreview
            id="closable"
            title="Closable"
            preview={
              <Alert onClose={() => {}}>
                <AlertTitle>Alert title</AlertTitle>
                <AlertDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, repudiandae.
                </AlertDescription>
              </Alert>
            }
            code={`<Alert onClose={()=>{}}>
  <AlertTitle>Alert title</AlertTitle>
  <AlertDescription>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Nostrum, repudiandae.
  </AlertDescription>
</Alert>`}
          />

          {/* Custom icon section */}
          <ComponentPreview
            id="custom-icon"
            title="Custom icon"
            preview={
              <Alert icon="chevron-right">
                <AlertTitle>Alert title</AlertTitle>
                <AlertDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, repudiandae.
                </AlertDescription>
              </Alert>
            }
            code={`<Alert icon='chevron-right'>
  <AlertTitle>Alert title</AlertTitle>
  <AlertDescription>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Nostrum, repudiandae.
  </AlertDescription>
</Alert>`}
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
import { Icon } from '@/components/ui/icon'

const alertVariants = cva(
  'flex items-start gap-3 px-4 py-3 rounded-lg border border-auto-400 text-auto-700 bg-auto-50',
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
    },
    defaultVariants: {
      color: 'primary',
    },
  },
)

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger'
  icon?: string
  onClose?: () => void
}

const setIcon = (variant: string | null | undefined) => {
  switch (variant) {
    case 'success':
      return 'check-circle'
    case 'warning':
      return 'alert-hexagon'
    case 'danger':
      return 'alert-triangle'
    default:
      return 'alert-circle'
  }
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      children,
      color,
      icon = setIcon(color),
      onClose,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ color }), className)}
      {...props}
    >
      <Icon className="mt-0.5" name={icon} />

      <div className="grow">{children}</div>

      {onClose && (
        <button type="button" onClick={onClose}>
          <Icon name="x" size="sm" />
        </button>
      )}
    </div>
  ),
)
Alert.displayName = 'Alert'

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5 ref={ref} className={cn('font-medium', className)} {...props} />
))
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('text-sm', className)} {...props} />
))
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertTitle, AlertDescription }`}
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
              <AsideNavigationLink href="#closable">
                Closable
              </AsideNavigationLink>
              <AsideNavigationLink href="#custom-icon">
                Custom icon
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
