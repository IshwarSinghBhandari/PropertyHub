import { Mail, Calendar, Clock, Tag } from 'lucide-react'
import { Property } from '@/types/property'

interface PropertySidebarProps {
  property: Property
}

export function PropertySidebar({ property }: PropertySidebarProps) {
  const formattedPricePerSqft = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(Math.round(property.price / property.area))

  return (
    <div className="space-y-6">
      {/* Contact Card */}
      <div className="bg-slate-50 dark:bg-slate-900/40 border border-border/40 rounded-3xl p-6 shadow-xs">
        <h3 className="text-xl font-bold text-foreground mb-1">Interested in this property?</h3>
        <p className="text-muted-foreground text-xs mb-4">Fill out the form below and our agent will reach out within 24 hours.</p>
        
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full h-12 bg-background border border-border/80 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 rounded-xl px-4 text-sm outline-none transition-all text-foreground"
          />
          <input
            type="tel"
            placeholder="Your phone number"
            className="w-full h-12 bg-background border border-border/80 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 rounded-xl px-4 text-sm outline-none transition-all text-foreground"
          />
          <button className="w-full h-12 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2 border-0">
            <Mail className="w-4 h-4" />
            <span>Schedule Tour</span>
          </button>
          <button className="w-full h-12 border border-border/85 text-foreground bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold rounded-xl transition-all cursor-pointer">
            Ask a Question
          </button>
        </div>
      </div>

      {/* Spec Box */}
      <div className="bg-slate-50 dark:bg-slate-900/40 border border-border/40 rounded-3xl p-6 shadow-xs">
        <h3 className="text-lg font-bold text-foreground mb-4">Property Overview</h3>
        <div className="space-y-4 text-sm">
          <div className="flex justify-between items-center pb-3 border-b border-border/40">
            <span className="text-muted-foreground flex items-center gap-2">
              <Calendar className="w-4 h-4 text-muted-foreground/80 shrink-0" />
              <span>Listed on</span>
            </span>
            <span className="text-foreground font-semibold">
              {new Date(property.createdAt).toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-border/40">
            <span className="text-muted-foreground flex items-center gap-2">
              <Clock className="w-4 h-4 text-muted-foreground/80 shrink-0" />
              <span>Property ID</span>
            </span>
            <span className="text-foreground font-semibold">{property.id}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground flex items-center gap-2">
              <Tag className="w-4 h-4 text-muted-foreground/80 shrink-0" />
              <span>Price per sqft</span>
            </span>
            <span className="text-foreground font-semibold">{formattedPricePerSqft}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
