"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <span className="text-white font-bold text-lg">J</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  jobRinger
                </span>
                <span className="text-blue-600 text-xl ml-1">≫</span>
                <div className="text-xs text-gray-500 -mt-1">India's Premium Job Portal</div>
              </div>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {["Jobs", "Active Employers", "Job Blogs", "Pricing"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Button
              variant="outline"
              className="border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
            >
              Jobseeker Login
            </Button>
            <Button className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
              Employer Login
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-white/20 shadow-xl">
            <div className="px-4 py-6 space-y-4">
              {["Jobs", "Active Employers", "Job Blogs", "Pricing"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="block text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  {item}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4">
                <Button variant="outline" className="w-full">
                  Jobseeker Login
                </Button>
                <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black">
                  Employer Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
