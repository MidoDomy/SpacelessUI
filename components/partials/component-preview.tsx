'use client'

import * as React from 'react'
import { useEffect, useRef, useState } from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Code } from '@/components/ui/code'

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLSpanElement> {
  title: string
  preview?: React.ReactNode
  code?: React.ReactNode
}

const ComponentPreview: React.FC<ComponentPreviewProps> = ({
  className,
  children,
  title,
  preview,
  code,
  ...props
}) => {
  const sourceDivRef = useRef<HTMLDivElement | null>(null)
  // const [innerHTML, setInnerHTML] = useState<string>('')

  // useEffect(() => {
  //   // Get inner HTML content from the source div
  //   const sourceDiv = sourceDivRef.current
  //   if (sourceDiv) {
  //     setInnerHTML(sourceDiv.innerHTML)
  //   }
  // }, [preview])

  return (
    <div {...props}>
      <Tabs defaultValue="preview">
        <div className="flex justify-between mb-4 border-b">
          <div className="font-medium">{title}</div>

          <TabsList className="-mb-px">
            {preview && (
              <TabsTrigger className="pb-2.5" value="preview">
                Preview
              </TabsTrigger>
            )}
            {code && (
              <TabsTrigger className="pb-2.5" value="code">
                Code
              </TabsTrigger>
            )}
            {/* {preview && (
              <TabsTrigger className="pb-2.5" value="html">
                HTML
              </TabsTrigger>
            )} */}
          </TabsList>
        </div>

        {/* Preview */}
        {preview && (
          <TabsContent className="mt-0" value="preview">
            <div
              ref={sourceDivRef}
              className="min-h-[220px] flex justify-center items-center p-4 bg-slate-100 border rounded-md"
            >
              {preview}
            </div>
          </TabsContent>
        )}

        {/* Usage */}
        {code && (
          <TabsContent className="mt-0" value="code">
            <Code className="min-h-[220px]">{code}</Code>
          </TabsContent>
        )}

        {/* HTML is taken from inner HTML of preview */}
        {/* {preview && (
          <TabsContent className="mt-0" value="html">
            <Code className="min-h-[220px]">
              {innerHTML.replace(/>([^<]*)</g, '>\n$1\n<')}
            </Code>
          </TabsContent>
        )} */}
      </Tabs>
    </div>
  )
}

export default ComponentPreview
