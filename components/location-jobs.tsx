"use client"

import { MapPin, Globe, TrendingUp } from "lucide-react"

const indiaLocations = [
  { name: "#Mumbai", count: "2.5K", trend: "+12%" },
  { name: "#Delhi", count: "2.1K", trend: "+8%" },
  { name: "#Bangalore", count: "3.2K", trend: "+15%" },
  { name: "#Pune", count: "1.8K", trend: "+10%" },
  { name: "#Hyderabad", count: "1.9K", trend: "+14%" },
  { name: "#Chennai", count: "1.6K", trend: "+9%" },
  { name: "#Kolkata", count: "1.2K", trend: "+7%" },
  { name: "#Ahmedabad", count: "980", trend: "+11%" },
  { name: "#Jaipur", count: "750", trend: "+13%" },
  { name: "#Indore", count: "650", trend: "+16%" },
]

const internationalLocations = [
  { name: "#USA", count: "5.2K", trend: "+18%" },
  { name: "#Canada", count: "2.8K", trend: "+22%" },
  { name: "#UK", count: "3.1K", trend: "+14%" },
  { name: "#Australia", count: "1.9K", trend: "+20%" },
  { name: "#Singapore", count: "1.5K", trend: "+25%" },
  { name: "#Dubai", count: "2.2K", trend: "+19%" },
  { name: "#Germany", count: "1.8K", trend: "+16%" },
  { name: "#Netherlands", count: "1.1K", trend: "+21%" },
]

export function LocationJobs() {
  return (
    <div className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-blue-100 px-6 py-3 rounded-full mb-6">
            <Globe className="w-5 h-5 text-green-600" />
            <span className="text-green-700 font-medium">Global Opportunities</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Explore Jobs Worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover opportunities across the globe with real-time job market insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* India Jobs */}
          <div className="group">
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

              <div className="relative">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">JOBS IN INDIA</h3>
                    <p className="text-gray-600">15,000+ active opportunities</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {indiaLocations.map((location) => (
                    <div
                      key={location.name}
                      className="group/item bg-gradient-to-r from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:scale-105 border border-orange-100"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-800 group-hover/item:text-orange-600 transition-colors duration-300">
                          {location.name}
                        </span>
                        <div className="text-right">
                          <div className="text-sm font-bold text-orange-600">{location.count}</div>
                          <div className="flex items-center space-x-1 text-xs text-green-600">
                            <TrendingUp className="w-3 h-3" />
                            <span>{location.trend}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* International Jobs */}
          <div className="group">
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

              <div className="relative">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">INTERNATIONAL JOBS</h3>
                    <p className="text-gray-600">25,000+ global opportunities</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {internationalLocations.map((location) => (
                    <div
                      key={location.name}
                      className="group/item bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:scale-105 border border-blue-100"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-800 group-hover/item:text-blue-600 transition-colors duration-300">
                          {location.name}
                        </span>
                        <div className="text-right">
                          <div className="text-sm font-bold text-blue-600">{location.count}</div>
                          <div className="flex items-center space-x-1 text-xs text-green-600">
                            <TrendingUp className="w-3 h-3" />
                            <span>{location.trend}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                40K+
              </div>
              <div className="text-gray-600 font-medium">Total Jobs</div>
            </div>
            <div className="w-px h-16 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                150+
              </div>
              <div className="text-gray-600 font-medium">Countries</div>
            </div>
            <div className="w-px h-16 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-gray-600 font-medium">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
