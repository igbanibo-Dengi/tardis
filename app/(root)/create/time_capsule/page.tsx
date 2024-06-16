"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FileUploader } from "@/components/FileUploader"
import { useState } from "react"
import { useUploadThing } from "@/lib/uploadthing"
import CapsuleForm from "@/components/CapsuleForm"





const formSchema = z.object({
    imageUrl: z.string().min(2, {
        message: "cannot be empty.",
    }),
})

const page = () => {
    const [files, setFiles] = useState<File[]>([])
    const { startUpload } = useUploadThing('imageUploader')

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            imageUrl: "",
        },
    })


    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }


    return (
        <section>
            <section className="container mt-20">
                <p className="text-2xl text-center font-semibold"> Build Your Loadout</p>
            </section>
            <section>
                <CapsuleForm />
            </section>
        </section>
    )
}

export default page