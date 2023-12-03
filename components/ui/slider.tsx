'use client'

import * as React from 'react'

// Import Swiper and modules
import { Swiper, SwiperSlide, SwiperProps, SwiperSlideProps, SwiperRef } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { cn } from '@/lib/utils';

const Slider = React.forwardRef<SwiperRef, SwiperProps>(
  ({ className, children, ...props }, ref) => (
    <Swiper
      ref={ref}
      className={className}
      modules={[Navigation, Pagination]}
      {...props}
    >
      {React.Children.map(children, (child, index) => {
        // Ensure that each child is a SwiperSlide
        if (React.isValidElement(child)) {
          const { className: childClassName, ...childProps } = child.props;
          
          return (
            <SwiperSlide 
              key={index} 
              className={cn('!h-auto', childClassName)}
              {...childProps}
            >
              {child}
            </SwiperSlide>
          )
        }
        return null;
      })}
    </Swiper>
  )
)
Slider.displayName = 'Slider'

interface SliderItemProps extends SwiperSlideProps {
  children: React.ReactNode;
}

const SliderItem: React.FC<SliderItemProps> = ({ children }) => (
  <>{children}</>
)
SliderItem.displayName = 'SliderItem'

export {
  Slider,
  SliderItem
}