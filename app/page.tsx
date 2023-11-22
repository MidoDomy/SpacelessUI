'use client'

import React from 'react';

import { Toaster } from '@/components/ui/toaster'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { ToastAction } from '@/components/ui/toast'

export default function Home() {
  const { toast } = useToast()

  return (
    <>
      <main className='min-h-screen p-24'>
        <Button
          variant='primary-outline'
          size='sm'
          onClick={() => {
            toast({
              variant: 'primary',
              title: 'Notification title',
              description: 'Your message has been sent.',
              action: (<>
                <ToastAction altText='Try' asChild>
                  <Button variant='primary-outline' size='sm'>Try</Button>
                </ToastAction>

                <ToastAction altText='Close' asChild>
                  <Button variant='danger-outline' size='sm' onClick={() => console.log('nesto')}>Close</Button>
                </ToastAction>
              </>),
            })
          }}
        >
          Show Toast primary
        </Button>

        <Button
          variant='secondary-outline'
          size='md'
          onClick={() => {
            toast({
              variant: 'secondary',
              description: 'Your message has been sent.',
            })
          }}
        >
          Show Toast secondary
        </Button>

        <Button
          variant='info-outline'
          size='lg'
          onClick={() => {
            toast({
              variant: 'info',
              description: 'Your message has been sent.',
            })
          }}
        >
          Show Toast info
        </Button>

        <Button
          variant='success-outline'
          onClick={() => {
            toast({
              variant: 'success',
              description: 'Your message has been sent.',
            })
          }}
        >
          Show Toast success
        </Button>

        <Button
          variant='warning-outline'
          onClick={() => {
            toast({
              variant: 'warning',
              description: 'Your message has been sent.',
            })
          }}
        >
          Show Toast warning
        </Button>

        <Button
          variant='danger-outline'
          onClick={() => {
            toast({
              variant: 'danger',
              title: 'Danger',
              description: 'Your message has been sent.',
            })
          }}
        >
          Show Toast danger
        </Button>
      </main>
        
      <Toaster />
    </>
  )
}
