'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Sparkles, Users } from 'lucide-react'
import Image from 'next/image'
export default function Welcome() {
  const router = useRouter()
  const [hoveredSide, setHoveredSide] = useState<'designer' | 'client' | null>(null)
  const handleDesignerClick = () => {
    router.push('/designer-signup')
  }
  const handleClientClick = () => {
    router.push('/discover')
  }
  return (
    <div className="w-full h-screen flex overflow-hidden bg-white">
      <div
        className={`relative flex-1 transition-all duration-700 ease-out cursor-pointer ${hoveredSide === 'designer' ? 'flex-[1.1]' : hoveredSide === 'client' ? 'flex-[0.9]' : 'flex-1'}`}
        onMouseEnter={() => setHoveredSide('designer')}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={handleDesignerClick}
      >
        <div className="absolute inset-0 bg-black">
          <Image
            src="/images/demoImages/photo-1558769132-cb1aea2f2b1d.jpeg"
            alt="Designer workspace"
            className="w-full h-full object-cover opacity-40"
            width={150}
            height={150}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/80" />
        </div>

        <div className="relative z-10 flex flex-col justify-between h-full p-12">
          <div className="text-[#00b67f] text-3xl font-bold tracking-tight">SEWNA.</div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 text-[#00b67f]">
              <Sparkles className="w-6 h-6" />
              <span className="text-sm font-medium tracking-wider uppercase">For Creators</span>
            </div>
            <h1 className="text-white text-6xl font-light tracking-tight leading-tight">
              I am a<br />
              designer
            </h1>
            <p className="text-gray-300 text-lg max-w-md font-light">
              Showcase your talent, connect with clients, and bring unique visions to life.
            </p>
            <button
              className="mt-8 px-8 py-4 bg-[#00b67f] text-black font-medium rounded-full hover:bg-[#00d68f] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00b67f]/20 relative z-20"
              onClick={(e) => {
                e.stopPropagation()
                handleDesignerClick()
              }}
            >
              Start Creating
            </button>
          </div>

          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-1 w-12 bg-[#00b67f] rounded-full"
                style={{
                  opacity: 1 - i * 0.3,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />

      <div
        className={`relative flex-1 transition-all duration-700 ease-out cursor-pointer ${hoveredSide === 'client' ? 'flex-[1.1]' : hoveredSide === 'designer' ? 'flex-[0.9]' : 'flex-1'}`}
        onMouseEnter={() => setHoveredSide('client')}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={handleClientClick}
      >
        <div className="absolute inset-0 bg-white overflow-hidden">
          <div className="absolute top-20 right-20 w-32 h-40 rounded-lg overflow-hidden shadow-lg opacity-80 transform rotate-6">
            <Image
              src="/images/demoImages/photo-1515886657613-9f3515b0c78f.jpeg"
              alt="Fashion"
              className="w-full h-full object-cover"
              width={150}
              height={150}
            />
          </div>
          <div className="absolute bottom-32 right-32 w-40 h-48 rounded-lg overflow-hidden shadow-lg opacity-70 transform -rotate-3">
            <Image
              src="/images/demoImages/photo-1539008835657-9e8e9680c956.jpeg"
              alt="Fashion"
              className="w-full h-full object-cover"
              width={150}
              height={150}
            />
          </div>
          <div className="absolute top-1/2 right-12 w-28 h-36 rounded-lg overflow-hidden shadow-lg opacity-60 transform rotate-12">
            <Image
              src="/images/demoImages/photo-1490481651871-ab68de25d43d.jpeg"
              alt="Fashion"
              className="w-full h-full object-cover"
              width={150}
              height={150}
            />
          </div>
        </div>

        <div className="relative z-10 flex flex-col justify-between h-full p-12">
          <div />

          <div className="space-y-6">
            <div className="flex items-center gap-3 text-[#00b67f]">
              <Users className="w-6 h-6" />
              <span className="text-sm font-medium tracking-wider uppercase">For Clients</span>
            </div>
            <h1 className="text-black text-6xl font-light tracking-tight leading-tight">
              I need a<br />
              designer
            </h1>
            <p className="text-gray-600 text-lg max-w-md font-light">
              Discover talented designers who can transform your vision into reality.
            </p>
            <button
              className="mt-8 px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-lg relative z-20"
              onClick={(e) => {
                e.stopPropagation()
                handleClientClick()
              }}
            >
              Find Designers
            </button>
          </div>

          <div className="flex gap-2 justify-end">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-1 w-12 bg-black rounded-full"
                style={{
                  opacity: 1 - i * 0.3,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
