import React from 'react';

const Navbar = () => {

    const menuItems =<>
        <li className='font-bold mr-8 text-neutral hover:underline decoration-2'>Log in</li>
        <li className='font-bold text-primary hover:underline decoration-2'>Join for free</li>
    </>
    
    return (
        <div className="navbar sticky top-0 z-50 bg-base-100 mx-auto px-28 shadow-sm">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" storkewidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItems}
                </ul>
            </div>
            <a href='https://www.researchgate.net/' className=" normal-case text-2xl text-primary font-semibold">Research Gate</a>
        </div>
        <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
                {menuItems}
            </ul>
        </div>
    </div>
    );
};

export default Navbar;