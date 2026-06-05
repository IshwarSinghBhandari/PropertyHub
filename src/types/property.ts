export interface Property {
  id: string
  title: string
  description: string
  price: number
  location: string
  bhk: number
  area: number
  type: "buy" | "rent"
  images: string[]
  amenities: string[]
  featured: boolean
  createdAt: string
}

export interface PropertyCardProps {
  property: Property;
}