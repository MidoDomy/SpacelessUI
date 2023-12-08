import React from 'react'
import {
  AsideNavigation,
  AsideNavigationGroup,
  AsideNavigationGroupTitle,
  AsideNavigationLink,
} from '@/components/ui/aside-navigation'
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import ComponentPreview from '@/components/partials/component-preview'
import { Code } from '@/components/ui/code'

export default function ButtonPage() {
  return (
    <>
      {/* Page main content */}
      <div className="grow flex flex-col gap-10">
        {/* Page intro info */}
        <div className="mb-10">
          <TypographyH1>Button content</TypographyH1>
          <TypographyP>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat,
            reiciendis!
          </TypographyP>
        </div>

        {/* Default section */}
        <section id="default">
          <ComponentPreview
            title="Default"
            preview={<Button>Default button</Button>}
            code={`import { Button } from '@/components/ui/button'

export default function ButtonDefault() {
  return <Button>Button</Button>
}`}
          />
        </section>

        {/* Solid section */}
        <section id="solid">
          <ComponentPreview
            title="Solid"
            preview={
              <div className="flex gap-2.5">
                <Button color="primary">Primary</Button>
                <Button color="secondary">Secondary</Button>
                <Button color="info">Info</Button>
                <Button color="success">Success</Button>
                <Button color="warning">Warning</Button>
                <Button color="danger">Danger</Button>
              </div>
            }
            code={`<Button color='primary'>Primary</Button>
<Button color='secondary'>Secondary</Button>
<Button color='info'>Info</Button>
<Button color='success'>Success</Button>
<Button color='warning'>Warning</Button>
<Button color='danger'>Danger</Button>`}
          />
        </section>

        {/* Outline section */}
        <section id="outline">
          <ComponentPreview
            title="Outline"
            preview={
              <div className="flex gap-2.5">
                <Button color="primary" variant="outline">
                  Primary
                </Button>
                <Button color="secondary" variant="outline">
                  Secondary
                </Button>
                <Button color="info" variant="outline">
                  Info
                </Button>
                <Button color="success" variant="outline">
                  Success
                </Button>
                <Button color="warning" variant="outline">
                  Warning
                </Button>
                <Button color="danger" variant="outline">
                  Danger
                </Button>
              </div>
            }
            code={`<Button color='primary' variant='outline'>Primary</Button>
<Button color='secondary' variant='outline'>Secondary</Button>
<Button color='info' variant='outline'>Info</Button>
<Button color='success' variant='outline'>Success</Button>
<Button color='warning' variant='outline'>Warning</Button>
<Button color='danger' variant='outline'>Danger</Button>`}
          />
        </section>

        {/* Ghost section */}
        <section id="ghost">
          <ComponentPreview
            title="Ghost"
            preview={
              <div className="flex gap-2.5">
                <Button color="primary" variant="ghost">
                  Primary
                </Button>
                <Button color="secondary" variant="ghost">
                  Secondary
                </Button>
                <Button color="info" variant="ghost">
                  Info
                </Button>
                <Button color="success" variant="ghost">
                  Success
                </Button>
                <Button color="warning" variant="ghost">
                  Warning
                </Button>
                <Button color="danger" variant="ghost">
                  Danger
                </Button>
              </div>
            }
            code={`<Button color='primary' variant='ghost'>Primary</Button>
<Button color='secondary' variant='ghost'>Secondary</Button>
<Button color='info' variant='ghost'>Info</Button>
<Button color='success' variant='ghost'>Success</Button>
<Button color='warning' variant='ghost'>Warning</Button>
<Button color='danger' variant='ghost'>Danger</Button>`}
          />
        </section>

        {/* Link section */}
        <section id="link">
          <ComponentPreview
            title="Link"
            preview={
              <div className="flex gap-5">
                <Button color="primary" variant="link">
                  Primary
                </Button>
                <Button color="secondary" variant="link">
                  Secondary
                </Button>
                <Button color="info" variant="link">
                  Info
                </Button>
                <Button color="success" variant="link">
                  Success
                </Button>
                <Button color="warning" variant="link">
                  Warning
                </Button>
                <Button color="danger" variant="link">
                  Danger
                </Button>
              </div>
            }
            code={`<Button color='primary' variant='link'>Primary</Button>
<Button color='secondary' variant='link'>Secondary</Button>
<Button color='info' variant='link'>Info</Button>
<Button color='success' variant='link'>Success</Button>
<Button color='warning' variant='link'>Warning</Button>
<Button color='danger' variant='link'>Danger</Button>`}
          />
        </section>

        {/* Size section */}
        <section id="size">
          <ComponentPreview
            title="Size"
            preview={
              <div className="flex items-center gap-2.5">
                <Button size="sm">Small</Button>
                <Button size="md">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            }
            code={`<Button size='sm'>Small</Button>
<Button size='md'>Default</Button>
<Button size='lg'>Large</Button>`}
          />
        </section>

        {/* Icon section */}
        <section id="icon">
          <ComponentPreview
            title="Icon"
            preview={
              <div className="flex gap-2.5">
                <Button icon="chevron-left"> Icon </Button>
                <Button iconLeft="chevron-left"> Icon left </Button>
                <Button iconRight="chevron-right"> Icon Right </Button>
              </div>
            }
            code={`<Button icon='chevron-left'> Icon </Button>
<Button iconLeft='chevron-left'> Icon left </Button>
<Button iconRight='chevron-right'> Icon Right </Button>`}
          />
        </section>

        {/* Only icon section */}
        <section id="only-icon">
          <ComponentPreview
            title="Only icon"
            preview={<Button icon="home" onlyIcon></Button>}
            code={`<Button icon='home' onlyIcon></Button>`}
          />
        </section>

        {/* Rounded section */}
        <section id="rounded">
          <ComponentPreview
            title="Rounded"
            preview={
              <div className="flex gap-2.5">
                <Button rounded> Button </Button>
                <Button icon="home" onlyIcon rounded></Button>
              </div>
            }
            code={`<Button rounded> Button </Button>
<Button icon='home' onlyIcon rounded></Button>`}
          />
        </section>

        {/* Loading section */}
        <section id="loading">
          <ComponentPreview
            title="Loading"
            preview={
              <div className="flex gap-2.5">
                <Button loading> Button </Button>
                <Button icon="home" onlyIcon rounded loading></Button>
              </div>
            }
            code={`<Button loading> Button </Button>
<Button icon='home' onlyIcon rounded loading></Button>`}
          />
        </section>

        {/* As child section */}
        <section id="as-child">
          <ComponentPreview
            title="As Child"
            preview={
              <Button variant="outline" asChild>
                <a href="#">Link</a>
              </Button>
            }
            code={`<Button asChild>
  <a href='#'>Link</a>
</Button>`}
          />
        </section>

        {/* Manualy */}
        <section id="manualy" className="space-y-4">
          <div>
            <TypographyH2>Add manualy</TypographyH2>
            <TypographyP>
              You can use this component in your other projects. Just copy
              paste!
            </TypographyP>
          </div>

          <Code>{`npm install @radix-ui/react-slot`}</Code>

          <Code>
            {`import * as React from 'react';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { Icon } from '@/components/ui/icon';
import { Loader } from '@/components/ui/loader';

const buttonVariants = cva(
  'inline-flex items-center justify-center border rounded font-medium transition-colors focus:ring-1 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-60', {
  variants: {
    variant: {
      solid: 'text-white border-auto-600 bg-auto-600 hover:bg-auto-700 hover:border-auto-700 active:bg-auto-800 active:border-auto-800 focus:ring-auto-500',
      outline: 'border-auto-700 text-auto-700 hover:bg-auto-50 hover:border-auto-700 active:bg-auto-100 focus:ring-auto-500',
      ghost: 'border-transparent text-auto-700 hover:bg-auto-50 active:bg-auto-100 focus:ring-auto-500'
    },
    color: {
      primary: 'color-primary',
      secondary: 'color-secondary',
      info: 'color-info',
      success: 'color-success',
      warning: 'color-warning',
      danger: 'color-danger'
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
    variant: 'solid',
    color: 'primary',
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
  ({ className, children, variant, color, size, rounded, fullWidth, loading, disabled, icon, iconLeft, iconRight, onlyIcon, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, color, size, rounded, fullWidth, onlyIcon }), className)}
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

export { Button, buttonVariants };`}
          </Code>
        </section>
      </div>

      {/* Page content aside links */}
      <div className="w-56 shrink-0">
        <AsideNavigation className="sticky top-4">
          <AsideNavigationGroup>
            <AsideNavigationGroupTitle>Page content</AsideNavigationGroupTitle>

            <AsideNavigationLink href="#default"> Default </AsideNavigationLink>
            <AsideNavigationLink href="#solid"> Solid </AsideNavigationLink>
            <AsideNavigationLink href="#outline"> Outline </AsideNavigationLink>
            <AsideNavigationLink href="#ghost"> Ghost </AsideNavigationLink>
            <AsideNavigationLink href="#link"> Link </AsideNavigationLink>
            <AsideNavigationLink href="#size"> Size </AsideNavigationLink>
            <AsideNavigationLink href="#icon"> Icon </AsideNavigationLink>
            <AsideNavigationLink href="#only-icon">
              {' '}
              Only icon{' '}
            </AsideNavigationLink>
            <AsideNavigationLink href="#rounded"> Rounded </AsideNavigationLink>
            <AsideNavigationLink href="#loading"> Loading </AsideNavigationLink>
            <AsideNavigationLink href="#as-child">
              {' '}
              As Child{' '}
            </AsideNavigationLink>
            <AsideNavigationLink href="#manualy"> Manualy </AsideNavigationLink>
          </AsideNavigationGroup>
        </AsideNavigation>
      </div>
    </>
  )
}
