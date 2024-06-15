import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

const features = [
    {
        icon: '📷',
        title: 'Time Capsule',
        description: 'Store your favorite moments and messages such as images, videos, and texts. Schedule them to be delivered to your loved ones on a future date you choose.'
    },
    // {
    //     icon: '📝',
    //     title: 'Digital Will Capsule',
    //     description: 'Safeguard your digital will and important messages. These files will be sent to designated recipients only in the event of your passing.'
    // },
    {
        icon: '⏳',
        title: 'Countdown Capsule',
        description: 'Securely store messages, wills, and documents that will only be sent if you fail to reset the countdown timer periodically.'
    },
    {
        icon: '🔥',
        title: 'Self-destruct Capsule',
        description: 'Keep your data protected. If something happens to you and you don\'t reset the counter, the content in the capsule will be automatically removed.'
    },
];

const FeaturesSection = () => {
    return (
        <section id='capsules' className='container pt-20 pb-40'>
            <h1 className='text-center text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl'>
                Our Unique Capsules
            </h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 xl:gap-8 mt-20'>
                {features.map((feature, index) => (
                    <div key={index} className='text-center flex flex-col justify-between bg-muted/50 border border-black py-10'>

                        <div className='text-7xl flex items-center justify-center'>{feature.icon}</div>
                        <div className='flex flex-col gap-5 px-10 lg:px-5 xl:px-10 py-10'>
                            <h2 className='text-2xl font-semibold mb-2'>{feature.title}</h2>
                            <p className='py-5 md:text-xl lg:text-base'>{feature.description}</p>
                        </div>

                        <div className='border-t pt-5'>
                            <Button size={"lg"} asChild className='w-fit mx-auto bg-yellow-400 text-black border'>
                                <Link href={"/"}>Try Now</Link>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;
