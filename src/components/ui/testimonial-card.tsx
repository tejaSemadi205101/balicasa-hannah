import React from 'react';
import Image from 'next/image';
import { Icon } from '@iconify-icon/react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  name: string;
  group: string;
  country: string;
  title: string;
  content: string;
  imageUrl: string;
  className?: string;
}

export const TestimonialCard = ({
  name,
  group,
  country,
  title,
  content,
  imageUrl,
  className,
}: TestimonialCardProps) => {
  return (
    <div className={cn('flex flex-col gap-4 bg-[var(--color-surface-main)] w-full h-full', className)}>
      {/* Image Section */}
      <div className="relative w-full h-44 md:h-80 lg:h-84 overflow-hidden rounded-[var(--radius-2)] md:rounded-[var(--radius-6)]">
        <Image 
          src={imageUrl} 
          alt={name} 
          fill 
          className="object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141212] via-transparent to-transparent flex flex-col justify-end p-4 md:p-6 gap-2">
          <div className="text-white text-body-lg">
            {name}
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-white">
            {/* Group Info */}
            <div className="flex items-center gap-1.5">
              <Icon 
                icon={
                  group.includes('Celebrations') ? 'hugeicons:star' :
                  group.includes('Couples') ? 'hugeicons:heart' :
                  'hugeicons:user-multiple'
                } 
                className="icon-sm text-white" 
              />
              <span className="text-body-sm">
                {group}
              </span>
            </div>
            
            {/* Separator (Desktop only) */}
            <span className="hidden md:inline text-white text-body-sm">•</span>
            
            {/* Country Info */}
            <div className="flex items-center gap-1">
              <Icon icon="hugeicons:location-01" className="icon-sm text-white" />
              <span className="text-body-sm font-medium">
                {country}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-2">
        <h4 className="text-h5 md:text-h4 text-(--color-text-neutral-primary)">
          {title}
        </h4>
        <p className="text-body-md text-(--color-text-neutral-secondary)">
          {content}
        </p>
      </div>
    </div>
  );
};