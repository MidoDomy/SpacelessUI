import * as React from 'react'

import { cn } from '@/lib/utils'

const TypographyH1: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (
  { className, ...props }) => (
  <h1 
    className={cn(
      'scroll-m-20 text-4xl font-semibold tracking-tight', 
      className
    )} 
    {...props}
  />
)
TypographyH1.displayName = 'TypographyH1'

const TypographyH2: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (
  { className, ...props }) => (
  <h2
    className={cn(
      'scroll-m-20 text-3xl font-semibold tracking-tight', 
      className
    )} 
    {...props}
  />
)
TypographyH2.displayName = 'TypographyH2'

const TypographyH3: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (
  { className, ...props }) => (
  <h3
    className={cn(
      'scroll-m-20 text-2xl font-semibold tracking-tight', 
      className
    )} 
    {...props}
  />
)
TypographyH3.displayName = 'TypographyH3'

const TypographyH4: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (
  { className, ...props }) => (
  <h4
    className={cn(
      'scroll-m-20 text-xl font-semibold tracking-tight', 
      className
    )} 
    {...props}
  />
)
TypographyH4.displayName = 'TypographyH4'

const TypographyH5: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (
  { className, ...props }) => (
  <h5
    className={cn(
      'scroll-m-20 text-lg font-semibold tracking-tight', 
      className
    )} 
    {...props}
  />
)
TypographyH5.displayName = 'TypographyH5'

const TypographyP: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = (
  { className, ...props }) => (
  <p className={cn('', className)} {...props} />
)
TypographyP.displayName = 'TypographyP'

export { 
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyH5,
  TypographyP
}
