import React, { useState } from 'react';
import logo from "../../assest/logo.png";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi"
import { BsFillCartFill } from "react-icons/bs"
const Header = () => {

    const [showMenu, setShowMenu] = useState(false);
    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <header className='fixed shadow-md w-full h-16 px-2 md:px-4'>
            {/* deskTop */}
            <div className='flex items-center h-full justify-between'>
                <Link to="">
                    <div className='h-10'>
                        <img src={logo} className='h-full' />
                    </div>
                </Link>



                <div className='flex item-center gap-4 md:gap-7'>
                    <nav className='flex gap-4 md:gap-6 text-base md:text-lg'>
                        <Link to={""}>Home</Link>
                        <Link to={"menu"}>Menu</Link>
                        <Link to={"about"}>About</Link>
                        <Link to={"contact"}>Contact</Link>
                    </nav>

                    <div className='text-2xl text-slate-600 relative'>
                        <BsFillCartFill />
                        <div className='absolute -top-2 -right-2 text-white bg-red-500 h-4 w-4 text-base text-center rounded-full'> 0 </div>
                    </div>
                    <div className='text-2xl text-slate-600' onClick={handleShowMenu}>
                        <div className='text-3xl cursor-pointer' >
                            <HiOutlineUserCircle />
                        </div>
                        {
                            showMenu && (
                                <div className='absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md'>
                                    <Link to={"login"} className='whitespace-nowrap'>Login</Link>
                                    <Link to={"newproduct"} className='whitespace-nowrap'>New Product</Link>
                                </div>
                            )}

                    </div>
                </div>
            </div>



            {/* moblie */}
        </header>
    )
}

export default Header;