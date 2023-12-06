import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink
} from '@/components/ui/navigation-menu'

export default function Header() {
  return (
    <header className='py-4 border-b'>
      <div className='container'>
        <div className='flex justify-between items-center gap-3'>
          {/* Logo */}
          <Link className='flex gap-2 font-medium text-inherit' href='/'>
            <img
              className='w-6' 
              src='/images/logo.svg' 
              alt='Logo' 
            />
            Logo img
          </Link>

          {/* Navigation */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href='/docs/introduction'> Documentation </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href='/docs/components/accordion'> Components </NavigationMenuLink>
              </NavigationMenuItem>

              {/* <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <NavigationMenuLink href='/templates'> Templates </NavigationMenuLink>
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  Content new
                </NavigationMenuContent>
              </NavigationMenuItem> */}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Contacts, Theme (custom), Search */}
          <div>
            Actions
          </div>
        </div>
      </div>
    </header>
  )
}
