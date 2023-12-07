'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { Icon } from '@/components/ui/icon'

const Code: React.FC<React.HTMLProps<HTMLDivElement>> = (
  { className, children, ...props }) => (
  <div
    className={cn(
      'flex items-start gap-4 px-4 bg-slate-800 rounded-md text-slate-100 text-sm whitespace-pre-wrap',
      className
    )}
    {...props} 
  >
    <code className='grow'>
      {children}
    </code>

    <button 
      className='shrink-0 mt-4'
      onClick={async() => await navigator.clipboard.writeText(`${children}`)}
    >
      <Icon name='copy' size='sm' />
    </button>
  </div>
)
Code.displayName = 'Code'

export { Code }
