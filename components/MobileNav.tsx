import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const MobileNav = ({ user }: MobileNavProps) => {
    return (

        <section>
            <Sheet>
                <SheetTrigger>Open</SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Hello, {user.firstName}!</SheetTitle>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </section>
    );
};

export default MobileNav;


