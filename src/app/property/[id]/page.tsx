'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { getPropertyById, getProperties } from '@/utils/propertyAPI'
import Link from 'next/link'
import { PropertyCard } from '@/components/PropertyCard/PropertyCard'
import { Building2, Heart, MapPin } from 'lucide-react'
import { PropertyDetailSkeleton } from '@/components/propertyDetails/PropertyDetailSkeleton'
import { PropertyImageGallery } from '@/components/propertyDetails/PropertyImageGallery'
import { PropertyInfoDetails } from '@/components/propertyDetails/PropertyInfoDetails'
import { PropertySidebar } from '@/components/propertyDetails/PropertySidebar'
import { formatPrice } from '@/utils/formatters'
import { Property } from '@/types/property'
import FavoriteButton from '@/components/common/FavoriteButton'

export default function PropertyDetail() {
    const params = useParams()
    const propertyId = params?.id as string

    const [property, setProperty] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const [relatedProperties, setRelatedProperties] = useState<any[]>([])

    useEffect(() => {
        if (!propertyId) return

        const fetchProperty = async () => {
            try {
                setLoading(true)
                const data = await getPropertyById(propertyId)
                setProperty(data)

                if (data) {
                    try {
                        const relatedData = await getProperties({ type: data.type, bhk: 'ALL', location: '' })
                        const filteredRelated = relatedData.filter((p: Property) => p.id !== data.id).slice(0, 3)
                        setRelatedProperties(filteredRelated)
                    } catch (relatedErr) {
                        console.error("Failed to fetch related properties", relatedErr)
                    }
                }
            } catch (err) {
                console.error("Failed to fetch property", err)
            } finally {
                setLoading(false)
            }
        }

        fetchProperty()
    }, [propertyId])

    if (loading) {
        return <PropertyDetailSkeleton />
    }

    if (!property) {
        return (
            <div className="min-h-[70vh] flex items-center justify-center py-20 bg-background">
                <div className="text-center max-w-md mx-auto px-4">
                    <div className="inline-flex p-4 bg-rose-500/10 text-rose-500 rounded-2xl mb-4 border border-rose-500/20">
                        <Building2 className="w-8 h-8" />
                    </div>
                    <h1 className="text-3xl font-black text-foreground mb-3">Property Not Found</h1>
                    <p className="text-muted-foreground mb-8">The property you&apos;re looking for doesn&apos;t exist or has been removed from our listings.</p>
                    <Link href="/" className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-xs">
                        Back to Properties
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="pb-16 bg-background">
            {/* gallery section ------------------ */}
            <section className="relative pb-12 pt-32 overflow-hidden">
                {/* Blurred Background to match home page  */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url('${property.images?.[0] || '/images/bannerBg.png'}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "blur(30px)",
                        transform: "scale(1.1)",
                    }}
                />
                <div className="absolute inset-0 bg-black/50 z-0" />
                <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/60 to-background z-0" />

                <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 gap-5">
                    <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 mb-3 sm:mb-4 bg-white/10 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-[10px] sm:text-xs font-medium text-slate-200 tracking-wide">
                                Verified Property
                            </span>
                        </div>
                        <h1 className="text-2xl sm:text-4xl text-white font-extrabold tracking-tight leading-[1.15] mb-3">
                            {property.title}
                        </h1>
                        <p className="text-sm sm:text-base text-slate-200 flex items-start sm:items-center gap-1.5 font-light">
                            <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400 shrink-0 mt-0.5 sm:mt-0" />
                            <span>{property.location}</span>
                        </p>
                    </div>

                    <div className="flex items-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700">
                        {/* favorite ---------------------*/}
                       <FavoriteButton />

                        <div className="px-5 py-3 sm:px-6 sm:py-4 rounded-2xl md:rounded-[2rem] backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl flex flex-col md:items-end animate-in fade-in slide-in-from-bottom-6 duration-700 w-fit">
                            <div className="text-slate-300 text-[10px] sm:text-xs font-bold mb-0.5 sm:mb-1 uppercase tracking-wider">Asking Price</div>
                            <div className="text-white font-extrabold text-xl sm:text-2xl">
                                {formatPrice(property.price)}
                                {property.type === "rent" && (
                                    <span className="text-sm sm:text-lg font-medium ml-1 text-slate-300">/month</span>
                                )}
                            </div>
                        </div>
                    </div>

                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                    <PropertyImageGallery property={property} />
                </div>
            </section>

            {/* details section ----------------*/}
            <section className="py-8 md:py-12 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* main content col -------------- */}
                        <div className="w-full lg:w-[65%] xl:w-[70%]">
                            <PropertyInfoDetails property={property} />
                        </div>

                        {/* Sidebar col--------------------- */}
                        <div className="w-full lg:w-[35%] xl:w-[30%]">
                            <PropertySidebar property={property} />
                        </div>
                    </div>
                </div>
            </section>

            {/* similar properties part-------------------------- */}
            {relatedProperties.length > 0 && (
                <section className="py-16 border-t border-border/60 bg-linear-to-b from-transparent to-slate-50/30 dark:to-slate-900/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-8">
                            Similar Properties
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-in fade-in duration-500">
                            {relatedProperties.map((prop) => (
                                <PropertyCard key={prop.id} property={prop} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}
