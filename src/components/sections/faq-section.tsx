import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: 'What is Casa Hannah Villa?',
    answer: 'Casa Hannah is a private 5-bedroom Luxury Villa Bali located in Oberoi Seminyak. Designed for families and groups of up to 10 guests, Casa Hannah combines spacious living areas, a private swimming pool, and personalized hospitality in one of Bali\'s most popular lifestyle destinations.',
  },
  {
    question: 'Where is Casa Hannah located?',
    answer: 'Casa Hannah is located in Oberoi Seminyak, a sought-after area known for its restaurants, boutique shopping, beach clubs, and vibrant atmosphere. Guests can easily reach Seminyak Beach, Seminyak Square, and Ku De Ta while enjoying the privacy of a Luxury Villa Bali.',
  },
  {
    question: 'How many guests can stay at Casa Hannah?',
    answer: 'Casa Hannah can comfortably accommodate up to 10 guests across five bedrooms. The villa is ideal for family holidays, group vacations, birthday celebrations, and special occasions where guests want to stay together in a spacious Private Pool Villa.',
  },
  {
    question: 'Is Casa Hannah a fully private villa?',
    answer: 'Yes. Casa Hannah is a fully private villa in Oberoi Seminyak, giving guests exclusive access to the swimming pool, gardens, living spaces, and bedrooms. This allows families and groups to enjoy privacy, comfort, and flexibility throughout their stay.',
  },
  {
    question: 'Why choose Casa Hannah for a holiday in Bali?',
    answer: 'Casa Hannah offers a perfect blend of luxury, privacy, and location. Situated in the heart of Seminyak, it provides easy access to the best of Bali while offering a serene sanctuary for guests to relax and recharge with their loved ones.',
  },
  {
    question: 'Is Casa Hannah suitable for families?',
    answer: 'Yes. Casa Hannah is a Family Villa designed to welcome guests of different ages. The spacious layout, private facilities, and convenient Seminyak location make it a popular choice for families looking for both relaxation and easy access to Bali\'s attractions.',
  },
  {
    question: 'What makes Casa Hannah different from other villas in Seminyak?',
    answer: 'Casa Hannah is located in Oberoi Seminyak, one of Bali’s most popular areas for dining, shopping, and entertainment. The location combines convenience with the privacy of a luxury villa Bali experience, ensuring guests have the best of both worlds.',
  },
  {
    question: 'Is Casa Hannah close to Bali\'s popular beach clubs?',
    answer: 'Absolutely. Being in Oberoi Seminyak, guests are just a short distance away from world-famous beach clubs like Ku De Ta and other popular spots, making it an ideal base for those who love the vibrant Seminyak lifestyle.',
  },
];

export const FAQSection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-14 bg-[var(--color-surface-main)] flex flex-col items-center gap-10">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-h2 md:text-display-md text-[var(--color-text-neutral-primary)] font-semibold leading-tight">
          Frequently Asked Questions
        </h2>
      </div>

      {/* FAQ Accordion Container */}
      <div className="w-full max-w-[1088px] flex justify-center">
        <Accordion 
          type="single" 
          collapsible 
          className="w-full max-w-[740px] space-y-0"
        >
          {FAQ_DATA.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="border-b border-[var(--color-border-neutral-default)] px-2 md:px-6"
            >
              <AccordionTrigger className="py-4 px-4 text-left hover:no-underline group">
                <span className="text-body-sm md:text-label-md font-semibold text-[var(--color-text-neutral-primary)] leading-5 transition-colors group-hover:text-[var(--color-text-brand)]">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-body-sm md:text-body-md text-[var(--color-text-neutral-secondary)] leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};