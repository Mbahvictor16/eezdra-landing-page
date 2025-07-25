import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CTASection() {
    return (
        <section id="community" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-pink-600 to-purple-600">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Go Viral?</h2>
                        <p className="max-w-[600px] text-pink-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Join thousands of successful creators who transformed their TikTok presence with our proven system.
                        </p>
                    </div>
                    <div className="w-full max-w-sm space-y-2">
                        <form className="flex gap-2">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="max-w-lg flex-1 bg-white/10 border-white/20 text-white placeholder:text-pink-200"
                            />
                            <Button type="submit" variant="secondary" className="bg-white text-pink-600 hover:bg-pink-50">
                                Get Started
                            </Button>
                        </form>
                        <p className="text-xs text-pink-200">Start your free trial today. No credit card required.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
