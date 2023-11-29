'use client'

import React from 'react';

import { Toaster } from '@/components/ui/toaster'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  ListGroup,
  ListGroupItem
} from '@/components/ui/list-group'
import { Button } from '@/components/ui/button';
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'
import { Icon } from '@/components/ui/icon';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Divider } from '@/components/ui/divider'

export default function Home() {
  const { toast } = useToast()

  return (
    <main className='min-h-screen p-6 md:p-24'>
      <ListGroup>
        <ListGroupItem>Can I use this in my project?</ListGroupItem>
        <ListGroupItem variant='primary'>Can I use this in my project?</ListGroupItem>
        <ListGroupItem variant='secondary'>Can I use this in my project?</ListGroupItem>
        <ListGroupItem variant='info'>Can I use this in my project?</ListGroupItem>
        <ListGroupItem variant='success'>Can I use this in my project?</ListGroupItem>
        <ListGroupItem variant='warning'>Can I use this in my project?</ListGroupItem>
        <ListGroupItem variant='danger'>Can I use this in my project?</ListGroupItem>
      </ListGroup>

      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>

      <Divider>
        nesto
      </Divider>

      <TooltipProvider>
        <Tooltip aria-label="Toggle italic">
          <TooltipTrigger>Hover</TooltipTrigger>

          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <Collapsible>
        <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
        <CollapsibleContent>
          Yes. Free to use for personal and commercial projects. No attribution
          required.
        </CollapsibleContent>
      </Collapsible>

      <Accordion type='single'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='item-2'>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='item-3'>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button
        variant='primary'
        size='sm'
        onClick={() => {
          toast({
            title: 'Scheduled: Catch up ',
            description: 'Friday, February 10, 2023 at 5:57 PM',
            action: (
              <ToastAction altText='Goto schedule to undo'>Undo</ToastAction>
            ),
          })
        }}
      >
        Add to calendar
      </Button>

      <Toaster />
    </main>
  )
}
