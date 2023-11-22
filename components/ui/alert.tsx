import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

import { Icon } from '@/components/ui/icon';

const alertVariants = cva(
  'flex items-start gap-3 w-full rounded-lg border px-4 py-3',
  {
    variants: {
      variant: {
        primary: 'border-primary-700 text-primary-700 bg-primary-50',
        secondary: 'border-secondary-700 text-secondary-700 bg-secondary-50',
        info: 'border-info-700 text-info-700 bg-info-50',
        success: 'border-success-700 text-success-700 bg-success-50',
        warning: 'border-warning-700 text-warning-700 bg-warning-50',
        danger: 'border-danger-700 text-danger-700 bg-danger-50',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  icon?: string;
  title?: string;
  description: string;
  onClose?: () => void;
}

const setIcon = (variant: string | null | undefined) => {
  switch(variant) {
    case 'success':
      return 'check-circle';
    case 'warning':
      return 'alert-hexagon';
    case 'danger':
      return 'alert-triangle';
    default:
      return 'alert-circle';
  }
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, children, variant, icon, title, description, onClose, ...props }, ref) => {
    let iconName = icon ? icon : setIcon(variant)

    return (
      <div
        ref={ref}
        role='alert'
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        <Icon className={title && 'mt-0.5'} name={iconName} />

        <div className='grow'>
          {title ? <h5 className='font-medium'>{ title }</h5> : null}

          <div className='text-sm'>
            { description }
          </div>

          {children}
        </div>
        
        {onClose && 
          <button onClick={onClose}>
            <Icon name='x' size='sm' />
          </button>
        }
      </div>
    )
  }
)
Alert.displayName = 'Alert'

export { Alert }
