"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Ensure this is at the top of the file

const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Service', path: '/service' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' }
];

const Nav = () => {
    const pathname = usePathname()
    // const handleScroll = (e, path) => {
    //     e.preventDefault();
    //     const sectionId = path.startsWith('#') ? path.substring(1) : null;
    //     const section = sectionId ? document.getElementById(sectionId) : null;

    //     if (section) {
    //         section.scrollIntoView({ behavior: "smooth" });
    //     } else {
    //         window.location.href = path; // Navigate to another page if section doesn't exist
    //     }
    // };

    return (
        <nav className="flex gap-10">
            {links.map((link, index) => (
                <Link
                    href={link.path}
                    key={index}
                    className={`${link.path === pathname && "text-accent border-b-2 border-sky-500"} capitalize font-semibold relative w-fit block 
        after:block after:content-[''] after:absolute after:h-[2px] after:bg-accent 
        after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition 
        after:duration-300 after:origin-center hover:text-accent 
        border-b-2 border-transparent`}
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    );
};

export default Nav;
