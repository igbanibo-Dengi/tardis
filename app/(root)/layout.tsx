import Footer from "@/components/Footer";
import { Navbar } from "@/components/component/navbar";


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen flex-col">
            <Navbar />
            <main className="flex-1 ">{children}</main>
            <Footer />
        </div>
    );
}
