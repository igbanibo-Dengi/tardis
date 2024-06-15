'use client'

import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import Autoplay from "embla-carousel-autoplay"

const testimonials = [
    {
        name: 'Jane Doe',
        feedback: 'The Time Capsule feature allowed me to send a heartfelt message to my family on my daughter\'s wedding day. It was an unforgettable moment.',
        image: 'https://via.placeholder.com/150' // Replace with actual image URL
    },
    {
        name: 'John Smith',
        feedback: 'Knowing that my digital will is secure and will reach my loved ones gives me peace of mind.',
        image: 'https://via.placeholder.com/150' // Replace with actual image URL
    },
    {
        name: 'Emily Johnson',
        feedback: 'The Countdown Capsule is perfect for ensuring my important documents are always protected and only sent when needed.',
        image: 'https://via.placeholder.com/150' // Replace with actual image URL
    },
];

const TestimonialsSection = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 7000, stopOnInteraction: true })
    )

    return (
        <section className='pt-40 pb-40 bg-gray-100'>
            <div className='container'>
                <h2 className='text-center text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl'>
                    What Our Users Say
                </h2>
                <Carousel
                    plugins={[plugin.current]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    className="w-full mt-20"
                >
                    <CarouselContent>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="border-[1.5px] p-6 sm:p-8 grid gap-6">
                                    <div className="flex items-center gap-4">
                                        <Avatar>
                                            <AvatarImage src="https://images.unsplash.com/photo-1603775020644-eb8decd79994?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="@shadcn" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <div className="grid gap-0.5">
                                            <div className="font-semibold">John Doe</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">CEO, Acme Inc</div>
                                        </div>
                                    </div>
                                    <div className="text-lg font-semibold leading-snug">
                                        The customer service I received was exceptional. The support team went above and beyond to address my
                                        concerns.
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className='absolute right-20 -bottom-10'>
                        <CarouselPrevious className='bg-muted border-black' />
                        <CarouselNext className='bg-muted border-black' />
                    </div>
                </Carousel>
            </div>
        </section>
    );
};

export default TestimonialsSection;
