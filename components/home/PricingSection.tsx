import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Award } from "lucide-react"

export function PricingSection() {
    return (
        <section id="referral" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-pink-50 to-purple-50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Choose Your{" "}
                            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                                Success Path
                            </span>
                        </h2>
                        <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Start your TikTok journey today with our proven courses
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-4xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-8">
                    <Card className="border-2 border-gray-200 shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl">Starter Course</CardTitle>
                            <CardDescription>Perfect for beginners just starting out</CardDescription>
                            <div className="text-4xl font-bold">$97</div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    <span>Basic content creation strategies</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    <span>Algorithm fundamentals</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    <span>Community access</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    <span>30-day money back guarantee</span>
                                </li>
                            </ul>
                            <Button className="w-full bg-transparent" variant="outline">
                                Get Started
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="border-2 border-pink-500 shadow-xl relative">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">Most Popular</Badge>
                        </div>
                        <CardHeader>
                            <CardTitle className="text-2xl">Pro Masterclass</CardTitle>
                            <CardDescription>Complete system for viral success</CardDescription>
                            <div className="text-4xl font-bold">
                                $297
                                <span className="text-lg text-gray-500 line-through ml-2">$497</span>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    <span>Everything in Starter Course</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    <span>Advanced viral strategies</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    <span>Monetization blueprints</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    <span>1-on-1 coaching call</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    <span>Lifetime updates</span>
                                </li>
                            </ul>
                            <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                                Start Masterclass
                                <Award className="ml-2 h-4 w-4" />
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
