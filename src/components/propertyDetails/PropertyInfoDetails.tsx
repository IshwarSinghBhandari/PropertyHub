import { BedDouble, Maximize, Tag, Check, MapPin } from 'lucide-react'
import { Property } from '@/types/property'

interface PropertyInfoDetailsProps {
  property: Property
}

export function PropertyInfoDetails({ property }: PropertyInfoDetailsProps) {

  const bhkText = property.bhk > 0 ? `${property.bhk} BHK` : 'Plot'

  return (
    <div className="space-y-8 md:space-y-10">
      {/* key details ------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
        <div className="flex items-center gap-4 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl md:rounded-3xl p-5 md:p-6 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-none">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
            <BedDouble className="w-6 h-6 md:w-7 md:h-7" />
          </div>
          <div>
            <p className="text-slate-400 text-[10px] md:text-[11px] font-bold uppercase tracking-wider mb-0.5 md:mb-1">Bedrooms</p>
            <p className="text-lg md:text-xl font-extrabold text-foreground leading-none">{bhkText}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl md:rounded-3xl p-5 md:p-6 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-none">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
            <Maximize className="w-6 h-6 md:w-7 md:h-7" />
          </div>
          <div>
            <p className="text-slate-400 text-[10px] md:text-[11px] font-bold uppercase tracking-wider mb-0.5 md:mb-1">Area</p>
            <p className="text-lg md:text-xl font-extrabold text-foreground leading-none">{property.area.toLocaleString()} sqft</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl md:rounded-3xl p-5 md:p-6 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-none">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
            <Tag className="w-6 h-6 md:w-7 md:h-7" />
          </div>
          <div>
            <p className="text-slate-400 text-[10px] md:text-[11px] font-bold uppercase tracking-wider mb-0.5 md:mb-1">Type</p>
            <p className="text-lg md:text-xl font-extrabold text-foreground leading-none">
              {property.type === 'buy' ? 'For Sale' : 'For Rent'}
            </p>
          </div>
        </div>
      </div>

      {/* description -------------------*/}
      <div>
        <h2 className="text-xl md:text-2xl font-extrabold text-foreground tracking-tight mb-4 md:mb-5">About the Property</h2>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed md:leading-loose text-sm md:text-base font-medium">{property.description}</p>
      </div>

      {/* amenities ------------*/}
      <div>
        <h2 className="text-xl md:text-2xl font-extrabold text-foreground tracking-tight mb-4 md:mb-6">Amenities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {property.amenities.map((amenity) => (
            <div key={amenity} className="flex items-center gap-3 md:gap-4 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-xl md:rounded-2xl p-4 md:p-5 transition-all hover:shadow-[0_4px_20px_rgb(0,0,0,0.03)] dark:hover:shadow-none hover:border-emerald-500/30">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 md:w-5 md:h-5 stroke-[3]" />
              </div>
              <span className="font-bold text-sm md:text-[15px] text-slate-700 dark:text-slate-200">{amenity}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
