'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [activeItem, setActiveItem] = useState('/');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div className='bg-gradient-to-r from-purple-900 to-indigo-900 backdrop-blur-md sticky top-0 z-50 shadow-lg'>
            <div className='max-w-6xl mx-auto text-white p-4'>
                <div className='flex justify-between items-center'>
                    <Link href={"/"}>
                        <h1 className='font-bold text-3xl cursor-pointer relative group transition-transform duration-300 hover:scale-105'>
                            <span className='bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text group-hover:from-pink-500 group-hover:to-yellow-400 transition-all duration-500'>
                                Hope Horizon
                            </span>
                            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-yellow-400 group-hover:w-full transition-all duration-500'></span>
                        </h1>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button 
                        className='md:hidden text-white text-2xl focus:outline-none'
                        onClick={toggleMobileMenu}
                    >
                        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    {/* Desktop Navigation */}
                    <nav className='hidden md:block'>
                        <ul className='flex items-center gap-6 md:gap-10'>
                            <NavItem href="/" isActive={activeItem === '/'} onClick={() => setActiveItem('/')}>Home</NavItem>
                            <NavItem href="/about" isActive={activeItem === '/about'} onClick={() => setActiveItem('/about')}>About</NavItem>
                            <NavItem href="/contact" isActive={activeItem === '/contact'} onClick={() => setActiveItem('/contact')}>Contact</NavItem>
                            <NavItem href="/login" isActive={activeItem === '/login'} onClick={() => setActiveItem('/login')}>Login</NavItem>
                            <NavItem href="/register" isButton onClick={() => setActiveItem('/register')}>Register</NavItem>
                        </ul>
                    </nav>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <nav className='flex flex-col'>
                        <ul className='flex flex-col gap-4 py-2'>
                            <MobileNavItem href="/" isActive={activeItem === '/'} onClick={() => { setActiveItem('/'); setMobileMenuOpen(false); }}>Home</MobileNavItem>
                            <MobileNavItem href="/about" isActive={activeItem === '/about'} onClick={() => { setActiveItem('/about'); setMobileMenuOpen(false); }}>About</MobileNavItem>
                            <MobileNavItem href="/contact" isActive={activeItem === '/contact'} onClick={() => { setActiveItem('/contact'); setMobileMenuOpen(false); }}>Contact</MobileNavItem>
                            <MobileNavItem href="/login" isActive={activeItem === '/login'} onClick={() => { setActiveItem('/login'); setMobileMenuOpen(false); }}>Login</MobileNavItem>
                            <MobileNavItem href="/register" isButton onClick={() => { setActiveItem('/register'); setMobileMenuOpen(false); }}>Register</MobileNavItem>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

// NavItem component for desktop navigation
const NavItem = ({ href, children, isButton = false, isActive = false, onClick }) => {
    return (
        <li className="list-none">
            <Link href={href}>
                <div 
                    className={`relative cursor-pointer transition-all duration-300 ${
                        isButton 
                            ? 'bg-yellow-400 px-4 py-2 rounded-lg font-semibold hover:shadow-lg hover:scale-105 active:scale-95 text-gray-800 hover:bg-yellow-500' 
                            : `text-white hover:-translate-y-1 active:scale-95 ${isActive ? 'text-yellow-400' : 'text-white/90 hover:text-white'}`
                    }`}
                    onClick={onClick}
                >
                    {children}
                    {!isButton && (
                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-yellow-400 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 hover:w-full'}`}></span>
                    )}
                </div>
            </Link>
        </li>
    );
};

// NavItem component for mobile navigation
const MobileNavItem = ({ href, children, isButton = false, isActive = false, onClick }) => {
    return (
        <li className="list-none w-full">
            <Link href={href} className="w-full">
                <div 
                    className={`relative cursor-pointer transition-all duration-300 w-full py-3 px-2 ${
                        isButton 
                            ? 'bg-yellow-400 rounded-lg font-semibold text-center text-gray-800 hover:bg-yellow-500' 
                            : `hover:bg-white/10 rounded-md ${isActive ? 'text-yellow-400 bg-white/5' : 'text-white/90 hover:text-white'}`
                    }`}
                    onClick={onClick}
                >
                    {children}
                </div>
            </Link>
        </li>
    );
};

export default Header;
