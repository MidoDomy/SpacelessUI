'use client'

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
}) => (
  <div
    className={cn(
      'absolute bottom-0 right-0 -translate-x-1/4 -translate-y-1/4 flex',
      className,
    )}
    {...props}
  />
)

export { Avatar, AvatarImage, AvatarFallback, AvatarAction }
