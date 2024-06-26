import Link from "../Link/Link";


const Navbar = () => {
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About Us' },
        { id: 3, path: '/services', name: 'Our Services' },
        { id: 4, path: '/contact', name: 'Contact Us' },
        { id: 5, path: '/profile/:username', name: 'User Profile' }
    ];

    return (
        <nav>
            <ul className="md:flex gap-10 justify-center">
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