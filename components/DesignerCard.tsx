'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Star, MapPin, Clock, Heart } from 'lucide-react'
import Image from 'next/image'
import { Designer } from '@/types/types'

interface DesignerCardProps {
  designer: Designer
}
export default function DesignerCard({ designer }: DesignerCardProps) {
  const router = useRouter()
  const [isFavorited, setIsFavorited] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#00b67f] transition-all duration-300 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={designer.portfolio[currentImageIndex]}
          alt={`${designer.name}'s work`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          width={150}
          height={150}
        />

        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5">
          {designer.portfolio.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/75'}`}
            />
          ))}
        </div>

        <button
          onClick={() => setIsFavorited(!isFavorited)}
          className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all hover:scale-110"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-700'}`}
          />
        </button>

        <div className="absolute top-3 left-3 px-3 py-1 bg-black/80 backdrop-blur-sm text-white text-sm font-medium rounded-full">
          {designer.price}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <Image
            src={designer.image}
            alt={designer.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
            width={150}
            height={150}
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-black mb-1 truncate">{designer.name}</h3>
            <p className="text-sm text-gray-600 truncate">{designer.specialty}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4 text-sm">
          <div className="flex items-center gap-1 text-gray-700">
            <Star className="w-4 h-4 fill-[#00b67f] text-[#00b67f]" />
            <span className="font-medium">{designer.rating}</span>
            <span className="text-gray-500">({designer.reviews.length})</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{designer.location.split(',')[0]}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600 mb-5 pb-5 border-b border-gray-200">
          <Clock className="w-4 h-4" />
          <span>Typical turnaround: {designer.turnaround}</span>
        </div>

        <button
          onClick={() => router.push(`/designer/${designer.id}`)}
          className="w-full py-3 bg-black text-white font-medium rounded-full hover:bg-[#00b67f] transition-all duration-300 hover:scale-[1.02]"
        >
          View Profile
        </button>
      </div>
    </div>
  )
}
