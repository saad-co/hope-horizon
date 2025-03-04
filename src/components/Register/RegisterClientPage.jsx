'use client'

import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaUser, FaGoogle, FaFacebook, FaTwitter, FaEye, FaEyeSlash } from 'react-icons/fa';
import Link from 'next/link';

const RegisterClientPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(true);
    
    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: type === 'checkbox' ? checked : value
        }));
        
        // Check password match when either password field changes
        if (id === 'password' || id === 'confirmPassword') {
            if (id === 'password') {
                setPasswordMatch(value === formData.confirmPassword || formData.confirmPassword === '');
            } else {
                setPasswordMatch(value === formData.password || value === '');
            }
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate passwords match
        if (formData.password !== formData.confirmPassword) {
            setPasswordMatch(false);
            return;
        }
        
        setIsSubmitting(true);
        
        // Simulate registration process
        setTimeout(() => {
            setIsSubmitting(false);
            // In a real app, you would redirect or update state based on registration success
            console.log('Registration submitted:', formData);
        }, 1500);
    };
    
    const togglePasswordVisibility = (field) => {
        if (field === 'password') {
            setShowPassword(prev => !prev);
        } else {
            setShowConfirmPassword(prev => !prev);
        }
    };
    
    return (
        <div className='bg-gradient-to-b from-purple-900 to-indigo-900 min-h-screen text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-md w-full space-y-10'>
                {/* Header */}
                <div className='text-center'>
                    <h1 className='text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text'>Join Hope Horizon</h1>
                    <p className='text-xl text-purple-200'>Create your account and start making a difference</p>
                </div>
                
                {/* Registration Form */}
                <div className='bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/20'>
                    <form className='space-y-6' onSubmit={handleSubmit}>
                        {/* Name Fields */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            {/* First Name */}
                            <div>
                                <label htmlFor='firstName' className='block text-sm font-medium text-purple-200 mb-1'>
                                    First Name
                                </label>
                                <div className='relative'>
                                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                        <FaUser className='text-purple-400' />
                                    </div>
                                    <input
                                        id='firstName'
                                        name='firstName'
                                        type='text'
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className='w-full bg-white/5 border border-purple-400/30 rounded-lg pl-10 pr-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-pink-400/50 transition-all'
                                        placeholder='John'
                                    />
                                </div>
                            </div>
                            
                            {/* Last Name */}
                            <div>
                                <label htmlFor='lastName' className='block text-sm font-medium text-purple-200 mb-1'>
                                    Last Name
                                </label>
                                <div className='relative'>
                                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                        <FaUser className='text-purple-400' />
                                    </div>
                                    <input
                                        id='lastName'
                                        name='lastName'
                                        type='text'
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className='w-full bg-white/5 border border-purple-400/30 rounded-lg pl-10 pr-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-pink-400/50 transition-all'
                                        placeholder='Doe'
                                    />
                                </div>
                            </div>
                        </div>
                        
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
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className='w-full bg-white/5 border border-purple-400/30 rounded-lg pl-10 pr-12 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-pink-400/50 transition-all'
                                    placeholder='••••••••'
                                />
                                <button
                                    type='button'
                                    onClick={() => togglePasswordVisibility('password')}
                                    className='absolute inset-y-0 right-0 pr-3 flex items-center text-purple-300 hover:text-pink-300 transition-colors'
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            <p className='text-xs text-purple-300 mt-1'>
                                Password must be at least 8 characters
                            </p>
                        </div>
                        
                        {/* Confirm Password Field */}
                        <div>
                            <label htmlFor='confirmPassword' className='block text-sm font-medium text-purple-200 mb-1'>
                                Confirm Password
                            </label>
                            <div className='relative'>
                                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                    <FaLock className='text-purple-400' />
                                </div>
                                <input
                                    id='confirmPassword'
                                    name='confirmPassword'
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    required
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className={`w-full bg-white/5 border ${!passwordMatch ? 'border-red-400' : 'border-purple-400/30'} rounded-lg pl-10 pr-12 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-pink-400/50 transition-all`}
                                    placeholder='••••••••'
                                />
                                <button
                                    type='button'
                                    onClick={() => togglePasswordVisibility('confirm')}
                                    className='absolute inset-y-0 right-0 pr-3 flex items-center text-purple-300 hover:text-pink-300 transition-colors'
                                >
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            {!passwordMatch && (
                                <p className='text-xs text-red-400 mt-1'>
                                    Passwords do not match
                                </p>
                            )}
                        </div>
                        
                        {/* Terms Agreement */}
                        <div className='flex items-start'>
                            <input
                                id='agreeTerms'
                                name='agreeTerms'
                                type='checkbox'
                                required
                                checked={formData.agreeTerms}
                                onChange={handleChange}
                                className='h-4 w-4 mt-1 bg-white/5 border-purple-400/30 rounded focus:ring-pink-400/50 text-pink-500'
                            />
                            <label htmlFor='agreeTerms' className='ml-2 block text-sm text-purple-200'>
                                I agree to the{' '}
                                <Link href='/terms' className='text-pink-300 hover:text-pink-400 transition-colors'>
                                    Terms of Service
                                </Link>{' '}
                                and{' '}
                                <Link href='/privacy' className='text-pink-300 hover:text-pink-400 transition-colors'>
                                    Privacy Policy
                                </Link>
                            </label>
                        </div>
                        
                        {/* Submit Button */}
                        <div>
                            <button
                                type='submit'
                                disabled={isSubmitting || !passwordMatch}
                                className={`w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all ${(isSubmitting || !passwordMatch) ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? 'Creating Account...' : 'Create Account'}
                            </button>
                        </div>
                    </form>
                    
                    {/* Divider */}
                    <div className='mt-8 flex items-center'>
                        <div className='flex-grow border-t border-purple-400/30'></div>
                        <span className='px-4 text-sm text-purple-200'>Or sign up with</span>
                        <div className='flex-grow border-t border-purple-400/30'></div>
                    </div>
                    
                    {/* Social Registration Buttons */}
                    <div className='mt-6 grid grid-cols-3 gap-3'>
                        <SocialButton icon={<FaGoogle />} provider="Google" />
                        <SocialButton icon={<FaFacebook />} provider="Facebook" />
                        <SocialButton icon={<FaTwitter />} provider="Twitter" />
                    </div>
                </div>
                
                {/* Sign In Link */}
                <div className='text-center'>
                    <p className='text-purple-200'>
                        Already have an account?{' '}
                        <Link href='/login' className='text-pink-300 hover:text-pink-400 font-medium transition-colors'>
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

const SocialButton = ({ icon, provider }) => {
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

export default RegisterClientPage;