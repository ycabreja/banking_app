"use client";
import React from 'react';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from 'next/link';
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname();
    return (
        <section className='w-full max-w-[246px]'>
            <Sheet>
                <SheetTrigger>
                    <Image
                        src="/icons/hamburger.svg"
                        width={30}
                        height={30}
                        alt="menu"
                        className="cursor-pointer"
                    />
                </SheetTrigger>
                <SheetContent side="left" className='border-none bg-white'>
                    <SheetHeader>
                        <SheetTitle>
                            <VisuallyHidden>Navigation Menu</VisuallyHidden> {/* Accessible title */}
                        </SheetTitle>
                    </SheetHeader>
                    <nav className='flex flex-col gap-4'>
                        <Link href="/" className='cursor-pointer flex items-center gap-1 px-4'>
                            <Image
                                src="/icons/logo.svg"
                                width={34}
                                height={34}
                                alt="Horizon Logo"
                            />
                            <h1 className='text-[26px] font-ibm-plex-serif !text-bold text-black-1'>Horizon</h1>
                        </Link>
                        <div className="mobilenav-sheet">
                            <SheetClose asChild>
                                <nav className='flex h-full flex-col gap-6 pt-16 text-white'>
                                    {sidebarLinks.map((item) => {
                                        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

                                        return (
                                            <SheetClose asChild key={item.route}>
                                                <Link href={item.route} key={item.label}
                                                    className={cn('mobilenav-sheet_close w-full ', { 'bg-bankGradient': isActive })}
                                                >
                                                    <Image
                                                        src={item.imgURL}
                                                        alt={item.label}
                                                        width={20}
                                                        height={20}

                                                        className={cn({
                                                            'brightness-[3] invert-0': isActive
                                                        })}
                                                    />


                                                    <p className={cn('text-16 font-semibold text-black-2', {
                                                        'text-white': isActive
                                                    })}>
                                                        {item.label}
                                                    </p>
                                                </Link>
                                            </SheetClose>
                                        );
                                    })}
                                    USER
                                </nav>
                            </SheetClose>
                            FOOTER
                        </div>

                        {sidebarLinks.map((item) => {
                            const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                            return (
                                <Link href={item.route} key={item.label}
                                    className={cn('sidebar-link', { 'bg-bankGradient': isActive })}
                                >
                                    <div className='relative size-6'>
                                        <Image
                                            src={item.imgURL}
                                            alt={item.label}
                                            fill
                                            className={cn({
                                                'brightness-[3] invert-0': isActive
                                            })}
                                        />
                                    </div>

                                    <p className={cn('sidebar-label', {
                                        '!text-white': isActive
                                    })}>
                                        {item.label}
                                    </p>
                                </Link>
                            );
                        })}
                    </nav>
                </SheetContent>
            </Sheet>
        </section>
    );
};

export default MobileNav;



