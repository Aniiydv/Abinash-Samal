import { Building2, Car, IndianRupee, MapPin, Users, Wrench } from 'lucide-react'
import type { Feature, Metric, Principle } from '../types'

export const navItems = ['Profile', 'Companies', 'Vision', 'Awards', 'Office']

export const features: Feature[] = [
  {
    title: 'Statewide automotive business empire',
    kicker: 'Empreo Group',
    body: 'Under Dr. Samal’s leadership, Empreo Group has grown into one of Odisha’s leading automotive and mobility conglomerates, spanning 50+ branches across 20 districts with a strong customer-first operating culture.',
    image: '/images/empreo-service-bay.png',
    tags: ['Scale', 'Odisha', 'Trust'],
  },
  {
    title: 'Premium, luxury, and commercial brands',
    kicker: 'Automotive leadership',
    body: 'Dr. Samal has strengthened the Group’s presence across premium, luxury, mass-market, and commercial automotive sectors including Jaguar Land Rover, MG, Tata Passenger Vehicles, Škoda, Kia, and JCB.',
    image: '/images/empreo-luxury-supercar.png',
    tags: ['Brands', 'Luxury', 'Commercial'],
  },
  {
    title: 'Green mobility and RVSF leadership',
    kicker: 'Sustainability',
    body: 'He spearheaded an eco-friendly Registered Vehicle Scrapping Facility in Khurda and advocates EV, CNG, LNG, Hydrogen mobility solutions, and cleaner diesel technologies through DEF adoption.',
    image: '/images/empreo-sustainable-mobility.png',
    tags: ['EV', 'RVSF', 'Sustainability'],
  },
]

export const metrics: Metric[] = [
  { label: 'Branches across Odisha', value: '50+', icon: Building2 },
  { label: 'Districts served', value: '20', icon: MapPin },
  { label: 'Professionals employed', value: '2,000+', icon: Users },
  { label: 'Annual turnover', value: '₹3,800 Cr', icon: IndianRupee },
]

export const principles: Principle[] = [
  {
    title: 'Legacy',
    description: 'Dr. Samal carries forward a legacy built on trust, reliability, and customer commitment across Odisha’s automotive sector.',
  },
  {
    title: 'Innovation',
    description: 'He pioneered a phygital approach that integrates physical dealership experiences with digital convenience.',
  },
  {
    title: 'Odisha-first growth',
    description: 'His business empire is designed to carry Odisha pride with national-standard execution and future mobility readiness.',
  },
  {
    title: 'Trust',
    description: 'He believes people are the foundation of every successful organization, supporting welfare, education, culture, and opportunity.',
  },
]

export const sideNotes = [
  'Dr. Abinash Samal',
  'Managing Director',
  'Samal & Empreo Group',
  '50+ branches in Odisha',
  '₹3,800 crore turnover',
  '2,000+ professionals',
]

export const articles = [
  'Dr. Samal’s business empire across Odisha',
  'Phygital customer experience and digital transformation',
  'Sustainability, RVSF, and the next mobility era',
]

export const featureFilters = ['All', 'Scale', 'Brands', 'EV', 'Sustainability']


export const SUSTAINABILITY_ITEMS = [
  "Registered Vehicle Scrapping Facility",
  "EV, CNG, LNG & Hydrogen roadmap",
  "DEF and cleaner diesel adoption",
  "Employee welfare and scholarships",
];

export const keyHighlights = [
  'Leading the transformation of the Empreo Group across Odisha',
  '50+ branches across 20 districts',
  '₹3,800 crore turnover',
  '2,000+ employees',
  'Expertise in premium, luxury, mass-market, and commercial automotive sectors',
  'Pioneer of Odisha’s eco-friendly vehicle scrapping initiative',
  'Advocate for EV, CNG, LNG & Hydrogen mobility solutions',
  'Strong focus on customer experience and digital transformation',
  'Committed to employee welfare, education, and skill development',
]

export const awards = [
  {
    year: '2025',
    category: 'Business leadership',
    title: 'Odisha Mobility Leadership Recognition',
    description: 'Recognized for expanding customer-first automotive access, premium mobility experiences, and future-ready operations across Odisha.',
  },
  // {
  //   year: '2024',
  //   category: 'Sustainability',
  //   title: 'Green Mobility Initiative Citation',
  //   description: 'Acknowledged for supporting responsible vehicle recycling through the eco-friendly RVSF initiative in Khurda and promoting cleaner mobility pathways.',
  // },
  // {
  //   year: '2023',
  //   category: 'Workplace culture',
  //   title: 'People-First Enterprise Appreciation',
  //   description: 'Celebrated for employee welfare, mediclaim support, scholarships for employees’ children, and cultural initiatives that strengthen belonging.',
  // },
]

export const newsItems = [
  {
    date: 'March 2026',
    title: '“Featured in Outlook Magazine’s Visionaries of the $5 Trillion Economy”',
    summary: 'Dr Abinash Samal was recognized for his leadership in sustainable development, industrial innovation, and social impact through the Empreo Group, contributing to inclusive growth and nation-building initiatives.',
  },
  // {
  //   date: 'January 2026',
  //   title: 'Empreo Group expands future mobility conversations across Odisha',
  //   summary: 'The Group continues to prepare for EV, CNG, LNG, Hydrogen mobility solutions, and cleaner diesel technologies through DEF adoption.',
  // },
  // {
  //   date: 'November 2025',
  //   title: 'Office of Dr. Samal highlights employee welfare and education initiatives',
  //   summary: 'The portfolio office reinforces its commitment to mediclaim support, scholarships, skill development, and workplace culture programs.',
  // },
]

export const companyLinks = [
  {
    label: 'Empreo Group',
    type: 'Official website',
    href: 'https://emprogroup.vercel.app/',
  },
  {
    label: 'Empreo Škoda',
    type: 'Dealer website',
    href: 'https://empreoskoda.com/',
  },
  {
    label: 'Empreo MG Bhubaneswar',
    type: 'Dealer page',
    href: 'https://dealers.mgmotor.co.in/mg-motor-empreo-wheel-showroom-car-dealer-pahala-bhubaneswar-371840/Home',
  },
  {
    label: 'Empreo Prestige Land Rover',
    type: 'Retailer page',
    href: 'https://retailers.landrover.in/empreo-prestige/about-us',
  },

  
]

export const GALLERY_IMAGES = [
  { src: "/images/gallery-1.jpeg", caption: "Grand opening of Empreo Prestige showroom", category: "Events" },
  { src: "/images/KIA.png", caption: "Premium showroom interior, Bhubaneswar", category: "Showroom" },
   { src: "/images/LR.png", caption: "Premium showroom interior, Bhubaneswar", category: "Showroom" },
    { src: "/images/MG.png", caption: "Premium showroom interior, Bhubaneswar", category: "Showroom" },
     { src: "/images/SKODA.png", caption: "Premium showroom interior, Bhubaneswar", category: "Showroom" },
      { src: "/images/SKODA_SHOWROOM.png", caption: "Premium showroom interior, Bhubaneswar", category: "Showroom" },
       { src: "/images/TATA.png", caption: "Luxury vehicle display", category: "Showroom" },
  { src: "/images/tata 3.png", caption: "Empreo Group team at annual meet", category: "Team" },
  // { src: "/images/gallery-4.jpeg", caption: "RVSF facility, Khurda — sustainable recycling", category: "Sustainability" },
   { src: "/images/gallery-4.jpeg", caption: "Featured by Outlook Magazine: A Visionary Driving Sustainable Transformation", category: "Sustainability" },
  { src: "/images/gallery-5.png", caption: "Outlook Magazine Highlights Dr. Abinash Samal’s Journey of Sustainable Growth", category: "Sustainability" },
  { src: "/images/gallery-6.jpeg", caption: "Keynote at Odisha Mobility Summit", category: "Events" },
  { src: "/images/KIA SERVICE.png", caption: "State-of-the-art service bay", category: "Service" },
  { src: "/images/MG WORKSHOP.png", caption: "State-of-the-art service bay", category: "Service" },
  { src: "/images/C9888T01.png", caption: "State-of-the-art service bay", category: "Service" },
  { src: "/images/C9944T01.png", caption: "State-of-the-art service bay", category: "Service" },
 
  { src: "/images/empreo-sustainable-mobility.png", caption: "Green mobility vision", category: "Sustainability" },
]

export const MAGAZINES = [
  {
    id: "forbes-india-2025",
    title: "Outlook India",
    issue: "March 2025",
    headline: "A Catalyst for Sustainable Change",
    cover: "/images/magazine-1.jpeg",
    excerpt: "How Dr. Abinash Samal built a ₹3,800 crore automotive empire across 20 districts of Odisha, redefining customer experience and setting new benchmarks in luxury mobility.",
    pages: 1,
    featured: true,
  },
  // {
  //   id: "business-today-2024",
  //   title: "Business Today",
  //   issue: "December 2024",
  //   headline: "Driving Change: The Phygital Dealership",
  //   cover: "/images/magazine-2.png",
  //   excerpt: "An in-depth look at how Empreo Group's phygital approach is bridging physical showroom confidence with digital convenience across India's emerging automotive markets.",
  //   pages: 3,
  //   featured: true,
  // },
  // {
  //   id: "entrepreneur-india-2024",
  //   title: "Entrepreneur India",
  //   issue: "August 2024",
  //   headline: "Green Wheels: Sustainability in Auto Retail",
  //   cover: "/images/magazine-3.png",
  //   excerpt: "Dr. Samal's pioneering RVSF initiative and his roadmap for EV, CNG, LNG and hydrogen adoption is shaping the future of responsible mobility in Eastern India.",
  //   pages: 3,
  //   featured: false,
  // },
  // {
  //   id: "india-today-2023",
  //   title: "India Today",
  //   issue: "November 2023",
  //   headline: "People First: Building a 2,000-Strong Family",
  //   cover: "/images/magazine-4.png",
  //   excerpt: "From mediclaim to scholarships, cultural programs to skill development — how Empreo Group's employee welfare model is creating a blueprint for people-centric business leadership.",
  //   pages: 2,
  //   featured: false,
  // },
]