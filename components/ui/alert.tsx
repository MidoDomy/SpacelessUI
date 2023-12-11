import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Icon } from '@/components/ui/icon'

const alertVariants = cva(
  'flex items-start gap-3 px-4 py-3 rounded-lg border border-auto-400 text-auto-700 bg-auto-50',
  {
    variants: {
      color: {
        primary: 'color-primary',
        secondary: 'color-secondary',
        info: 'color-info',
        success: 'color-success',
        warning: 'color-warning',
        danger: 'color-danger',
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  },
)

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger'
  icon?: string
  onClose?: () => void
}

const setIcon = (variant: string | null | undefined) => {
  switch (variant) {
    case 'success':
      return 'check-circle'
    case 'warning':
      return 'alert-hexagon'
    case 'danger':
      return 'alert-triangle'
    default:
      return 'alert-circle'
  }
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    { className, children, color, icon = setIcon(color), onClose, ...props },
    ref,
  ) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ color }), className)}
      {...props}
    >
      <Icon className="mt-0.5" name={icon} />

      <div className="grow">{children}</div>

      {onClose && (
        <button type="button" onClick={onClose}>
          <Icon name="x" size="sm" />
        </button>
      )}
    </div>
  ),
)
Alert.displayName = 'Alert'

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5 ref={ref} className={cn('font-medium', className)} {...props} />
))
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('text-sm', className)} {...props} />
))
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertTitle, AlertDescription }
