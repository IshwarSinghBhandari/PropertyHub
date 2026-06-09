import { Mail, Calendar, Clock, Tag } from 'lucide-react'
import { Property } from '@/types/property'
import { formatPrice } from '@/utils/formatters'

interface PropertySidebarProps {
  property: Property
}

export function PropertySidebar({ property }: PropertySidebarProps) {

  return (
    <div className="space-y-6">
      {/* Contact card ------------------*/}
      <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-3xl md:rounded-[2rem] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
        <h3 className="text-xl md:text-2xl font-extrabold text-foreground mb-1 md:mb-2">Interested?</h3>
        <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm mb-5 md:mb-6 leading-relaxed">Fill out the form below and our agent will reach out within 24 hours.</p>
        
        <div className="space-y-3 md:space-y-4">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full h-12 md:h-14 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 rounded-xl md:rounded-2xl px-4 md:px-5 text-sm outline-none transition-all text-foreground font-medium placeholder:text-slate-400 placeholder:font-normal"
          />
          <input
            type="tel"
            placeholder="Your phone number"
            className="w-full h-12 md:h-14 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 rounded-xl md:rounded-2xl px-4 md:px-5 text-sm outline-none transition-all text-foreground font-medium placeholder:text-slate-400 placeholder:font-normal"
          />
          <button className="w-full h-12 md:h-14 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl md:rounded-2xl transition-all shadow-[0_8px_20px_-6px_rgba(16,185,129,0.5)] cursor-pointer flex items-center justify-center gap-2 border-0 mt-1 md:mt-2">
            <Mail className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-sm md:text-base">Schedule Tour</span>
          </button>
          <button className="w-full h-12 md:h-14 border-2 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-700 font-bold rounded-xl md:rounded-2xl transition-all cursor-pointer text-sm md:text-base">
            Ask a Question
          </button>
        </div>
      </div>

      {/* spec box ----------------*/}
      <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-3xl md:rounded-[2rem] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
        <h3 className="text-lg md:text-xl font-extrabold text-foreground mb-5 md:mb-6">Property Overview</h3>
        <div className="space-y-4 md:space-y-5 text-xs md:text-sm">
          <div className="flex justify-between items-center pb-3 md:pb-4 border-b border-slate-100 dark:border-slate-800">
            <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2 md:gap-2.5 font-medium">
              <div className="p-1 md:p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800">
                <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-500 shrink-0" />
              </div>
              <span>Listed on</span>
            </span>
            <span className="text-foreground font-bold text-sm md:text-base">
              {new Date(property.createdAt).toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </span>
          </div>
          <div className="flex justify-between items-center pb-3 md:pb-4 border-b border-slate-100 dark:border-slate-800">
            <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2 md:gap-2.5 font-medium">
              <div className="p-1 md:p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800">
                <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-500 shrink-0" />
              </div>
              <span>Property ID</span>
            </span>
            <span className="text-foreground font-bold text-sm md:text-base">{property.id}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2 md:gap-2.5 font-medium">
              <div className="p-1 md:p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800">
                <Tag className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-500 shrink-0" />
              </div>
              <span>Price per sqft</span>
            </span>
            <span className="text-foreground font-bold text-sm md:text-base">{formatPrice(Math.round(property.price / property.area))}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
