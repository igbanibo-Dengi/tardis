'use client'

import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from 'next/link'


const NavLinks = () => {
    return (
        <div className='items-center gap-4 font-semibold hidden md:flex'>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className=' text-base font-semibold'>Capsules</NavigationMenuTrigger>
                        <NavigationMenuContent>
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
            </NavigationMenu>

            <Link href={"/"}>Services</Link>
            <Link href={"/"}>Prices</Link>
            <Link href={"/"}>About</Link>


        </div>
    )
}

export default NavLinks