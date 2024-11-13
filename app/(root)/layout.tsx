import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const loggedIn = { firstName: 'Yordelie', lastName: 'Cabreja' };

    if (!loggedIn) redirect('/sign-in')

    return (
        <main className="flex h-screen w-full font-inter">
            <Sidebar user={loggedIn} />

            <div className="flex size-full flex-col">
                <div className="root-layout">
                    <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
                    <MobileNav user=
                        {loggedIn} />
                </div>
                {children}
            </div>
        </main>

    );
}


