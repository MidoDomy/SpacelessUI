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
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { AvatarGroup } from '@/components/ui/avatar-group'

import ComponentPreview from '@/components/partials/component-preview'

export default function AvatarGroupPage() {
  return (
    <>
      {/* Page main content */}
      <div className="col-span-9 space-y-10">
        {/* Page intro info */}
        <div>
          <Breadcrumbs className="mb-5">
            <BreadcrumbsItem>Docs</BreadcrumbsItem>
            <BreadcrumbsDivider />
            <BreadcrumbsItem>Avatar group</BreadcrumbsItem>
          </Breadcrumbs>

          <TypographyH1 className="mb-1">Avatar</TypographyH1>
          <TypographyP>
            Stack your avatar icons more easily with this component.
          </TypographyP>
        </div>

        {/* Default section */}
        <section id="default">
          <ComponentPreview
            title="Default"
            preview={
              <AvatarGroup>
                <Avatar rounded bordered>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <Avatar rounded bordered>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <Avatar rounded bordered>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </AvatarGroup>
            }
            code={`import { Avatar, AvatarImage, AvatarFallback, AvatarAction } from '@/components/ui/avatar'
import { AvatarGroup } from '@/components/ui/avatar-group'

export default function AvatarGroupDefault() {
  return (
    <AvatarGroup>
      <Avatar rounded bordered>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <Avatar rounded bordered>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <Avatar rounded bordered>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  )
}`}
          />
        </section>

        {/* Usage section */}
        <section id="usage" className="space-y-5">
          <TypographyH2 className="pb-2 border-b">Usage</TypographyH2>

          <Code>
            {`import { Avatar, AvatarImage, AvatarFallback, AvatarAction } from '@/components/ui/avatar'
import { AvatarGroup } from '@/components/ui/avatar-group'`}
          </Code>
          <Code>
            {`<AvatarGroup>
  <Avatar rounded bordered>
    <AvatarImage src="https://github.com/shadcn.png" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>

  <Avatar rounded bordered>
    <AvatarImage src="https://github.com/shadcn.png" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>

  <Avatar rounded bordered>
    <AvatarImage src="https://github.com/shadcn.png" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
</AvatarGroup>`}
          </Code>
        </section>

        {/* Props section */}
        <section id="props" className="space-y-5">
          <TypographyH2 className="pb-2 border-b">Props</TypographyH2>

          <Table>
            <TableCaption>
              Besides these props, you can also use other div props.
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
                <TableCell>overlapFrom</TableCell>
                <TableCell></TableCell>
                <TableCell>'right'</TableCell>
                <TableCell>'left' | 'right'</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        {/* Examples */}
        <section id="examples" className="space-y-6">
          <TypographyH2 className="pb-2 border-b">Examples</TypographyH2>

          {/* Overlap from left section */}
          <ComponentPreview
            id="overlap-left"
            title="Overlap from left"
            preview={
              <AvatarGroup overlapFrom="left">
                <Avatar rounded bordered>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <Avatar rounded bordered>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <Avatar rounded bordered>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </AvatarGroup>
            }
            code={`<AvatarGroup overlapFrom='left'>
  <Avatar rounded bordered>
    <AvatarImage src="https://github.com/shadcn.png" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>

  <Avatar rounded bordered>
    <AvatarImage src="https://github.com/shadcn.png" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>

  <Avatar rounded bordered>
    <AvatarImage src="https://github.com/shadcn.png" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
</AvatarGroup>`}
          />

          {/* Overlap from right section */}
          <ComponentPreview
            id="overlap-right"
            title="Overlap from right"
            preview={
              <AvatarGroup overlapFrom="right">
                <Avatar rounded bordered>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <Avatar rounded bordered>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <Avatar rounded bordered>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </AvatarGroup>
            }
            code={`<AvatarGroup overlapFrom='right'>
  <Avatar rounded bordered>
    <AvatarImage src="https://github.com/shadcn.png" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>

  <Avatar rounded bordered>
    <AvatarImage src="https://github.com/shadcn.png" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>

  <Avatar rounded bordered>
    <AvatarImage src="https://github.com/shadcn.png" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
</AvatarGroup>`}
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

const avatarGroupVariants = cva(
  'inline-flex -space-x-4 [&>span:hover]:z-10 [&>span>div:first-child:hover]:shadow-lg',
  {
    variants: {
      overlapFrom: {
        left: 'flex-row-reverse space-x-reverse',
        right: 'flex-row',
      },
    },
    defaultVariants: {
      overlapFrom: 'right',
    },
  },
)

interface AvatarGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarGroupVariants> {}

const AvatarGroup: React.FC<AvatarGroupProps> = ({
  className,
  overlapFrom,
  ...props
}) => (
  <div className={cn(avatarGroupVariants({ overlapFrom }), className)} {...props} />
)

export { AvatarGroup }`}
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
              <AsideNavigationLink href="#overlap-left">
                Overlap from left
              </AsideNavigationLink>
              <AsideNavigationLink href="#overlap-right">
                Overlap from right
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
