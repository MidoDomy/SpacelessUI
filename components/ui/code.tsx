'use client'

import * as React from 'react'
import { useState } from 'react'

import { cn } from '@/lib/utils'
import { Icon } from '@/components/ui/icon'

const Code: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  const [copyText, setCopyText] = useState('Copy');

  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(`${children}`);
    setCopyText('Copied!');

    setTimeout(() => {
      setCopyText('Copy');
    }, 1500)
  };

  return (
    <div
      className={cn(
        'flex items-start gap-4 px-4 py-3 bg-slate-800 border rounded-md text-slate-100 text-sm whitespace-pre-wrap',
        className,
      )}
      {...props}
    >
      <code className="grow bg-transparent">{children}</code>

      <div className='relative'>
        <button
          className="peer shrink-0 text-slate-300 hover:text-slate-50"
          onClick={handleCopyClick}
          aria-label="Copy"
        >
          <Icon name="copy" size="sm" />
        </button>

        <span className='z-50 opacity-0 peer-hover:opacity-100 transition-opacity absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 overflow-hidden rounded-md border bg-body-bg text-body-color px-3 py-1.5 text-sm shadow-md'>
          {copyText}
        </span>
      </div>
    </div>
  )
}
Code.displayName = 'Code'

export { Code }
