'use client'

import React, { useEffect, useRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const iconVariants = cva('icon inline-flex shrink-0 [&>svg]:h-full [&>svg]:w-full', {
  variants: {
    size: {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6'
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

interface IconProps 
  extends React.HTMLAttributes<HTMLSpanElement>, 
    VariantProps<typeof iconVariants> {
  name: string;
}

const replaceColor = (svgString: string) => {
  const regex = /fill="#[A-Fa-f0-9]{6}"/g;
  const replacement = `fill="currentColor"`;
  return svgString.replace(regex, replacement);
};

const Icon: React.FC<IconProps> = ({ className, name, size, ...props }) => {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const loadSvg = async () => {
      try {
        const response = await fetch(`/icons/${name}.svg`);
        const svgString = await response.text();
        const svgContent = replaceColor(svgString);

        if (spanRef.current) {
          // Clear any existing content
          spanRef.current.innerHTML = '';

          // Set the new SVG content using dangerouslySetInnerHTML
          spanRef.current.innerHTML = svgContent;
        }
      } catch (error) {
        console.error('<strong>On loading the SVG</strong>', error);
      }
    };

    loadSvg();
  }, [name]);

  return <span className={cn(iconVariants({ size, className }))} ref={spanRef} {...props} />;
};

export {
  type IconProps, 
  Icon 
}; 
