import type { Metadata } from "next"
import { MainLayout } from "@/components/layout/main-layout"
import { PageHeroSection } from "@/components/sections/page-hero-section"
import { OverviewSection } from "@/components/sections/overview-section"
import { ReassuranceSection } from "@/components/sections/reassurance-section"
import { UtilitiesSection } from "@/components/sections/utilities-section"
import { TestimonialsOverview } from "@/components/sections/testimonials-overview-section"
import { FAQSection } from "@/components/sections/faq-section"
import { CalendarBookingSection } from "@/components/sections/calendar-booking-section"
import { siteConfig } from "@/lib/site-pages"

export const metadata: Metadata = {
  title: `Casa Hannah Villa Facilities | ${siteConfig.name}`,
  description: "See the facilities at Casa Hannah, including the private pool, five bedroom suites, shared living areas, Wi-Fi, and villa comforts.",
}

const facilitiesFaqData = [
  {
    question: "How many bedrooms does Casa Hannah have?",
    answer: "Casa Hannah features five spacious bedrooms designed to accommodate up to 10 guests comfortably. As a Luxury Villa Bali in Oberoi Seminyak, the villa is ideal for families, group holidays, and special celebrations while providing privacy and comfort for every guest throughout their stay."
  },
  {
    question: "Does Casa Hannah have a private swimming pool?",
    answer: "Yes. Casa Hannah includes a large private swimming pool surrounded by tropical gardens and outdoor lounge areas. As a Private Pool Villa in Oberoi Seminyak, guests can relax in a peaceful setting while staying close to Seminyak Beach, Seminyak Square, and Ku De Ta."
  },
  {
    question: "Is there a media or entertainment room at Casa Hannah?",
    answer: "Yes. Casa Hannah offers a dedicated media and entertainment space where guests can enjoy movies, games, and indoor activities. This facility is especially popular with families and groups looking for additional entertainment options during their stay in this Luxury Villa Bali."
  },
  {
    question: "Does Casa Hannah have indoor and outdoor living areas?",
    answer: "Yes. Casa Hannah features spacious indoor and outdoor living spaces designed for dining, relaxing, and spending time together. The layout allows guests to enjoy Bali's tropical climate while maintaining the comfort expected from a Luxury Villa Bali in Oberoi Seminyak."
  },
  {
    question: "Is Casa Hannah suitable for large groups?",
    answer: "Yes. Casa Hannah is designed for groups of up to 10 guests and provides generous shared spaces for socializing and relaxing. The villa's five-bedroom layout makes it a popular Family Villa choice for reunions, celebrations, and group holidays in Seminyak."
  },
  {
    question: "Does Casa Hannah offer private outdoor spaces?",
    answer: "Yes. Casa Hannah includes private gardens, poolside areas, and outdoor seating spaces that are exclusively available to guests. These outdoor facilities create a relaxing environment while remaining within easy reach of Seminyak Beach and the attractions of Oberoi Seminyak."
  },
  {
    question: "What facilities are included at Casa Hannah?",
    answer: "Casa Hannah is equipped with premium facilities including a 20-meter swimming pool, a dedicated home cinema room, a fully equipped kitchen, an outdoor bar, and free private covered parking. Guests also receive full villa staffing and complimentary access to the Canggu Club."
  },
  {
    question: "Is Casa Hannah a luxury villa in Seminyak?",
    answer: "Yes. Casa Hannah is a highly modern luxury villa located in the prestigious Oberoi area of Seminyak. It combines contemporary architecture, high-end amenities, and full-service hospitality including a personal guest assistant and a professional private chef."
  },
  {
    question: "Does Casa Hannah provide private parking for guests?",
    answer: "Yes. Casa Hannah features free private and covered parking directly inside the villa premises. The secure garage comfortably accommodates cars and scooters, making it highly convenient for guests exploring the Oberoi Seminyak area with vehicles."
  }
];

export default function FacilitiesPage() {
  return (
    <MainLayout>
      <PageHeroSection
        title="Facilities Designed for Better Group Stays in Seminyak"
        summary="Everything your family or group needs for a comfortable stay in Seminyak."
      />
      <OverviewSection
        title="More Than Just a Place to Stay"
        description="From quiet mornings by the pool to long evenings shared around the table, Casa Hannah is designed around the moments that make travelling together memorable."
        imageUrl="https://placehold.co/524x625"
        imageAlt="Casa Hannah Facilities Overview"
        imagePosition="right"
      />
      <UtilitiesSection
        title="Everything You Need Throughout Your Stay"
        description="Comfort, entertainment, and family-friendly spaces thoughtfully arranged under one roof."
        items={[
          {
            icon: "hugeicons:bed-double",
            title: "Space & Comfort",
            features: [
              "5 Private Bedrooms",
              "Air Conditioning",
              "Wardrobe Space",
              "Hairdryer",
              "Toiletries",
              "Safety Box",
              "Iron & Ironing Board",
              "Household Supplies"
            ]
          },
          {
            icon: "hugeicons:swimming",
            title: "Pool & Outdoor Living",
            features: [
              "20-Metre Swimming Pool",
              "Pool Towels",
              "Pool Umbrellas",
              "Reclining Chairs",
              "Outdoor Terrace",
              "Tropical Garden",
              "Poolside BBQ Equipment",
              "Outdoor Bar"
            ]
          },
          {
            icon: "hugeicons:restaurant-01",
            title: "Gather & Dine Together",
            features: [
              "Dining for 10 Guests",
              "Fully Equipped Kitchen",
              "Bar Counter",
              "Coffee Maker",
              "Breakfast Available",
              "Lunch Available",
              "Dinner Available"
            ]
          },
          {
            icon: "hugeicons:router",
            title: "Entertainment & Connectivity",
            features: [
              "High-Speed Wi-Fi",
              "Dedicated Cinema Room",
              "TV",
              "Blu-ray Player",
              "Stereo System",
              "Board Games"
            ]
          },
          {
            icon: "hugeicons:baby-bottle",
            title: "Family Essentials",
            features: [
              "Baby Cot",
              "Baby High Chair",
              "Pool Fence",
              "Babysitter Available"
            ]
          }
        ]}
      />
      <ReassuranceSection
        headline="Designed Around the Way Families Travel! Every part of Casa Hannah is arranged to make group stays feel comfortable, connected, and effortless from arrival to departure."
        imageUrl="https://placehold.co/1088x612"
        imageAlt="Casa Hannah Facilities Reassurance"
      />
      <CalendarBookingSection />
      <TestimonialsOverview />
      <FAQSection data={facilitiesFaqData} className="bg-white" />
    </MainLayout>
  )
}
