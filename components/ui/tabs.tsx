'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const Tabs = TabsPrimitive.Root

const tabsListVariants = cva('inline-flex items-center justify-center rounded-md', {
  variants: {
    variant: {
      link: 'gap-3',
      button: 'p-1 bg-gray-100'
    },
  },
  defaultVariants: {
    variant: 'link',
  },
})

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
    & VariantProps<typeof tabsListVariants>
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(tabsListVariants({ variant }), className)}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const tabsTriggerVariants = cva('inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all hover:text-primary-700 disabled:pointer-events-none disabled:opacity-50', {
  variants: {
    variant: {
      link: 'pb-1 px-0.5 border-b border-transparent data-[state=active]:border-primary-700 data-[state=active]:text-primary-700',
      button: 'px-3 py-1.5 rounded-sm data-[state=active]:bg-primary-50 data-[state=active]:text-primary-700 data-[state=active]:shadow-sm'
    },
  },
  defaultVariants: {
    variant: 'link',
  },
})

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
    & VariantProps<typeof tabsTriggerVariants>
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(tabsTriggerVariants({ variant }), className)}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2',
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
