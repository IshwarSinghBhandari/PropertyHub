import { Skeleton } from "@/components/ui/skeleton";

export function PropertyDetailSkeleton() {
  return (
    <div className="pb-16 bg-background">
      {/* Hero & Gallery Skeleton */}
      <section className="relative pb-12 pt-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/60 to-background z-0" />

        <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 gap-5">
          <div className="max-w-3xl flex-1 animate-pulse">
            <Skeleton className="h-6 w-32 bg-white/20 rounded-full mb-3 sm:mb-4" />
            <Skeleton className="h-10 sm:h-12 md:h-14 w-3/4 max-w-xl bg-white/20 rounded-2xl mb-3" />
            <Skeleton className="h-5 sm:h-6 w-1/3 max-w-xs bg-white/20 rounded-xl" />
          </div>
          <div className="animate-pulse">
            <Skeleton className="h-20 sm:h-24 w-40 sm:w-48 bg-white/10 rounded-2xl md:rounded-[2rem]" />
          </div>
        </div>

        {/* Gallery Skeleton */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-pulse">
          <div className="flex gap-4 lg:gap-5 h-[320px] md:h-[420px]">
            {/* Thumbnails */}
            <div className="w-24 md:w-40 shrink-0 flex flex-col gap-3 pr-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-20 md:h-24 w-full rounded-2xl bg-white/10" />
              ))}
            </div>
            {/* Main Image */}
            <Skeleton className="flex-1 rounded-[2rem] bg-white/10" />
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-8 md:py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content Column */}
            <div className="w-full lg:w-[65%] xl:w-[70%] space-y-8 md:space-y-10 animate-pulse">
              {/* Key Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Skeleton key={i} className="h-24 md:h-28 rounded-2xl md:rounded-[2rem]" />
                ))}
              </div>
              {/* Description */}
              <div className="space-y-4">
                <Skeleton className="h-8 w-48 rounded-xl mb-5" />
                <Skeleton className="h-4 w-full rounded-full" />
                <Skeleton className="h-4 w-[90%] rounded-full" />
                <Skeleton className="h-4 w-[95%] rounded-full" />
                <Skeleton className="h-4 w-[80%] rounded-full" />
              </div>
              {/* Amenities */}
              <div>
                <Skeleton className="h-8 w-40 rounded-xl mb-6" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <Skeleton key={i} className="h-16 md:h-20 rounded-xl md:rounded-2xl" />
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="w-full lg:w-[35%] xl:w-[30%] space-y-6 animate-pulse">
              <Skeleton className="h-80 rounded-3xl md:rounded-[2rem]" />
              <Skeleton className="h-48 rounded-3xl md:rounded-[2rem]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
