'use client'

import React from 'react'
// import {
//     NavigationMenu,
//     NavigationMenuContent,
//     NavigationMenuItem,
//     NavigationMenuLink,
//     NavigationMenuList,
//     NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu"
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const NavLinks = () => {
    const pathname = usePathname();
    return (
        <div className='items-center gap-4 font-semibold hidden md:flex'>
            {/* <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className=' text-base font-semibold'>Capsules</NavigationMenuTrigger>
                        <NavigationMenuContent className='flex flex-col'>
                            <Link href="/docs"
                                legacyBehavior passHref>
                                <NavigationMenuLink
                                    className='px-10 py-5 border-b whitespace-nowrap text-center hover:bg-muted'
                                >
                                    Basic
                                </NavigationMenuLink>
                            </Link>
                            <Link href="/docs"
                                legacyBehavior passHref>
                                <NavigationMenuLink
                                    className='px-10 py-5 border-b whitespace-nowrap text-center hover:bg-muted'
                                >
                                    Courier
                                </NavigationMenuLink>
                            </Link>
                            <Link href="/docs"
                                legacyBehavior passHref>
                                <NavigationMenuLink
                                    className='px-10 py-5 border-b whitespace-nowrap text-center hover:bg-muted'
                                >
                                    Self Destruct
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu> */}

            <Link href="capsules" className={`${pathname === "/" ? "block" : "hidden"}`}>Capsules</Link>
            <Link href="features" className={`${pathname === "/" ? "block" : "hidden"}`}>Features</Link>
            <Link href="prices" className={`${pathname === "/" ? "block" : "hidden"}`}>Prices</Link>
            <Link href="capsules" className={`${pathname === "/" ? "hidden" : "block"}`}>My Capsules</Link>
            {/* <Link href="prices" className={`${pathname === "/" ? "hidden" : "block"}`}>New Capsule</Link> */}
            {/* <Link href="#about">About</Link> */}


        </div>
    )
}

export default NavLinks