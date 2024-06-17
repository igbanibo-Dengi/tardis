"use client"

import { format } from "date-fns";
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarClock } from "lucide-react";

const FormSchema = z.object({
    title: z.string().min(2, {
        message: "Title must be at least 2 characters.",
    }),
    description: z.string().min(3, {
        message: "Description must be at least 3 characters.",
    }).max(400, {
        message: "Description must be less than 400 characters.",
    }),
    imageUrl: z.string().min(2, {
        message: "Cannot be empty.",
    }),
    endDateTime: z.date({
        message: "Cannot be empty.",
    }),
});

const capsuleDefaultValues = {
    title: '',
    description: '',
    imageUrl: '',
    endDateTime: new Date(),
}

const CapsuleForm = () => {
    const [files, setFiles] = useState<File[]>([])
    const initialValues = capsuleDefaultValues
    const [isSubmitting, setIsSubmitting] = useState(false)

    const router = useRouter();
    const { toast } = useToast()
    const { startUpload } = useUploadThing('imageUploader')

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: initialValues
    })

    const createTimeCapsule = useMutation(api.timeCapsule.createTimeCapsule)

    async function onSubmit(values: z.infer<typeof FormSchema>) {
        try {
            console.log(values)
            setIsSubmitting(true)
            let uploadedImageUrl = values.imageUrl;
            let newEndDate = format(values.endDateTime, "PPP HH:mm:ss");
            console.log(newEndDate)

            if (files.length > 0) {
                const uploadedImages = await startUpload(files);
                if (!uploadedImages) {
                    return;
                }
                uploadedImageUrl = uploadedImages[0].url;
            }

            const timeCapsule = await createTimeCapsule({
                title: values.title,
                description: values.description,
                imageUrl: uploadedImageUrl,
                endDateTime: newEndDate,
            });

            toast({
                title: "Capsule created",
                description: "You are being redirected.",
            })
            setIsSubmitting(false);
            router.push('/capsules')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main>
            <section className='container max-w-2xl my-20'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Title" {...field} />
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
                                        <Textarea placeholder="Description" {...field} className="max-h-[200px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="endDateTime"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <div className="flex items-center px-3 border border-grey-50 rounded-md h-[54px] w-full overflow-hidden">
                                            <CalendarClock strokeWidth={1.5} />
                                            <p className="ml-3 whitespace-nowrap">
                                                End Date:
                                            </p>
                                            <DatePicker
                                                selected={field.value}
                                                onChange={(date: Date) => field.onChange(date)}
                                                showTimeSelect
                                                timeInputLabel="Time:"
                                                dateFormat="MM/dd/yyyy h:mm aa"
                                                wrapperClassName="datePicker"
                                            />
                                        </div>
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
