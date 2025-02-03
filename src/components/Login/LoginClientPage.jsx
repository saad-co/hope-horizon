import React from 'react';

const LoginClientPage = () => {
    return (
        <div className='bg-white/70 min-h-screen'>
            <section className='max-w-6xl mx-auto text-black pt-10 px-4'>
                <div className='flex flex-col items-center space-y-6'>
                    <div className='text-center space-y-2'>
                        <h1 className='font-bold text-3xl'>Login</h1>
                        <p className='text-red-500'>Fill in your information to get started</p>
                    </div>

                    <div className='w-full max-w-md bg-white/70 rounded-lg shadow-lg p-6'>
                        <form className='space-y-6'>
                            <div className='space-y-2'>
                                <label
                                    htmlFor='email'
                                    className='block text-sm font-medium text-gray-700'
                                >
                                    Email
                                </label>
                                <input
                                    id='email'
                                    type='email'
                                    placeholder='john@example.com'
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                                />
                            </div>
                            <div className='space-y-2'>
                                <label
                                    htmlFor='password'
                                    className='block text-sm font-medium text-gray-700'
                                >
                                    Password
                                </label>
                                <input
                                    id='password'
                                    type='password'
                                    placeholder='••••••••'
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                                />
                            </div>
                            <button
                                type='submit'
                                className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200'
                            >
                                Login
                            </button>

                            <p className='text-center text-sm text-gray-600'>
                                Dont have an account?{' '}
                                <a href='/login' className='text-blue-600 hover:underline'>
                                    Register
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LoginClientPage;