"use client"

import * as React from "react"
import { useState } from "react"
import Link from "next/link"
import { Heart, ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import { NAVBAR_LINK } from "@/constants/header"

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <header
            className={`fixed top-0 z-50 w-full backdrop-blur-xl  text-white transition-colors duration-300 ${scrolled ? "bg-gray-500/40 " : "bg-transparent"}`}   >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20 ">

                    {/* logo ------------ */}
                    <Link href="/" className="flex items-center gap-3 group shrink-0 select-none font-sans">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={180}
                            height={90}
                            className="w-35 sm:w-40 md:w-45 h-auto"
                        />
                    </Link>

                    {/* Desktop navigation links ------------- */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-sans">
                        {NAVBAR_LINK.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-white/80 hover:text-white transition-colors text-[14px] font-medium flex items-center gap-1"
                            >
                                {link.name}
                                {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5 opacity-70" />}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop actions ------------------ */}
                    <div className="hidden md:flex items-center gap-5 lg:gap-6 font-sans">
                        <Link
                            href="/saved"
                            className="text-white/80 hover:text-white transition-colors text-[14px] font-medium flex items-center gap-1.5"
                        >
                            <Heart className="w-4.5 h-4.5" />
                            <span>Saved</span>
                        </Link>

                        <Link
                            href="/signin"
                            className="border border-white/45 hover:border-white hover:bg-white/10 rounded-full px-5 py-1.5 text-[14px] font-medium transition-all duration-200"
                        >
                            Sign In
                        </Link>
                    </div>

                    {/* Mobile menu button --------------- */}
                    <div className="flex md:hidden items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-white/80 hover:text-white p-2 rounded-lg transition-colors focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile menu ------------------- */}
            {mobileMenuOpen && (
                <div className="md:hidden backdrop-blur-xl bg-gray-500/40 border-t border-white/5 py-4 px-6 flex flex-col gap-5 max-h-[calc(100vh-5rem)] overflow-y-auto shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200 font-sans">
                    <nav className="flex flex-col gap-4">
                        {NAVBAR_LINK.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-white/80 hover:text-white py-1 transition-colors text-base font-semibold flex items-center justify-between"
                            >
                                <span>{link.name}</span>
                                {link.hasDropdown && <ChevronDown className="w-4 h-4 opacity-70" />}
                            </Link>
                        ))}
                    </nav>

                    <div className="h-px bg-white/5 my-1" />

                    <div className="flex flex-col gap-4">
                        <Link
                            href="/saved"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-white/80 hover:text-white transition-colors text-base font-semibold flex items-center gap-2"
                        >
                            <Heart className="w-5 h-5 text-rose-500 fill-rose-500/10" />
                            <span>Saved Properties</span>
                        </Link>

                        <Link
                            href="/signin"
                            onClick={() => setMobileMenuOpen(false)}
                            className="border border-white/45 hover:border-white hover:bg-white/10 text-center rounded-full py-2.5 text-base font-semibold transition-all duration-200 w-full"
                        >
                            Sign In
                        </Link>
                    </div>
                </div>
            )}
        </header>
    )
}
