import React from 'react'

import {
  AsideNavigation,
  AsideNavigationGroup,
  AsideNavigationSubGroup,
  AsideNavigationGroupTitle,
  AsideNavigationLink,
} from '@/components/ui/aside-navigation'
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import { Code } from '@/components/ui/code'
import {
  Breadcrumbs,
  BreadcrumbsDivider,
  BreadcrumbsItem,
} from '@/components/ui/breadcrumbs'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import ComponentPreview from '@/components/partials/component-preview'

export default function ButtonPage() {
  return (
    <>
      {/* Page main content */}
      <div className="col-span-9 space-y-10">
        {/* Page intro info */}
        <div>
          <Breadcrumbs className="mb-5">
            <BreadcrumbsItem>Docs</BreadcrumbsItem>
            <BreadcrumbsDivider />
            <BreadcrumbsItem>Button</BreadcrumbsItem>
          </Breadcrumbs>

          <TypographyH1 className="mb-1">Button</TypographyH1>
          <TypographyP>
            The button is the basic component of every project.
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

        {/* Usage section */}
        <section id="usage" className="space-y-5">
          <TypographyH2 className="pb-2 border-b">Usage</TypographyH2>

          <Code>{`import { Button } from '@/components/ui/button'`}</Code>
          <Code>{`<Button>Content</Button>`}</Code>
        </section>

        {/* Props section */}
        <section id="props" className="space-y-5">
          <TypographyH2 className="pb-2 border-b">Props</TypographyH2>

          <Table>
            <TableCaption>
              Besides these props, you can also use the default{' '}
              <code>button</code> props.
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Default</TableHead>
                <TableHead>Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>variant</TableCell>
                <TableCell>Specifies the button style.</TableCell>
                <TableCell>'solid'</TableCell>
                <TableCell>'solid' | 'outline' | 'ghost' | 'link'</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>color</TableCell>
                <TableCell>Specifies the button color.</TableCell>
                <TableCell>'primary'</TableCell>
                <TableCell>
                  'primary' | 'secondary' | 'info' | 'success' | 'warning' |
                  'danger'
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>size</TableCell>
                <TableCell></TableCell>
                <TableCell>'md'</TableCell>
                <TableCell>'sm' | 'md' | 'lg'</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>rounded</TableCell>
                <TableCell></TableCell>
                <TableCell>false</TableCell>
                <TableCell>boolean</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>fullWidth</TableCell>
                <TableCell></TableCell>
                <TableCell>false</TableCell>
                <TableCell>boolean</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>icon</TableCell>
                <TableCell></TableCell>
                <TableCell>-</TableCell>
                <TableCell>string</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>iconLeft</TableCell>
                <TableCell></TableCell>
                <TableCell>-</TableCell>
                <TableCell>string</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>iconRight</TableCell>
                <TableCell></TableCell>
                <TableCell>-</TableCell>
                <TableCell>string</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>onlyIcon</TableCell>
                <TableCell></TableCell>
                <TableCell>false</TableCell>
                <TableCell>boolean</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>loading</TableCell>
                <TableCell></TableCell>
                <TableCell>false</TableCell>
                <TableCell>boolean</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>asChild</TableCell>
                <TableCell>
                  If it is set to true then the default tag is changed with the
                  child tag that is used inside Button.
                </TableCell>
                <TableCell>false</TableCell>
                <TableCell>boolean</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        {/* Examples */}
        <section id="examples" className="space-y-6">
          <TypographyH2 className="pb-2 border-b">Examples</TypographyH2>

          {/* Solid section */}
          <ComponentPreview
            id="solid"
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

          {/* Outline section */}
          <ComponentPreview
            id="outline"
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

          {/* Ghost section */}
          <ComponentPreview
            id="ghost"
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

          {/* Link section */}
          <ComponentPreview
            id="link"
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

          {/* Size section */}
          <ComponentPreview
            id="size"
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

          {/* Rounded section */}
          <ComponentPreview
            id="rounded"
            title="Rounded"
            preview={
              <div className="flex gap-2.5">
                <Button rounded> Button </Button>
                <Button
                  icon="home"
                  onlyIcon
                  rounded
                  aria-label="Button preview"
                ></Button>
              </div>
            }
            code={`<Button rounded> Button </Button>
<Button icon='home' onlyIcon rounded></Button>`}
          />

          {/* Full width section */}
          <ComponentPreview
            id="full-width"
            title="Full width"
            preview={<Button fullWidth> Full width </Button>}
            code={`<Button fullWidth> Full width </Button>`}
          />

          {/* Icon section */}
          <ComponentPreview
            id="icon"
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

          {/* Only icon section */}
          <ComponentPreview
            id="only-icon"
            title="Only icon"
            preview={
              <Button icon="home" onlyIcon aria-label="Button preview"></Button>
            }
            code={`<Button icon='home' onlyIcon></Button>`}
          />

          {/* Loading section */}
          <ComponentPreview
            id="loading"
            title="Loading"
            preview={
              <div className="flex gap-2.5">
                <Button loading> Button </Button>
                <Button
                  icon="home"
                  onlyIcon
                  rounded
                  loading
                  aria-label="Button preview"
                ></Button>
              </div>
            }
            code={`<Button loading> Button </Button>
<Button icon='home' onlyIcon rounded loading></Button>`}
          />

          {/* As child section */}
          <ComponentPreview
            id="as-child"
            title="As Child"
            preview={
              <Button asChild>
                <a href="#as-child">Link</a>
              </Button>
            }
            code={`<Button asChild>
  <a href='#'>Link</a>
</Button>`}
          />
        </section>

        {/* Styles section */}
        <section id="styles" className="space-y-4">
          <TypographyH2 className="pb-2 border-b">Styles</TypographyH2>
          <TypographyP>
            If you want the other component to have styles like a button, you
            can achieve this with the <code>'asChild'</code> props or you can
            export <code>'buttonVariants'</code> and use them in the class.
          </TypographyP>

          <Code>{`import { buttonVariants } from '@/components/ui/button'`}</Code>
          <Code>{`<Link className={buttonVariants({ variant: "outline" })}>Click here</Link>`}</Code>
        </section>

        {/* Manualy */}
        <section id="manually" className="space-y-4">
          <TypographyH2 className="pb-2 border-b">Add manually</TypographyH2>
          <TypographyP>
            You can use this component in your other projects. Just copy paste!
          </TypographyP>

          <Code>{`npm install @radix-ui/react-slot`}</Code>

          <Code>
            {`import * as React from 'react'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Icon } from '@/components/ui/icon'
import { Loader } from '@/components/ui/loader'

const buttonVariants = cva(
  'inline-flex items-center justify-center border rounded font-medium transition-colors disabled:pointer-events-none disabled:opacity-60',
  {
    variants: {
      variant: {
        solid:
          'text-white hover:text-white border-auto-600 bg-auto-600 hover:bg-auto-700 hover:border-auto-700 active:bg-auto-800 active:border-auto-800 focus:ring-1 focus:ring-offset-1 focus:ring-auto-500',
        outline:
          'border-auto-600 text-auto-600 hover:bg-auto-100 hover:border-auto-700 hover:text-auto-700 active:bg-auto-200 active:border-auto-800 active:text-auto-800 focus:ring-1 focus:ring-offset-1 focus:ring-auto-500',
        ghost:
          'border-transparent text-auto-600 hover:bg-auto-100 hover:text-auto-700 active:bg-auto-200 active:text-auto-800 focus:ring-1 focus:ring-offset-1 focus:ring-auto-500',
        link: 'text-auto-600 hover:text-auto-700 active:text-auto-800',
      },
      color: {
        primary: 'color-primary',
        secondary: 'color-secondary',
        info: 'color-info',
        success: 'color-success',
        warning: 'color-warning',
        danger: 'color-danger',
      },
      size: {
        sm: 'gap-1.5 py-1.5 px-3.5 text-xs',
        md: 'gap-2 py-2 px-4 text-sm',
        lg: 'gap-2 py-2.5 px-6 text-base',
      },
      rounded: { true: 'rounded-full' },
      fullWidth: { true: 'w-full' },
      onlyIcon: { true: '' },
    },
    compoundVariants: [
      { onlyIcon: true, size: 'sm', className: 'px-1.5 min-w-[30px]' },
      { onlyIcon: true, size: 'md', className: 'px-2 min-w-[38px]' },
      { onlyIcon: true, size: 'lg', className: 'px-2.5 min-w-[46px]' },
      { variant: 'link', size: ['sm', 'md', 'lg'], className: 'p-0 border-0' },
    ],
    defaultVariants: {
      variant: 'solid',
      color: 'primary',
      size: 'md',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger'
  icon?: string
  iconLeft?: string
  iconRight?: string
  loading?: boolean
  disabled?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant,
      color,
      size,
      rounded,
      fullWidth,
      loading,
      disabled,
      icon,
      iconLeft,
      iconRight,
      onlyIcon,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({
            variant,
            color,
            size,
            rounded,
            fullWidth,
            onlyIcon,
          }),
          className,
        )}
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
        <Slottable>{!onlyIcon && children}</Slottable>

        {/* Icon right */}
        {iconRight && !onlyIcon && <Icon name={iconRight} size={size} />}
      </Comp>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }`}
          </Code>
        </section>
      </div>

      {/* Page content aside links */}
      <div className="col-span-3">
        <AsideNavigation className="sticky top-4">
          <AsideNavigationGroup>
            <AsideNavigationGroupTitle>Page content</AsideNavigationGroupTitle>

            <AsideNavigationLink href="#default">Default</AsideNavigationLink>
            <AsideNavigationLink href="#usage">Usage</AsideNavigationLink>
            <AsideNavigationLink href="#props">Props</AsideNavigationLink>
            <AsideNavigationLink href="#examples">Examples</AsideNavigationLink>
            <AsideNavigationSubGroup>
              <AsideNavigationLink href="#solid">Solid</AsideNavigationLink>
              <AsideNavigationLink href="#outline">Outline</AsideNavigationLink>
              <AsideNavigationLink href="#ghost">Ghost</AsideNavigationLink>
              <AsideNavigationLink href="#link">Link</AsideNavigationLink>
              <AsideNavigationLink href="#size">Size</AsideNavigationLink>
              <AsideNavigationLink href="#rounded">Rounded</AsideNavigationLink>
              <AsideNavigationLink href="#full-width">
                Full width
              </AsideNavigationLink>
              <AsideNavigationLink href="#icon">Icon</AsideNavigationLink>
              <AsideNavigationLink href="#only-icon">
                Only icon
              </AsideNavigationLink>
              <AsideNavigationLink href="#loading">Loading</AsideNavigationLink>
              <AsideNavigationLink href="#as-child">
                As Child
              </AsideNavigationLink>
            </AsideNavigationSubGroup>
            <AsideNavigationLink href="#styles">Styles</AsideNavigationLink>
            <AsideNavigationLink href="#manually">
              Add manually
            </AsideNavigationLink>
          </AsideNavigationGroup>
        </AsideNavigation>
      </div>
    </>
  )
}
