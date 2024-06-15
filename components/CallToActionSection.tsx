import React from 'react';

const CallToActionSection = () => {
    return (
        <section className='py-20 bg-primary text-white text-center'>
            <div className='container'>
                <h2 className='text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl'>
                    Ready to Create Your Capsule?
                </h2>
                <p className='text-lg sm:text-xl md:text-2xl lg:text-2xl mt-12'>
                    Start preserving your memories and protecting your legacy today. Sign up now to create your first capsule and ensure your moments and messages are securely delivered to your loved ones.
                </p>
                <div className='mt-8'>
                    <button className='px-8 py-3 bg-white text-primary font-semibold rounded-md shadow-md hover:bg-gray-200'>
                        Sign Up
                    </button>
                    <button className='px-8 py-3 ml-4 bg-transparent border border-white text-white font-semibold rounded-md shadow-md hover:bg-gray-200 hover:text-primary'>
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CallToActionSection;
