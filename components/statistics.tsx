"use client"

import { TrendingUp, Users, Building2, CheckCircle, Award } from "lucide-react"

export function Statistics() {
  const stats = [
    {
      label: "Jobs Posted",
      value: "40,808",
      icon: Building2,
      color: "from-blue-500 to-cyan-500",
      description: "Active opportunities",
    },
    {
      label: "Jobs Filled",
      value: "15,153",
      icon: CheckCircle,
      color: "from-green-500 to-emerald-500",
      description: "Successful placements",
    },
    {
      label: "Employers",
      value: "25,776",
      icon: Award,
      color: "from-purple-500 to-pink-500",
      description: "Trusted companies",
    },
    {
      label: "Active Users",
      value: "1,554,182",
      icon: Users,
      color: "from-orange-500 to-red-500",
      description: "Job seekers worldwide",
    },
  ]

  return (
    <div className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;100&quot; height=&quot;100&quot; viewBox=&quot;0 0 100 100&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fillOpacity=&quot;0.05&quot;%3E%3Cpolygon points=&quot;50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40&quot;/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <TrendingUp className="w-5 h-5 text-blue-300" />
            <span className="text-blue-200 font-medium">Real-time Analytics</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Platform{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Statistics
            </span>
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Trusted by millions of professionals and companies worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105"
              >
                {/* Gradient Border Effect */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                ></div>

                <div className="relative text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <div className="space-y-2">
                    <div
                      className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-white font-semibold text-lg">{stat.label}</div>
                    <div className="text-blue-200 text-sm">{stat.description}</div>
                  </div>

                  {/* Animated Counter Effect */}
                  <div className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center space-x-2 text-green-400">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-medium">Live Updates</span>
            </div>
            <div className="w-px h-6 bg-white/30"></div>
            <div className="text-white">
              <span className="font-semibold">Updated every 5 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
