"use client"
import { useEffect, useRef, useState } from 'react'
import { MapPin } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from '@/components/ui/card'
import {  BHK_OPTIONS, TYPE_OPTIONS } from '@/constants/filter'
import { useDebounce } from '@/hooks/useDebounce'
import { Filters } from '@/types/property'

interface BannerProps {
    filters: Filters
    setFilters: React.Dispatch<React.SetStateAction<Filters>>
}

function Banner({ filters, setFilters }: BannerProps) {
    const [location, setLocation] = useState<string>("")
    const locationRef = useRef<HTMLInputElement>(null)
    const debouncedSearch = useDebounce(location, 500)

    useEffect(() => {
        setFilters((prev) => ({
            ...prev,
            location: debouncedSearch,
        }))
    }, [debouncedSearch, setFilters])

    const handleBhkSelect = (item: string) => {
        setFilters((prev) => ({
            ...prev,
            bhk: prev.bhk === item || item === BHK_OPTIONS[0] ? BHK_OPTIONS[0] : item,
        }))
    }

    const handleTypeChange = (value: string) => {
        setFilters((prev) => ({ ...prev, type: value }))
    }

    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-0"
            style={{
                backgroundImage: "url('/images/bannerBG.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* overlays */}
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/20 to-black/70" />

            <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 pt-[10%]">

                {/* heading------------------- */}
                <div className="text-center max-w-3xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">

                    <div className="inline-flex items-center gap-2 border border-white/15 rounded-full px-4 py-1.5 mb-6">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs font-medium text-slate-300 tracking-wide">
                            India's most trusted property platform
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-extrabold text-white leading-[1.12] tracking-tight">
                        Your Next Home Is{" "}
                        <span className="text-emerald-400">One Search Away</span>
                    </h1>

                    <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-xl mx-auto font-light leading-relaxed">
                        From cozy studio flats to luxury penthouses - buy, rent or invest
                        in the property that fits your life.
                    </p>


                </div>

                {/* filter Card -------------------*/}
                <Card className="w-full backdrop-blur-xl bg-white/95 border border-white/20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] rounded-[2rem] max-md:rounded-[1rem] overflow-hidden">
                    <CardContent className="p-5 sm:p-6 flex flex-col gap-5">
                        <div className="flex flex-col gap-4">

                            {/* location input -----------------*/}
                            <div
                                onClick={() => locationRef.current?.focus()}
                                className="relative flex items-center bg-slate-50 border border-slate-200 hover:border-slate-300 focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-500/10 rounded-2xl px-4 max-sm:px-2 h-20 max-sm:h-16 md:h-16 transition-all group cursor-text gap-4 max-sm:gap-2"
                            >
                                {/* icon--- */}
                                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-50 group-focus-within:bg-emerald-100 transition">
                                    <MapPin className="w-5 h-5 text-slate-400 group-focus-within:text-emerald-600 transition-colors" />
                                </div>

                                <div className="w-full flex flex-col justify-center text-left max-md:py-2">
                                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none">
                                        Location
                                    </span>
                                    <Input
                                        ref={locationRef}
                                        type="text"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        placeholder="Search locality, city or project"
                                        className="w-full h-8 md:h-6 text-base font-semibold bg-transparent border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0 mt-0.5 text-slate-800 placeholder:text-slate-400 placeholder:font-normal"
                                    />
                                </div>
                            </div>

                            {/* buy/rent + BHK row ----------------------*/}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 max-sm:pt-0 border-t border-slate-100">

                                {/* buy / rent tabs -----------------*/}
                                <Tabs
                                    defaultValue={filters.type}
                                    onValueChange={handleTypeChange}
                                    className="shrink-0"
                                >
                                    <TabsList className="h-11 bg-slate-100 p-1 rounded-xl grid grid-cols-2 w-full sm:w-45">
                                        <TabsTrigger
                                            value={TYPE_OPTIONS[0]}
                                            className="h-9 px-4 font-bold text-md rounded-lg cursor-pointer transition-all data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm"
                                        >
                                            Buy
                                        </TabsTrigger>
                                        <TabsTrigger
                                            value={TYPE_OPTIONS[1]}
                                            className="h-9 px-4 font-bold text-md rounded-lg cursor-pointer transition-all data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm"
                                        >
                                            Rent
                                        </TabsTrigger>
                                    </TabsList>
                                </Tabs>

                                {/* BHK chips ------------- */}
                                <div className="flex overflow-x-auto no-scrollbar items-center gap-2 py-1 max-sm:pt-3">
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 hidden md:inline-block">
                                        Rooms:
                                    </span>
                                    {BHK_OPTIONS.map((item) => (
                                        <button
                                            key={item}
                                            type="button"
                                            onClick={() => handleBhkSelect(item)}
                                            className={`h-9 px-4 whitespace-nowrap rounded-xl text-xs font-bold transition-all border ${filters.bhk === item
                                                ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                                                : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900"
                                                }`}
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </CardContent>
                </Card>

            </div>
        </section>
    )
}

export default Banner