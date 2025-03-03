'use client'
import React, { useRef } from 'react'
import { FaGraduationCap, FaHeart, FaHandHoldingHeart, FaChevronLeft, FaChevronRight, FaBook, FaChild, FaHome, FaUtensils } from 'react-icons/fa'
import DonationForm from '../general/DonationForm'

const HomeClient = () => {
    const carouselRef = useRef(null);
    
    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };
    
    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <div className='bg-gradient-to-b from-purple-900 to-indigo-900 min-h-screen'>
            {/* Hero Section */}
            <section className='min-h-screen max-w-6xl mx-auto text-white pt-10 relative'>
                <div className='flex flex-col gap-16 px-4'>
                    {/* Enhanced Header with Gradient */}
                    <div className='font-bold text-center text-6xl md:text-7xl text-wrap flex flex-col items-center justify-center'>
                        <h1 className='bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text'>Hope Horizon</h1>
                    </div>
                    
                    <div className='flex flex-col gap-10 items-center'>
                        {/* Main content with more catchy text */}
                        <div className='flex flex-col gap-7 text-center max-w-3xl'>
                            <div className='w-full flex flex-col gap-4'>
                                <p className='font-bold text-white text-center text-4xl md:text-5xl drop-shadow-md'>
                                    Transform Lives Through Education
                                </p>
                                <p className='font-semibold text-white text-center text-2xl md:text-3xl'>
                                    Every Dollar Creates Opportunity. Every Child Deserves a Future.
                                </p>
                            </div>
                            
                            {/* Donation Form Component */}
                            <DonationForm />
                            
                            <div className='w-full text-center mt-4'>
                                <p className='font-semibold text-white text-center text-2xl'>
                                    100% OF DONATIONS GO TO THE PROGRAMS.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Carousel Section */}
            <section className='py-16 bg-gradient-to-b from-purple-900 to-indigo-900'>
                <div className='max-w-6xl mx-auto px-4'>
                    <h2 className='text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text'>Our Programs</h2>
                    
                    <div className='relative'>
                        {/* Carousel Navigation Buttons */}
                        <button 
                            onClick={scrollLeft} 
                            className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full shadow-lg backdrop-blur-sm'
                        >
                            <FaChevronLeft />
                        </button>
                        
                        <button 
                            onClick={scrollRight} 
                            className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full shadow-lg backdrop-blur-sm'
                        >
                            <FaChevronRight />
                        </button>
                        
                        {/* Carousel Container */}
                        <div 
                            ref={carouselRef}
                            className='flex overflow-x-auto gap-6 pb-8 scrollbar-hide snap-x snap-mandatory'
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {/* Program Cards */}
                            <ProgramCard 
                                icon={<FaBook />}
                                title="Education Support"
                                description="Providing quality education to underprivileged children through scholarships, learning materials, and dedicated teachers."
                                color="from-blue-500 to-indigo-600"
                            />
                            
                            <ProgramCard 
                                icon={<FaUtensils />}
                                title="Nutrition Program"
                                description="Ensuring children receive proper nutrition with balanced meals to support their growth and learning capabilities."
                                color="from-green-500 to-teal-600"
                            />
                            
                            <ProgramCard 
                                icon={<FaHome />}
                                title="Safe Housing"
                                description="Building and maintaining safe living environments for vulnerable children and families in need."
                                color="from-yellow-500 to-orange-600"
                            />
                            
                            <ProgramCard 
                                icon={<FaChild />}
                                title="Mentorship"
                                description="Connecting children with positive role models who provide guidance, support, and inspiration for their future."
                                color="from-pink-500 to-rose-600"
                            />
                            
                            <ProgramCard 
                                icon={<FaHeart />}
                                title="Healthcare Access"
                                description="Providing essential medical care, vaccinations, and health education to ensure children's wellbeing."
                                color="from-purple-500 to-violet-600"
                            />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Impact Statistics Section */}
            <section className='py-16 bg-gradient-to-b from-purple-900 to-indigo-900'>
                <div className='max-w-6xl mx-auto px-4'>
                    <h2 className='text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text'>Our Impact</h2>
                    
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className='bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all border border-white/20'>
                            <div className='flex justify-center mb-4'>
                                <FaGraduationCap className='text-5xl text-purple-400' />
                            </div>
                            <h3 className='text-2xl font-bold mb-2 text-white'>5,000+</h3>
                            <p className='text-purple-200'>Children Educated</p>
                        </div>
                        
                        <div className='bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all border border-white/20'>
                            <div className='flex justify-center mb-4'>
                                <FaHeart className='text-5xl text-purple-400' />
                            </div>
                            <h3 className='text-2xl font-bold mb-2 text-white'>20+</h3>
                            <p className='text-purple-200'>Communities Served</p>
                        </div>
                        
                        <div className='bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all border border-white/20'>
                            <div className='flex justify-center mb-4'>
                                <FaHandHoldingHeart className='text-5xl text-purple-400' />
                            </div>
                            <h3 className='text-2xl font-bold mb-2 text-white'>$1M+</h3>
                            <p className='text-purple-200'>Donations Delivered</p>
                        </div>
                    </div>
                </div>
            </section>
            
            
            {/* Call to Action Section */}
            <section className='py-16 bg-gradient-to-b from-indigo-900 to-purple-900'>
                <div className='max-w-6xl mx-auto px-4 text-center'>
                    <h2 className='text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text'>Join Our Mission Today</h2>
                    <p className='text-xl text-white mb-10 max-w-3xl mx-auto'>Together, we can create a world where every child has access to education, nutrition, and the support they need to thrive.</p>
                    <button className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all text-xl'>
                        Become a Volunteer
                    </button>
                </div>
            </section>
        </div>
    )
}

const ProgramCard = ({ icon, title, description, color }) => {
    return (
        <div className='min-w-[300px] max-w-[350px] flex-shrink-0 snap-center'>
            <div className={`bg-gradient-to-br ${color} p-6 rounded-xl shadow-lg h-full flex flex-col hover:shadow-xl transition-all transform hover:-translate-y-1`}>
                <div className='text-white text-3xl mb-4'>
                    {icon}
                </div>
                <h3 className='text-xl font-bold text-white mb-3'>{title}</h3>
                <p className='text-white/90 flex-grow'>{description}</p>
                <button className='mt-6 bg-white/20 hover:bg-white/30 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all'>
                    Learn More
                </button>
            </div>
        </div>
    )
}

export default HomeClient