import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const ListGroup = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul ref={ref} className={cn('border rounded-md', className)} {...props} />
))
ListGroup.displayName = 'ListGroup'

const listGroupItemVariants = cva(
  'flex gap-3 py-3 px-4 border-b last:border-b-0',
  {
    variants: {
      variant: {
        default: '[a&]:hover:bg-gray-50',
        primary: 'bg-primary-50 text-primary-700 [a&]:hover:bg-primary-100',
        secondary:
          'bg-secondary-50 text-secondary-700 [a&]:hover:bg-secondary-100',
        info: 'bg-info-50 text-info-700 [a&]:hover:bg-info-100',
        success: 'bg-success-50 text-success-700 [a&]:hover:bg-success-100',
        warning: 'bg-warning-50 text-warning-700 [a&]:hover:bg-warning-100',
        danger: 'bg-danger-50 text-danger-700 [a&]:hover:bg-danger-100',
      },
      defaultVariants: {
        variant: 'default',
      },
    },
  },
)

interface ListGroupItemProps
  extends React.HTMLAttributes<HTMLLIElement>,
    VariantProps<typeof listGroupItemVariants> {
  asChild?: boolean
}

const ListGroupItem = React.forwardRef<HTMLLIElement, ListGroupItemProps>(
  ({ className, variant = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'li'

    return (
      <Comp
        ref={ref}
        className={cn(listGroupItemVariants({ variant, className }))}
        {...props}
      />
    )
  },
)
ListGroupItem.displayName = 'ListGroupItem'

export { ListGroup, ListGroupItem }
