export interface Designer {
  id: number
  name: string
  location: string
  rating: number
  reviewsCount: number
  image: string
  portfolio: string[]
  price: string
  turnaround: string
  completedProjects: number
  responseTime: string
  bio: string
  skills: string[]
  experience: string
  reviews: Review[]
  specialty: string
}

export interface Review {
  id: number
  author: string
  rating: number
  date: string
  comment: string
  image: string
}
