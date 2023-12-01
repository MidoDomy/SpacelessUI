import * as React from 'react'

import { cn } from '@/lib/utils'

const Pagination = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref} 
    className='flex items-center gap-1.5'
    {...props}
  />
))
Pagination.displayName = 'Pagination'

const PaginationButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn('inline-flex items-center justify-center min-w-[34px] min-h-[34px] p-1.5 border rounded-md text-sm font-medium bg-gray-50 hover:bg-gray-100 transition-colors', className)}
    {...props}
  />
))
PaginationButton.displayName = 'PaginationButton'

export {
  Pagination,
  PaginationButton
}
