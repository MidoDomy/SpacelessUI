import React from 'react';

import { Icon } from '@/components/ui/icon';

interface LoaderProps 
  extends React.HTMLAttributes<HTMLSpanElement> {
  size?: 'sm' | 'md' | 'lg' | null
}

const Loader: React.FC<LoaderProps> = ({ className, ...props }) => (
  <Icon className={`animate-spin ${className}`} name='spinner-star' {...props} />
);

export { Loader };
