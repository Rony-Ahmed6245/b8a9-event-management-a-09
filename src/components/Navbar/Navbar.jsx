import { NavLink } from "react-router-dom";


const Navbar = () => {
    const home = <NavLink
        to="/"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-red-400 border-b px-2 py-1 rounded-lg font-bold bgTrans" : "bgTrans"
        }
    >
        HOME
    </NavLink>;
    const shop = <NavLink
    to="/shop"
    className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? " text-red-400 border-b px-2 py-1 rounded-lg font-bold bgTrans" : "bgTrans"
    }
>
    SHOP
</NavLink>;
    const blog = <NavLink
        to="/blog"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-red-400 border-b px-2 py-1 rounded-lg font-bold bgTrans " : ""
        }
    >
        BLOG
    </NavLink>;
    const aboutUs = <NavLink
        to="/aboutus"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-red-400 border-b px-2 py-1 rounded-lg font-bold bgTrans " : ""
        }
    >
        ABOUT US
    </NavLink>;
    const contactUs = <NavLink
        to="/contactus"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-red-400 border-b px-2 py-1 rounded-lg font-bold bgTrans " : ""
        }
    >
        CONTACT US
    </NavLink>;
    const faq = <NavLink
        to="/faq"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-red-400 border-b px-2 py-1 rounded-lg font-bold bgTrans " : ""
        }
    >
        FAQ'S
    </NavLink>;





    return (
        <div className="bg-[#DC2C5C]">
            <div className="max-w-screen-xl	 mx-auto md:px-2">
                <div className="px-4 md:px-4 lg:px-4   bg-none z-30 relative ">
                    <div className="navbar flex justify-between items-center ">
                        <img className="w-[150px] md:w-[200px]" src={'https://i.ibb.co/cgSdsT0/logo-1-300x300.webp'} alt="" />
                        <div className="">
                            <div className="dropdown">
                                <label tabIndex={1} className="btn btn-ghost md:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[40px] text-white w-[30px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex={0} className=" menus menu-sm dropdown-content bg-white  py-4 border z-[10]  rounded-box  -left-20 ">
                                    <li className="text-4xl px-3">{home}</li>
                                    <li className="text-4xl px-3">{shop}</li>
                                    <li className="text-4xl px-3">{blog}</li>
                                    <li className="text-4xl px-3">{aboutUs}</li>
                                    <li className="text-4xl px-3">{contactUs}</li>
                                    <li className="text-4xl px-3">{faq}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="navbar-center hidden md:flex">
                            <ul className=" menu-horizontal px-4 gap-5  text-white font-bold">
                                <li className="">{home}</li>
                                <li className="">{shop}</li>
                                <li>{blog}</li>
                                <li>{aboutUs}</li>
                                <li>{contactUs}</li>
                                <li>{faq}</li>

                            </ul>
                            <button className="btn bg-white text-gray-500 md:ml-4 lg:ml-6">
                                login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;