import React from 'react';
import Link from 'next/link';

export const PreCTA = () => {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/hero/hero-image-1.png)' }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-gray-900/60" />
      
      <div className="container relative z-20 max-w-6xl px-6 md:px-14 flex flex-col justify-center items-center gap-6 md:gap-8 text-center">
        <div className="flex flex-col justify-center items-center gap-2 max-w-3xl">
          <h2 className="text-h2 md:text-display-md text-var(--color-text-inverse) leading-tight">
            Planning a Group Stay in Seminyak?
          </h2>
          <p className="text-body-md text-var(--color-text-inverse) opacity-90 max-w-2xl">
            Check availability, explore rates, and start planning your next family holiday or group getaway in Seminyak
          </p>
        </div>

        <Link 
          href="/availability" 
          className="h-10 px-6 py-2.5 bg-white/20 backdrop-blur-md outline-1 outline-offset-[-0.50px] outline-var(--color-border-neutral-inverse) text-var(--color-text-inverse) text-body-sm font-semibold rounded-[var(--radius-1)] inline-flex justify-center items-center gap-2.5 transition-all hover:bg-[var(--color-surface-main)] hover:text-[var(--color-text-neutral-primary)] hover:outline-transparent active:scale-95"
        >
          Reserve Your Stay
        </Link>
      </div>
    </section>
  );
};
