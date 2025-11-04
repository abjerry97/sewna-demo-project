'use client'

import { useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Search, Filter } from 'lucide-react'
import DesignerCard from '@/components/DesignerCard'
import designers from '@/data/designers.json'

export default function DesignerDiscovery() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const categories = useMemo(() => {
    const specialties = designers.map((d) => d.specialty)
    return ['All', ...Array.from(new Set(specialties))]
  }, [])
  const filteredDesigners = designers.filter((designer) => {
    const matchesCategory = selectedCategory === 'All' || designer.specialty === selectedCategory
    const matchesSearch =
      designer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      designer.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      designer.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button
                onClick={() => router.push('/')}
                className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back</span>
              </button>
              <div className="text-black text-2xl font-bold tracking-tight">SEWNA.</div>
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-medium text-black">{filteredDesigners.length}</span> designers
              available
            </div>
          </div>
        </div>
      </header>

      <div className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-light text-black mb-4 tracking-tight">
              Discover Your Perfect Designer
            </h1>
            <p className="text-xl text-gray-600 font-light mb-8">
              Browse talented independent designers ready to bring your vision to life.
            </p>

            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, specialty, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00b67f] focus:border-transparent text-gray-900 placeholder-gray-400"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border-b border-gray-200 sticky top-[73px] z-40">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
            <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-[#00b67f] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {filteredDesigners.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDesigners.map((designer) => (
              <DesignerCard key={designer.id} designer={designer} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 py-20">
            No designers found for “{searchQuery || selectedCategory}”
          </div>
        )}
      </div>

      <footer className="bg-gray-50 border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <p className="text-gray-600 font-light">
            Can&apos;t find what you&apos;re looking for?{' '}
            <button className="text-[#00b67f] font-medium hover:underline">
              Post a custom request
            </button>
          </p>
        </div>
      </footer>
    </div>
  )
}
