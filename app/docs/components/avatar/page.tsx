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
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarAction,
} from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

import ComponentPreview from '@/components/partials/component-preview'

export default function AvatarPage() {
  return (
    <>
      {/* Page main content */}
      <div className="col-span-9 space-y-10">
        {/* Page intro info */}
        <div>
          <Breadcrumbs className="mb-5">
            <BreadcrumbsItem>Docs</BreadcrumbsItem>
            <BreadcrumbsDivider />
            <BreadcrumbsItem>Avatar</BreadcrumbsItem>
          </Breadcrumbs>

          <TypographyH1 className="mb-1">Avatar</TypographyH1>
        </div>

        {/* Default section */}
        <section id="default">
          <ComponentPreview
            title="Default"
            preview={
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
                <AvatarAction>
                  <Badge color="success" status />
                </AvatarAction>
              </Avatar>
            }
            code={`import { Avatar, AvatarImage, AvatarFallback, AvatarAction } from '@/components/ui/avatar'

export default function AvatarDefault() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
      <AvatarAction>
        <Badge color="success" status />
      </AvatarAction>
    </Avatar>
  )
}`}
          />
        </section>

        {/* Usage section */}
        <section id="usage" className="space-y-5">
          <TypographyH2 className="pb-2 border-b">Usage</TypographyH2>

          <Code>
            {`import { Avatar, AvatarImage, AvatarFallback, AvatarAction } from '@/components/ui/avatar'`}
          </Code>
          <Code>
            {`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
  <AvatarAction>
    <Badge color="success" status />
  </AvatarAction>
</Avatar>`}
          </Code>
        </section>

        {/* Props section */}
        <section id="props" className="space-y-5">
          <TypographyH2 className="pb-2 border-b">Props</TypographyH2>

          {/* Main props */}
          <div>
            <TypographyH6 className="mb-2">Avatar</TypographyH6>

            <Table>
              <TableCaption>
                Besides these props, you can also use other{' '}
                <a href="https://www.radix-ui.com/primitives/docs/components/avatar#root">
                  radix-ui avatar
                </a>{' '}
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
                  <TableCell>size</TableCell>
                  <TableCell></TableCell>
                  <TableCell>'md'</TableCell>
                  <TableCell>'sm' | 'md' | 'lg'</TableCell>
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
              </TableBody>
            </Table>
          </div>

          {/* Image props */}
          <div>
            <TypographyH6 className="mb-2">Avatar image</TypographyH6>
            <Table>
              <TableCaption>
                Besides these props, you can also use other{' '}
                <a href="https://www.radix-ui.com/primitives/docs/components/avatar#image">
                  radix-ui avatar image
                </a>{' '}
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
                  <TableCell>onLoadingStatusChange</TableCell>
                  <TableCell></TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>function</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Fallback props */}
          <div>
            <TypographyH6 className="mb-2">Avatar fallback</TypographyH6>
            <Table>
              <TableCaption>
                Besides these props, you can also use other{' '}
                <a href="https://www.radix-ui.com/primitives/docs/components/avatar#fallback">
                  radix-ui avatar fallback
                </a>{' '}
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
                  <TableCell>delayMs</TableCell>
                  <TableCell></TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>number</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Examples */}
        <section id="examples" className="space-y-6">
          <TypographyH2 className="pb-2 border-b">Examples</TypographyH2>

          {/* Size section */}
          <ComponentPreview
            id="size"
            title="Size"
            preview={
              <div className="flex items-center gap-2.5">
                <Avatar size="sm">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <Avatar size="md">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <Avatar size="lg">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            }
            code={`<Avatar size='sm'>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

<Avatar size='md'>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

<Avatar size='lg'>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
          />

          {/* Rounded section */}
          <ComponentPreview
            id="rounded"
            title="Rounded"
            preview={
              <div className="flex items-center gap-2.5">
                <Avatar size="sm" rounded>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <Avatar size="md" rounded>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <Avatar size="lg" rounded>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            }
            code={`<Avatar size='sm' rounded>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

<Avatar size='md' rounded>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

<Avatar size='lg' rounded>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
          />

          {/* Action section */}
          <ComponentPreview
            id="action"
            title="Action"
            preview={
              <div className="flex items-center gap-2.5">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                  <AvatarAction>
                    <Badge color="success" status />
                  </AvatarAction>
                </Avatar>

                <Avatar rounded>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                  <AvatarAction>
                    <Badge color="success" status />
                  </AvatarAction>
                </Avatar>
              </div>
            }
            code={`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
  <AvatarAction>
    <Badge color='success' status />
  </AvatarAction>
</Avatar>

<Avatar rounded>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
  <AvatarAction>
    <Badge color='success' status />
  </AvatarAction>
</Avatar>`}
          />

          {/* Bordered section */}
          <ComponentPreview
            id="bordered"
            title="Bordered"
            preview={
              <div className="flex items-center gap-2.5">
                <Avatar bordered>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <Avatar rounded bordered>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            }
            code={`<Avatar bordered>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

<Avatar rounded bordered>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
          />
        </section>

        {/* Manualy */}
        <section id="manually" className="space-y-4">
          <TypographyH2 className="pb-2 border-b">Add manually</TypographyH2>
          <TypographyP>
            You can use this component in your other projects. Just copy paste!
          </TypographyP>

          <Code>
            {`'use client'

import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const avatarVariants = cva('relative flex h-10 w-10 shrink-0 rounded-lg', {
  variants: {
    size: {
      sm: 'h-10 w-10',
      md: 'h-12 w-12',
      lg: 'h-14 w-14',
    },
    rounded: { true: 'rounded-full' },
    bordered: { true: 'border-2' },
  },
  defaultVariants: {
    size: 'md',
  },
})

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> &
    VariantProps<typeof avatarVariants>
>(({ className, size, rounded, bordered, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(avatarVariants({ size, rounded, bordered }), className)}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn(
      'h-full w-full aspect-square object-cover rounded-[inherit]',
      className,
    )}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex items-center justify-center h-full w-full bg-secondary-200 rounded-[inherit]',
      className,
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

const AvatarAction: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => <div className={cn('absolute bottom-0 right-0 -translate-x-1/4 -translate-y-1/4 flex', className)} {...props} />

export { Avatar, AvatarImage, AvatarFallback, AvatarAction }`}
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
              <AsideNavigationLink href="#size">Size</AsideNavigationLink>
              <AsideNavigationLink href="#rounded">Rounded</AsideNavigationLink>
              <AsideNavigationLink href="#action">Action</AsideNavigationLink>
              <AsideNavigationLink href="#bordered">
                Bordered
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
