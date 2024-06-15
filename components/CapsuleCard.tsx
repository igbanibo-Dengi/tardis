import { CalendarDays, Clock7, Clock9, FolderOpenDot } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CapsuleCard = () => {
    return (
        <Link href="/" className='border transition-all ease-in-out duration-500 bg-muted hover:shadow-xl'>
            <span className='bg-green-500/50 text-white p-4 flex items-center 
            justify-between'>
                <span className='rounded-full flex items-center justify-center h-10 w-10 bg-white text-green-500'>
                    <Clock7 />

                </span>
                <p className='font-semibold'>Time Capsule</p>
            </span>
            <div className='px-5 flex flex-col gap-4 pt-10'>
                <span className='flex items-center justify-between gap-5'>
                    <span className='flex items-center gap-2'>
                        <CalendarDays size={20} strokeWidth={1} />
                        <p className='text-muted-foreground'>Creation Date:</p>
                    </span>
                    <p className='text-sm'>20-12-2024</p>
                </span>
                <span className='flex items-center justify-between gap-5 pb-3'>
                    <span className='flex items-center gap-2'>
                        <Clock9 size={20} strokeWidth={1} />
                        <p className='text-muted-foreground'>Creation time:</p>
                    </span>
                    <p className='text-sm'>20-12-2024</p>
                </span>
                <div className='border-t' />
                <span className='flex items-center justify-between gap-5 pb-10'>
                    <span className='flex items-center gap-2'>
                        <FolderOpenDot size={20} strokeWidth={1} />
                        <p className='text-muted-foreground'>Ativation Date:</p>
                    </span>
                    <p className='text-sm'>20-12-2024</p>
                </span>
            </div>
        </Link>
    )
}

export default CapsuleCard