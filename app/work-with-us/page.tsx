"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Quote, Star } from "lucide-react"

import logo from "/public/logo.png"

export default function WorkWithUsPage() {
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
              <Image src={logo} alt="logo" width={150} height={100} />

            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/#about" className="text-[#1A1A1A] hover:text-[#3C1361] transition-colors">
                About
              </Link>
              <Link href="/system" className="text-[#1A1A1A] hover:text-[#3C1361] transition-colors">
                System
              </Link>
              <Link href="/work-with-us" className="text-[#3C1361] font-semibold">
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Creators — <span className="text-[#7B04CE]">Join Eezdra</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-white mb-8" style={{ fontFamily: "Playfair Display, serif" }}>
            We're looking for creators who want systems, not chaos.
          </h2>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-20 bg-gradient-to-r from-[#3C1361] to-[#008080]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Ready to Join the System?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We're selective about who we work with. If you're serious about scaling your creative work systematically,
            we want to hear from you.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
            <h4 className="text-xl font-semibold text-white mb-4">Application Process</h4>
            <div className="space-y-3 text-left">
              <div className="flex items-center text-white/90">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 text-sm font-semibold">
                  1
                </div>
                <span className="text-sm">Submit your application</span>
              </div>
              <div className="flex items-center text-white/90">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 text-sm font-semibold">
                  2
                </div>
                <span className="text-sm">Portfolio review</span>
              </div>
              <div className="flex items-center text-white/90">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 text-sm font-semibold">
                  3
                </div>
                <span className="text-sm">Strategy call</span>
              </div>
              <div className="flex items-center text-white/90">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 text-sm font-semibold">
                  4
                </div>
                <span className="text-sm">Welcome to Eezdra</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button
              size="lg"
              className="bg-white text-[#3C1361] hover:bg-gray-100 px-8 py-4 text-lg font-semibold tracking-wider uppercase rounded-full"
              onClick={() => window.open("https://forms.google.com/your-form-link", "_blank")}
            >
              Start Application
            </Button>
            <p className="text-white/70 text-sm mt-4">Applications reviewed within 48 hours</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-[#777777] leading-relaxed mb-8">
              If you're a TikTok creator, editor, or AI expert looking for structure over hustle, you belong here. We
              offer:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-[#3C1361]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-3 h-3 bg-[#3C1361] rounded-full"></div>
                </div>
                <h3 className="font-semibold text-[#1A1A1A] mb-2">Clear workflows</h3>
                <p className="text-[#777777] text-sm">
                  Structured processes that eliminate guesswork and maximize efficiency
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-12 h-12 bg-[#008080]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-3 h-3 bg-[#008080] rounded-full"></div>
                </div>
                <h3 className="font-semibold text-[#1A1A1A] mb-2">AI-enhanced production</h3>
                <p className="text-[#777777] text-sm">Cutting-edge tools that amplify your creative capabilities</p>
              </div>

              <div className="text-center p-6">
                <div className="w-12 h-12 bg-[#FFD700]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-3 h-3 bg-[#FFD700] rounded-full"></div>
                </div>
                <h3 className="font-semibold text-[#1A1A1A] mb-2">Team growth</h3>
                <p className="text-[#777777] text-sm">Collaborative growth with transparent structures</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#FDFDFD]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3
            className="text-3xl font-bold text-[#1A1A1A] text-center mb-12"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            What Our Creators Say
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#FFD700] text-[#FFD700]" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-[#3C1361]/20 mb-4" />
                <p className="text-[#777777] mb-6 italic">
                  "Eezdra transformed my chaotic content creation into a streamlined system. I'm creating 3x more
                  content with half the stress."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#3C1361]/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-[#3C1361] font-semibold text-sm">AK</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] text-sm">Alex Kim</p>
                    <p className="text-[#777777] text-xs">TikTok Creator, 2.3M followers</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#FFD700] text-[#FFD700]" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-[#3C1361]/20 mb-4" />
                <p className="text-[#777777] mb-6 italic">
                  "The AI tools are incredible, but it's the systematic approach that really sets Eezdra apart. Finally,
                  sustainable growth."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#008080]/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-[#008080] font-semibold text-sm">MR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] text-sm">Maria Rodriguez</p>
                    <p className="text-[#777777] text-xs">Video Editor & AI Specialist</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#FFD700] text-[#FFD700]" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-[#3C1361]/20 mb-4" />
                <p className="text-[#777777] mb-6 italic">
                  "Working with Eezdra feels like having a superpower. The revenue sharing model is fair and the growth
                  has been exponential."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#FFD700]/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-[#FFD700] font-semibold text-sm">JC</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] text-sm">Jordan Chen</p>
                    <p className="text-[#777777] text-xs">Content Strategist</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
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
