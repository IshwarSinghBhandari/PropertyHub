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

export type Filters = {
  location: string;
  bhk: string;
  type:string;
};

export interface Props {
  properties: Property[];
  loading: boolean;
  type: string;
}

export interface BannerProps {
    filters: Filters
    setFilters: React.Dispatch<React.SetStateAction<Filters>>
}