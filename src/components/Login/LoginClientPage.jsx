'use client'

import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const LoginClientPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    
    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: type === 'checkbox' ? checked : value
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate login process
        setTimeout(() => {
            setIsSubmitting(false);
            // In a real app, you would redirect or update state based on login success
            console.log('Login submitted:', formData);
        }, 1500);
    };
    
    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };
    
    return (
        <div className='bg-gradient-to-b from-purple-900 to-indigo-900 min-h-screen text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-md w-full space-y-10'>
                {/* Header */}
                <div className='text-center'>
                    <h1 className='text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text'>Welcome Back</h1>
                    <p className='text-xl text-purple-200'>Sign in to your Hope Horizon account</p>
                </div>
                
                {/* Login Form */}
                <div className='bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/20'>
                    <form className='space-y-6' onSubmit={handleSubmit}>
                        {/* Email Field */}
                        <div>
                            <label htmlFor='email' className='block text-sm font-medium text-purple-200 mb-1'>
                                Email Address
                            </label>
                            <div className='relative'>
                                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                    <FaEnvelope className='text-purple-400' />
                                </div>
                                <input
                                    id='email'
                                    name='email'
                                    type='email'
                                    autoComplete='email'
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className='w-full bg-white/5 border border-purple-400/30 rounded-lg pl-10 pr-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-pink-400/50 transition-all'
                                    placeholder='you@example.com'
                                />
                            </div>
                        </div>
                        
                        {/* Password Field */}
                        <div>
                            <label htmlFor='password' className='block text-sm font-medium text-purple-200 mb-1'>
                                Password
                            </label>
                            <div className='relative'>
                                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                    <FaLock className='text-purple-400' />
                                </div>
                                <input
                                    id='password'
                                    name='password'
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete='current-password'
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className='w-full bg-white/5 border border-purple-400/30 rounded-lg pl-10 pr-12 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-pink-400/50 transition-all'
                                    placeholder='••••••••'
                                />
                                <button
                                    type='button'
                                    onClick={togglePasswordVisibility}
                                    className='absolute inset-y-0 right-0 pr-3 flex items-center text-purple-300 hover:text-pink-300 transition-colors'
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                                </button>
                            </div>
                        </div>
                        
                        {/* Remember Me & Forgot Password */}
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <input
                                    id='rememberMe'
                                    name='rememberMe'
                                    type='checkbox'
                                    checked={formData.rememberMe}
                                    onChange={handleChange}
                                    className='h-4 w-4 bg-white/5 border-purple-400/30 rounded focus:ring-pink-400/50 text-pink-500'
                                />
                                <label htmlFor='rememberMe' className='ml-2 block text-sm text-purple-200'>
                                    Remember me
                                </label>
                            </div>
                            <div className='text-sm'>
                                <Link href='/forgot-password' className='text-pink-300 hover:text-pink-400 transition-colors'>
                                    Forgot your password?
                                </Link>
                            </div>
                        </div>
                        
                        {/* Submit Button */}
                        <div>
                            <button
                                type='submit'
                                disabled={isSubmitting}
                                className={`w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? 'Signing in...' : 'Sign in'}
                            </button>
                        </div>
                    </form>
                    
                    {/* Divider */}
                    <div className='mt-8 flex items-center'>
                        <div className='flex-grow border-t border-purple-400/30'></div>
                        <span className='px-4 text-sm text-purple-200'>Or continue with</span>
                        <div className='flex-grow border-t border-purple-400/30'></div>
                    </div>
                    
                    {/* Social Login Buttons */}
                    <div className='mt-6 grid grid-cols-3 gap-3'>
                        <SocialLoginButton icon={<FaGoogle />} provider="Google" />
                        <SocialLoginButton icon={<FaFacebook />} provider="Facebook" />
                        <SocialLoginButton icon={<FaTwitter />} provider="Twitter" />
                    </div>
                </div>
                
                {/* Sign Up Link */}
                <div className='text-center'>
                    <p className='text-purple-200'>
                        Don't have an account?{' '}
                        <Link href='/register' className='text-pink-300 hover:text-pink-400 font-medium transition-colors'>
                            Sign up
                        </Link>
                    </p>
                </div>
                
                {/* Terms and Privacy */}
                <div className='text-center text-xs text-purple-300'>
                    <p>
                        By signing in, you agree to our{' '}
                        <Link href='/terms' className='text-pink-300 hover:underline'>
                            Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link href='/privacy' className='text-pink-300 hover:underline'>
                            Privacy Policy
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

const SocialLoginButton = ({ icon, provider }) => {
    return (
        <button
            type='button'
            className='bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg flex items-center justify-center transition-all'
        >
            <span className='mr-2'>{icon}</span>
            {provider}
        </button>
    );
};

export default LoginClientPage;