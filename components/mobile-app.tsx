"use client"

import { Button } from "@/components/ui/button"
import { Smartphone, Download, Star, Zap, Shield, Users } from "lucide-react"

export function MobileApp() {
  return (
    <div className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fillOpacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl animate-bounce"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <Smartphone className="w-5 h-5 text-blue-300" />
              <span className="text-blue-200 font-medium">Mobile First Experience</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              APPLY TO JOBS
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                ON-THE-GO
              </span>
            </h2>

            <h3 className="text-2xl lg:text-3xl text-blue-300 mb-8 font-semibold">Jobringer Mobile App</h3>

            <div className="space-y-6 mb-10">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Instant Notifications</h4>
                  <p className="text-blue-200">Get notified about new opportunities instantly</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Secure & Private</h4>
                  <p className="text-blue-200">Your data is protected with enterprise-grade security</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">1M+ Active Users</h4>
                  <p className="text-blue-200">Join millions of professionals finding their dream jobs</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-10">
              <h4 className="text-2xl font-bold">
                Mobile App <span className="text-yellow-400">Download</span>
              </h4>

              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-white font-semibold">4.8/5</span>
                <span className="text-blue-200">(50K+ reviews)</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-3">
                <Download className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </Button>

              <Button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-3">
                <Download className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="flex justify-center items-center space-x-8">
              {/* Phone 1 */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative w-64 h-[500px] bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-[2.5rem] p-6 flex flex-col">
                    <div className="text-white text-center mb-6">
                      <h3 className="text-xl font-bold">Job Search</h3>
                      <p className="text-blue-200">Find your perfect match</p>
                    </div>
                    <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                      <div className="space-y-3">
                        {[1, 2, 3, 4, 5].map((item) => (
                          <div key={item} className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
                            <div className="h-3 bg-white/40 rounded mb-2"></div>
                            <div className="h-2 bg-white/30 rounded w-3/4"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 2 */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative w-64 h-[500px] bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 rounded-[2.5rem] p-6 flex flex-col">
                    <div className="text-white text-center mb-6">
                      <h3 className="text-xl font-bold">Smart Matching</h3>
                      <p className="text-pink-200">AI-powered recommendations</p>
                    </div>
                    <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                      <div className="text-center text-white">
                        <div className="text-4xl font-bold mb-2">95%</div>
                        <div className="text-pink-200">Match Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
