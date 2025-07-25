import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { CTASection } from "./CtaSection";
import { FeaturesSection } from "./FeaturesSection";
import { HeroSection } from "./Hero";
import { PricingSection } from "./PricingSection";
import { StatsSection } from "./StatsSection";
import { SuccessStoriesSection } from "./SuccessStoriesSection";

export default function TikTokLandingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
            <Navbar />
            <main className="flex-1">
                <HeroSection />
                <StatsSection />
                <FeaturesSection />
                <SuccessStoriesSection />
                <PricingSection />
                <CTASection />
            </main>
            <Footer />
        </div>
    )
}
