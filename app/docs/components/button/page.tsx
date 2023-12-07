import React from 'react'
import { AsideNavigation, AsideNavigationGroup, AsideNavigationGroupTitle, AsideNavigationLink } from '@/components/ui/aside-navigation'
import { TypographyH1, TypographyH2, TypographyP } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import ComponentPreview from '@/components/partials/component-preview'
import { Code } from '@/components/ui/code'

export default function ButtonPage() {
  return (
    <>
      {/* Page main content */}
      <div className='grow flex flex-col gap-10'>
        {/* Page intro info */}
        <div className='mb-10'>
          <TypographyH1>Button content</TypographyH1>
          <TypographyP>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, reiciendis!
          </TypographyP>
        </div>

        {/* Default section */}
        <section id='default'>
          <ComponentPreview 
            title='Default'
            preview={<Button>Default button</Button>}
            code={`           
import { Button } from '@/components/ui/button'

export default function ButtonDefault() {
  return <Button>Button</Button>
}
            `}
            html={`           
<button class='inline-flex items-center justify-center border rounded font-medium transition-colors focus:ring-1 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-60 text-white border-primary-600 bg-primary-600 hover:bg-primary-700 hover:border-primary-700 active:bg-primary-800 active:border-primary-800 focus:ring-primary-500 gap-2 py-2 px-4 text-sm'>
  Default button
</button>
            `}
          />
        </section>

        {/* Solid section */}
        <section id='default'>
          <ComponentPreview 
            title='Solid'
            preview={
              <div className='flex gap-2.5'>
                <Button variant='primary'>Primary</Button>
                <Button variant='secondary'>Secondary</Button>
                <Button variant='info'>Info</Button>
                <Button variant='success'>Success</Button>
                <Button variant='warning'>Warning</Button>
                <Button variant='danger'>Danger</Button>
              </div>
            }
            code={`           
import { Button } from '@/components/ui/button'

export default function ButtonsSolid() {
  return (
    <div className='flex gap-2.5'>
      <Button variant='primary'>Primary</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='info'>Info</Button>
      <Button variant='success'>Success</Button>
      <Button variant='warning'>Warning</Button>
      <Button variant='danger'>Danger</Button>
    </div>
  )
}
            `}
            html={`      
<div class="flex gap-2.5">
  <button class="inline-flex items-center justify-center border rounded font-medium transition-colors focus:ring-1 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-60 text-white border-primary-600 bg-primary-600 hover:bg-primary-700 hover:border-primary-700 active:bg-primary-800 active:border-primary-800 focus:ring-primary-500 gap-2 py-2 px-4 text-sm">Primary</button>

  <button class="inline-flex items-center justify-center border rounded font-medium transition-colors focus:ring-1 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-60 text-white border-secondary-600 bg-secondary-600 hover:bg-secondary-700 hover:border-secondary-700 active:bg-secondary-800 active:border-secondary-800 focus:ring-secondary-500 gap-2 py-2 px-4 text-sm">Secondary</button>

  <button class="inline-flex items-center justify-center border rounded font-medium transition-colors focus:ring-1 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-60 text-white border-info-600 bg-info-600 hover:bg-info-700 hover:border-info-700 active:bg-info-800 active:border-info-800 focus:ring-info-500 gap-2 py-2 px-4 text-sm">Info</button>

  <button class="inline-flex items-center justify-center border rounded font-medium transition-colors focus:ring-1 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-60 text-white border-success-600 bg-success-600 hover:bg-success-700 hover:border-success-700 active:bg-success-800 active:border-success-800 focus:ring-success-500 gap-2 py-2 px-4 text-sm">Success</button>

  <button class="inline-flex items-center justify-center border rounded font-medium transition-colors focus:ring-1 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-60 text-white border-warning-600 bg-warning-600 hover:bg-warning-700 hover:border-warning-700 active:bg-warning-800 active:border-warning-800 focus:ring-warning-500 gap-2 py-2 px-4 text-sm">Warning</button>

  <button class="inline-flex items-center justify-center border rounded font-medium transition-colors focus:ring-1 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-60 text-white border-danger-600 bg-danger-600 hover:bg-danger-700 hover:border-danger-700 active:bg-danger-800 active:border-danger-800 focus:ring-danger-500 gap-2 py-2 px-4 text-sm">Danger</button>
</div>
            `}
          />
        </section>

        {/* Outline section */}
        <section id='default'>
          <ComponentPreview 
            title='Outline'
            preview={
              <div className='flex gap-2.5'>
                <Button variant='primary-outline'>Primary</Button>
                <Button variant='secondary-outline'>Secondary</Button>
                <Button variant='info-outline'>Info</Button>
                <Button variant='success-outline'>Success</Button>
                <Button variant='warning-outline'>Warning</Button>
                <Button variant='danger-outline'>Danger</Button>
              </div>
            }
            code={`           
import { Button } from '@/components/ui/button'

export default function ButtonsOutline() {
  return (
    <div className='flex gap-2.5'>
      <Button variant='primary-outline'>Primary</Button>
      <Button variant='secondary-outline'>Secondary</Button>
      <Button variant='info-outline'>Info</Button>
      <Button variant='success-outline'>Success</Button>
      <Button variant='warning-outline'>Warning</Button>
      <Button variant='danger-outline'>Danger</Button>
    </div>
  )
}
            `}
            html={`      
<div class="flex gap-2.5">
  <button class="inline-flex items-center justify-center border rounded font-medium transition-colors focus:ring-1 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-60 border-primary-700 text-primary-700 hover:bg-primary-50 hover:border-primary-700 active:bg-primary-100 focus:ring-primary-500 gap-2 py-2 px-4 text-sm">Primary</button>

  <button class="inline-flex items-center justify-center border rounded font-medium transition-colors focus:ring-1 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-60 border-secondary-700 text-secondary-700 hover:bg-secondary-50 hover:border-secondary-700 active:bg-secondary-100 focus:ring-secondary-500 gap-2 py-2 px-4 text-sm">Secondary</button>

  <button class="inline-flex items-center justify-center border rounded font-medium transition-colors focus:ring-1 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-60 border-info-700 text-info-700 hover:bg-info-50 hover:border-info-700 active:bg-info-100 focus:ring-info-500 gap-2 py-2 px-4 text-sm">Info</button>

  <button class="inline-flex items-center justify-center border rounded font-medium transition-colors focus:ring-1 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-60 border-success-700 text-success-700 hover:bg-success-50 hover:border-success-700 active:bg-success-100 focus:ring-success-500 gap-2 py-2 px-4 text-sm">Success</button>

  <button class="inline-flex items-center justify-center border rounded font-medium transition-colors focus:ring-1 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-60 border-warning-700 text-warning-700 hover:bg-warning-50 hover:border-warning-700 active:bg-warning-100 focus:ring-warning-500 gap-2 py-2 px-4 text-sm">Warning</button>

  <button class="inline-flex items-center justify-center border rounded font-medium transition-colors focus:ring-1 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-60 border-danger-700 text-danger-700 hover:bg-danger-50 hover:border-danger-700 active:bg-danger-100 focus:ring-danger-500 gap-2 py-2 px-4 text-sm">Danger</button>
</div>
            `}
          />
        </section>

        {/* Ghost section */}
        <section id='default'>
          <ComponentPreview 
            title='Ghost'
            preview={
              <div className='flex gap-2.5'>
                <Button variant='primary-ghost'>Primary</Button>
                <Button variant='secondary-ghost'>Secondary</Button>
                <Button variant='info-ghost'>Info</Button>
                <Button variant='success-ghost'>Success</Button>
                <Button variant='warning-ghost'>Warning</Button>
                <Button variant='danger-ghost'>Danger</Button>
              </div>
            }
            code={`           
import { Button } from '@/components/ui/button'

export default function ButtonsGhost() {
  return (
    <div className='flex gap-2.5'>
      <Button variant='primary-ghost'>Primary</Button>
      <Button variant='secondary-ghost'>Secondary</Button>
      <Button variant='info-ghost'>Info</Button>
      <Button variant='success-ghost'>Success</Button>
      <Button variant='warning-ghost'>Warning</Button>
      <Button variant='danger-ghost'>Danger</Button>
    </div>
  )
}
            `}
            html={`      
<div class="flex gap-2.5">
  <button class="inline-flex items-center justify-center border rounded font-medium transition-colors focus:ring-1 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-60 border-transparent text-primary-700 hover:bg-primary-50 active:bg-primary-100 focus:ring-primary-500 gap-2 py-2 px-4 text-sm">Primary</button>

  <button class="inline-flex items-center justify-center border rounded font-medium transition-colors focus:ring-1 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-60 border-transparent text-secondary-700 hover:bg-secondary-50 active:bg-secondary-100 focus:ring-secondary-500 gap-2 py-2 px-4 text-sm">Secondary</button>

  <button class="inline-flex items-center justify-center border rounded font-medium transition-colors focus:ring-1 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-60 border-transparent text-info-700 hover:bg-info-50 active:bg-info-100 focus:ring-info-500 gap-2 py-2 px-4 text-sm">Info</button>

  <button class="inline-flex items-center justify-center border rounded font-medium transition-colors focus:ring-1 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-60 border-transparent text-success-700 hover:bg-success-50 active:bg-success-100 focus:ring-success-500 gap-2 py-2 px-4 text-sm">Success</button>

  <button class="inline-flex items-center justify-center border rounded font-medium transition-colors focus:ring-1 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-60 border-transparent text-warning-700 hover:bg-warning-50 active:bg-warning-100 focus:ring-warning-500 gap-2 py-2 px-4 text-sm">Warning</button>

  <button class="inline-flex items-center justify-center border rounded font-medium transition-colors focus:ring-1 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-60 border-transparent text-danger-700 hover:bg-danger-50 active:bg-danger-100 focus:ring-danger-500 gap-2 py-2 px-4 text-sm">Danger</button>
</div>
            `}
          />
        </section>

        {/* Size section */}
        <section id='default'>
          <ComponentPreview 
            title='Size'
            preview={
              <div className='flex items-center gap-2.5'>
                <Button size='sm'>Small</Button>
                <Button size='md'>Default</Button>
                <Button size='lg'>Large</Button>
              </div>
            }
            code={`           
import { Button } from '@/components/ui/button'

export default function ButtonsSize() {
  return (
    <div className='flex items-center gap-2.5'>
      <Button size='sm'>Small</Button>
      <Button size='md'>Default</Button>
      <Button size='lg'>Large</Button>
    </div>
  )
}
            `}
            html={`      
<div class="flex items-center gap-2.5">
  <button class="inline-flex items-center justify-center border rounded font-medium transition-colors focus:ring-1 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-60 text-white border-primary-600 bg-primary-600 hover:bg-primary-700 hover:border-primary-700 active:bg-primary-800 active:border-primary-800 focus:ring-primary-500 gap-1.5 py-1.5 px-4 text-xs">
    Small
  </button>
  
  <button class="inline-flex items-center justify-center border rounded font-medium transition-colors focus:ring-1 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-60 text-white border-primary-600 bg-primary-600 hover:bg-primary-700 hover:border-primary-700 active:bg-primary-800 active:border-primary-800 focus:ring-primary-500 gap-2 py-2 px-4 text-sm">
    Default
  </button>
  
  <button class="inline-flex items-center justify-center border rounded font-medium transition-colors focus:ring-1 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-60 text-white border-primary-600 bg-primary-600 hover:bg-primary-700 hover:border-primary-700 active:bg-primary-800 active:border-primary-800 focus:ring-primary-500 gap-2 py-2.5 px-6 text-base">
    Large
  </button>
</div>
            `}
          />
        </section>

        {/* Icon section */}
        <section id='default'>
          <ComponentPreview 
            title='Icon'
            preview={
              <div className='flex gap-2.5'>
                <Button icon='chevron-left'> Icon </Button>
                <Button iconLeft='chevron-left'> Icon left </Button>
                <Button iconRight='chevron-right'> Icon Right </Button>
              </div>
            }
            code={`           
import { Button } from '@/components/ui/button'

export default function ButtonsIcon() {
  return (
    <div className='flex gap-2.5'>
      <Button icon='chevron-left'> Icon </Button>
      <Button iconLeft='chevron-left'> Icon left </Button>
      <Button iconRight='chevron-right'> Icon Right </Button>
    </div>
  )
}
            `}
            html={`      
<div class="flex gap-2.5">
  <button class="inline-flex items-center justify-center border rounded font-medium transition-colors focus:ring-1 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-60 text-white border-primary-600 bg-primary-600 hover:bg-primary-700 hover:border-primary-700 active:bg-primary-800 active:border-primary-800 focus:ring-primary-500 gap-2 py-2 px-4 text-sm">
    <span class="icon inline-flex shrink-0 [&amp;>svg]:h-full [&amp;>svg]:w-full h-5 w-5">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </span> 
    
    Icon 
  </button>
  
  <button class="inline-flex items-center justify-center border rounded font-medium transition-colors focus:ring-1 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-60 text-white border-primary-600 bg-primary-600 hover:bg-primary-700 hover:border-primary-700 active:bg-primary-800 active:border-primary-800 focus:ring-primary-500 gap-2 py-2 px-4 text-sm">
    <span class="icon inline-flex shrink-0 [&amp;>svg]:h-full [&amp;>svg]:w-full h-5 w-5">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </span> 
    
    Icon left 
  </button>
  
  <button class="inline-flex items-center justify-center border rounded font-medium transition-colors focus:ring-1 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-60 text-white border-primary-600 bg-primary-600 hover:bg-primary-700 hover:border-primary-700 active:bg-primary-800 active:border-primary-800 focus:ring-primary-500 gap-2 py-2 px-4 text-sm"> 
    Icon Right 
    
    <span class="icon inline-flex shrink-0 [&amp;>svg]:h-full [&amp;>svg]:w-full h-5 w-5">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </span>
  </button>
</div>
            `}
          />
        </section>

        {/* Only icon section */}
        <section id='default'>
          <ComponentPreview 
            title='Only icon'
            preview={
              <Button icon='home' onlyIcon></Button>
            }
            code={`           
import { Button } from '@/components/ui/button'

export default function ButtonOnlyIcon() {
  return (
    <Button icon='home' onlyIcon></Button>
  )
}
            `}
            html={`      
<button class="inline-flex items-center justify-center border rounded font-medium transition-colors focus:ring-1 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-60 text-white border-primary-600 bg-primary-600 hover:bg-primary-700 hover:border-primary-700 active:bg-primary-800 active:border-primary-800 focus:ring-primary-500 gap-2 py-2 text-sm px-2 min-w-[38px]">
  <span class="icon inline-flex shrink-0 [&amp;>svg]:h-full [&amp;>svg]:w-full h-5 w-5">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 10.5651C3 9.9907 3 9.70352 3.07403 9.43905C3.1396 9.20478 3.24737 8.98444 3.39203 8.78886C3.55534 8.56806 3.78202 8.39175 4.23539 8.03912L11.0177 2.764C11.369 2.49075 11.5447 2.35412 11.7387 2.3016C11.9098 2.25526 12.0902 2.25526 12.2613 2.3016C12.4553 2.35412 12.631 2.49075 12.9823 2.764L19.7646 8.03913C20.218 8.39175 20.4447 8.56806 20.608 8.78886C20.7526 8.98444 20.8604 9.20478 20.926 9.43905C21 9.70352 21 9.9907 21 10.5651V17.8C21 18.9201 21 19.4801 20.782 19.908C20.5903 20.2843 20.2843 20.5903 19.908 20.782C19.4802 21 18.9201 21 17.8 21H6.2C5.07989 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4801 3 18.9201 3 17.8V10.5651Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  </span>
</button>
            `}
          />
        </section>

        {/* Rounded section */}
        <section id='default'>
          <ComponentPreview 
            title='Rounded'
            preview={
              <div className='flex gap-2.5'>
                <Button rounded> Button </Button>
                <Button icon='home' onlyIcon rounded></Button>
              </div>
            }
            code={`           
import { Button } from '@/components/ui/button'

export default function ButtonRounded() {
  return (
    <div className='flex gap-2.5'>
      <Button rounded> Button </Button>
      <Button icon='home' onlyIcon rounded></Button>
    </div>
  )
}
            `}
            html={`      
<div class="flex gap-2.5">
  <button class="inline-flex items-center justify-center border font-medium transition-colors focus:ring-1 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-60 text-white border-primary-600 bg-primary-600 hover:bg-primary-700 hover:border-primary-700 active:bg-primary-800 active:border-primary-800 focus:ring-primary-500 gap-2 py-2 px-4 text-sm rounded-full"> 
    Button
  </button>
  
  <button class="inline-flex items-center justify-center border font-medium transition-colors focus:ring-1 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-60 text-white border-primary-600 bg-primary-600 hover:bg-primary-700 hover:border-primary-700 active:bg-primary-800 active:border-primary-800 focus:ring-primary-500 gap-2 py-2 text-sm rounded-full px-2 min-w-[38px]">
    <span class="icon inline-flex shrink-0 [&amp;>svg]:h-full [&amp;>svg]:w-full h-5 w-5">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 10.5651C3 9.9907 3 9.70352 3.07403 9.43905C3.1396 9.20478 3.24737 8.98444 3.39203 8.78886C3.55534 8.56806 3.78202 8.39175 4.23539 8.03912L11.0177 2.764C11.369 2.49075 11.5447 2.35412 11.7387 2.3016C11.9098 2.25526 12.0902 2.25526 12.2613 2.3016C12.4553 2.35412 12.631 2.49075 12.9823 2.764L19.7646 8.03913C20.218 8.39175 20.4447 8.56806 20.608 8.78886C20.7526 8.98444 20.8604 9.20478 20.926 9.43905C21 9.70352 21 9.9907 21 10.5651V17.8C21 18.9201 21 19.4801 20.782 19.908C20.5903 20.2843 20.2843 20.5903 19.908 20.782C19.4802 21 18.9201 21 17.8 21H6.2C5.07989 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4801 3 18.9201 3 17.8V10.5651Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </span>
  </button>
</div>
            `}
          />
        </section>

        {/* Loading section */}
        <section id='default'>
          <ComponentPreview 
            title='Loading'
            preview={
              <div className='flex gap-2.5'>
                <Button loading> Button </Button>
                <Button icon='home' onlyIcon rounded loading></Button>
              </div>
            }
            code={`           
import { Button } from '@/components/ui/button'

export default function ButtonLoading() {
  return (
    <div className='flex gap-2.5'>
      <Button loading> Button </Button>
      <Button icon='home' onlyIcon rounded loading></Button>
    </div>
  )
}
            `}
            html={`      
<div class="flex gap-2.5">
  <button class="inline-flex items-center justify-center border rounded font-medium transition-colors focus:ring-1 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-60 text-white border-primary-600 bg-primary-600 hover:bg-primary-700 hover:border-primary-700 active:bg-primary-800 active:border-primary-800 focus:ring-primary-500 gap-2 py-2 px-4 text-sm" disabled="">
    <span class="icon inline-flex shrink-0 [&amp;>svg]:h-full [&amp;>svg]:w-full h-5 w-5 animate-spin">
      <svg viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C10.5523 0 11 0.44772 11 1V6C11 6.55228 10.5523 7 10 7C9.4477 7 9 6.55228 9 6V1C9 0.44772 9.4477 0 10 0zM10 15C10.5523 15 11 15.4477 11 16V21C11 21.5523 10.5523 22 10 22C9.4477 22 9 21.5523 9 21V16C9 15.4477 9.4477 15 10 15zM0.47374 5.5C0.74988 5.02171 1.36147 4.85783 1.83977 5.13397L6.16989 7.63398C6.64819 7.91012 6.81206 8.52171 6.53592 9C6.25978 9.4783 5.64819 9.6422 5.16989 9.366L0.83977 6.86603C0.36147 6.58988 0.1976 5.97829 0.47374 5.5zM13.4641 13C13.7403 12.5217 14.3519 12.3578 14.8301 12.634L19.1603 15.134C19.6386 15.4101 19.8024 16.0217 19.5263 16.5C19.2502 16.9783 18.6386 17.1422 18.1603 16.866L13.8301 14.366C13.3519 14.0899 13.188 13.4783 13.4641 13zM0.47374 16.5C0.1976 16.0217 0.36147 15.4101 0.83977 15.134L5.16989 12.634C5.64819 12.3578 6.25978 12.5217 6.53592 13C6.81206 13.4783 6.64819 14.0899 6.16989 14.366L1.83977 16.866C1.36147 17.1422 0.74988 16.9783 0.47374 16.5zM13.4641 9C13.188 8.52171 13.3519 7.91012 13.8301 7.63398L18.1603 5.13397C18.6386 4.85783 19.2502 5.02171 19.5263 5.5C19.8024 5.97829 19.6386 6.58988 19.1603 6.86603L14.8301 9.366C14.3519 9.6422 13.7403 9.4783 13.4641 9z" fill="currentColor"></path>
      </svg>
    </span> 
    
    Button 
  </button>
  
  <button class="inline-flex items-center justify-center border font-medium transition-colors focus:ring-1 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-60 text-white border-primary-600 bg-primary-600 hover:bg-primary-700 hover:border-primary-700 active:bg-primary-800 active:border-primary-800 focus:ring-primary-500 gap-2 py-2 text-sm rounded-full px-2 min-w-[38px]" disabled="">
    <span class="icon inline-flex shrink-0 [&amp;>svg]:h-full [&amp;>svg]:w-full h-5 w-5 animate-spin">
      <svg viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C10.5523 0 11 0.44772 11 1V6C11 6.55228 10.5523 7 10 7C9.4477 7 9 6.55228 9 6V1C9 0.44772 9.4477 0 10 0zM10 15C10.5523 15 11 15.4477 11 16V21C11 21.5523 10.5523 22 10 22C9.4477 22 9 21.5523 9 21V16C9 15.4477 9.4477 15 10 15zM0.47374 5.5C0.74988 5.02171 1.36147 4.85783 1.83977 5.13397L6.16989 7.63398C6.64819 7.91012 6.81206 8.52171 6.53592 9C6.25978 9.4783 5.64819 9.6422 5.16989 9.366L0.83977 6.86603C0.36147 6.58988 0.1976 5.97829 0.47374 5.5zM13.4641 13C13.7403 12.5217 14.3519 12.3578 14.8301 12.634L19.1603 15.134C19.6386 15.4101 19.8024 16.0217 19.5263 16.5C19.2502 16.9783 18.6386 17.1422 18.1603 16.866L13.8301 14.366C13.3519 14.0899 13.188 13.4783 13.4641 13zM0.47374 16.5C0.1976 16.0217 0.36147 15.4101 0.83977 15.134L5.16989 12.634C5.64819 12.3578 6.25978 12.5217 6.53592 13C6.81206 13.4783 6.64819 14.0899 6.16989 14.366L1.83977 16.866C1.36147 17.1422 0.74988 16.9783 0.47374 16.5zM13.4641 9C13.188 8.52171 13.3519 7.91012 13.8301 7.63398L18.1603 5.13397C18.6386 4.85783 19.2502 5.02171 19.5263 5.5C19.8024 5.97829 19.6386 6.58988 19.1603 6.86603L14.8301 9.366C14.3519 9.6422 13.7403 9.4783 13.4641 9z" fill="currentColor"></path>
      </svg>
    </span>
  </button>
</div>
            `}
          />
        </section>

        {/* Manualy */}
        <section className='space-y-4'>
          <div>
            <TypographyH2>Add manualy</TypographyH2>
            <TypographyP>
              You can use this component in your other projects. Just copy paste!
            </TypographyP>
          </div>
          
          <Code>
            {`
npm install @radix-ui/react-slot      
            `}
          </Code>

          <Code>{`
import * as React from 'react';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { Icon } from '@/components/ui/icon';
import { Loader } from '@/components/ui/loader';

const buttonSolidVariants = cva('text-white',  {
  variants: {
    variant: {
      primary: 'border-primary-600 bg-primary-600 hover:bg-primary-700 hover:border-primary-700 active:bg-primary-800 active:border-primary-800 focus:ring-primary-500',
      secondary: 'border-secondary-600 bg-secondary-600 hover:bg-secondary-700 hover:border-secondary-700 active:bg-secondary-800 active:border-secondary-800 focus:ring-secondary-500',
      info: 'border-info-600 bg-info-600 hover:bg-info-700 hover:border-info-700 active:bg-info-800 active:border-info-800 focus:ring-info-500',
      success: 'border-success-600 bg-success-600 hover:bg-success-700 hover:border-success-700 active:bg-success-800 active:border-success-800 focus:ring-success-500',
      warning: 'border-warning-600 bg-warning-600 hover:bg-warning-700 hover:border-warning-700 active:bg-warning-800 active:border-warning-800 focus:ring-warning-500',
      danger: 'border-danger-600 bg-danger-600 hover:bg-danger-700 hover:border-danger-700 active:bg-danger-800 active:border-danger-800 focus:ring-danger-500',
    },
  },
});

const buttonOutlineVariants = cva('', {
  variants: {
    variant: {
      primary: 'border-primary-700 text-primary-700 hover:bg-primary-50 hover:border-primary-700 active:bg-primary-100 focus:ring-primary-500',
      secondary: 'border-secondary-700 text-secondary-700 hover:bg-secondary-50 hover:border-secondary-700 active:bg-secondary-100 focus:ring-secondary-500',
      info: 'border-info-700 text-info-700 hover:bg-info-50 hover:border-info-700 active:bg-info-100 focus:ring-info-500',
      success: 'border-success-700 text-success-700 hover:bg-success-50 hover:border-success-700 active:bg-success-100 focus:ring-success-500',
      warning: 'border-warning-700 text-warning-700 hover:bg-warning-50 hover:border-warning-700 active:bg-warning-100 focus:ring-warning-500',
      danger: 'border-danger-700 text-danger-700 hover:bg-danger-50 hover:border-danger-700 active:bg-danger-100 focus:ring-danger-500',
    },
  },
});

const buttonGhostVariants = cva('border-transparent', {
  variants: {
    variant: {
      primary: 'text-primary-700 hover:bg-primary-50 active:bg-primary-100 focus:ring-primary-500',
      secondary: 'text-secondary-700 hover:bg-secondary-50 active:bg-secondary-100 focus:ring-secondary-500',
      info: 'text-info-700 hover:bg-info-50 active:bg-info-100 focus:ring-info-500',
      success: 'text-success-700 hover:bg-success-50 active:bg-success-100 focus:ring-success-500',
      warning: 'text-warning-700 hover:bg-warning-50 active:bg-warning-100 focus:ring-warning-500',
      danger: 'text-danger-700 hover:bg-danger-50 active:bg-danger-100 focus:ring-danger-500',
    },
  },
});

const buttonVariants = cva('inline-flex items-center justify-center border rounded font-medium transition-colors focus:ring-1 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-60', {
  variants: {
    variant: {
      primary: buttonSolidVariants({ variant: 'primary' }),
      'primary-outline': buttonOutlineVariants({ variant: 'primary' }),
      'primary-ghost': buttonGhostVariants({ variant: 'primary' }),
      secondary: buttonSolidVariants({ variant: 'secondary' }),
      'secondary-outline': buttonOutlineVariants({ variant: 'secondary' }),
      'secondary-ghost': buttonGhostVariants({ variant: 'secondary' }),
      info: buttonSolidVariants({ variant: 'info' }),
      'info-outline': buttonOutlineVariants({ variant: 'info' }),
      'info-ghost': buttonGhostVariants({ variant: 'info' }),
      success: buttonSolidVariants({ variant: 'success' }),
      'success-outline': buttonOutlineVariants({ variant: 'success' }),
      'success-ghost': buttonGhostVariants({ variant: 'success' }),
      warning: buttonSolidVariants({ variant: 'warning' }),
      'warning-outline': buttonOutlineVariants({ variant: 'warning' }),
      'warning-ghost': buttonGhostVariants({ variant: 'warning' }),
      danger: buttonSolidVariants({ variant: 'danger' }),
      'danger-outline': buttonOutlineVariants({ variant: 'danger' }),
      'danger-ghost': buttonGhostVariants({ variant: 'danger' }),
    },
    size: {
      sm: 'gap-1.5 py-1.5 px-4 text-xs',
      md: 'gap-2 py-2 px-4 text-sm',
      lg: 'gap-2 py-2.5 px-6 text-base',
    },
    rounded: { true: 'rounded-full' },
    fullWidth: { true: 'w-full' },
    onlyIcon: { true: '' }
  },
  compoundVariants: [
    {
      onlyIcon: true,
      size: 'sm',
      className: 'px-1.5 min-w-[30px]',
    },
    {
      onlyIcon: true,
      size: 'md',
      className: 'px-2 min-w-[38px]',
    },
    {
      onlyIcon: true,
      size: 'lg',
      className: 'px-2.5 min-w-[46px]',
    },
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, 
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: string;
  iconLeft?: string;
  iconRight?: string;
  loading?: boolean;
  disabled?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, size, rounded, fullWidth, loading, disabled, icon, iconLeft, iconRight, onlyIcon, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, rounded, fullWidth, onlyIcon }), className)}
        {...props}
        disabled={disabled || loading}
      >
        {/* Loader or icon left */}
        {loading ? (
          <Loader size={size} />
        ) : iconLeft ? (
          <Icon name={iconLeft} size={size} />
        ) : icon ? (
          <Icon name={icon} size={size} />
        ) : null}

        {/* Children content */}
        <Slottable>
          {!onlyIcon && children}
        </Slottable>

        {/* Icon right */}
        {iconRight && !onlyIcon && <Icon name={iconRight} size={size} />}
      </Comp>
    )
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
          `}</Code>
        </section>
      </div>

      {/* Page content aside links */}
      <div className='w-56 shrink-0'>
        <AsideNavigation>
          <AsideNavigationGroup>
            <AsideNavigationGroupTitle>
              Page content
            </AsideNavigationGroupTitle>

            <AsideNavigationLink href='#default'> Default </AsideNavigationLink>
            <AsideNavigationLink href='#solid'> Solid </AsideNavigationLink>
            <AsideNavigationLink href='#outline'> Outline </AsideNavigationLink>
            <AsideNavigationLink href='#ghost'> Ghost </AsideNavigationLink>
            <AsideNavigationLink href='#rounded'> Rounded </AsideNavigationLink>
            <AsideNavigationLink href='#icon-left'> Icon left </AsideNavigationLink>
            <AsideNavigationLink href='#icon-right'> Icon right </AsideNavigationLink>
            <AsideNavigationLink href='#only-icon'> Only icon </AsideNavigationLink>
            <AsideNavigationLink href='#manualy'> Manualy add </AsideNavigationLink>
          </AsideNavigationGroup>
        </AsideNavigation>
      </div>
    </>
  )
}
