import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const dividerVariants = cva('flex flex-nowrap items-center', {
  variants: {
    direction: {
      horizontal: 'flex-row w-full my-1',
      vertical: 'flex-col h-full mx-1'
    },
  },
  defaultVariants: {
    direction: 'horizontal',
  }
});

interface DividerProps 
  extends React.HTMLAttributes<HTMLDivElement>, 
    VariantProps<typeof dividerVariants> {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, children, direction, top, bottom, left, right, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(dividerVariants({ direction }), className)} 
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
    </div>
  )
);
Divider.displayName = 'Divider';

export { Divider };
