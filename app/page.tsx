import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { JobSearch } from "@/components/job-search"
import { FeaturedJobs } from "@/components/featured-jobs"
import { FeaturedEmployers } from "@/components/featured-employers"
import { MobileApp } from "@/components/mobile-app"
import { LocationJobs } from "@/components/location-jobs"
import { Statistics } from "@/components/statistics"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      <HeroSection />
      <JobSearch />
      <FeaturedJobs />
      <FeaturedEmployers />
      <MobileApp />
      <LocationJobs />
      <Statistics />
      <Footer />
    </div>
  )
}
