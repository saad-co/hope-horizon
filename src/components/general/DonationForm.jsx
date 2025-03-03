'use client'
import React, { useState } from 'react';
import { FaLock } from 'react-icons/fa';

const DonationForm = () => {
    const [donationType, setDonationType] = useState('monthly');
    const [selectedAmount, setSelectedAmount] = useState(40);
    const [customAmount, setCustomAmount] = useState('');

    const handleAmountSelect = (amount) => {
        setSelectedAmount(amount);
        setCustomAmount('');
    };

    const handleCustomAmountChange = (e) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        setCustomAmount(value);
        if (value) {
            setSelectedAmount(null);
        }
    };

    const getDisplayAmount = () => {
        return selectedAmount || (customAmount ? parseInt(customAmount) : 0);
    };

    return (
        <div className='bg-white/95 rounded-xl shadow-2xl p-6 mt-8 w-full max-w-2xl mx-auto'>
            {/* Donation Type Toggle */}
            <div className='flex mb-6 rounded-md overflow-hidden border border-gray-200'>
                <button 
                    className={`flex-1 py-3 font-bold transition-colors duration-300 ${donationType === 'once' ? 'bg-yellow-400 text-gray-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    onClick={() => setDonationType('once')}
                >
                    GIVE ONCE
                </button>
                <button 
                    className={`flex-1 py-3 font-bold transition-colors duration-300 ${donationType === 'monthly' ? 'bg-yellow-400 text-gray-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    onClick={() => setDonationType('monthly')}
                >
                    MONTHLY
                </button>
            </div>
            
            <h3 className='text-gray-800 text-xl font-bold mb-6'>
                Choose an amount to give {donationType === 'monthly' ? 'per month' : ''}
            </h3>
            
            {/* Amount Options */}
            <div className='grid grid-cols-2 gap-4 mb-4'>
                {[10, 20, 40, 100].map((amount) => (
                    <button 
                        key={amount}
                        className={`py-4 rounded-md transition-all duration-300 ${
                            selectedAmount === amount 
                                ? 'bg-yellow-400 text-gray-800 shadow-md' 
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                        onClick={() => handleAmountSelect(amount)}
                    >
                        <span className='font-bold text-xl'>${amount}</span> <span className='text-sm'>USD{donationType === 'monthly' ? '/mo' : ''}</span>
                    </button>
                ))}
            </div>
            
            {/* Custom Amount */}
            <div className='mb-6'>
                <div 
                    className={`py-4 px-4 rounded-md flex items-center justify-center transition-all duration-300 ${
                        customAmount 
                            ? 'border-2 border-yellow-400 bg-white' 
                            : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                >
                    <span className='text-gray-700 font-bold mr-1'>$</span>
                    <input 
                        type="text" 
                        placeholder="Other amount" 
                        className='bg-transparent w-full text-center outline-none text-gray-700'
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                    />
                </div>
            </div>
            
            {/* Join Button */}
            <button className='w-full py-4 bg-yellow-400 rounded-md font-bold text-gray-800 hover:bg-yellow-500 transition-colors duration-300 mb-6 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0'>
                JOIN TODAY
            </button>
            
            {/* Impact Message */}
            <div className='text-center text-gray-700 border-t border-gray-200 pt-4'>
                <p>
                    Your <span className='font-bold text-gray-800 border-b-2 border-yellow-400'>${getDisplayAmount()}.00</span> {donationType === 'monthly' ? 'monthly donation' : 'donation'} can give <span className='font-bold text-gray-800'>{Math.max(1, Math.floor(getDisplayAmount() / 3))}</span> people clean water every year.
                </p>
                <p className='mt-1'>100% funds water projects.</p>
            </div>
            
            {/* Secure Payment */}
            <div className='mt-4 text-center text-gray-500 text-sm flex items-center justify-center'>
                <FaLock className='mr-2' />
                <span>Secure Payment - This site is protected by reCAPTCHA</span>
            </div>
        </div>
    );
};

export default DonationForm; 