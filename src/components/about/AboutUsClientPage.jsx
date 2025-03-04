'use client'

import React from 'react'
import { FaGraduationCap, FaHeart, FaHandHoldingHeart, FaGlobe, FaUsers } from 'react-icons/fa'
import Image from 'next/image'

const AboutPage = () => {
    return (
        <div className='bg-gradient-to-b from-purple-900 to-indigo-900 min-h-screen text-white'>
            {/* Hero Section */}
            <section className='pt-16 pb-20 px-4'>
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">About Hope Horizon</h1>
                    <p className="text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto">
                        Transforming lives through education, compassion, and sustainable development since 2010.
                    </p>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className='py-16 bg-white/5 backdrop-blur-sm'>
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Mission */}
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/20 transform transition-all hover:shadow-xl">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                                <FaGlobe className="text-white text-2xl" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4 text-white">Our Mission</h2>
                            <p className="text-purple-200 text-lg leading-relaxed">
                                Hope Horizon is dedicated to transforming lives through education and sustainable development. We believe that every child deserves access to quality education, proper nutrition, and a safe environment to grow and thrive.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/20 transform transition-all hover:shadow-xl">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                                <FaUsers className="text-white text-2xl" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4 text-white">Our Vision</h2>
                            <p className="text-purple-200 text-lg leading-relaxed">
                                We envision a world where every individual has equal opportunities to learn, grow, and contribute to society. A world where poverty, hunger, and lack of education no longer hinder human potential and community development.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className='py-16'>
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Our Core Values</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ValueCard 
                            icon={<FaHeart />}
                            title="Compassion"
                            description="We approach our work with empathy and understanding, recognizing the dignity and worth of every individual we serve."
                            color="from-pink-500 to-rose-600"
                        />
                        
                        <ValueCard 
                            icon={<FaHandHoldingHeart />}
                            title="Integrity"
                            description="We maintain the highest ethical standards in all our operations, ensuring transparency and accountability to our donors and beneficiaries."
                            color="from-purple-500 to-violet-600"
                        />
                        
                        <ValueCard 
                            icon={<FaGraduationCap />}
                            title="Excellence"
                            description="We strive for excellence in all our programs, continuously learning and improving to maximize our impact on communities."
                            color="from-blue-500 to-indigo-600"
                        />
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className='py-16 bg-white/5 backdrop-blur-sm'>
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">What We Do</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20">
                            <h3 className="text-2xl font-bold mb-4 text-white">Community Development</h3>
                            <p className="text-purple-200 mb-4">
                                We work with local communities to identify needs and implement sustainable solutions that empower residents and improve quality of life.
                            </p>
                            <ul className="list-disc list-inside text-purple-200 space-y-2">
                                <li>Infrastructure improvement</li>
                                <li>Economic empowerment</li>
                                <li>Leadership development</li>
                            </ul>
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20">
                            <h3 className="text-2xl font-bold mb-4 text-white">Educational Initiatives</h3>
                            <p className="text-purple-200 mb-4">
                                Education is at the heart of our mission. We provide resources, scholarships, and support to ensure children have access to quality learning.
                            </p>
                            <ul className="list-disc list-inside text-purple-200 space-y-2">
                                <li>School construction and renovation</li>
                                <li>Teacher training programs</li>
                                <li>Educational materials and technology</li>
                            </ul>
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20">
                            <h3 className="text-2xl font-bold mb-4 text-white">Healthcare Support</h3>
                            <p className="text-purple-200 mb-4">
                                We believe health is fundamental to learning and development. Our healthcare initiatives focus on prevention and access to care.
                            </p>
                            <ul className="list-disc list-inside text-purple-200 space-y-2">
                                <li>Mobile health clinics</li>
                                <li>Vaccination campaigns</li>
                                <li>Health education programs</li>
                            </ul>
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20">
                            <h3 className="text-2xl font-bold mb-4 text-white">Emergency Relief</h3>
                            <p className="text-purple-200 mb-4">
                                When disasters strike, we respond quickly to provide essential aid and support to affected communities.
                            </p>
                            <ul className="list-disc list-inside text-purple-200 space-y-2">
                                <li>Food and water distribution</li>
                                <li>Temporary shelter</li>
                                <li>Medical assistance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className='py-16'>
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Our Leadership Team</h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <TeamMember 
                            name="Sarah Johnson"
                            title="Executive Director"
                            bio="With over 15 years of nonprofit experience, Sarah leads our organization with passion and vision."
                        />
                        
                        <TeamMember 
                            name="Michael Chen"
                            title="Director of Programs"
                            bio="Michael oversees all our educational and community development initiatives across multiple regions."
                        />
                        
                        <TeamMember 
                            name="Aisha Patel"
                            title="Chief Financial Officer"
                            bio="Aisha ensures financial transparency and maximizes the impact of every donation we receive."
                        />
                    </div>
                </div>
            </section>

            {/* Join Us CTA */}
            <section className='py-16 bg-gradient-to-r from-purple-600 to-pink-600'>
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Join Our Mission</h2>
                    <p className="text-xl text-white/90 mb-8">
                        Together, we can create lasting change and transform lives around the world.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-purple-700 hover:bg-purple-100 font-bold py-3 px-8 rounded-full shadow-lg transition-all">
                            Donate Now
                        </button>
                        <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-full shadow-lg transition-all">
                            Become a Volunteer
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

const ValueCard = ({ icon, title, description, color }) => {
    return (
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20 hover:shadow-xl transition-all">
            <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${color} flex items-center justify-center mb-4`}>
                <div className="text-white text-2xl">
                    {icon}
                </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
            <p className="text-purple-200">{description}</p>
        </div>
    )
}

const TeamMember = ({ name, title, bio }) => {
    return (
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20 hover:shadow-xl transition-all text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                    {name.split(' ').map(n => n[0]).join('')}
                </span>
            </div>
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <p className="text-pink-300 mb-3">{title}</p>
            <p className="text-purple-200">{bio}</p>
        </div>
    )
}

export default AboutPage