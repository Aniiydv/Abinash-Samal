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
export const sustainablePrograms = ['Registered Vehicle Scrapping Facility', 'EV, CNG, LNG & Hydrogen roadmap', 'DEF and cleaner diesel adoption', 'Employee welfare and scholarships']

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
  {
    year: '2024',
    category: 'Sustainability',
    title: 'Green Mobility Initiative Citation',
    description: 'Acknowledged for supporting responsible vehicle recycling through the eco-friendly RVSF initiative in Khurda and promoting cleaner mobility pathways.',
  },
  {
    year: '2023',
    category: 'Workplace culture',
    title: 'People-First Enterprise Appreciation',
    description: 'Celebrated for employee welfare, mediclaim support, scholarships for employees’ children, and cultural initiatives that strengthen belonging.',
  },
]

export const newsItems = [
  {
    date: 'March 2026',
    title: 'Dr. Samal strengthens Empreo Group’s phygital customer experience roadmap',
    summary: 'A leadership update focused on integrating physical dealership confidence with digital convenience across customer touchpoints.',
  },
  {
    date: 'January 2026',
    title: 'Empreo Group expands future mobility conversations across Odisha',
    summary: 'The Group continues to prepare for EV, CNG, LNG, Hydrogen mobility solutions, and cleaner diesel technologies through DEF adoption.',
  },
  {
    date: 'November 2025',
    title: 'Office of Dr. Samal highlights employee welfare and education initiatives',
    summary: 'The portfolio office reinforces its commitment to mediclaim support, scholarships, skill development, and workplace culture programs.',
  },
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
