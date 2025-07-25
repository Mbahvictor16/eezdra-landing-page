import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

export function SuccessStoriesSection() {
    return (
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Student Success Stories</h2>
                        <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            See how our students went from zero to viral sensations
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
                    <Card className="border-0 shadow-lg">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <Image
                                    src="/placeholder.svg?height=60&width=60"
                                    width="60"
                                    height="60"
                                    alt="Sarah M."
                                    className="rounded-full"
                                />
                                <div>
                                    <CardTitle className="text-lg">Sarah M.</CardTitle>
                                    <CardDescription>@sarahcreates</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                                    ))}
                                </div>
                                <p className="text-sm text-gray-600">
                                    "Went from 500 followers to 100K in just 3 months! The algorithm strategies really work."
                                </p>
                                <div className="text-sm font-semibold text-pink-600">2.5M+ Total Views</div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <Image
                                    src="/placeholder.svg?height=60&width=60"
                                    width="60"
                                    height="60"
                                    alt="Mike R."
                                    className="rounded-full"
                                />
                                <div>
                                    <CardTitle className="text-lg">Mike R.</CardTitle>
                                    <CardDescription>@mikeviral</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                                    ))}
                                </div>
                                <p className="text-sm text-gray-600">
                                    "Made my first $5K from brand deals within 2 months of completing the course!"
                                </p>
                                <div className="text-sm font-semibold text-purple-600">$15K+ Monthly Revenue</div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <Image
                                    src="/placeholder.svg?height=60&width=60"
                                    width="60"
                                    height="60"
                                    alt="Emma L."
                                    className="rounded-full"
                                />
                                <div>
                                    <CardTitle className="text-lg">Emma L.</CardTitle>
                                    <CardDescription>@emmatrends</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                                    ))}
                                </div>
                                <p className="text-sm text-gray-600">
                                    "My first viral video hit 1.2M views! The content strategies are game-changing."
                                </p>
                                <div className="text-sm font-semibold text-pink-600">500K+ Followers</div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
