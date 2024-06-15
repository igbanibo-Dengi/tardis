import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-white border-t">
            <div className="container max-w-7xl mx-auto py-12 sm:px-6 lg:py-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-5 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        <Image
                            src='/aion-2/png/logo-color.png'
                            width={200}
                            height={200}
                            alt='logo'
                        />
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-4">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">Company</h3>
                                <div className="mt-4 space-y-4 flex flex-col">
                                    <Link href="/"
                                        className="hover:text-primary"
                                    >
                                        About
                                    </Link>
                                    <Link href="/"
                                        className="hover:text-primary"
                                    >
                                        Careers
                                    </Link>
                                    <Link href="/"
                                        className="hover:text-primary"
                                    >
                                        Insights
                                    </Link>
                                    <Link href="/"
                                        className="hover:text-primary"
                                    >
                                        Year in review
                                    </Link>
                                    <Link href="/"
                                        className="hover:text-primary"
                                    >
                                        Privacy
                                    </Link>
                                    <Link href="/"
                                        className="hover:text-primary"
                                    >
                                        Terms
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">Service</h3>
                                <ul className="mt-4 space-y-4 flex flex-col">
                                    <Link href="/"
                                        className="hover:text-primary"
                                    >
                                        Our work
                                    </Link>
                                    <Link href="/"
                                        className="hover:text-primary"
                                    >
                                        Services
                                    </Link>
                                    <Link href="/"
                                        className="hover:text-primary"
                                    >
                                        Tools we use
                                    </Link>
                                    <Link href="/"
                                        className="hover:text-primary"
                                    >
                                        Pricing
                                    </Link>
                                    <Link href="/"
                                        className="hover:text-primary"
                                    >
                                        Why us?
                                    </Link>
                                    <Link href="/"
                                        className="hover:text-primary"
                                    >
                                        Contact
                                    </Link>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">Solutions</h3>
                                <ul className="mt-4 space-y-4 flex flex-col">
                                    <Link href="/"
                                        className="hover:text-primary"
                                    >
                                        Startups & small biz
                                    </Link>
                                    <Link href="/"
                                        className="hover:text-primary"
                                    >
                                        In-house teams
                                    </Link>
                                    <Link href="/"
                                        className="hover:text-primary"
                                    >
                                        Agencies
                                    </Link>
                                    <Link href="/"
                                        className="hover:text-primary"
                                    >
                                        Enterprises
                                    </Link>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">Support</h3>
                                <ul className="mt-4 space-y-4 flex flex-col">
                                    <Link href="/" className="sm:text-base text-gray-500 hover:text-gray-900 text-xs">hello@snowhouse.studio</Link>
                                    <Link href="/" className="text-base text-gray-500 hover:text-gray-900">Reykjavik, Iceland.</Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t pt-8">
                    <p className="text-xs text-center sm:text-base text-muted-foreground xl:text-center">&copy; 2022 Snowhouse ehf. All rights reserved.</p>
                    <div className="flex items-center justify-center space-x-6 mt-4">
                        <FacebookIcon className="h-6 w-6" />
                        <LinkedinIcon href="/" className="h-6 w-6" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

function FacebookIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    )
}


function LinkedinIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    )
}