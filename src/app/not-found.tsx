"use client"

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Home, Search, Compass } from 'lucide-react'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[70vh] bg-slate-50 dark:bg-[#090f1c] px-4 py-16 text-center font-sans transition-colors duration-300">
      
      <div className="relative mb-8 flex items-center justify-center">
        <div className="absolute w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -translate-x-12 translate-y-6" />

        <div className="relative z-10 w-36 h-36 flex items-center justify-center text-slate-400">
          <svg 
            className="w-24 h-24 text-slate-300 dark:text-slate-700" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M3 10.5L12 3l9 7.5" />
            <path d="M5 9.5V20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9.5" />
          </svg>
          <div className="absolute bottom-2 right-2 bg-slate-900 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 p-2.5 rounded-full shadow-lg text-emerald-400">
            <Search className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div className="absolute top-1 left-8 text-amber-500 animate-bounce">
            <Compass className="w-5 h-5 stroke-[2.5]" />
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto">
        <h1 className="text-8xl font-extrabold tracking-tighter text-slate-900 dark:text-white mb-2 font-sans select-none">
          404
        </h1>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 tracking-tight font-sans mb-4">
          Property Not Found
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">
          The property, page, or real estate directory listing you are looking for has been relocated, sold, or doesn&apos;t exist. Let&apos;s get you back on the right track.
        </p>
      </div>

      {/* CTA buttons =----------------*/}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-sm">
        <button
          onClick={() => router.back()}
          className="w-full sm:w-auto h-11 border border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-900 font-semibold text-sm rounded-xl px-5 flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Go Back</span>
        </button>

        <Link
          href="/"
          className="w-full sm:w-auto h-11 bg-emerald-600 hover:bg-emerald-500 text-white border border-emerald-500/20 font-semibold text-sm rounded-xl px-6 flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg active:scale-98"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </div>

    </div>
  )
}
