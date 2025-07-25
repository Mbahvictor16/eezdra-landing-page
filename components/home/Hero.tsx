import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Users, Star, ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="space-y-4">
                            <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0 w-fit">
                                {"🚀 #1 TikTok Education Platform"}
                            </Badge>
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Master TikTok &{" "}
                                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                                    Go Viral
                                </span>
                            </h1>
                            <p className="max-w-[600px] text-gray-600 md:text-xl">
                                Learn from top creators who've generated millions of views. Master the algorithm, create viral content,
                                and build your personal brand on TikTok.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 min-[400px]:flex-row">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                            >
                                Start Learning Today
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="lg" className="border-pink-200 hover:bg-pink-50 bg-transparent">
                                Watch Free Preview
                                <Play className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-pink-500" />
                                <span>50,000+ Students</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                                <span>4.9/5 Rating</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-600 rounded-3xl blur-3xl opacity-20"></div>
                        <Image
                            src="/placeholder.svg?height=600&width=500"
                            width="500"
                            height="600"
                            alt="TikTok Content Creation"
                            className="relative mx-auto rounded-2xl shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
