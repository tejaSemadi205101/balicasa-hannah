import type { Metadata } from "next"
import { MainLayout } from "@/components/layout/main-layout"
import { PageHeroSection } from "@/components/sections/page-hero-section"
import { OverviewSection } from "@/components/sections/overview-section"
import { ReassuranceSection } from "@/components/sections/reassurance-section"
import { UtilitiesSection } from "@/components/sections/utilities-section"
import { FAQSection } from "@/components/sections/faq-section"
import { siteConfig } from "@/lib/site-pages"

export const metadata: Metadata = {
  title: `Casa Hannah Villa Services | ${siteConfig.name}`,
  description: "Discover villa services at Casa Hannah in Seminyak, including dedicated staff support and guest assistance for a smooth Bali stay.",
}

const servicesFaqData = [
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

export default function ServicesPage() {
  return (
    <MainLayout>
      <PageHeroSection
        title="Casa Hannah Villa Services"
        summary="Villa services are arranged to make group travel feel simple, from arrival support to help during the stay."
      />
      <OverviewSection
        title="Dedicated to Your Comfort"
        description="Our professional staff is available to cater to your needs, from personalized daily housekeeping to private chef services, ensuring an effortless and relaxing getaway."
        imageUrl="https://placehold.co/524x625"
        imageAlt="Casa Hannah Villa Services Overview"
        imagePosition="left"
        className="bg-gray-50"
      />
      <UtilitiesSection
        title="Comprehensive Villa Services"
        description="Experience the perfect blend of private villa living with premium hospitality services."
        items={[
          {
            icon: "hugeicons:user-group",
            title: "Dedicated Staff",
            features: [
              "Villa Manager",
              "Daily Housekeeping",
              "Pool Maintenance",
              "Gardener",
              "Security Guard (Night)"
            ]
          },
          {
            icon: "hugeicons:car-01",
            title: "Transportation",
            features: [
              "Airport Transfers (On Request)",
              "Car Rental & Driver",
              "Scooter Rental",
              "Taxi Booking Assistance"
            ]
          },
          {
            icon: "hugeicons:spa",
            title: "In-Villa Wellness",
            features: [
              "Private Yoga Sessions",
              "Balinese Massage",
              "Spa Treatments",
              "Manicure & Pedicure"
            ]
          },
          {
            icon: "hugeicons:user-love-01",
            title: "Guest Assistance",
            features: [
              "Tour & Excursion Booking",
              "Restaurant Reservations",
              "Special Event Planning",
              "Laundry Service"
            ]
          }
        ]}
      />
      <ReassuranceSection
        headline="We handle the details so you don't have to. With full-time staff and a dedicated villa manager, your only job is to relax and enjoy the Bali sun."
        imageUrl="https://placehold.co/1088x612"
        imageAlt="Casa Hannah Services Reassurance"
      />
      <FAQSection data={servicesFaqData} className="bg-white" />
    </MainLayout>
  )
}
