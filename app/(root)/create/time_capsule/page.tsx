import CapsuleForm from "@/components/CapsuleForm"


const page = () => {

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