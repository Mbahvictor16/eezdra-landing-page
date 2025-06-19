import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"

export default function SystemPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#FDFDFD]/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="text-2xl font-bold text-[#3C1361]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Eezdra
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/#about" className="text-[#1A1A1A] hover:text-[#3C1361] transition-colors">
                About
              </Link>
              <Link href="/system" className="text-[#3C1361] font-semibold">
                System
              </Link>
              <Link href="/work-with-us" className="text-[#1A1A1A] hover:text-[#3C1361] transition-colors">
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#3C1361]/5 to-[#008080]/5">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1
            className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            How the Eezdra <span className="text-[#3C1361]">System</span> Works
          </h1>
          <p className="text-xl text-[#777777] max-w-2xl mx-auto">
            A comprehensive overview of our media-tech operating system designed for creators who want to scale
            efficiently.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-[#777777] leading-relaxed mb-12">
            The Eezdra System is built on three core pillars: intelligent automation, scalable networks, and data-driven
            optimization. We've designed every component to work seamlessly together, creating a powerful ecosystem that
            grows with your ambitions while maintaining the quality and consistency your audience expects.
          </p>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 bg-[#FDFDFD]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3C1361] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Content Strategy</h3>
              <p className="text-[#777777] text-sm">
                AI analyzes trends and audience data to create content strategies
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#008080] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Production</h3>
              <p className="text-[#777777] text-sm">Automated systems handle video creation and editing workflows</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD700] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Distribution</h3>
              <p className="text-[#777777] text-sm">Content is optimized and distributed across multiple platforms</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3C1361] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Optimization</h3>
              <p className="text-[#777777] text-sm">Performance data feeds back to improve future content</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-[#1A1A1A] mb-8 text-center"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            System Capabilities
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-[#3C1361] rounded-full mt-3"></div>
              <div>
                <h4 className="font-semibold text-[#1A1A1A] mb-1">AI-Powered Content Generation</h4>
                <p className="text-[#777777]">
                  Advanced algorithms create engaging, platform-optimized content at scale
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-[#008080] rounded-full mt-3"></div>
              <div>
                <h4 className="font-semibold text-[#1A1A1A] mb-1">Creator Network Management</h4>
                <p className="text-[#777777]">
                  Seamlessly coordinate teams and distribute workloads across your network
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-[#FFD700] rounded-full mt-3"></div>
              <div>
                <h4 className="font-semibold text-[#1A1A1A] mb-1">Performance Analytics</h4>
                <p className="text-[#777777]">Real-time insights and predictive analytics to optimize your strategy</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-[#3C1361] rounded-full mt-3"></div>
              <div>
                <h4 className="font-semibold text-[#1A1A1A] mb-1">Automated Workflows</h4>
                <p className="text-[#777777]">End-to-end automation from ideation to publication and beyond</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#3C1361] to-[#008080]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3
            className="text-3xl md:text-4xl font-bold text-white mb-8"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Ready to experience the system?
          </h3>
          <Link href="/work-with-us">
            <Button
              size="lg"
              className="bg-white text-[#3C1361] hover:bg-gray-100 px-8 py-4 text-lg font-semibold tracking-wider uppercase rounded-full"
            >
              Work With Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Back to Home */}
      <div className="bg-[#FDFDFD] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-[#3C1361] hover:text-[#3C1361]/80 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
