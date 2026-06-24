import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  name: string;
  group: string;
  country: string;
  countryFlag: string;
  title: string;
  content: string;
  imageUrl: string;
  className?: string;
}

export const TestimonialCard = ({
  name,
  group,
  country,
  countryFlag,
  title,
  content,
  imageUrl,
  className,
}: TestimonialCardProps) => {
  return (
    <div className={cn('flex flex-col gap-4 md:gap-4 bg-[var(--color-surface-main)] w-full h-full', className)}>
      {/* Image Section */}
      <div className="relative w-full h-[175px] md:h-[336px] overflow-hidden rounded-sm md:rounded-6">
        <Image 
          src={imageUrl} 
          alt={name} 
          fill 
          className="object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141212] via-transparent to-transparent flex flex-col justify-end p-2 md:p-6 gap-1 md:gap-2">
          <div className="text-white text-body-lg">
            {name}
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-white">
            {/* Group Info */}
            <div className="flex items-center gap-1 md:gap-1.5">
              <div className="relative w-2.5 h-2.5 md:w-4 md:h-4 flex items-center justify-center">
                <div className="w-2 h-1.5 md:w-3 md:h-2.5 border border-[var(--color-border-neutral-inverse)]" />
              </div>
              <span className="text-body-sm">
                {group}
              </span>
            </div>
            
            {/* Separator (Desktop only) */}
            <span className="hidden md:inline text-white text-body-sm">•</span>
            
            {/* Country Info */}
            <div className="flex items-center gap-1 md:gap-1">
              <span className="text-body-sm">{countryFlag}</span>
              <span className="text-body-sm font-medium">
                {country}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-1 md:gap-2">
        <h4 className="text-h5 md:text-h4 lg:text-h3 font-semibold text-[var(--color-text-neutral-primary)] leading-tight">
          {title}
        </h4>
        <p className="text-body-md md:text-body-md text-[var(--color-text-neutral-secondary)] leading-normal">
          {content}
        </p>
      </div>
    </div>
  );
};