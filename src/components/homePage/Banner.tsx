"use client"
import React, { useRef, useState } from 'react'
import { Search, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

function Banner() {
    const [bhk, setBhk] = useState<string>("ALL")
    const [location, setLocation] = useState<string>("")
    const [activeTab, setActiveTab] = useState<string>("buy")
    const locationRef = useRef<HTMLInputElement>(null)

    const bhkOptions = ["ALL", "1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK"]

    const handleSearch = () => {
        console.log({ type: activeTab, location, bhk })
    }

    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-0"
            style={{
                backgroundImage: "url('/images/bannerBg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Dark Overlays */}
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/70" />

            <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 pt-[10%]">

                {/* Heading section ------------------------------- */}
                <div className="text-center max-w-3xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <Badge className="mb-4 bg-white/10 hover:bg-white/15 backdrop-blur-md text-white border-white/20 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide">
                        ✨ Trusted by 10,000+ Property Buyers
                    </Badge>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
                        Find Your <span className="text-emerald-400 drop-shadow-sm">Dream Home</span>
                    </h1>

                    <p className="mt-4 text-base sm:text-lg text-slate-200/90 max-w-xl mx-auto font-light">
                        Buy, Rent & Invest in premium properties across India.
                    </p>
                </div>

                {/* filter section ---------------------------------- */}
                <Card className="w-full backdrop-blur-xl bg-white/95 border border-white/20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] rounded-[2rem] max-md:rounded-[1rem] overflow-hidden">
                    <CardContent className="p-5 sm:p-6 flex flex-col gap-5">
                        <Tabs defaultValue="buy" onValueChange={setActiveTab} className="w-full">

                            <div className="flex flex-col gap-4">

                                <div className="flex flex-col md:flex-row items-stretch gap-3">

                                    {/* location input ------------------- */}
                                    <div
                                        onClick={() => locationRef.current?.focus()}
                                        className="flex-1 relative flex items-center bg-slate-50 border border-slate-200 hover:border-slate-300 focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-500/10 rounded-2xl px-4 h-20 md:h-16 transition-all group cursor-text"
                                    >
                                        <MapPin className="w-5 h-5 text-slate-400 group-focus-within:text-emerald-600 shrink-0 mr-3 transition-colors" />
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

                                    {/* Main Action Trigger */}
                                    <Button
                                        onClick={handleSearch}
                                        className="h-12 md:h-16 w-full md:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 rounded-2xl shadow-md shadow-emerald-600/10 transition-all flex items-center justify-center gap-2 text-base shrink-0"
                                    >
                                        <Search className="h-5 w-5 stroke-[2.5]" />
                                        <span>Search Properties</span>
                                    </Button>
                                </div>

                                {/* BOTTOM ROW: Toggle Tabs & BHK Filter Selectors */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-slate-100">

                                    {/* Segment Switcher (Buy/Rent) */}
                                    <div className="shrink-0">
                                        <TabsList className="h-11 bg-slate-100 p-1 rounded-xl grid grid-cols-2 w-full sm:w-[180px]">
                                            <TabsTrigger
                                                value="buy"
                                                className="h-9 px-4 font-bold text-md rounded-lg cursor-pointer transition-all data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm"
                                            >
                                                Buy
                                            </TabsTrigger>
                                            <TabsTrigger
                                                value="rent"
                                                className="h-9 px-4 font-bold text-md rounded-lg cursor-pointer transition-all data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm"
                                            >
                                                Rent
                                            </TabsTrigger>
                                        </TabsList>
                                    </div>

                                    {/* BHK filter -----------------*/}
                                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 hidden md:inline-block">
                                            Rooms:
                                        </span>
                                        {bhkOptions.map((item) => {
                                            const isActive = bhk === item
                                            return (
                                                <button
                                                    key={item}
                                                    type="button"
                                                    onClick={() => {
                                                        if (item === "ALL") {
                                                            setBhk("ALL");
                                                        } else {
                                                            setBhk(isActive ? "ALL" : item);
                                                        }
                                                    }}
                                                    className={`h-9 px-4 whitespace-nowrap rounded-xl text-xs font-bold transition-all border ${isActive
                                                        ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                                                        : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900"
                                                        }`}
                                                >
                                                    {item}
                                                </button>
                                            )
                                        })}
                                    </div>

                                </div>

                            </div>
                        </Tabs>
                    </CardContent>
                </Card>

                {/* Statistics Layout Grid Counter */}
                <div className="flex flex-row justify-center items-center gap-8 md:gap-16 mt-12 text-white text-center">
                    <div>
                        <p className="text-2xl md:text-3xl font-extrabold tracking-tight">10K+</p>
                        <p className="text-[11px] md:text-xs text-slate-300 font-medium mt-0.5 uppercase tracking-wider">Properties</p>
                    </div>
                    <div className="w-px h-6 bg-white/20" />
                    <div>
                        <p className="text-2xl md:text-3xl font-extrabold tracking-tight">250+</p>
                        <p className="text-[11px] md:text-xs text-slate-300 font-medium mt-0.5 uppercase tracking-wider">Builders</p>
                    </div>
                    <div className="w-px h-6 bg-white/20" />
                    <div>
                        <p className="text-2xl md:text-3xl font-extrabold tracking-tight">15+</p>
                        <p className="text-[11px] md:text-xs text-slate-300 font-medium mt-0.5 uppercase tracking-wider">Cities</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Banner