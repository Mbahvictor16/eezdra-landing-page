import { Button } from "@/components/ui/button"
import { Play, Menu } from "lucide-react"
import Link from "next/link"
import Logo from "./Logo"

export function Navbar() {
    return (
        <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
            <Link href="/" className="flex items-center justify-center">
                <Logo />
            </Link>
            <nav className="ml-auto hidden md:flex gap-6">
                <Link href="#about" className="text-sm font-medium hover:text-pink-600 transition-colors">
                    About
                </Link>
                <Link href="#courses" className="text-sm font-medium hover:text-pink-600 transition-colors">
                    Courses
                </Link>
                <Link href="#referral" className="text-sm font-medium hover:text-pink-600 transition-colors">
                    Referral
                </Link>
                <Link href="#community" className="text-sm font-medium hover:text-pink-600 transition-colors">
                    Join Community
                </Link>
            </nav>
            <Button variant="ghost" size="icon" className="ml-4 md:hidden">
                <Menu className="h-5 w-5" />
            </Button>
        </header>
    )
}
