'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { getPropertyById, getProperties } from '@/utils/propertyAPI'
import Link from 'next/link'
import { PropertyCard } from '@/components/PropertyCard/PropertyCard'
import { Building2, MapPin } from 'lucide-react'
import { PropertyDetailSkeleton } from '@/components/propertyDetails/PropertyDetailSkeleton'
import { PropertyImageGallery } from '@/components/propertyDetails/PropertyImageGallery'
import { PropertyInfoDetails } from '@/components/propertyDetails/PropertyInfoDetails'
import { PropertySidebar } from '@/components/propertyDetails/PropertySidebar'
import { formatPrice } from '@/utils/formatters'
import { Property } from '@/types/property'

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
        <div className="pb-16 bg-background ">
            {/* Gallery Section with Dark Backdrop to contrast transparent header */}
            <section className="bg-slate-950  pb-10 border-b border-slate-900 pt-32">
                <div className="flex justify-between items-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
                    <div className=" max-w-7xlmb-10">
                        <h1 className="text-3xl sm:text-4xl text-white font-extrabold text-foreground tracking-tight leading-tight mb-2">
                            {property.title}
                        </h1>
                        <p className="text-sm sm:text-base text-slate-300 max-w-2xl flex items-center gap-1">
                            <MapPin className="h-4 w-4 text-green-500" />
                            <span >{property.location}</span>
                        </p>
                    </div>
                    <div className="px-4 py-2.5 rounded-2xl backdrop-blur-xl bg-white/15 border border-white/20 shadow-2xl">
                        <div className="text-white font-bold text-[20px]">
                            {formatPrice(property.price)}
                            {property.type === "rent" && (
                                <span className="text-xs font-medium ml-1">/month</span>
                            )}
                        </div>
                    </div>
                </div>

                {/* divider line -------------*/}
                <div className="h-px bg-linear-to-r from-transparent via-slate-800 to-transparent mb-6" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <PropertyImageGallery property={property} />
                </div>
            </section>

            {/* Details Section */}
            <section className="py-12 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className=" flex  gap-8">
                        {/* Main Content Column */}
                        <div className="2">
                            <PropertyInfoDetails property={property} />
                        </div>

                        {/* Sidebar Column */}
                        <div className="1">
                            <PropertySidebar property={property} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Similar Properties */}
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
