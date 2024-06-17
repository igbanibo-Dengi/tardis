"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import NavLinks from "../NavLinks"
import Image from "next/image"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { usePathname } from "next/navigation"

export function Navbar() {

  const pathname = usePathname()
  return (
    <div className={`${pathname === '/' ? 'bg-white' : 'bg-muted'}`}>
      <header className=" container flex h-16 w-full items-center justify-between px-4 md:px-6">
        <Link href="/" className='constainer flex justify-between items-center gap-1 h-fit'>
          <Image
            src='/logo-blue.svg'
            width={20}
            height={20}
            alt='logo'
          />
          <p className=' font-didot text-[28px] hidden md:block '>AION</p>
        </Link>
        <NavLinks />


        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="ghost">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="grid gap-2 py-6">
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
                Explore
              </Link>
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
                Pricing
              </Link>
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
                About
              </Link>
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        <div className='hidden md:block'>
          <Unauthenticated>
            <Button size={"lg"} asChild><Link href='/sign-in'>Sign In</Link></Button>
          </Unauthenticated>
          <Authenticated>
            <UserButton />
          </Authenticated>
        </div>
      </header>
    </div>
  )
}

function MenuIcon(props: any) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}




