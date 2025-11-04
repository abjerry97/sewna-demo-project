'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  ArrowLeft,
  Star,
  MapPin,
  Clock,
  Heart,
  Share2,
  MessageCircle,
  Calendar,
} from 'lucide-react'
import Image from 'next/image'
import { Designer, Review } from '@/types/types'

export default function DesignerProfile({ designer }: { designer: Designer }) {
  const router = useRouter()
  const [isFavorited, setIsFavorited] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  const reviews = designer.reviews

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button
                onClick={() => router.push('/discover')}
                className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back</span>
              </button>
              <div className="text-black text-2xl font-bold tracking-tight">SEWNA.</div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsFavorited(!isFavorited)}
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-[#00b67f] transition-colors"
              >
                <Heart
                  className={`w-5 h-5 transition-colors ${isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-700'}`}
                />
              </button>
              <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-[#00b67f] transition-colors">
                <Share2 className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={designer.portfolio[selectedImage]}
                  alt="Portfolio"
                  className="w-full h-full object-cover"
                  width={150}
                  height={150}
                />
              </div>

              <div className="grid grid-cols-6 gap-3">
                {designer.portfolio.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden transition-all ${selectedImage === index ? 'ring-2 ring-[#00b67f] scale-105' : 'opacity-60 hover:opacity-100'}`}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                      width={150}
                      height={150}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-light text-black">About</h2>
              <p className="text-gray-600 leading-relaxed">{designer.bio}</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-light text-black">Skills & Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {designer.skills.map((skill: string) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-light text-black">Reviews</h2>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-[#00b67f] text-[#00b67f]" />
                  <span className="text-lg font-medium">{designer.rating}</span>
                  <span className="text-gray-500">({designer.reviews.length} reviews)</span>
                </div>
              </div>
              <div className="space-y-6">
                {reviews.map((review: Review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                    <div className="flex items-start gap-4">
                      <Image
                        src={review.image}
                        alt={review.author}
                        className="w-12 h-12 rounded-full object-cover"
                        width={100}
                        height={100}
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h3 className="font-medium text-black">{review.author}</h3>
                            <p className="text-sm text-gray-500">{review.date}</p>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-[#00b67f] text-[#00b67f]" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-6">
                {/* Profile */}
                <div className="flex items-center gap-4">
                  <Image
                    src={designer.image}
                    alt={designer.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                    width={150}
                    height={150}
                  />
                  <div>
                    <h1 className="text-xl font-semibold text-black">{designer.name}</h1>
                    <p className="text-gray-600">{designer.specialty}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 py-4 border-y border-gray-200">
                  <div>
                    <div className="text-2xl font-semibold text-black">{designer.rating}</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-black">
                      {designer.completedProjects}
                    </div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>{designer.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    <span>Turnaround: {designer.turnaround}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <MessageCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Responds in {designer.responseTime}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between py-4 border-y border-gray-200">
                  <span className="text-gray-600">Price Range</span>
                  <span className="text-xl font-semibold text-black">{designer.price}</span>
                </div>

                <div className="space-y-3">
                  <button className="w-full py-3 bg-[#00b67f] text-white font-medium rounded-full hover:bg-[#00d68f] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Contact Designer
                  </button>
                  <button className="w-full py-3 bg-black text-white font-medium rounded-full hover:bg-gray-900 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Request Consultation
                  </button>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium text-black">Verified Designer</span>
                    <br />
                    Identity and work verified by SEWNA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
