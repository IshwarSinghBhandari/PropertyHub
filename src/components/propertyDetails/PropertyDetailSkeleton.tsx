import { Skeleton } from "@/components/ui/skeleton";

export function PropertyDetailSkeleton() {
  return (
    <div className="pb-16 bg-background">
      {/* Gallery Skeleton (Dark Header Overlay) */}
      <section className="bg-slate-950 pt-28 pb-8 border-b border-slate-900 animate-pulse">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="space-y-4 flex-1">
              <Skeleton className="h-10 w-3/4 max-w-2xl bg-slate-800 rounded-xl" />
              <Skeleton className="h-6 w-1/3 max-w-sm bg-slate-800 rounded-xl" />
            </div>
            <div className="shrink-0">
              <Skeleton className="h-12 w-48 bg-slate-800 rounded-2xl" />
            </div>
          </div>

          <div className="space-y-4">
            <Skeleton className="w-full h-96 sm:h-[500px] rounded-3xl bg-slate-800" />
            <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-20 w-24 sm:h-24 sm:w-32 rounded-2xl flex-shrink-0 bg-slate-800" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-12 bg-background animate-pulse">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="grid grid-cols-3 gap-4">
                <Skeleton className="h-24 rounded-2xl" />
                <Skeleton className="h-24 rounded-2xl" />
                <Skeleton className="h-24 rounded-2xl" />
              </div>
              <div className="space-y-3">
                <Skeleton className="h-6 w-32 rounded-lg" />
                <Skeleton className="h-32 w-full rounded-2xl" />
              </div>
            </div>
            <div className="lg:col-span-1 space-y-6">
              <Skeleton className="h-72 rounded-3xl" />
              <Skeleton className="h-44 rounded-3xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
