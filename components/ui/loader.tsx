import React from 'react';

import { Icon, IconProps } from '@/components/ui/icon';

interface LoaderProps 
  extends React.HTMLAttributes<HTMLSpanElement>, 
    Partial<IconProps> {}

const Loader: React.FC<LoaderProps> = ({ className, name = 'spinner-star', ...props }) => (
  <Icon className={`animate-spin ${className}`} name={name} {...props} />
);

export { Loader };
