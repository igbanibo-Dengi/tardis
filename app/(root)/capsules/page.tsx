import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import CapsuleCard from '@/components/CapsuleCard'


const page = () => {


    return (
        <section className='pt-10'>
            <header className='container mb-10 flex items-center justify-between pb-5'>
                <h1 className='font-semibold text-2xl md:text-4xl'>My capsules</h1>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className=''>New +</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Select a capsule</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            asChild
                            className='cursor-pointer'>
                            <Link href="/create/time_capsule">Time capsule</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            asChild
                            className='cursor-pointer'
                        ><Link href="/create/self_destruct-capsule">Self Destruct Capsule</Link></DropdownMenuItem>
                        <DropdownMenuItem
                            asChild
                            className='cursor-pointer'
                        >
                            <Link href="/create/contigency_apsule">Contingency Capsule</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </header>

            <div className='border-b w-full' />
            <section className='container py-20 grid grid-cols-4 gap-10'>
                <CapsuleCard />
                <CapsuleCard />
                <CapsuleCard />
                <CapsuleCard />
                <CapsuleCard />
            </section>
        </section>
    )
}

export default page