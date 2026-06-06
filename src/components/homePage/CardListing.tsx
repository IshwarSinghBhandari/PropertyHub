"use client";

import { PropertyCard } from "../PropertyCard/PropertyCard";
import { Props } from "@/types/property";
import { PropertyCardSkeleton } from "../PropertyCard/PropertyCardSkeleton";
import { TYPE_OPTIONS } from "@/constants/filter";
import { Building2 } from "lucide-react";

export default function CardListing({ properties, loading, type }: Props) {
  return (
    <section className="flex-1 py-12 sm:py-20 bg-linear-to-b from-transparent to-slate-50/30 dark:to-slate-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section ----------------------- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-10 border-b border-border/60">
          <div className="space-y-3">

            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              {type === TYPE_OPTIONS[0]
                ? "Properties for Sale"
                : "Properties for Rent"}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl leading-relaxed">
              Discover curated, premium residential spaces designed to elevate your living experience.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground text-xs font-bold rounded-2xl border border-border shadow-xs">
              <Building2 className="w-4 h-4 text-muted-foreground" />
              <span>
                {properties.length} {properties.length === 1 ? "Property" : "Properties"}
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold rounded-2xl border border-emerald-500/20 uppercase tracking-wider">
              <span>For {type}</span>
            </div>
          </div>
        </div>

        {/* content state ----------------------- */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <PropertyCardSkeleton key={index} />
            ))}
          </div>
        ) : properties.length > 0 ? (
          // show the data -----------------------
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          // empty state -----------------------
          <div className="text-center py-20 px-6 max-w-md mx-auto bg-slate-50/50 dark:bg-slate-900/30 border border-border/40 rounded-3xl backdrop-blur-xs shadow-xs animate-in fade-in zoom-in-95 duration-500">
            <div className="inline-flex p-4 rounded-2xl bg-muted text-muted-foreground mb-5 border border-border/50">
              <Building2 className="h-8 w-8 text-muted-foreground/80 stroke-[1.5]" />
            </div>

            <h3 className="text-xl font-bold text-foreground tracking-tight">
              No matching properties
            </h3>

            <p className="mt-2 text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">
              We couldn't find any listings matching your active filters. Try resetting the filters or choosing another location.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

