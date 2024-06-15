import Image from 'next/image'
import React from 'react'
import NavLinks from './NavLinks'
import { Button } from './ui/button'
import Link from 'next/link'
// import Logo from '/logo-blue.svg'

const Header = () => {
    return (
        <nav className=' py-3 container flex items-center justify-between'>
            <div className='constainer flex justify-between items-center gap-1 h-fit'>
                <Image
                    src='/logo-blue.svg'
                    width={20}
                    height={20}
                    alt='logo'
                />
                <p className=' font-didot text-[28px] hidden md:block '>AION</p>
            </div>
            <NavLinks />
            <div className='hidden md:block'>
                <Button asChild><Link href='/sign-in'>Sign In</Link></Button>
            </div>
        </nav>
    )
}

export default Header