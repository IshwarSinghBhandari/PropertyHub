import { BedDouble, Maximize, Tag, Check, MapPin } from 'lucide-react'
import { Property } from '@/types/property'

interface PropertyInfoDetailsProps {
  property: Property
}

export function PropertyInfoDetails({ property }: PropertyInfoDetailsProps) {
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(property.price)

  const bhkText = property.bhk > 0 ? `${property.bhk} BHK` : 'Plot'

  return (
    <div className="space-y-8">
      {/* Key Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-900/40 border border-border/40 rounded-2xl p-5 transition-all hover:bg-slate-100/30 dark:hover:bg-slate-900/60">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
            <BedDouble className="w-6 h-6" />
          </div>
          <div>
            <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">Bedrooms</p>
            <p className="text-lg font-bold text-foreground mt-0.5">{bhkText}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-900/40 border border-border/40 rounded-2xl p-5 transition-all hover:bg-slate-100/30 dark:hover:bg-slate-900/60">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
            <Maximize className="w-6 h-6" />
          </div>
          <div>
            <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">Area</p>
            <p className="text-lg font-bold text-foreground mt-0.5">{property.area.toLocaleString()} sqft</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-900/40 border border-border/40 rounded-2xl p-5 transition-all hover:bg-slate-100/30 dark:hover:bg-slate-900/60">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
            <Tag className="w-6 h-6" />
          </div>
          <div>
            <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">Type</p>
            <p className="text-lg font-bold text-foreground mt-0.5">
              {property.type === 'buy' ? 'For Sale' : 'For Rent'}
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <h2 className="text-2xl font-bold text-foreground tracking-tight mb-4">About the Property</h2>
        <p className="text-muted-foreground leading-relaxed text-base font-normal">{property.description}</p>
      </div>

      {/* Amenities */}
      <div>
        <h2 className="text-2xl font-bold text-foreground tracking-tight mb-4">Amenities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {property.amenities.map((amenity) => (
            <div key={amenity} className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900/40 border border-border/40 rounded-xl p-4 transition-all hover:bg-slate-100/30 dark:hover:bg-slate-900/60">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <span className="font-semibold text-sm text-foreground">{amenity}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
