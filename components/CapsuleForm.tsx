"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { useUploadThing } from "@/lib/uploadthing"
import { useRouter } from "next/navigation"
import { FileUploader } from "./FileUploader"
import { Textarea } from "./ui/textarea"
import { Input } from "./ui/input"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { useToast } from "@/components/ui/use-toast"

const FormSchema = z.object({
    title: z.string().min(2, {
        message: "title must be at least 2 characters.",
    }),
    description: z.string().min(3, {
        message: "Description must be at least 3 characters",
    }).max(400, {
        message: "Description must be less than 400 characters",
    }),
    imageUrl: z.string().min(2, {
        message: "cannot be empty.",
    }),
});
const capsuleDefaultValues = {
    title: '',
    description: '',
    imageUrl: '',
}

const CapsuleForm = () => {
    const [files, setFiles] = useState<File[]>([])
    const initialValues = capsuleDefaultValues
    const [isSubmitting, setIsSubmitting] = useState(false)

    const router = useRouter();
    const { toast } = useToast()
    const { startUpload } = useUploadThing('imageUploader')

    // 1. Define a form instance.
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: initialValues
    })

    const createTimeCapsule = useMutation(api.timeCapsule.createTimeCapsule)

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof FormSchema>) {
        try {
            setIsSubmitting(true)
            console.log(values)
            let uploadedImageUrl = values.imageUrl;

            if (files.length > 0) {

                const uploadedImages = await startUpload(files);

                if (!uploadedImages) {
                    return;
                }
                uploadedImageUrl = uploadedImages[0].url;

                const timeCapsule = await createTimeCapsule({
                    title: values.title,
                    description: values.description,
                    imageUrl: uploadedImageUrl,
                });
                toast({
                    title: "Capsule creatd",
                    description: "you are being reirected",
                })
                setIsSubmitting(false);
                router.push('/capsules')
            }


        } catch (error) {
            console.log(error);

        }


    }



    return (
        <main >
            <section className='container max-w-2xl my-20'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Name your Loadout" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="imageUrl"
                            render={({ field }) => (
                                <FormItem className="w-full flex flex-col items-center justify-center border rounded-md">
                                    <FormControl>
                                        <FileUploader
                                            onFieldChange={field.onChange}
                                            imageUrl={field.value}
                                            setFiles={setFiles}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl className="h-72">
                                        <Textarea
                                            placeholder="Description"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            size="lg"
                            disabled={form.formState.isSubmitting}
                            className="button col-span-2 w-full mt-10"
                        >
                            {isSubmitting === true ? 'Loading...' : 'Create'}
                        </Button>
                    </form>
                </Form>
            </section>
        </main>
    )
}

export default CapsuleForm

