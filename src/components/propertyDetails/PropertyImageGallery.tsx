'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Sparkles } from 'lucide-react'
import { Property } from '@/types/property'

interface PropertyImageGalleryProps {
  property: Property
}

export function PropertyImageGallery({
  property,
}: PropertyImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  return (
    <div className="flex gap-4 lg:gap-5 h-[320px] md:h-[420px]">
      {/* Thumbnails */}
      <div className="w-24 md:w-42 shrink-0 overflow-y-auto pr-3 thin-scrollbar">
        <div className="flex flex-col gap-3">
          {property.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={` relative h-20 md:h-24 w-full rounded-2xl overflow-hidden  border-2 transition-all duration-300
                ${
                  selectedImageIndex === index
                    ? 'border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                    : 'border-white/10 hover:border-white/30'
                }
              `}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Main Image */}
      <div className="relative flex-1 rounded-[2rem] overflow-hidden bg-black/40 border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] backdrop-blur-md group">
        <Image
          src={property.images[selectedImageIndex]}
          alt={`${property.title} - Image ${selectedImageIndex + 1}`}
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Badges */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6 flex gap-2.5 z-10">
          {property.featured && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500 text-white text-[11px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Featured
            </span>
          )}

          <span className="px-3 py-1.5 rounded-full backdrop-blur-md bg-black/40 border border-white/10 text-white text-[11px] font-bold uppercase tracking-wider">
            {property.type === 'buy' ? 'For Sale' : 'For Rent'}
          </span>
        </div>
      </div>
    </div>
  )
}