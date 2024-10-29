import logo from '../assets/images/home/logo.svg';
import {Link, NavLink} from "react-router-dom";
import {navbar} from "../data";

const Header = () => {
    return (
        <header className={`w-full bg-transparent h-[70px]`}>
            <div className={`container mx-auto`}>
                <div className={`flex flex-row items-center justify-between`}>
                    <div className={`flex flex-row items-center gap-0`}>
                        <img src={`${logo}`} alt={"logo"} className={`h-[70px]`}/>
                        <p>
                            <span className={`text-2xl font-berkshire font-normal text-clr-pink`}>Icy </span>
                            <span className={`text-2xl font-berkshire font-normal text-clr-purple`}>Tales</span>
                        </p>
                    </div>
                    <div className={`flex flex-row items-center`}>
                        <nav className={`hidden md:flex flex-row items-center gap-x-7`}>
                            {
                                navbar.map((nav) => (
                                    <NavLink
                                        key={nav.id}
                                        to={nav.route}
                                        className={({isActive}) =>
                                            `block text-sm ${isActive ? 'text-clr-pink font-semibold' : 'text-clr-black'} data-[focus]:bg-gray-100 hover:text-clr-pink transition-all`
                                        }>
                                        {nav.name}
                                    </NavLink>
                                ))
                            }
                        </nav>
                        <Link
                            to="/"
                            className={`ml-12 text-white text-sm font-bold bg-clr-pink hover:bg-clr-pink/90 rounded-[30px] px-6 py-3 flex items-center`}
                            aria-label="Contact Us"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;