import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
// import Image from "next/image";
import { GrFirefox } from "react-icons/gr";

const Header = () => {
    return (
        <header className="py-8 xl:py-8 sticky top-0 z-50 bg-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href={'/'} className="flex gap-2 items-center">
                    <div>
                        <GrFirefox className="text-2xl md:text-4xl text-accent" />
                    </div>
                    <div>
                        <h3 className="text-2xl md:text-4xl font-bold">Nebula Pulse</h3>
                    </div>
                    {/* <h2>Nebula Pulse</h2> */}
                    {/* <Image alt="Logo" quality={100} width={300} height={50} draggable={false} src={'/assets/logo/logo2.png'} /> */}
                </Link>
                {/* destop nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav></Nav>
                </div>
                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileNav></MobileNav>
                </div>
            </div>


        </header>
    );
};

export default Header;