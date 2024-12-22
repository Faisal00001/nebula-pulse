"use client"

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci';
const links = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About Us',
        path: '/about'
    },
    {
        name: 'Service',
        path: '/service',
    },
    {
        name: 'Portfolio',
        path: '/portfolio'
    },
    {
        name: 'Blog',
        path: '/blog'
    },
    {
        name: 'Contact Us',
        path: '/contact'
    }
]
const MobileNav = () => {
    const pathname = usePathname()
    return (
        <Sheet>
            <SheetTrigger className="flex items-center justify-center">
                <CiMenuFries className="text-[32px] text-accent"></CiMenuFries>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* Logo */}
                <div className="mt-16 mb-5 text-center">
                    <Link href={'/'}>
                        <h1 className="text-3xl font-semibold">Nebula Pulse</h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-5">
                    {
                        links.map((link, index) => {
                            return (
                                <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-semibold hover:text-accent`}>
                                    {link.name}
                                </Link>
                            )
                        })
                    }
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;