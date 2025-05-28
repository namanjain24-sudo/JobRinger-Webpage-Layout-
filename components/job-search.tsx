"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Sparkles, Target, Zap } from "lucide-react"

export function JobSearch() {
  return (
    <div className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=&quot;100&quot; height=&quot;100&quot; viewBox=&quot;0 0 100 100&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;%23e0e7ff&quot; fillOpacity=&quot;0.3&quot;%3E%3Cpolygon points=&quot;50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40&quot;/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-medium">AI-Powered Job Matching</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              BRINGING YOU THE
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 bg-clip-text text-transparent">
              PERFECT JOB !
            </span>
          </h1>

          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <Target className="w-5 h-5 text-blue-600" />
              <span className="text-2xl font-bold text-blue-700">11,000+</span>
              <span className="text-gray-600">JOBS to Apply</span>
            </div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <Zap className="w-5 h-5 text-green-600" />
              <span className="text-green-700 font-semibold">Live Updates</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Job Search Card */}
          <div className="group">
            <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

              <div className="relative">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Smart Job Search</h3>
                    <p className="text-gray-600">AI-powered matching</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="relative">
                    <Input
                      placeholder="Search your dream job..."
                      className="h-14 pl-6 pr-20 text-lg bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    />
                    <Button className="absolute right-2 top-2 h-10 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
                      <Search className="w-4 h-4 mr-2" />
                      Search
                    </Button>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      className="flex-1 h-12 bg-white/80 backdrop-blur-sm border-gray-200 hover:border-blue-300 hover:bg-blue-50 rounded-xl transition-all duration-300"
                    >
                      View All Jobs
                    </Button>
                    <Button className="flex-1 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-semibold rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
                      Register FREE
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Search Card */}
          <div className="group">
            <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

              <div className="relative">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Quick Job Search</h3>
                    <p className="text-gray-600">Popular categories</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {[
                    { tag: "#Fresher", color: "from-green-400 to-blue-500" },
                    { tag: "#Remote", color: "from-purple-400 to-pink-500" },
                    { tag: "#WFH", color: "from-blue-400 to-indigo-500" },
                    { tag: "#IT", color: "from-cyan-400 to-blue-500" },
                    { tag: "#HR", color: "from-orange-400 to-red-500" },
                    { tag: "#Finance", color: "from-emerald-400 to-teal-500" },
                    { tag: "#Marketing", color: "from-pink-400 to-rose-500" },
                    { tag: "#Developer", color: "from-violet-400 to-purple-500" },
                    { tag: "#Manager", color: "from-amber-400 to-orange-500" },
                    { tag: "#Engineering", color: "from-indigo-400 to-blue-500" },
                  ].map((item) => (
                    <span
                      key={item.tag}
                      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r ${item.color} hover:scale-105 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl`}
                    >
                      {item.tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
