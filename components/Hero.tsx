"use client";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"

export default function Hero() {
    const tasks = useQuery(api.tasks.get);
    return (
        <section className="w-full min-h-screen md:min-h-[60vh] xl:min-h-screen flex items-center border-b">
            <div className="container flex flex-col-reverse md:flex-row items-center gap-10 py-5 md:py-0">
                <div className="space-y-4 md:w-1/2">
                    <h1 className="text-4xl font-semibold text-center sm:text-left tracking-tighter sm:text-5xl md:text-4xl lg:text-7xl">
                        Preserve Your Memories, Secure Your Legacy
                    </h1>
                    <p className="max-w-[600px] text-gray-500 md:text-base/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-center sm:text-left">
                        Create digital time capsules to share moments, messages, and important documents with your loved ones, safely and securely.
                        {/* {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)} */}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <Button size={"lg"} asChild className="sm:w-fit">
                            <Link
                                href={"/"}
                            >
                                Get Started
                            </Link>
                        </Button>
                        <Button size={"lg"} asChild className="sm:w-fit">
                            <Link
                                href="#">
                                Learn More
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <Image
                        src="/hero_image-removebg.png"
                        width={500}
                        height={500}
                        alt="Hero"
                        className="mx-auto overflow-hidden rounded-xl object-cover"
                    />
                </div>
            </div>
        </section>
    )
}