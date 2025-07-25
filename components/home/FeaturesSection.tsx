import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Zap, Target, TrendingUp } from "lucide-react"

export function FeaturesSection() {
    return (
        <section id="courses" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-pink-50 to-purple-50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Everything You Need to{" "}
                            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                                Dominate TikTok
                            </span>
                        </h2>
                        <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Our comprehensive curriculum covers every aspect of TikTok success, from content creation to audience
                            building.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                                <Zap className="h-6 w-6 text-white" />
                            </div>
                            <CardTitle>Viral Content Strategies</CardTitle>
                            <CardDescription>
                                Learn the secrets behind viral videos and how to create content that the algorithm loves.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    Hook writing techniques
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    Trending hashtag research
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    Content timing optimization
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                                <Target className="h-6 w-6 text-white" />
                            </div>
                            <CardTitle>Algorithm Mastery</CardTitle>
                            <CardDescription>
                                Understand how the TikTok algorithm works and how to make it work for you.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    For You Page optimization
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    Engagement rate boosting
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    Analytics interpretation
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                                <TrendingUp className="h-6 w-6 text-white" />
                            </div>
                            <CardTitle>Monetization Methods</CardTitle>
                            <CardDescription>
                                Turn your TikTok presence into a profitable business with proven monetization strategies.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    Brand partnership deals
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    Creator fund optimization
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    Product promotion tactics
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
