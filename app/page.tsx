"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Users, Settings, ArrowRight, Mail, Instagram, Linkedin } from "lucide-react"

import team from "/public/pic.webp"
import logo from "/public/logo.png"

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
              <Image src={logo} alt="logo" width={150} height={100} />
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
        <div className="absolute inset-0 bg-black bg-cover bg-center"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            We Build the Systems <br />
            <span className="text-[#7B04CE]">Behind the Spotlight.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
            Eezdra is a quiet powerhouse for creators and digital operators combining AI workflows, faceless content systems and scalable team structures that multiply your reach while reducing chaos.
          </p>
          <Button
            size="lg"
            className="bg-[#7B04CE] hover:bg-[#3C1361]/90 text-white px-8 py-4 text-lg font-semibold tracking-wider rounded-full"
            onClick={() => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })}
          >
            Apply to join the system <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#7B04CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
                About Us
              </h2>
              <p className="text-lg text-white leading-relaxed">
                Eezdra is a media‑tech that builds silent engines for digital creators. We design systems, workflows, and teams that power consistent, scalable content without the noise. Our mission is to help creators grow like companies with clarity and leverage.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-[#3C1361]/10 to-[#008080]/10 rounded-2xl flex items-center justify-center">
                <Image src={team} alt="" width={400} height={400} className="w-full h-full object-cover rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-[#FDFDFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-xl border-0 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#3C1361]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#3C1361]/20 transition-colors">
                  <Settings className="h-8 w-8 text-[#FFD700]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
                  Content Management Solutions
                </h3>
                <p className="text-[#777777]">Consistency is built, not guessed</p>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-xl border-0 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#3C1361]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#3C1361]/20 transition-colors">
                  <Brain className="h-8 w-8 text-[#3C1361]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
                  Creative Systems
                </h3>
                <p className="text-[#777777]">From concept to execution, we build content engines that work on autopilot</p>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-xl border-0 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#008080]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#008080]/20 transition-colors">
                  <Users className="h-8 w-8 text-[#008080]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
                  Team Assembly
                </h3>
                <p className="text-[#777777]">We source and manage creators that keep your brand moving.</p>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-xl border-0 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#FFD700]/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FFD700]/30 transition-colors">
                  <Brain className="h-8 w-8 text-[#3C1361]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
                  Deep Content & Insights
                </h3>
                <p className="text-[#777777]">We study what performs so every next move is smarter</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/*  */}
      <section id="trusted brands" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-rows-2 gap-12 items-center">
            <div>

              <p className="text-lg text-[#777777] leading-relaxed">
                Eezdra works quietly behind brands that speak loudly. Our media systems power some of the most ambitious names in the global creator economy. Trusted by brands like:
              </p>
            </div>
            <div className="relative">
              <div className="w-full rounded-2xl md:flex items-center justify-center gap-8 text-center">
                <h2 className="text-4xl font-bold text-[#A1A1A1] mb-12" style={{ fontFamily: "Playfair Display, serif" }}>
                  Golde
                </h2>

                <h2 className="text-4xl font-bold text-[#A1A1A1] mb-12" style={{ fontFamily: "Playfair Display, serif" }}>
                  Primal Queen
                </h2>

                <h2 className="text-4xl font-bold text-[#A1A1A1] mb-12" style={{ fontFamily: "Playfair Display, serif" }}>
                  Top Shelf
                </h2>

                <h2 className="text-4xl font-bold text-[#A1A1A1] mb-12" style={{ fontFamily: "Playfair Display, serif" }}>
                  Shower Bombs
                </h2>

                <h2 className="text-4xl font-bold text-[#A1A1A1] mb-12" style={{ fontFamily: "Playfair Display, serif" }}>
                  Afina
                </h2>
              </div>
            </div>
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
