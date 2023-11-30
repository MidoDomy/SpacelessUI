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
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuShortcut,
  ContextMenuTrigger, 
  ContextMenuPortal, 
  ContextMenuRadioGroup, 
  ContextMenuRadioItem, 
  ContextMenuSeparator, 
  ContextMenuSub, 
  ContextMenuSubContent, 
  ContextMenuSubTrigger } from '@/components/ui/context-menu';
import { Badge } from '@/components/ui/badge';
import { Tag } from '@/components/ui/tag';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Home() {
  const { toast } = useToast()

  return (
    <main className='min-h-screen p-6 md:p-24'>
      <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            New Tab <div className="RightSlot">⌘+T</div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            New Window <div className="RightSlot">⌘+N</div>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            New Private Window <div className="RightSlot">⇧+⌘+N</div>
          </DropdownMenuItem>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              More Tools
            </DropdownMenuSubTrigger>
            
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                Save Page As… <div className="RightSlot">⌘+S</div>
              </DropdownMenuItem>
              <DropdownMenuItem>Create Shortcut…</DropdownMenuItem>
              <DropdownMenuItem>Name Window…</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Developer Tools</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          <DropdownMenuSeparator />

          <DropdownMenuCheckboxItem>
            Show Bookmarks <div className="RightSlot">⌘+B</div>
          </DropdownMenuCheckboxItem>

          <DropdownMenuCheckboxItem>
            Show Full URLs
          </DropdownMenuCheckboxItem>

          <DropdownMenuSeparator />

          <DropdownMenuLabel>People</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={''}>
            <DropdownMenuRadioItem value="pedro">
              Pedro Duarte
            </DropdownMenuRadioItem>

            <DropdownMenuRadioItem value="colm">
              Colm Tuite
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone This will permanently delete your account
              and remove your data from our servers
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
          </SheetHeader>
        
          <SheetDescription>
            This action cannot be undone This will permanently delete your account
            and remove your data from our servers
          </SheetDescription>
        </SheetContent>
      </Sheet>
      
      <div className='flex gap-1 mb-2'>
        <Badge variant='primary'>Badge</Badge>
        <Badge variant='secondary'>Badge</Badge>
        <Badge variant='info'>Badge</Badge>
        <Badge variant='success'>Badge</Badge>
        <Badge variant='warning'>Badge</Badge>
        <Badge variant='danger'>Badge</Badge>
      </div>
      
      <div className='flex gap-1'>
        <Tag variant='primary'>Tag 2</Tag>
        <Tag variant='secondary'>Tag 2</Tag>
        <Tag variant='info'>Tag 2</Tag>
        <Tag variant='success'>Tag 2</Tag>
        <Tag variant='warning'>Tag 2</Tag>
        <Tag variant='danger'>Tag 2</Tag>
      </div>

      <Tag size='sm'>Tag 2</Tag>
      <Tag size='md'>Tag 2</Tag>
      <Tag size='lg'>Tag 2</Tag>

      <Divider></Divider>

      <ContextMenu>
        <ContextMenuTrigger>Right click</ContextMenuTrigger>
        <ContextMenuContent className='min-w-[220px]'>
          <ContextMenuLabel>Menu label</ContextMenuLabel>
          <ContextMenuItem onClick={() => {}}>Item</ContextMenuItem>

          <ContextMenuGroup>
            <ContextMenuItem>Item</ContextMenuItem>
          </ContextMenuGroup>

          <ContextMenuCheckboxItem>
            Chekbox item
          </ContextMenuCheckboxItem>

          <ContextMenuRadioGroup>
            <ContextMenuRadioItem value={''}>
              Radio item
            </ContextMenuRadioItem>
          </ContextMenuRadioGroup>

          <ContextMenuSeparator />

          <ContextMenuSub>
            <ContextMenuSubTrigger>Sub trigger</ContextMenuSubTrigger>
          
            <ContextMenuSubContent>
              <ContextMenuItem>Item</ContextMenuItem>
              <ContextMenuItem>Item</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuShortcut>ctrl + C</ContextMenuShortcut>
        </ContextMenuContent>
      </ContextMenu>

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
        <PopoverContent>Place content for the popover here</PopoverContent>
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
          Yes Free to use for personal and commercial projects No attribution
          required
        </CollapsibleContent>
      </Collapsible>

      <Accordion type='single'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes It adheres to the WAI-ARIA design pattern
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
        icon='home'
        rounded
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
