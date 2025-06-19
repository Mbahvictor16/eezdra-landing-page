"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Users, Settings, ArrowRight, Mail, Instagram, Linkedin } from "lucide-react"

export default function HomePage() {
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
              <Link href="#about" className="text-[#1A1A1A] hover:text-[#3C1361] transition-colors">
                About
              </Link>
              <Link href="/system" className="text-[#1A1A1A] hover:text-[#3C1361] transition-colors">
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
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-[#3C1361]/5 to-[#008080]/5">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-5"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1
            className="text-5xl md:text-7xl font-bold text-[#1A1A1A] mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Power Quietly. <br />
            <span className="text-[#3C1361]">Scale Endlessly.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#777777] mb-8 max-w-2xl mx-auto">
            Eezdra builds the invisible engine behind digital empires.
          </p>
          <Button
            size="lg"
            className="bg-[#3C1361] hover:bg-[#3C1361]/90 text-white px-8 py-4 text-lg font-semibold tracking-wider uppercase rounded-full"
            onClick={() => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })}
          >
            Join the System <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
                What We Do
              </h2>
              <p className="text-lg text-[#777777] leading-relaxed">
                Eezdra is a media‑tech operating system built for creators. We combine AI‑powered content creation,
                scalable creator networks, and automated systems to help you grow—quietly but powerfully. Our mission:
                to build the backbone of tomorrow's digital empires.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-[#3C1361]/10 to-[#008080]/10 rounded-2xl flex items-center justify-center">
                <Settings className="h-24 w-24 text-[#3C1361] opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-[#FDFDFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-xl border-0 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#3C1361]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#3C1361]/20 transition-colors">
                  <Brain className="h-8 w-8 text-[#3C1361]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
                  AI-Powered Content
                </h3>
                <p className="text-[#777777]">Efficient faceless video production at scale.</p>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-xl border-0 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#008080]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#008080]/20 transition-colors">
                  <Users className="h-8 w-8 text-[#008080]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
                  Scalable Creator Network
                </h3>
                <p className="text-[#777777]">Build your team, multiply reach.</p>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-xl border-0 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#FFD700]/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FFD700]/30 transition-colors">
                  <Settings className="h-8 w-8 text-[#FFD700]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
                  Content Systems & Automation
                </h3>
                <p className="text-[#777777]">Logistics, workflows, tools — built for longevity.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Primary CTA */}
      <section id="apply" className="py-20 bg-gradient-to-r from-[#3C1361] to-[#008080]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3
            className="text-3xl md:text-4xl font-bold text-white mb-8"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Want to build with us?
          </h3>
          <Link href="/work-with-us">
            <Button
              size="lg"
              className="bg-white text-[#3C1361] hover:bg-gray-100 px-8 py-4 text-lg font-semibold tracking-wider uppercase rounded-full"
            >
              Apply to Join <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">Eezdra © 2025. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="mailto:hello@eezdra.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7.56a8.16 8.16 0 0 0 4.77 1.2v-3.44a4.85 4.85 0 0 1-1-.63z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
