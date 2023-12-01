'use client'
 
import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const separatorVariants = cva('flex flex-nowrap items-center', {
  variants: {
    orientation: {
      horizontal: 'flex-row w-full my-1',
      vertical: 'flex-col h-full mx-1'
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  }
});

interface SeparatorProps 
  extends VariantProps<typeof separatorVariants> {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
}

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
    & SeparatorProps
>(
  ({ className, children, orientation, decorative = true, top, bottom, left, right, ...props }, ref) => (
    <SeparatorPrimitive.Root
      ref={ref}
      className={cn(separatorVariants({ orientation, className }))}
      orientation={orientation}
      decorative={decorative}
      {...props}
    >
      {!(top || left) &&
        <div className='grow border-t border-l'></div>
      }

      {children && 
        <div className='py-0.5 px-2'>
          {children}
        </div>
      }
  
      {!(bottom || right) &&
        <div className='grow border-t border-l'></div>
      }
    </SeparatorPrimitive.Root>
  )
);
Separator.displayName = 'Separator';

export { Separator };
