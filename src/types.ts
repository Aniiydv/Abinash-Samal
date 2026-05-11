import type { LucideIcon } from 'lucide-react'

export type Feature = {
  title: string
  kicker: string
  body: string
  image: string
  tags: string[]
}

export type Milestone = {
  year: string
  title: string
  description: string
}

export type Metric = {
  label: string
  value: string
  icon: LucideIcon
}

export type Principle = {
  title: string
  description: string
}
