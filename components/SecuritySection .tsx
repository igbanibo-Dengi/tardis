import React from 'react';

const SecuritySection = () => {
    return (
        <section className='container py-20 md:py-40'>
            <h2 className='text-center text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl'>
                Your Security, Our Priority
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-20'>
                <div className='flex flex-col justify-center items-center md:items-start gap-3 p-5 md:p-10'>
                    <div className='text-6xl text-primary md:mr-6'>🔒</div>
                    <div>
                        <h3 className='text-lg md:text-2xl text-center md:text-left font-semibold mb-2'>End-to-End Encryption</h3>
                        <p>We use state-of-the-art encryption techniques to ensure that your data remains private and secure from end to end.</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center md:items-start gap-3 p-5 md:p-10'>
                    <div className='text-6xl text-primary md:mr-6'>🛡️</div>
                    <div>
                        <h3 className='text-lg md:text-2xl text-center md:text-left font-semibold mb-2'>Secure Cloud Storage</h3>
                        <p>Your capsules are securely stored in the cloud, protected by industry-leading security measures to prevent unauthorized access.</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center md:items-start gap-3 p-5 md:p-10'>
                    <div className='text-6xl text-primary md:mr-6'>🔍</div>
                    <div>
                        <h3 className='text-lg md:text-2xl text-center md:text-left font-semibold mb-2'>Regular Security Audits</h3>
                        <p>We conduct regular security audits and assessments to identify and address any potential vulnerabilities, ensuring the highest level of security for your data.</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center md:items-start gap-3 p-5 md:p-10'>
                    <div className='text-6xl text-primary md:mr-6'>🔐</div>
                    <div>
                        <h3 className='text-lg md:text-2xl text-center md:text-left font-semibold mb-2'>User Privacy Protection</h3>
                        <p>Your privacy is our top priority. We adhere to strict privacy policies and guidelines to protect your personal information and ensure confidentiality.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecuritySection;
