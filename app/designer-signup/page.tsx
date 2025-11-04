'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Upload, Plus, X } from 'lucide-react'
import Image from 'next/image'
export default function DesignerSignup() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    specialty: '',
    experience: '',
    bio: '',
    priceRange: '',
    turnaround: '',
  })
  const [portfolioImages, setPortfolioImages] = useState<string[]>([])
  const [profileImage, setProfileImage] = useState<string>('')
  const specialties = [
    'Product & Interaction Design',
    'Minimalist UI & Brand Systems',
    'Inclusive & Accessible Design',
    'Luxury UI & Creative Direction',
    'UX Writing & Content Design',
    'Design Systems & Frontend Handoff',
  ]
  const priceRanges = ['$', '$$', '$$$', '$$$$']
  const turnaroundOptions = ['1 week', '1-2 weeks', '2-3 weeks', '3-4 weeks', '4-6 weeks']
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    router.push('/discover')
  }
  const addPortfolioImage = () => {
    const demoImages = [
      '/images/demoImages/designer.jpeg',
      '/images/demoImages/designer1.jpeg',
      '/images/demoImages/designer2.jpeg',
    ]

    if (portfolioImages.length < 6) {
      setPortfolioImages([...portfolioImages, demoImages[portfolioImages.length % 3]])
    }
  }
  const removePortfolioImage = (index: number) => {
    setPortfolioImages(portfolioImages.filter((_, i) => i !== index))
  }
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-4">
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
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-light text-black mb-4 tracking-tight">Join as a Designer</h1>
          <p className="text-xl text-gray-600 font-light">
            Showcase your talent and connect with clients looking for unique designs.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Profile Photo</label>
            <div className="flex items-center gap-6">
              {profileImage ? (
                <Image
                  src={profileImage}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
                  width={100}
                  height={100}
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
                  <Upload className="w-8 h-8 text-gray-400" />
                </div>
              )}
              <button
                type="button"
                onClick={() => setProfileImage('/images/demoImages/designer.jpeg')}
                className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Upload Photo
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-light text-black">Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00b67f] focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00b67f] focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00b67f] focus:border-transparent"
                  placeholder="+XX XXXXX XXXXX"
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00b67f] focus:border-transparent"
                  placeholder="City, Country"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-light text-black">Professional Details</h2>
            <div>
              <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-2">
                Specialty *
              </label>
              <select
                id="specialty"
                name="specialty"
                required
                value={formData.specialty}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00b67f] focus:border-transparent"
              >
                <option value="">Select your specialty</option>
                {specialties.map((specialty) => (
                  <option key={specialty} value={specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                Years of Experience *
              </label>
              <input
                type="number"
                id="experience"
                name="experience"
                required
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00b67f] focus:border-transparent"
                placeholder="e.g., 5"
              />
            </div>
            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-2">
                Bio *
              </label>
              <textarea
                id="bio"
                name="bio"
                required
                value={formData.bio}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00b67f] focus:border-transparent resize-none"
                placeholder="Tell clients about your design philosophy and experience..."
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="priceRange"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Price Range *
                </label>
                <select
                  id="priceRange"
                  name="priceRange"
                  required
                  value={formData.priceRange}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00b67f] focus:border-transparent"
                >
                  <option value="">Select price range</option>
                  {priceRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="turnaround"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Typical Turnaround *
                </label>
                <select
                  id="turnaround"
                  name="turnaround"
                  required
                  value={formData.turnaround}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00b67f] focus:border-transparent"
                >
                  <option value="">Select turnaround time</option>
                  {turnaroundOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-light text-black">Portfolio</h2>
            <p className="text-gray-600">Add up to 3 images showcasing your best work</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {portfolioImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-lg overflow-hidden group"
                >
                  <Image
                    src={image}
                    alt={`Portfolio ${index + 1}`}
                    className="w-full h-full object-cover"
                    width={150}
                    height={150}
                  />
                  <button
                    type="button"
                    onClick={() => removePortfolioImage(index)}
                    className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
              {portfolioImages.length < 6 && (
                <button
                  type="button"
                  onClick={addPortfolioImage}
                  className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center gap-2 hover:border-[#00b67f] hover:bg-gray-50 transition-colors"
                >
                  <Plus className="w-8 h-8 text-gray-400" />
                  <span className="text-sm text-gray-600">Add Image</span>
                </button>
              )}
            </div>
          </div>

          <div className="pt-6">
            <button
              type="submit"
              className="w-full py-4 bg-[#00b67f] text-white font-medium rounded-full hover:bg-[#00d68f] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              Create Designer Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
