import React from 'react';
import { TestimonialCard } from '@/components/ui/testimonial-card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: string;
  name: string;
  group: string;
  country: string;
  title: string;
  content: string;
  imageUrl: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Borja Jusdado Alarcon',
    group: 'Celebrations & Events',
    country: 'Spain',
    title: 'Our wedding in Villa Casa Mateo',
    content: 'We were in Casa Mateo Villa from 7th Dec until 11th Dec 2017 in 6 bedrooms with all the family, to celebrate our legal wedding day. Nurtini was our “Wedding Organizer”. All our questions were answered by her and she makes all really easy for us. She found a nice place for our prewedding photos, and also she lent us balinese customes. Thanks to all the staffs in the villa, because they keep always the villa really clean, and they help us with all.',
    imageUrl: '/images/hero/hero-image-1.png',
  },
  {
    id: '2',
    name: 'Diego',
    group: 'Families & Groups',
    country: 'Sydney, Australia',
    title: 'Luxurious, perfect location, amazing staff',
    content: 'Had a great time with family and friends at Villa Casa Mateo. All of the staff were absolutely amazing, and very accommodating, especially with the young kids in the group. The food at the villa was just incredible. Highly recommend choosing the Indonesian breakfast, Nasi Goreng! The location is perfect - walking distance to great shops, restaurants, cafe\'s and bars.',
    imageUrl: '/images/hero/hero-image-2.png',
  },
  {
    id: '3',
    name: 'Serene2411',
    group: 'Families & Groups',
    country: 'Singapore',
    title: 'Amazing, Spacious & Clean Villa',
    content: 'Pick up at the airport was a breeze and we were greeted with cold wet face towel and a bottle of drink each! Upon arrival at the villa, the villa manger gave us a tour of the villa and introduced us to all the staff! Villa was very spacious for the 16 of us. An easy 5 min walk to the nearby mini supermarket and also to the main Seminyak shopping and restaurant street.',
    imageUrl: '/images/hero/hero-image-3.png',
  },
  {
    id: '4',
    name: 'Collinson',
    group: 'Couples & Friends',
    country: 'Perth, Australia',
    title: 'As good as always',
    content: 'Just returned from our 4th stay at Villa Casa Mateo. This place never fails to disappoint. From the moment you walk through the front door everything is just so easy. The villa itself is very spacious and comfortable, the buildings and rooms are well maintained and the decor is modern and swish without being over the top. The staff are absolutely fantastic!!!',
    imageUrl: '/images/hero/hero-image-1.png',
  },
  {
    id: '5',
    name: 'TimmyW',
    group: 'Families & Groups',
    country: 'Sydney, Australia',
    title: 'Ideal choice for large groups wanting a next-level luxury experience!',
    content: 'Casa Mateo NEEDS to be experienced at least once in your life! This stunning villa and wonderful staff truly gave our few nights with them the feeling of being at the centre of the universe. First off, the place is simply huge. The FOOD was the best food we have eaten in Bali, bar none. The staff and lovely manager Elly were always around for us to ask questions.',
    imageUrl: '/images/hero/hero-image-2.png',
  },
  {
    id: '6',
    name: 'jacqdavinia',
    group: 'Couples & Friends',
    country: 'Perth, Australia',
    title: 'Paradise!!!',
    content: 'I didn\'t want to leave! My partner and I joined our friends for two nights at the end of our trip, who were staying at Casa Mateo. It was the perfect end to the trip. We were welcomed with open arms by the staff who did absolutely everything to make our stay as comfortable and luxurious as possible. They prepared our rooms before bedtime and cooked us a delicious breakfast.',
    imageUrl: '/images/hero/hero-image-3.png',
  },
];

export const TestimonialsOverview = () => {
  return (
    <section className="w-full py-16 px-4 md:px-14 bg-[var(--color-surface-main)] flex flex-col items-center gap-12 overflow-hidden">
      {/* Header Section */}
      <div className="max-w-5xl flex flex-col items-center gap-2 text-center">
        <h2 className="text-h2 md:text-display-md text-[var(--color-text-neutral-primary)] font-semibold leading-tight">
          What Our Guests Say
        </h2>
        <p className="text-body-sm md:text-body-md text-[var(--color-text-neutral-secondary)] font-normal leading-normal max-w-2xl">
          Stories from travelers who chose Casa Mateo for their Bali stay
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="relative w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* 
            Mobile: Max 4 cards
            Desktop: Max 3 cards 
        */}
        {TESTIMONIALS_DATA.slice(0, 4).map((testimonial, index) => (
          <div 
            key={testimonial.id} 
            className={cn(
              "w-full max-w-sm mx-auto",
              // Hide the 4th card on desktop (lg and up)
              index === 3 && "lg:hidden"
            )}
          >
            <TestimonialCard 
              name={testimonial.name}
              group={testimonial.group}
              country={testimonial.country}
              title={testimonial.title}
              content={testimonial.content}
              imageUrl={testimonial.imageUrl}
            />
          </div>
        ))}
        
        {/* Gradient Fade Overlay (as per design) */}
        <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-b from-transparent to-[var(--color-surface-main)] pointer-events-none" />
      </div>

      {/* CTA Button */}
      <Button 
        className="bg-[var(--color-button-primary-brand-default)] text-[var(--color-surface-main)] hover:bg-[var(--color-button-primary-brand-hover)] rounded-[var(--radius-2)] px-6 py-2.5 text-sm font-semibold transition-colors border border-[var(--color-border-brand-default)]"
      >
        Explore Guest Experiences
      </Button>
    </section>
  );
};