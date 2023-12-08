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
  },
  defaultVariants: {
    size: 'md',
  },
})

interface AvatarProps extends VariantProps<typeof avatarVariants> {
  src?: string
  alt?: string
  fallback?: React.ReactNode
  delayMs?: number
  action?: React.ReactNode
}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & AvatarProps
>(
  (
    {
      className,
      size,
      rounded,
      src,
      alt = '',
      fallback,
      delayMs,
      action,
      ...props
    },
    ref,
  ) => (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(avatarVariants({ size, rounded, className }))}
      {...props}
    >
      <div
        className={`overflow-hidden h-full w-full border-2 ${
          rounded ? 'rounded-full' : 'rounded-lg'
        }`}
      >
        <AvatarPrimitive.Image
          className="aspect-square h-full w-full object-cover"
          src={src}
          alt={alt}
        />

        {fallback && (
          <AvatarPrimitive.Fallback
            className="flex h-full w-full items-center justify-center bg-secondary-100"
            delayMs={delayMs}
          >
            {fallback}
          </AvatarPrimitive.Fallback>
        )}
      </div>

      {action && (
        <div className="absolute bottom-0 right-0 translate-x-1/3">
          {action}
        </div>
      )}
    </AvatarPrimitive.Root>
  ),
)
Avatar.displayName = AvatarPrimitive.Root.displayName

export { Avatar, avatarVariants }
