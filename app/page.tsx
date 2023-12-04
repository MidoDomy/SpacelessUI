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
import { Separator } from '@/components/ui/separator'
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Pagination, PaginationButton } from '@/components/ui/pagination';
import { Slider, SliderItem } from '@/components/ui/slider'
import { Breadcrumbs, BreadcrumbsDivider, BreadcrumbsItem } from '@/components/ui/breadcrumbs';

export default function Home() {
  const { toast } = useToast()

  return (
    <main className='min-h-screen p-6 md:p-24'>
      <Breadcrumbs>
        <BreadcrumbsItem asChild>
          <a href="#">
            Item 1
          </a>
        </BreadcrumbsItem>
        <BreadcrumbsDivider />
        <BreadcrumbsItem>
          Item 2
        </BreadcrumbsItem>
        <BreadcrumbsDivider />
        <BreadcrumbsItem>
          Item 3
        </BreadcrumbsItem>
      </Breadcrumbs>

      <Slider navigation pagination loop>
        <SliderItem className='bg-primary-50'>
          <h1>Neki text ovdje</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. A earum corrupti reprehenderit tempora labore nulla! Animi fugit error vel sunt similique corporis cupiditate illum. Exercitationem sapiente quis libero! Consequuntur quos temporibus sed ad expedita commodi porro. Labore inventore dolorem qui.</p>
        </SliderItem>

        <SliderItem className='bg-primary-50'>
          <div className='flex h-full justify-center items-center'>
            Slide 2
          </div>
        </SliderItem>

        <SliderItem className='bg-primary-50'>
          Slide 3
        </SliderItem>
      </Slider>

      <Pagination>
        <PaginationButton>
          <Icon name='chevron-left' size='sm' />
        </PaginationButton>
        <PaginationButton>1</PaginationButton>
        <PaginationButton>2</PaginationButton>
        <PaginationButton>3</PaginationButton>
        <PaginationButton>4</PaginationButton>
        <PaginationButton>
          <Icon name='chevron-right' size='sm' />
        </PaginationButton>
      </Pagination>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Skeleton className="w-[100px] h-[20px]" />

      <Tabs defaultValue="account">
        <TabsList variant='button'>
          <TabsTrigger variant='button' value="account">Account</TabsTrigger>
          <TabsTrigger variant='button' value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Make changes to your account here.</TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>

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

      <Separator></Separator>

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

      <Separator>
        nesto
      </Separator>

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
        onlyIcon
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
