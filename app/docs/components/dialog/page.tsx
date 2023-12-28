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
import { Button } from '@/components/ui/button'
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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export default function DialogPage() {
  return (
    <>
      {/* Page main content */}
      <div className="col-span-9 space-y-10">
        {/* Page intro info */}
        <div>
          <Breadcrumbs className="mb-5">
            <BreadcrumbsItem>Docs</BreadcrumbsItem>
            <BreadcrumbsDivider />
            <BreadcrumbsItem>Dialog</BreadcrumbsItem>
          </Breadcrumbs>

          <TypographyH1 className="mb-1">Dialog</TypographyH1>
          <TypographyP>
            A window overlaid on either the primary window or another dialog
            window, rendering the content underneath inert.
          </TypographyP>
        </div>

        {/* Default section */}
        <section id="default">
          <ComponentPreview
            title="Default"
            preview={
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Open dialog</Button>
                </DialogTrigger>

                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Dialog title</DialogTitle>
                    <DialogDescription>
                      Dialog description text.
                    </DialogDescription>
                  </DialogHeader>

                  <div>
                    Body content: Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Enim rerum maxime hic dolorem pariatur
                    animi repudiandae, fuga tempore eum cum?
                  </div>

                  <DialogFooter>
                    <Button>Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            }
            code={`import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

export default function DialogDefault() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open dialog</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog title</DialogTitle>
          <DialogDescription>
            Dialog description text.
          </DialogDescription>
        </DialogHeader>

        <div>
          Body content: Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Enim rerum maxime hic dolorem pariatur
          animi repudiandae, fuga tempore eum cum?
        </div>

        <DialogFooter>
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`}
          />
        </section>

        {/* Usage section */}
        <section id="usage" className="space-y-5">
          <TypographyH2 className="pb-2 border-b">Usage</TypographyH2>

          <Code>
            {`import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'`}
          </Code>
          <Code>
            {`<Dialog>
  <DialogTrigger asChild>
    <Button>Open dialog</Button>
  </DialogTrigger>

  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog title</DialogTitle>
      <DialogDescription>
        Dialog description text.
      </DialogDescription>
    </DialogHeader>

    <div>
      Body content: Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Enim rerum maxime hic dolorem pariatur
      animi repudiandae, fuga tempore eum cum?
    </div>

    <DialogFooter>
      <Button>Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
          </Code>
        </section>

        {/* Props section */}
        <section id="props" className="space-y-5">
          <TypographyH2 className="pb-2 border-b">Props</TypographyH2>

          {/* Main props */}
          <div>
            <TypographyH6 className="mb-2">Dialog</TypographyH6>
            <Table>
              <TableCaption>
                You can use{' '}
                <a href="https://www.radix-ui.com/primitives/docs/components/dialog#root">
                  radix-ui dialog
                </a>{' '}
                props.
              </TableCaption>
            </Table>
          </div>

          {/* Trigger props */}
          <div>
            <TypographyH6 className="mb-2">Dialog trigger</TypographyH6>
            <Table>
              <TableCaption>
                You can use{' '}
                <a href="https://www.radix-ui.com/primitives/docs/components/dialog#trigger">
                  radix-ui dialog trigger
                </a>{' '}
                props.
              </TableCaption>
            </Table>
          </div>

          {/* Content props */}
          <div>
            <TypographyH6 className="mb-2">Dialog content</TypographyH6>
            <Table>
              <TableCaption>
                Besides these props, you can also use the default{' '}
                <a href="https://www.radix-ui.com/primitives/docs/components/dialog#content">
                  radix-ui dialog content
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
                  <TableCell>'sm' | 'md' | 'lg' | 'xl'</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Header props */}
          <div>
            <TypographyH6 className="mb-2">Dialog header</TypographyH6>

            <Table>
              <TableCaption>
                You can also use the default <code>div</code> props.
              </TableCaption>
            </Table>
          </div>

          {/* Title props */}
          <div>
            <TypographyH6 className="mb-2">Dialog title</TypographyH6>

            <Table>
              <TableCaption>
                You can use{' '}
                <a href="https://www.radix-ui.com/primitives/docs/components/dialog#title">
                  radix-ui dialog title
                </a>{' '}
                props.
              </TableCaption>
            </Table>
          </div>

          {/* Description props */}
          <div>
            <TypographyH6 className="mb-2">Dialog description</TypographyH6>

            <Table>
              <TableCaption>
                You can use{' '}
                <a href="https://www.radix-ui.com/primitives/docs/components/dialog#description">
                  radix-ui dialog description
                </a>{' '}
                props.
              </TableCaption>
            </Table>
          </div>

          {/* Footer props */}
          <div>
            <TypographyH6 className="mb-2">Dialog footer</TypographyH6>

            <Table>
              <TableCaption>
                You can also use the default <code>div</code> props.
              </TableCaption>
            </Table>
          </div>
        </section>

        {/* Examples */}
        <section id="examples" className="space-y-6">
          <TypographyH2 className="pb-2 border-b">Examples</TypographyH2>

          {/* Sizes section */}
          <ComponentPreview
            id="sizes"
            title="Sizes"
            preview={
              <div className="flex gap-2.5">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Dialog sm</Button>
                  </DialogTrigger>

                  <DialogContent size="sm">
                    <DialogHeader>
                      <DialogTitle>Dialog size sm</DialogTitle>
                    </DialogHeader>

                    <div>
                      Body content: Lorem ipsum dolor sit amet consectetur,
                      adipisicing elit. Enim rerum maxime hic dolorem pariatur
                      animi repudiandae, fuga tempore eum cum?
                    </div>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Dialog md (default)</Button>
                  </DialogTrigger>

                  <DialogContent size="md">
                    <DialogHeader>
                      <DialogTitle>Dialog size md</DialogTitle>
                    </DialogHeader>

                    <div>
                      Body content: Lorem ipsum dolor sit amet consectetur,
                      adipisicing elit. Enim rerum maxime hic dolorem pariatur
                      animi repudiandae, fuga tempore eum cum?
                    </div>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Dialog lg</Button>
                  </DialogTrigger>

                  <DialogContent size="lg">
                    <DialogHeader>
                      <DialogTitle>Dialog size lg</DialogTitle>
                    </DialogHeader>

                    <div>
                      Body content: Lorem ipsum dolor sit amet consectetur,
                      adipisicing elit. Enim rerum maxime hic dolorem pariatur
                      animi repudiandae, fuga tempore eum cum?
                    </div>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Dialog xl</Button>
                  </DialogTrigger>

                  <DialogContent size="xl">
                    <DialogHeader>
                      <DialogTitle>Dialog size xl</DialogTitle>
                    </DialogHeader>

                    <div>
                      Body content: Lorem ipsum dolor sit amet consectetur,
                      adipisicing elit. Enim rerum maxime hic dolorem pariatur
                      animi repudiandae, fuga tempore eum cum?
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            }
            code={`<div className='flex gap-2.5'>
  <Dialog>
    <DialogTrigger asChild>
      <Button>Dialog sm</Button>
    </DialogTrigger>

    <DialogContent size='sm'>
      <DialogHeader>
        <DialogTitle>Dialog size sm</DialogTitle>
      </DialogHeader>

      <div>
        Body content: Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Enim rerum maxime hic dolorem pariatur
        animi repudiandae, fuga tempore eum cum?
      </div>
    </DialogContent>
  </Dialog>

  <Dialog>
    <DialogTrigger asChild>
      <Button>Dialog md (default)</Button>
    </DialogTrigger>

    <DialogContent size='md'>
      <DialogHeader>
        <DialogTitle>Dialog size md</DialogTitle>
      </DialogHeader>

      <div>
        Body content: Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Enim rerum maxime hic dolorem pariatur
        animi repudiandae, fuga tempore eum cum?
      </div>
    </DialogContent>
  </Dialog>

  <Dialog>
    <DialogTrigger asChild>
      <Button>Dialog lg</Button>
    </DialogTrigger>

    <DialogContent size='lg'>
      <DialogHeader>
        <DialogTitle>Dialog size lg</DialogTitle>
      </DialogHeader>

      <div>
        Body content: Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Enim rerum maxime hic dolorem pariatur
        animi repudiandae, fuga tempore eum cum?
      </div>
    </DialogContent>
  </Dialog>

  <Dialog>
    <DialogTrigger asChild>
      <Button>Dialog xl</Button>
    </DialogTrigger>

    <DialogContent size='xl'>
      <DialogHeader>
        <DialogTitle>Dialog size xl</DialogTitle>
      </DialogHeader>

      <div>
        Body content: Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Enim rerum maxime hic dolorem pariatur
        animi repudiandae, fuga tempore eum cum?
      </div>
    </DialogContent>
  </Dialog>
</div>`}
          />

          {/* Header section */}
          <ComponentPreview
            id="header"
            title="Header"
            preview={
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Open dialog</Button>
                </DialogTrigger>

                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Dialog title</DialogTitle>
                    <DialogDescription>
                      Dialog description text.
                    </DialogDescription>
                  </DialogHeader>

                  <div>
                    Body content: Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Enim rerum maxime hic dolorem pariatur
                    animi repudiandae, fuga tempore eum cum?
                  </div>
                </DialogContent>
              </Dialog>
            }
            code={`<Dialog>
  <DialogTrigger asChild>
    <Button>Open dialog</Button>
  </DialogTrigger>

  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog title</DialogTitle>
      <DialogDescription>
        Dialog description text.
      </DialogDescription>
    </DialogHeader>

    <div>
      Body content: Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Enim rerum maxime hic dolorem pariatur
      animi repudiandae, fuga tempore eum cum?
    </div>
  </DialogContent>
</Dialog>`}
          />

          {/* Footer section */}
          <ComponentPreview
            id="footer"
            title="Footer"
            preview={
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Open dialog</Button>
                </DialogTrigger>

                <DialogContent>
                  <div>
                    Body content: Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Enim rerum maxime hic dolorem pariatur
                    animi repudiandae, fuga tempore eum cum?
                  </div>

                  <DialogFooter>
                    <Button>Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            }
            code={`<Dialog>
  <DialogTrigger asChild>
    <Button>Open dialog</Button>
  </DialogTrigger>

  <DialogContent>
    <div>
      Body content: Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Enim rerum maxime hic dolorem pariatur
      animi repudiandae, fuga tempore eum cum?
    </div>

    <DialogFooter>
      <Button>Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
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
import { cva, type VariantProps } from 'class-variance-authority'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import { cn } from '@/lib/utils'
import { Icon } from '@/components/ui/icon'

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className,
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const dialogContentVariants = cva(
  'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-body-bg px-6 py-4 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
  {
    variants: {
      size: {
        sm: 'sm:max-w-[320px]',
        md: 'sm:max-w-[520px]',
        lg: 'sm:max-w-[780px]',
        xl: 'sm:max-w-[1280px] ',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> &
  VariantProps<typeof dialogContentVariants>
>(({ className, children, size, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        dialogContentVariants({
          size
        }),
        className,
      )}
      {...props}
    >
      {children}

      <DialogPrimitive.Close className="absolute right-4 top-4 opacity-70 transition-opacity hover:opacity-100">
        <Icon name="x" size="sm" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex flex-col -mx-6 px-6 pb-4 border-b', className)}
    {...props}
  />
)
DialogHeader.displayName = 'DialogHeader'

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex justify-end gap-2 -mx-6 px-6 pt-4 border-t', className)}
    {...props}
  />
)
DialogFooter.displayName = 'DialogFooter'

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('text-lg font-medium', className)}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted', className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
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
              <AsideNavigationLink href="#sizes">Sizes</AsideNavigationLink>
              <AsideNavigationLink href="#header">Header</AsideNavigationLink>
              <AsideNavigationLink href="#footer">Footer</AsideNavigationLink>
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
