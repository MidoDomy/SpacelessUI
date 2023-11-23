'use client'

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'

import { Icon } from '@/components/ui/icon'

export function Toaster() {
  const { toasts } = useToast()

  const iconName = (variant: string | null | undefined) => {
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

  return (
    <ToastProvider>
      {toasts.map(function ({ id, variant, title, description, action, ...props }) {
        return (
          <Toast key={id} variant={variant} {...props}>
            <Icon className={title && 'mt-0.5'} name={iconName(variant)} />

            <div className='grow flex flex-col gap-2 items-start'>
              <div>
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && <ToastDescription>{description}</ToastDescription>}
              </div>

              {action &&
                <div className='flex gap-2'>
                  {action}
                </div>
              }
            </div>

            <ToastClose />
          </Toast>
        )
      })}
      
      <ToastViewport />
    </ToastProvider>
  )
}
