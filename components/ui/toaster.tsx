'use client'

import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';
import { Icon } from '@/components/ui/icon';

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
  };

  const renderToast = ({ id, variant, title, description, action, ...props }: any) => (
    <Toast key={id} variant={variant} {...props}>
      <Icon className={title ? 'mt-0.5' : undefined} name={iconName(variant)} />

      <div className='grow flex flex-col gap-2 items-start'>
        <div>
          {title && <ToastTitle>{title}</ToastTitle>}
          {description && <ToastDescription>{description}</ToastDescription>}
        </div>

        {action && (
          <div className='flex gap-2'>
            {action}
          </div>
        )}
      </div>

      <ToastClose />
    </Toast>
  );

  return (
    <ToastProvider>
      {toasts.map(renderToast)}
      
      <ToastViewport />
    </ToastProvider>
  )
};
