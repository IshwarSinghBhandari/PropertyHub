"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
    MapPin,
    Phone,
    Mail,
    ArrowRight,
    Sparkles,
    CheckCircle2
} from 'lucide-react'
import { LINK_GROUP_1, LINK_GROUP_2, SOCIAL_LINK } from '@/constants/footer'

function Footer() {
    const currentYear = new Date().getFullYear()
    const [email, setEmail] = useState('')
    const [subscribed, setSubscribed] = useState(false)

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault()
        if (email) {
            setSubscribed(true)
            setEmail('')
            setTimeout(() => setSubscribed(false), 3000)
        }
    }


    return (
        <footer className="relative bg-[#030d16] text-slate-400 border-t border-slate-800/60 font-sans pt-20 pb-8 overflow-hidden transition-colors duration-300">

            {/* background ambient glows -----------*/}
            <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* top section */}
                <div className="relative bg-linear-to-br from-slate-900/80 to-slate-950/80 border border-slate-800/80 backdrop-blur-md rounded-2xl p-8 lg:p-10 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8 mb-16 shadow-xl">
                    <div className="max-w-xl">
                        <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full font-medium text-xs tracking-wider uppercase mb-3 border border-emerald-500/20">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Stay Informed</span>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight">
                            Subscribe to PropertyHub Insights
                        </h3>
                        <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                            Join thousands of investors receiving curated property selections, investment blueprints, and local real estate updates weekly.
                        </p>
                    </div>

                    <div className="flex items-center min-w-[320px] lg:min-w-105">
                        <form onSubmit={handleSubscribe} className="w-full flex flex-col sm:flex-row items-stretch gap-2">
                            <div className="relative flex-1">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full h-12 bg-slate-950/60 hover:bg-slate-950 focus:bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl px-4 text-sm text-white placeholder-slate-500 transition-all outline-none shadow-inner focus:ring-1 focus:ring-emerald-500/30"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={subscribed}
                                className={`h-12 font-semibold text-sm rounded-xl px-6 flex items-center justify-center gap-2 transition-all cursor-pointer shrink-0 border shadow-sm ${subscribed
                                    ? "bg-emerald-950 text-emerald-400 border-emerald-800/50"
                                    : "bg-emerald-600 hover:bg-emerald-500 text-white border-emerald-500/20 active:scale-[0.98]"
                                    }`}
                            >
                                {subscribed ? (
                                    <>
                                        <CheckCircle2 className="w-4 h-4" />
                                        <span>Joined!</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Subscribe</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                {/* main   */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* col 1: brand info & social  */}
                    <div className="flex flex-col gap-5">
                        <Link href="/" className="inline-block transition-opacity hover:opacity-90 shrink-0">
                            <Image src="/images/logo.png" alt="PropertyHub Logo" width={150} height={40} className="h-auto w-auto" priority />
                        </Link>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Discover premium real estate ecosystems that elevate living standards. Connecting buyers, sellers, and elite modern properties globally.
                        </p>

                        <div className="flex items-center gap-2.5 mt-2">
                            {SOCIAL_LINK.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-emerald-950/20 flex items-center justify-center transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    {social.svg}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* col 2: properties ---------------- */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-xs font-bold text-white uppercase tracking-widest border-l-2 border-emerald-500 pl-3">
                            Explore Properties
                        </h4>
                        <ul className="flex flex-col gap-3 mt-1">
                            {LINK_GROUP_1.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-center text-sm text-slate-400 hover:text-white transition-colors duration-200"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 scale-0 group-hover:scale-100 mr-0 group-hover:mr-2 transition-all opacity-0 group-hover:opacity-100" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* col 3: company ----------------- */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-xs font-bold text-white uppercase tracking-widest border-l-2 border-emerald-500 pl-3">
                            Our Company
                        </h4>
                        <ul className="flex flex-col gap-3 mt-1">
                            {LINK_GROUP_2.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-center text-sm text-slate-400 hover:text-white transition-colors duration-200"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 scale-0 group-hover:scale-100 mr-0 group-hover:mr-2 transition-all opacity-0 group-hover:opacity-100" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* col 4: contact & locations-------------- */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-xs font-bold text-white uppercase tracking-widest border-l-2 border-emerald-500 pl-3">
                            Contact & HQ
                        </h4>
                        <ul className="flex flex-col gap-4 mt-1">
                            <li className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                <span>1205 Seaface Tower, Worli, Mumbai, MH, 400018</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-400">
                                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                                <a href="tel:+91987654321" className="hover:text-white transition-colors">+91 987654321</a>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-400">
                                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                                <a href="mailto:contact@propertyhub.com" className="hover:text-white transition-colors">contact@propertyhub.com</a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* divider line -------------*/}
                <div className="h-px bg-linear-to-r from-transparent via-slate-800 to-transparent my-8" />

                {/* bottom bar------------- */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
                    <div className="flex items-center gap-2 order-2 md:order-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>© {currentYear} PropertyHub Private Limited. All rights reserved.</span>
                    </div>

                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 order-1 md:order-2">
                        <Link href="/privacy" className="hover:text-slate-300 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-slate-300 transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="/cookies" className="hover:text-slate-300 transition-colors">
                            Cookies Settings
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer