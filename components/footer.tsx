"use client"

import Link from "next/link"
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Award,
} from "lucide-react"

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fillOpacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-white">jobRinger</span>
                <span className="text-blue-400 text-xl ml-1">≫</span>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              India's premier job portal connecting millions of job seekers with their dream careers. Powered by AI and
              trusted by leading companies worldwide.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>contact@jobringer.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-green-400" />
                <span>+91 1800-123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-red-400" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <Link href="/jobs" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Browse Jobs
                </Link>
                <Link
                  href="/companies"
                  className="block text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Top Companies
                </Link>
                <Link href="/salary" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Salary Guide
                </Link>
                <Link
                  href="/career-advice"
                  className="block text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Career Advice
                </Link>
              </div>
              <div className="space-y-3">
                <Link
                  href="/post-job"
                  className="block text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Post a Job
                </Link>
                <Link
                  href="/pricing"
                  className="block text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Pricing Plans
                </Link>
                <Link
                  href="/resources"
                  className="block text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Resources
                </Link>
                <Link
                  href="/support"
                  className="block text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Support
                </Link>
              </div>
            </div>
          </div>

          {/* Recognition & Social */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Recognized By</h3>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <Award className="w-8 h-8 text-yellow-400" />
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    #startupindia
                  </div>
                  <div className="text-gray-300 text-sm">Government of India</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {[
                  { icon: MessageCircle, color: "from-green-500 to-green-600", label: "WhatsApp" },
                  { icon: Facebook, color: "from-blue-600 to-blue-700", label: "Facebook" },
                  { icon: Twitter, color: "from-blue-400 to-blue-500", label: "Twitter" },
                  { icon: Instagram, color: "from-pink-500 to-purple-600", label: "Instagram" },
                  { icon: Linkedin, color: "from-blue-700 to-blue-800", label: "LinkedIn" },
                  { icon: Youtube, color: "from-red-600 to-red-700", label: "YouTube" },
                ].map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <div
                      key={index}
                      className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group`}
                      title={social.label}
                    >
                      <IconComponent className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
          <h4 className="text-lg font-semibold text-white mb-4">Important Disclaimer</h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            <strong className="text-white">Disclaimer:</strong> All Trademarks and Logos are the property of their
            respective owners, depicted here purely for representation purpose. | Jobringer.com has taken all reasonable
            steps to ensure that information on this site is genuine. Job Applicants are advised to evaluate
            independently. Jobringer.com shall not have any responsibility in this regard. All Jobseeker services are
            strictly designed & meant only for job search assistance and to maximize the chances for the jobseekers to
            get their dream job. All Job Seeker Credentials and Employment Opportunities are subject to individual merit
            & evaluation. We do not guarantee any job to any jobseeker.
          </p>
        </div>

        {/* Footer Links */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
            {[
              "Terms and Conditions",
              "Privacy Policy",
              "Refund / Cancellation Policy",
              "About Us",
              "Contact Us",
              "FAQ",
              "Blogs",
              "Sitemap",
            ].map((link, index) => (
              <div key={index} className="flex items-center">
                <Link
                  href={`/${link.toLowerCase().replace(/\s+/g, "-").replace("/", "-")}`}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  {link}
                </Link>
                {index < 7 && <span className="text-gray-500 ml-6">|</span>}
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20">
              <div className="text-sm text-gray-300">
                © All Rights Reserved @ 2025 Jobtech Ventures Private Limited.
              </div>
              <div className="w-px h-4 bg-white/30"></div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-400 font-medium">All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
