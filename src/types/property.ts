export interface Property {
  id: string
  title: string
  description: string
  price: number
  location: string
  bhk: number
  area: number
  type: "buy" | "rent"
  image: string
  amenities: string[]
  featured: boolean
}