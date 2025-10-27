'use client'

import { useState } from 'react'
import { DollarSign, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const [totalIncome, setTotalIncome] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-purple-50 to-emerald-50 p-4">
      <div className="max-w-md mx-auto pt-8">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <DollarSign className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-2xl font-bold text-purple-800 mb-4">
            Welcome to Abundance Flow!
          </h1>

          <p className="text-purple-600 mb-6">
            Let's start your journey of abundance
          </p>

          <Link href="/renda">
            <button
              className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 mx-auto"
            >
              <Sparkles className="w-5 h-5" />
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}