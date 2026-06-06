"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BedDouble,
  Maximize,
  MapPin,
  Heart,
  Layers,
} from "lucide-react";
import { PropertyCardProps } from "@/types/property";
import { TYPE_OPTIONS } from "@/constants/filter";
import { formatPrice } from "@/utils/formatters";

export function PropertyCard({ property }: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const bhkText = property.bhk > 0 ? `${property.bhk} BHK` : "Plot";

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };

  return (
    <Link href={`/property/${property.id}`} className="group block h-full">
      <article className="relative h-full overflow-hidden rounded-[28px] border border-border/40 bg-card transition-all duration-700 hover:-translate-y-2 hover:border-primary/20 hover:shadow-[0_25px_80px_rgba(0,0,0,0.12)]">
   
        {/* Image section ---------------------------*/}
        <div className="relative overflow-hidden">
          <div className="relative aspect-4/3">
            <Image
              src={property.images[0]}
              alt={property.title}
              fill
              priority={property.featured}
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

            {/* light sweep ----------------------*/}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
              <div className="absolute inset-y-0 -left-40 w-32 bg-white/20 blur-2xl rotate-12 `group-hover:translate-x-112.5 transition-transform duration-1000" />
            </div>

            {/* top badges ------------*/}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {property.featured && (
                <span className="px-3 py-1 rounded-full bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-lg">
                  Featured
                </span>
              )}

              <span className="px-3 py-1 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 text-white text-[10px] font-medium">
                {property.type === TYPE_OPTIONS[0] ? "For Sale" : "For Rent"}
              </span>
            </div>

            {/* favorite ---------------------*/}
            <button
              onClick={handleFavorite}
              className="absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 text-white hover:scale-110 transition-all duration-300"
            >
              <Heart
                className={`h-4 w-4 transition-all duration-300 ${
                  isFavorite ? "fill-red-500 text-red-500 scale-110" : ""
                }`}
              />
            </button>

            {/* price ---------------*/}
            <div className="absolute left-4 bottom-4">
              <div className="px-4 py-2.5 rounded-2xl backdrop-blur-xl bg-white/15 border border-white/20 shadow-2xl">
                <div className="text-white font-bold text-[16px]">
                  {formatPrice(property.price)}
                  {property.type === "rent" && (
                    <span className="text-xs font-medium ml-1">/month</span>
                  )}
                </div>
              </div>
            </div>

            {/*  stats--------------------- */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              <div className="flex items-center gap-1 px-3 py-1.5 rounded-full backdrop-blur-xl bg-black/30 border border-white/10 text-white text-xs">
                <BedDouble className="h-3.5 w-3.5" />
                {bhkText}
              </div>

              <div className="flex items-center gap-1 px-3 py-1.5 rounded-full backdrop-blur-xl bg-black/30 border border-white/10 text-white text-xs">
                <Maximize className="h-3.5 w-3.5" />
                {property.area} sqft
              </div>
            </div>

            {/* image count ------------------ */}
            {property.images.length > 1 && (
              <div className="absolute bottom-16 right-4">
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full backdrop-blur-xl bg-black/40 border border-white/10 text-white text-xs">
                  <Layers className="h-3 w-3" />
                  {property.images.length}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* content ---------------*/}
        <div className="p-5 flex flex-col gap-4">
          <div>
            <h3 className="text-lg font-bold text-foreground line-clamp-2 leading-snug transition-colors group-hover:text-primary">
              {property.title}
            </h3>

            <div className="flex items-center gap-1.5 mt-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <p className="text-sm text-muted-foreground line-clamp-1">
                {property.location}
              </p>
            </div>
          </div>

          {/* amenities ---------------*/}
          <div className="flex flex-wrap gap-2">
            {property.amenities.slice(0, 3).map((amenity) => (
              <span
                key={amenity}
                className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground transition-all group-hover:bg-primary/10 group-hover:text-primary"
              >
                {amenity}
              </span>
            ))}

            {property.amenities.length > 3 && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                +{property.amenities.length - 3}
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}