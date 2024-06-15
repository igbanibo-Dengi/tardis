import Image from 'next/image';
import React from 'react';

const HowItWorksSection = () => {
    return (
        <section className='pt-20 md:pb-40 bg-[#141414] text-white'>
            <div className='container'>
                <h2 className='text-center text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-20'>
                    How It Works
                </h2>
                {/* small screens */}
                <div className='grid-cols-1 md:grid-cols-2 mt-12 md:hidden'>
                    <div className='flex flex-col items-start gap-3 py-16 px-5 border-y border-l border-white'>
                        <Image
                            src='/number1.svg'
                            width={40}
                            height={40}
                            alt='number'
                        />                    <div>
                            <h3 className='text-2xl font-semibold mb-2'>Create Your Capsule</h3>
                            <p>Choose the type of capsule that suits your needs and fill it with your cherished memories or important documents.</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-start gap-3 py-16 px-5 border-white border-r'>
                        <Image
                            src='/number2.svg'
                            width={40}
                            height={40}
                            alt='number'
                        />                    <div>
                            <h3 className='text-2xl font-semibold mb-2'>Set a Date or Countdown</h3>
                            <p>Decide when and how your capsule will be delivered, whether it&apos;s on a specific date or after a countdown period.</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-start gap-3 py-16 px-5 border-white border-y border-l'>
                        <Image
                            src='/number3.svg'
                            width={40}
                            height={40}
                            alt='number'
                        />                    <div>
                            <h3 className='text-2xl font-semibold mb-2'>Encrypt and Secure</h3>
                            <p>Your data is encrypted and stored securely, accessible only to your chosen recipients with a password.</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-start gap-3 py-16 px-5 border-r border-white pb-20'>
                        <Image
                            src='/number4.svg'
                            width={40}
                            height={40}
                            alt='number'
                        />                    <div>
                            <h3 className='text-2xl font-semibold mb-2'>Automatic Delivery or Deletion</h3>
                            <p>Your capsule will be automatically delivered to your recipients or deleted according to your settings.</p>
                        </div>
                    </div>
                </div>
                {/* large screens */}
                <div className='grid-cols-1 md:grid-cols-2 mt-12 hidden md:grid'>
                    <div className='flex items-start gap-3 py-16 px-10'>
                        <Image
                            src='/number1.svg'
                            width={40}
                            height={40}
                            alt='number'
                        />                    <div>
                            <h3 className='text-2xl font-semibold mb-2'>Create Your Capsule</h3>
                            <p>Choose the type of capsule that suits your needs and fill it with your cherished memories or important documents.</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-3 py-16 px-10 border border-white'>
                        <Image
                            src='/number2.svg'
                            width={40}
                            height={40}
                            alt='number'
                        />                    <div>
                            <h3 className='text-2xl font-semibold mb-2'>Set a Date or Countdown</h3>
                            <p>Decide when and how your capsule will be delivered, whether it&apos;s on a specific date or after a countdown period.</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-3 py-16 px-10 border border-white'>
                        <Image
                            src='/number3.svg'
                            width={40}
                            height={40}
                            alt='number'
                        />                    <div>
                            <h3 className='text-2xl font-semibold mb-2'>Encrypt and Secure</h3>
                            <p>Your data is encrypted and stored securely, accessible only to your chosen recipients with a password.</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-3 py-16 px-10'>
                        <Image
                            src='/number4.svg'
                            width={40}
                            height={40}
                            alt='number'
                        />                    <div>
                            <h3 className='text-2xl font-semibold mb-2'>Automatic Delivery or Deletion</h3>
                            <p>Your capsule will be automatically delivered to your recipients or deleted according to your settings.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
