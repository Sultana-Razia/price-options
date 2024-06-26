import { useState } from "react";
import Link from "../Link/Link";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About Us' },
        { id: 3, path: '/services', name: 'Our Services' },
        { id: 4, path: '/contact', name: 'Contact Us' },
        { id: 5, path: '/profile/:username', name: 'User Profile' }
    ];

    return (
        <nav>
            <div onClick={() => setOpen(!open)} className="text-xl md:hidden p-6">
                {
                    open === true ?
                        <RxCross2 />
                        :
                        <FiMenu />
                }
            </div>
            <ul className={`md:flex gap-4 md:gap-10 pl-6 justify-center absolute md:static duration-1000 bg-gray-100 rounded-md ${open ? 'top-14' : '-top-60'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;