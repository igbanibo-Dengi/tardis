import Image from 'next/image'
import React from 'react'

const Features = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-5xl dark:text-gray-50">
                            Secure, Shareable, and Timeless
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Our digital time capsule service offers a secure and user-friendly way to preserve your most cherished
                            memories and experiences, and share them with loved ones now and in the future.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    <Image
                        src="/hero_image-removebg.png"
                        width={500}
                        height={500}
                        alt="Hero"
                        className="mx-auto overflow-hidden rounded-xl object-cover"
                    />
                    <div className="flex flex-col justify-center space-y-4">
                        <ul className="grid gap-6">
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">Secure Storage</h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Your digital memories are encrypted and stored securely in our state-of-the-art data centers.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">Shareable Experiences</h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Easily share your time capsule with loved ones, allowing them to add their own memories and
                                        messages.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">Timeless Preservation</h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Your digital time capsule will be preserved for generations, ensuring your legacy lives on.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features