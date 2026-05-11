import { Car, MapPin, Users, Wrench } from 'lucide-react'
import type { Feature, Milestone, Metric, Principle } from '../types'

export const navItems = ['Journey', 'Luxury', 'Sustainability', 'Legacy', 'Contact']

export const milestones: Milestone[] = [
  {
    year: '1997',
    title: 'Service bay beginnings',
    description: 'A modest repair floor in Cuttack became the proving ground for discipline, customer trust, and technical curiosity.',
  },
  {
    year: '2005',
    title: 'Empreo Group formed',
    description: 'Operations expanded into multi-brand automotive services, parts logistics, and premium vehicle advisory.',
  },
  {
    year: '2013',
    title: 'Luxury mobility chapter',
    description: 'Empreo introduced curated supercar experiences, high-end aftercare, detailing studios, and concierge ownership programs.',
  },
  {
    year: '2021',
    title: 'Sustainable mobility push',
    description: 'Dr. Samal began building Odisha-focused EV service infrastructure, charging partnerships, and technician upskilling.',
  },
  {
    year: '2026',
    title: 'Regional mobility platform',
    description: 'Empreo positions itself as a trusted bridge between aspiration, responsible luxury, and clean transportation.',
  },
]

export const features: Feature[] = [
  {
    title: 'From grease-stained floors to gallery-lit showrooms',
    kicker: 'Origin story',
    body: 'Empreo’s earliest culture was shaped in service bays where precision, punctuality, and personal accountability mattered more than polish. That operating ethic now informs premium showrooms, concierge delivery, and luxury aftercare.',
    image: '/images/empreo-service-bay.png',
    tags: ['Service', 'Craft', 'Trust'],
  },
  {
    title: 'Luxury supercars as a language of ambition',
    kicker: 'Premium automotive',
    body: 'For Odisha’s new generation of entrepreneurs, collectors, and creators, Empreo frames luxury automobiles not as excess, but as engineering, aspiration, and disciplined ownership.',
    image: '/images/empreo-luxury-supercar.png',
    tags: ['Supercars', 'Concierge', 'Experience'],
  },
  {
    title: 'Sustainable mobility without losing the thrill',
    kicker: 'Innovation agenda',
    body: 'Dr. Samal’s current mandate blends premium mobility with cleaner systems: EV readiness, charging access, solar-aligned facilities, and training pathways for next-generation automotive technicians.',
    image: '/images/empreo-sustainable-mobility.png',
    tags: ['EV', 'Clean mobility', 'Odisha'],
  },
]

export const metrics: Metric[] = [
  { label: 'Years building automotive trust', value: '29+', icon: Wrench },
  { label: 'Service and experience touchpoints', value: '18', icon: MapPin },
  { label: 'Premium vehicles advised or serviced', value: '4.7K', icon: Car },
  { label: 'Technicians trained for future mobility', value: '620+', icon: Users },
]

export const principles: Principle[] = [
  {
    title: 'Legacy',
    description: 'A company should remember where its credibility was earned: with customers waiting at the counter and engines on the lift.',
  },
  {
    title: 'Innovation',
    description: 'Luxury and sustainability can coexist when technology is matched with service discipline.',
  },
  {
    title: 'Odisha-first growth',
    description: 'Empreo’s ambition is regional pride with national-standard execution.',
  },
  {
    title: 'Trust',
    description: 'Every handover, repair order, and advisory conversation is treated as a reputation moment.',
  },
]

export const sideNotes = [
  'Founder & Group Chairman',
  'Automotive services pioneer',
  'Luxury mobility curator',
  'Sustainable mobility advocate',
  'Odisha enterprise voice',
]

export const articles = [
  'The rise of aspiration mobility beyond metro India',
  'Why EV aftercare will define premium ownership',
  'How service culture built the Empreo reputation',
]

export const featureFilters = ['All', 'Service', 'Supercars', 'EV', 'Odisha']
export const sustainablePrograms = ['EV diagnostics lab', 'Solar-aligned facilities', 'Charging concierge', 'Technician academy']
