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

export default function ContextMenuPage() {
  return (
    <>
      {/* Page main content */}
      <div className="col-span-9 space-y-10">
        {/* Page intro info */}
        <div>
          <Breadcrumbs className="mb-5">
            <BreadcrumbsItem>Docs</BreadcrumbsItem>
            <BreadcrumbsDivider />
            <BreadcrumbsItem>Context menu</BreadcrumbsItem>
          </Breadcrumbs>

          <TypographyH1 className="mb-1">Context menu</TypographyH1>
          <TypographyP>
            Displays a menu to the user — such as a set of actions or functions
            — triggered with right click.
          </TypographyP>
        </div>

        {/* Default section */}
        <section id="default">
          <ComponentPreview
            title="Default"
            preview={
              <ContextMenu>
                <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border-2 border-dashed">
                  Right click here
                </ContextMenuTrigger>

                <ContextMenuContent className="w-64">
                  <ContextMenuItem inset>
                    Back
                    <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                  </ContextMenuItem>
                  <ContextMenuItem inset disabled>
                    Forward
                    <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                  </ContextMenuItem>
                  <ContextMenuItem inset>
                    Reload
                    <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                  </ContextMenuItem>
                  <ContextMenuSub>
                    <ContextMenuSubTrigger inset>
                      More Tools
                    </ContextMenuSubTrigger>
                    <ContextMenuSubContent className="w-48">
                      <ContextMenuItem>
                        Save Page As...
                        <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
                      </ContextMenuItem>
                      <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                      <ContextMenuItem>Name Window...</ContextMenuItem>
                      <ContextMenuSeparator />
                      <ContextMenuItem>Developer Tools</ContextMenuItem>
                    </ContextMenuSubContent>
                  </ContextMenuSub>
                  <ContextMenuSeparator />
                  <ContextMenuCheckboxItem checked>
                    Show Bookmarks Bar
                    <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
                  </ContextMenuCheckboxItem>
                  <ContextMenuCheckboxItem>
                    Show Full URLs
                  </ContextMenuCheckboxItem>
                  <ContextMenuSeparator />
                  <ContextMenuRadioGroup value="pedro">
                    <ContextMenuLabel inset>People</ContextMenuLabel>
                    <ContextMenuSeparator />
                    <ContextMenuRadioItem value="pedro">
                      Pedro Duarte
                    </ContextMenuRadioItem>
                    <ContextMenuRadioItem value="colm">
                      Colm Tuite
                    </ContextMenuRadioItem>
                  </ContextMenuRadioGroup>
                </ContextMenuContent>
              </ContextMenu>
            }
            code={`import { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger } from '@/components/ui/context-menu'

export default function ContextMenuDefault() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed">
        Right click here
      </ContextMenuTrigger>

      <ContextMenuContent className="w-64">
        <ContextMenuItem inset>
          Back
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset disabled>
          Forward
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          Reload
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>
              Save Page As...
              <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>Create Shortcut...</ContextMenuItem>
            <ContextMenuItem>Name Window...</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Developer Tools</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>
          Show Bookmarks Bar
          <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value="pedro">
          <ContextMenuLabel inset>People</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuRadioItem value="pedro">
            Pedro Duarte
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}`}
          />
        </section>

        {/* Usage section */}
        <section id="usage" className="space-y-5">
          <TypographyH2 className="pb-2 border-b">Usage</TypographyH2>

          <Code>
            {`import { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger } from '@/components/ui/context-menu'`}
          </Code>
          <Code>
            {`<ContextMenu>
  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed">
    Right click here
  </ContextMenuTrigger>

  <ContextMenuContent className="w-64">
    <ContextMenuItem inset>
      Back
      <ContextMenuShortcut>⌘[</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem inset disabled>
      Forward
      <ContextMenuShortcut>⌘]</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem inset>
      Reload
      <ContextMenuShortcut>⌘R</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSub>
      <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
      <ContextMenuSubContent className="w-48">
        <ContextMenuItem>
          Save Page As...
          <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>Create Shortcut...</ContextMenuItem>
        <ContextMenuItem>Name Window...</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Developer Tools</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSeparator />
    <ContextMenuCheckboxItem checked>
      Show Bookmarks Bar
      <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
    </ContextMenuCheckboxItem>
    <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
    <ContextMenuSeparator />
    <ContextMenuRadioGroup value="pedro">
      <ContextMenuLabel inset>People</ContextMenuLabel>
      <ContextMenuSeparator />
      <ContextMenuRadioItem value="pedro">
        Pedro Duarte
      </ContextMenuRadioItem>
      <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
    </ContextMenuRadioGroup>
  </ContextMenuContent>
</ContextMenu>`}
          </Code>
        </section>

        {/* Props section */}
        <section id="props" className="space-y-5">
          <TypographyH2 className="pb-2 border-b">Props</TypographyH2>

          {/* Main props */}
          <div>
            <TypographyH6 className="mb-2">Context menu</TypographyH6>
            <Table>
              <TableCaption>
                You can use{' '}
                <a href="https://www.radix-ui.com/primitives/docs/components/context-menu#root">
                  radix-ui context menu
                </a>{' '}
                props.
              </TableCaption>
            </Table>
          </div>

          {/* Trigger props */}
          <div>
            <TypographyH6 className="mb-2">Context menu trigger</TypographyH6>
            <Table>
              <TableCaption>
                You can use{' '}
                <a href="https://www.radix-ui.com/primitives/docs/components/context-menu#trigger">
                  radix-ui context menu trigger
                </a>{' '}
                props.
              </TableCaption>
            </Table>
          </div>

          {/* Content props */}
          <div>
            <TypographyH6 className="mb-2">Context menu content</TypographyH6>
            <Table>
              <TableCaption>
                You can use{' '}
                <a href="https://www.radix-ui.com/primitives/docs/components/context-menu#content">
                  radix-ui context menu content
                </a>{' '}
                props.
              </TableCaption>
            </Table>
          </div>

          {/* Item props */}
          <div>
            <TypographyH6 className="mb-2">Context menu item</TypographyH6>
            
            <Table>
              <TableCaption>
                Besides these props, you can also use the default{' '}
                <a href="https://www.radix-ui.com/primitives/docs/components/context-menu#item">
                  radix-ui context menu item
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
                  <TableCell>inset</TableCell>
                  <TableCell>Makes space on left</TableCell>
                  <TableCell>false</TableCell>
                  <TableCell>boolean</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Group props */}
          <div>
            <TypographyH6 className="mb-2">Context menu group</TypographyH6>
            
            <Table>
              <TableCaption>
                Besides these props, you can also use the default{' '}
                <a href="https://www.radix-ui.com/primitives/docs/components/context-menu#group">
                  radix-ui context menu group
                </a>{' '}
                props.
              </TableCaption>
            </Table>
          </div>

          {/* Label props */}
          <div>
            <TypographyH6 className="mb-2">Context menu label</TypographyH6>
            
            <Table>
              <TableCaption>
                Besides these props, you can also use the default{' '}
                <a href="https://www.radix-ui.com/primitives/docs/components/context-menu#label">
                  radix-ui context menu label
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
                  <TableCell>inset</TableCell>
                  <TableCell>Makes space on left</TableCell>
                  <TableCell>false</TableCell>
                  <TableCell>boolean</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Checkbox item props */}
          <div>
            <TypographyH6 className="mb-2">Context menu checkbox item</TypographyH6>
            
            <Table>
              <TableCaption>
                Besides these props, you can also use the default{' '}
                <a href="https://www.radix-ui.com/primitives/docs/components/context-menu#checkboxitem">
                  radix-ui context menu checkbox item
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
                  <TableCell>checked</TableCell>
                  <TableCell></TableCell>
                  <TableCell>false</TableCell>
                  <TableCell>boolean</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Radio group props */}
          <div>
            <TypographyH6 className="mb-2">Context menu radio group</TypographyH6>
            
            <Table>
              <TableCaption>
                You can also use the default{' '}
                <a href="https://www.radix-ui.com/primitives/docs/components/context-menu#radiogroup">
                  radix-ui context menu radio group
                </a>{' '}
                props.
              </TableCaption>
            </Table>
          </div>

          {/* Radio item props */}
          <div>
            <TypographyH6 className="mb-2">Context menu radio item</TypographyH6>
            
            <Table>
              <TableCaption>
                You can also use the default{' '}
                <a href="https://www.radix-ui.com/primitives/docs/components/context-menu#radioitem">
                  radix-ui context menu radio item
                </a>{' '}
                props.
              </TableCaption>
            </Table>
          </div>

          {/* Separator props */}
          <div>
            <TypographyH6 className="mb-2">Context menu separator</TypographyH6>
            
            <Table>
              <TableCaption>
                You can also use the default{' '}
                <a href="https://www.radix-ui.com/primitives/docs/components/context-menu#separator">
                  radix-ui context menu separator
                </a>{' '}
                props.
              </TableCaption>
            </Table>
          </div>

          {/* Sub props */}
          <div>
            <TypographyH6 className="mb-2">Context menu sub</TypographyH6>
            
            <Table>
              <TableCaption>
                You can also use the default{' '}
                <a href="https://www.radix-ui.com/primitives/docs/components/context-menu#sub">
                  radix-ui context menu sub
                </a>{' '}
                props.
              </TableCaption>
            </Table>
          </div>

          {/* Sub trigger props */}
          <div>
            <TypographyH6 className="mb-2">Context menu sub trigger</TypographyH6>
            
            <Table>
              <TableCaption>
                Besides these props, you can also use the default{' '}
                <a href="https://www.radix-ui.com/primitives/docs/components/context-menu#subtrigger">
                  radix-ui context menu sub trigger
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
                  <TableCell>inset</TableCell>
                  <TableCell>Makes space on left</TableCell>
                  <TableCell>false</TableCell>
                  <TableCell>boolean</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Sub content props */}
          <div>
            <TypographyH6 className="mb-2">Context menu sub content</TypographyH6>
            
            <Table>
              <TableCaption>
                You can also use the default{' '}
                <a href="https://www.radix-ui.com/primitives/docs/components/context-menu#subcontent">
                  radix-ui context menu sub content
                </a>{' '}
                props.
              </TableCaption>
            </Table>
          </div>

          {/* Shortcut props */}
          <div>
            <TypographyH6 className="mb-2">Context menu shortcut</TypographyH6>
            
            <Table>
              <TableCaption>
                You can use default <code>span</code> attributes.
              </TableCaption>
            </Table>
          </div>
        </section>

        {/* Examples */}
        <section id="examples" className="space-y-6">
          <TypographyH2 className="pb-2 border-b">Examples</TypographyH2>

          {/* Sub menus section */}
          <ComponentPreview
            id="sub"
            title="Sub menus"
            preview={
              <ContextMenu>
                <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border-2 border-dashed">
                  Right click here
                </ContextMenuTrigger>

                <ContextMenuContent className="w-64">
                  <ContextMenuSub>
                    <ContextMenuSubTrigger>First Tools</ContextMenuSubTrigger>
                    <ContextMenuSubContent className="w-48">
                      <ContextMenuItem>Action one</ContextMenuItem>
                      <ContextMenuItem>Action two</ContextMenuItem>
                    </ContextMenuSubContent>
                  </ContextMenuSub>

                  <ContextMenuSub>
                    <ContextMenuSubTrigger>Second Tools</ContextMenuSubTrigger>
                    <ContextMenuSubContent className="w-48">
                      <ContextMenuItem>Action one</ContextMenuItem>
                      <ContextMenuItem>Action two</ContextMenuItem>
                    </ContextMenuSubContent>
                  </ContextMenuSub>
                </ContextMenuContent>
              </ContextMenu>
            }
            code={`<ContextMenu>
  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border-2 border-dashed">
    Right click here
  </ContextMenuTrigger>

  <ContextMenuContent className="w-64">
    <ContextMenuSub>
      <ContextMenuSubTrigger>First Tools</ContextMenuSubTrigger>
      <ContextMenuSubContent className="w-48">
        <ContextMenuItem>Action one</ContextMenuItem>
        <ContextMenuItem>Action two</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>

    <ContextMenuSub>
      <ContextMenuSubTrigger>Second Tools</ContextMenuSubTrigger>
      <ContextMenuSubContent className="w-48">
        <ContextMenuItem>Action one</ContextMenuItem>
        <ContextMenuItem>Action two</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
  </ContextMenuContent>
</ContextMenu>`}
          />

          {/* Inset section */}
          <ComponentPreview
            id="inset"
            title="Inset"
            preview={
              <ContextMenu>
                <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border-2 border-dashed">
                  Right click here
                </ContextMenuTrigger>

                <ContextMenuContent className="w-64">
                  <ContextMenuItem inset>Action one</ContextMenuItem>
                  <ContextMenuItem inset>Action two</ContextMenuItem>
                  <ContextMenuCheckboxItem checked>
                    Show Bookmarks Bar
                  </ContextMenuCheckboxItem>
                  <ContextMenuSub>
                    <ContextMenuSubTrigger inset>First Tools</ContextMenuSubTrigger>
                    <ContextMenuSubContent className="w-48">
                      <ContextMenuItem>Action</ContextMenuItem>
                    </ContextMenuSubContent>
                  </ContextMenuSub>
                </ContextMenuContent>
              </ContextMenu>
            }
            code={`<ContextMenu>
  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border-2 border-dashed">
    Right click here
  </ContextMenuTrigger>

  <ContextMenuContent className="w-64">
    <ContextMenuItem inset>Action one</ContextMenuItem>
    <ContextMenuItem inset>Action two</ContextMenuItem>
    <ContextMenuCheckboxItem checked>
      Show Bookmarks Bar
    </ContextMenuCheckboxItem>
    <ContextMenuSub>
      <ContextMenuSubTrigger inset>First Tools</ContextMenuSubTrigger>
      <ContextMenuSubContent className="w-48">
        <ContextMenuItem>Action</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
  </ContextMenuContent>
</ContextMenu>`}
          />

          {/* Separator section */}
          <ComponentPreview
            id="separator"
            title="Separator"
            preview={
              <ContextMenu>
                <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border-2 border-dashed">
                  Right click here
                </ContextMenuTrigger>

                <ContextMenuContent className="w-64">
                  <ContextMenuItem>Action one</ContextMenuItem>
                  <ContextMenuItem>Action two</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem>Action three</ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            }
            code={`<ContextMenu>
  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border-2 border-dashed">
    Right click here
  </ContextMenuTrigger>

  <ContextMenuContent className="w-64">
    <ContextMenuItem>Action one</ContextMenuItem>
    <ContextMenuItem>Action two</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>Action three</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
          />

          {/* Label section */}
          <ComponentPreview
            id="label"
            title="Label"
            preview={
              <ContextMenu>
                <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border-2 border-dashed">
                  Right click here
                </ContextMenuTrigger>

                <ContextMenuContent className="w-64">
                  <ContextMenuLabel>Label</ContextMenuLabel>
                  <ContextMenuItem>Action one</ContextMenuItem>
                  <ContextMenuItem>Action two</ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            }
            code={`<ContextMenu>
  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border-2 border-dashed">
    Right click here
  </ContextMenuTrigger>

  <ContextMenuContent className="w-64">
    <ContextMenuLabel>Label</ContextMenuLabel>
    <ContextMenuItem>Action one</ContextMenuItem>
    <ContextMenuItem>Action two</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
          />

          {/* Shortcut section */}
          <ComponentPreview
            id="shortcut"
            title="Shortcut"
            preview={
              <ContextMenu>
                <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border-2 border-dashed">
                  Right click here
                </ContextMenuTrigger>

                <ContextMenuContent className="w-64">
                  <ContextMenuItem>Action one</ContextMenuItem>
                  <ContextMenuItem>
                    Action two
                    <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                  </ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            }
            code={`<ContextMenu>
  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border-2 border-dashed">
    Right click here
  </ContextMenuTrigger>

  <ContextMenuContent className="w-64">
    <ContextMenuItem>Action one</ContextMenuItem>
    <ContextMenuItem>
      Action two
      <ContextMenuShortcut>⌘R</ContextMenuShortcut>
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
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
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import { Check, Circle } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Icon } from '@/components/ui/icon'

const ContextMenu = ContextMenuPrimitive.Root

const ContextMenuTrigger = ContextMenuPrimitive.Trigger

const ContextMenuGroup = ContextMenuPrimitive.Group

const ContextMenuPortal = ContextMenuPrimitive.Portal

const ContextMenuSub = ContextMenuPrimitive.Sub

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-primary-50 focus:text-primary-700 data-[state=open]:bg-primary-50 data-[state=open]:text-primary-700',
      inset && 'pl-8',
      className,
    )}
    {...props}
  >
    {children}

    <Icon name="chevron-right" className="ml-auto" />
  </ContextMenuPrimitive.SubTrigger>
))
ContextMenuSubTrigger.displayName = 'ContextMenuSubTrigger'

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      'z-50 min-w-[8rem] overflow-hidden rounded border bg-body-bg p-1 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className,
    )}
    {...props}
  />
))
ContextMenuSubContent.displayName = 'ContextMenuSubContent'

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded border bg-body-bg p-1 shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
))
ContextMenuContent.displayName = 'ContextMenuContent'

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-primary-50 focus:text-primary-700 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
))
ContextMenuItem.displayName = 'ContextMenuItem'

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-primary-50 focus:text-primary-700 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
))
ContextMenuCheckboxItem.displayName = 'ContextMenuCheckboxItem'

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-primary-50 focus:text-primary-700 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
))
ContextMenuRadioItem.displayName = 'ContextMenuRadioItem'

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn(
      'px-2 py-1.5 text-sm font-medium',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
))
ContextMenuLabel.displayName = 'ContextMenuLabel'

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 border-t', className)}
    {...props}
  />
))
ContextMenuSeparator.displayName = 'ContextMenuSeparator'

const ContextMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn('ml-auto text-xs tracking-widest text-muted', className)}
      {...props}
    />
  )
}
ContextMenuShortcut.displayName = 'ContextMenuShortcut'

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
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
              <AsideNavigationLink href="#sub">Sub menus</AsideNavigationLink>
              <AsideNavigationLink href="#inset">Inset</AsideNavigationLink>
              <AsideNavigationLink href="#separator">Separator</AsideNavigationLink>
              <AsideNavigationLink href="#label">Label</AsideNavigationLink>
              <AsideNavigationLink href="#shortcut">Shortcut</AsideNavigationLink>
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
