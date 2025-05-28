"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Briefcase, ChevronLeft, ChevronRight, Star, TrendingUp } from "lucide-react"

const jobs = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Innovation",
    type: "Full Time - Permanent",
    experience: "5 - 8 Years",
    location: "Bangalore / India",
    badge: "Remote Available",
    salary: "₹15-25 LPA",
    rating: 4.8,
    trending: true,
    gradient: "from-blue-500 to-purple-600",
  },
  {
    title: "Product Manager",
    company: "StartupX Ventures",
    type: "Full Time - Permanent",
    experience: "3 - 6 Years",
    location: "Mumbai / India",
    badge: "Hot Opportunity",
    salary: "₹20-35 LPA",
    rating: 4.9,
    trending: true,
    gradient: "from-green-500 to-teal-600",
  },
  {
    title: "UI/UX Designer",
    company: "Design Studio Pro",
    type: "Full Time - Permanent",
    experience: "2 - 5 Years",
    location: "Delhi / India",
    badge: "Creative Role",
    salary: "₹12-20 LPA",
    rating: 4.7,
    trending: false,
    gradient: "from-pink-500 to-rose-600",
  },
  {
    title: "Data Scientist",
    company: "AI Innovations Ltd",
    type: "Full Time - Permanent",
    experience: "4 - 7 Years",
    location: "Hyderabad / India",
    badge: "AI/ML Focus",
    salary: "₹18-30 LPA",
    rating: 4.8,
    trending: true,
    gradient: "from-orange-500 to-red-600",
  },
]

export function FeaturedJobs() {
  return (
    <div className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full mb-6">
            <Star className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-medium">Premium Opportunities</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Jobs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked opportunities from top companies worldwide
          </p>
        </div>

        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/80 backdrop-blur-sm shadow-xl rounded-full hover:bg-white hover:scale-110 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mx-16">
            {jobs.map((job, index) => (
              <Card
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-2xl overflow-hidden"
              >
                {/* Gradient Border Effect */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${job.gradient} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
                ></div>

                <div className="relative bg-white rounded-2xl">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge
                        className={`bg-gradient-to-r ${job.gradient} text-white border-0 px-3 py-1 rounded-full text-xs font-medium`}
                      >
                        {job.badge}
                      </Badge>
                      {job.trending && (
                        <div className="flex items-center space-x-1 text-orange-500">
                          <TrendingUp className="w-4 h-4" />
                          <span className="text-xs font-medium">Trending</span>
                        </div>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                      {job.title}
                    </h3>

                    <div className="flex items-center justify-between">
                      <p className="text-gray-600 font-medium">{job.company}</p>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-700">{job.rating}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4 text-blue-500" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Briefcase className="w-4 h-4 text-green-500" />
                        {job.experience}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4 text-red-500" />
                        {job.location}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-xl">
                      <div className="text-sm text-gray-600">Salary Range</div>
                      <div className="text-lg font-bold text-green-600">{job.salary}</div>
                    </div>

                    <Button
                      className={`w-full bg-gradient-to-r ${job.gradient} hover:shadow-lg text-white border-0 rounded-xl py-3 font-semibold transition-all duration-300 hover:scale-105`}
                    >
                      Apply Now ▶
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/80 backdrop-blur-sm shadow-xl rounded-full hover:bg-white hover:scale-110 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            View All Jobs
          </Button>
        </div>
      </div>
    </div>
  )
}
