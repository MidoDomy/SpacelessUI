import * as React from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Code } from '@/components/ui/code';
import { TypographyH5 } from '@/components/ui/typography';

interface ComponentPreviewProps 
  extends React.HTMLAttributes<HTMLSpanElement> {
  title: string;
  preview?: React.ReactNode;
  code?: React.ReactNode;
  html?: React.ReactNode;
}

const ComponentPreview: React.FC<ComponentPreviewProps> = (
  { className, children, title, preview, code, html, ...props }) => (
  <div {...props}>
    <Tabs defaultValue='preview'>
      <div className='flex justify-between mb-4 border-b'>
        <TypographyH5>{title}</TypographyH5>

        <TabsList className='-mb-px'>
          {preview && <TabsTrigger className='pb-2.5' value='preview'>Preview</TabsTrigger>}
          {code && <TabsTrigger className='pb-2.5' value='code'>Code</TabsTrigger>}
          {html && <TabsTrigger className='pb-2.5' value='html'>HTML</TabsTrigger>}
        </TabsList>
      </div>

      {/* Preview */}
      {preview &&
        <TabsContent className='mt-0' value='preview'>
          <div className='min-h-[300px] flex justify-center items-center p-4 bg-slate-100 border rounded-md text-sm'>
            {preview}
          </div>
        </TabsContent>
      }

      {/* Usage */}
      {code &&
        <TabsContent className='mt-0' value='code'>
          <Code className='min-h-[300px]'>
            {code}
          </Code>
        </TabsContent>
      }

      {/* HTML */}
      {html &&
        <TabsContent className='mt-0' value='html'>
          <Code className='min-h-[300px]'>
            {html}
          </Code>
        </TabsContent>
      }
    </Tabs>
  </div>
)

export default ComponentPreview
