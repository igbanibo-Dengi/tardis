export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-full w-full flex items-center justify-center overflow-hidden">
            <div className="w-1/2 md:w-[25%] h-screen bg-white"></div>
            <div className="w-1/2 md:w-[75%] h-screen bg-[#1D272F] flex justify-center relative">
                <div className="absolute flex items-center justify-center -left-[175px] md:-left-[130px] xl:-left-[300px] w-[350px] md:w-[480px] lg:w-[500px] min-h-screen bg-green-5 z-50">
                    <div className="z-50">
                        {children}
                    </div>
                </div>
                <div className="hidden md:block max-w-[500px] 2xl:max-w-[600px] mt-[15%] h-fit text-white">
                    <h1 className=" text-4xl 2xl:text-5xl mb-5">
                        Welome to{" "}
                        <span className="font-extrabold text-[#FFBF08]">TRAQ</span>
                    </h1>
                    <p className="p-1 text-lg 2xl:text-2xl font-light hidden lg:block">
                        TraQ is building the Nigeria&apos;s first largest and most
                        sophisticated dispatch platform ensuring efficiency above all else
                        when it comes to local logistics for small and medium dispatch
                        companies.
                    </p>
                </div>
            </div>
        </div>
    );
}
