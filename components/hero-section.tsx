"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Zap, TrendingUp } from "lucide-react"

export function HeroSection() {
  return (
    <div class="relative overflow-hidden mt-[100px]">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fillOpacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-purple-400/20 rounded-full blur-xl animate-bounce delay-1000"></div>

      <div className="relative z-10 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-yellow-300" />
                </div>
                <div>
                  <span className="text-3xl font-bold tracking-tight">EMPLOYERS</span>
                  <div className="text-sm opacity-90">Premium Partnership</div>
                </div>
              </div>

              <div className="hidden lg:block w-px h-16 bg-white/30"></div>

              <div className="flex items-center space-x-3">
                <Zap className="w-8 h-8 text-yellow-300" />
                <div>
                  <span className="text-xl font-semibold">WELCOME OFFER</span>
                  <div className="text-lg opacity-90">FREE JOB Postings and Much More</div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <TrendingUp className="w-5 h-5 mr-2" />
                Register for FREE
              </Button>
              <Button
                variant="outline"
className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105">  Post A Job
              </Button>
              <Button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105">
                Sales Enquiry
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
