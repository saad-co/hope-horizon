import Link from 'next/link';
import React from 'react'


const Header = () => {
    return (
        <div className=' bg-white/70'>
            <div className='max-w-6xl mx-auto text-black flex justify-between items-center p-4'>
                <Link href={"/"}>
                    <h1 className='font-bold text-3xl cursor-pointer'>
                        Our Logo
                    </h1>
                </Link>
                <nav>
                    <ul className='flex gap-10 '>
                        <Link href={"/"}>
                            <li >Home</li>
                        </Link>
                        <Link href={"/about"}>
                            <li>About</li>
                        </Link>
                        <Link href={"/contact"}>
                            <li>Contact</li>
                        </Link>
                        <Link href={"/login"}>
                            <li>Login</li>
                        </Link>
                        <Link href={"/register"}>
                            <p>Register</p>
                        </Link>

                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;
