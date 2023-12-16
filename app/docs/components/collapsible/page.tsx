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
import { Icon } from '@/components/ui/icon'

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
            <BreadcrumbsItem>Collapsible</BreadcrumbsItem>
          </Breadcrumbs>

          <TypographyH1 className="mb-1">Collapsible</TypographyH1>
          <TypographyP>
            Collapsible is used to show and hide content.
          </TypographyP>
        </div>

        {/* Default section */}
        <section id="default">
          <ComponentPreview
            title="Default"
            preview={
              <Collapsible className="w-96">
                <CollapsibleTrigger asChild>
                  <Button className="[&[data-state=open]>.icon]:rotate-180">
                    Collapsible trigger
                    <Icon name="chevron-down" size="sm" />
                  </Button>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <div className="pt-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Maiores quidem id doloribus ex facilis libero quis
                    reiciendis obcaecati deserunt ullam?
                  </div>
                </CollapsibleContent>
              </Collapsible>
            }
            code={`import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button'

export default function CardDefault() {
  return (
    <Collapsible className="w-96">
      <CollapsibleTrigger asChild>
        <Button className='[&[data-state=open]>.icon]:rotate-180'>
          Collapsible trigger
          <Icon name="chevron-down" size="sm" />
        </Button>
      </CollapsibleTrigger>

      <CollapsibleContent>
        <div className='pt-2'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Maiores quidem id doloribus ex facilis libero quis reiciendis
          obcaecati deserunt ullam?
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}`}
          />
        </section>

        {/* Usage section */}
        <section id="usage" className="space-y-5">
          <TypographyH2 className="pb-2 border-b">Usage</TypographyH2>

          <Code>
            {`import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button'`}
          </Code>
          <Code>
            {`<Collapsible className="w-96">
  <CollapsibleTrigger asChild>
    <Button className='[&[data-state=open]>.icon]:rotate-180'>
      Collapsible trigger
      <Icon name="chevron-down" size="sm" />
    </Button>
  </CollapsibleTrigger>

  <CollapsibleContent>
    <div className='pt-2'>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Maiores quidem id doloribus ex facilis libero quis reiciendis
      obcaecati deserunt ullam?
    </div>
  </CollapsibleContent>
</Collapsible>`}
          </Code>
        </section>

        {/* Props section */}
        <section id="props" className="space-y-5">
          <TypographyH2 className="pb-2 border-b">Props</TypographyH2>

          {/* Main props */}
          <div>
            <TypographyH6 className="mb-2">Collapsible</TypographyH6>
            <Table>
              <TableCaption>
                You can use{' '}
                <a href="https://www.radix-ui.com/primitives/docs/components/collapsible#root">
                  radix-ui collapsible
                </a>{' '}
                props.
              </TableCaption>
            </Table>
          </div>

          {/* Trigger props */}
          <div>
            <TypographyH6 className="mb-2">Collapsible trigger</TypographyH6>
            <Table>
              <TableCaption>
                You can use{' '}
                <a href="https://www.radix-ui.com/primitives/docs/components/collapsible#trigger">
                  radix-ui collapsible trigger
                </a>{' '}
                props.
              </TableCaption>
            </Table>
          </div>

          {/* Content props */}
          <div>
            <TypographyH6 className="mb-2">Collapsible content</TypographyH6>
            <Table>
              <TableCaption>
                You can use{' '}
                <a href="https://www.radix-ui.com/primitives/docs/components/collapsible#content">
                  radix-ui collapsible content
                </a>{' '}
                props.
              </TableCaption>
            </Table>
          </div>
        </section>

        {/* Styles */}
        <section id="styles" className="space-y-4">
          <TypographyH2 className="pb-2 border-b">Styles</TypographyH2>
          <TypographyP>
            You can add different styles for the current component state, on all
            collapsible components, using these attributes in the class.
          </TypographyP>

          <Code>{`[&[data-state=open]]:property`}</Code>
          <Code>{`[&[data-state=closed]]:property`}</Code>
        </section>

        {/* Manualy */}
        <section id="manually" className="space-y-4">
          <TypographyH2 className="pb-2 border-b">Add manually</TypographyH2>
          <TypographyP>
            You can use this component in your other projects. Just copy paste!
          </TypographyP>

          <Code>
            {`'use client'

import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'

const Collapsible = CollapsiblePrimitive.Root

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent

export { Collapsible, CollapsibleTrigger, CollapsibleContent }`}
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
            <AsideNavigationLink href="#styles">Styles</AsideNavigationLink>
            <AsideNavigationLink href="#manually">
              Add manually
            </AsideNavigationLink>
          </AsideNavigationGroup>
        </AsideNavigation>
      </div>
    </>
  )
}
