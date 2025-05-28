"use client"

import { Users, Award } from "lucide-react"

const employers = [
  { name: "Microsoft", logo: "M", color: "from-blue-600 to-blue-700", employees: "180K+" },
  { name: "Google", logo: "G", color: "from-red-500 to-yellow-500", employees: "150K+" },
  { name: "Amazon", logo: "A", color: "from-orange-500 to-yellow-600", employees: "1.5M+" },
  { name: "Apple", logo: "A", color: "from-gray-700 to-gray-900", employees: "150K+" },
  { name: "Meta", logo: "M", color: "from-blue-500 to-purple-600", employees: "80K+" },
  { name: "Netflix", logo: "N", color: "from-red-600 to-red-700", employees: "12K+" },
  { name: "Tesla", logo: "T", color: "from-red-500 to-red-600", employees: "100K+" },
  { name: "Spotify", logo: "S", color: "from-green-500 to-green-600", employees: "8K+" },
]

export function FeaturedEmployers() {
  return (
    <div className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-3 rounded-full mb-6">
            <Award className="w-5 h-5 text-purple-600" />
            <span className="text-purple-700 font-medium">Trusted Partners</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            FEATURED{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              EMPLOYERS
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join the world's leading companies and shape the future of work
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {employers.map((employer, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 cursor-pointer border border-white/20"
            >
              {/* Gradient Border Effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${employer.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              ></div>

              <div className="relative">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${employer.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  <span className="text-white font-bold text-2xl">{employer.logo}</span>
                </div>

                <div className="text-center">
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    {employer.name}
                  </h3>
                  <div className="flex items-center justify-center space-x-1 text-sm text-gray-500">
                    <Users className="w-3 h-3" />
                    <span>{employer.employees}</span>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">Companies</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">50M+</div>
              <div className="text-gray-600">Employees</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
