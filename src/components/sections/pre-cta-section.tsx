import React from 'react';
import Link from 'next/link';

export const PreCTA = () => {
  return (
    <section className="relative w-full min-h-[488px] py-24 flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/hero/hero-image-1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/60" />
      
      <div className="container relative z-20 max-w-[1200px] px-4 md:px-14 flex flex-col justify-center items-center gap-6 text-center">
        <div className="flex flex-col justify-center items-center gap-2 max-w-3xl">
          <h2 className="text-h2 md:text-display-md text-white leading-tight">
            Planning a Group Stay in Seminyak?
          </h2>
          <p className="text-body-sm md:text-body-md text-white/90 font-medium font-['Montserrat'] leading-relaxed max-w-2xl">
            Check availability, explore rates, and start planning your next family holiday or group getaway in Seminyak
          </p>
        </div>

        <Link 
          href="/booking" 
          className="h-10 px-8 py-2.5 bg-white/20 backdrop-blur-sm rounded-sm border border-white text-white text-sm font-semibold font-['Inter'] transition-all hover:bg-white hover:text-black active:scale-95"
        >
          Reserve Your Stay
        </Link>
      </div>
    </section>
  );
};
