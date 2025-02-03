
import React from 'react'
const AboutPage = () => {
    return (
        <div className='bg-white/70 min-h-screen'>
            <section className='max-w-6xl mx-auto text-black pt-10 px-4'>
                <div className="min-h-screen p-8 bg-white/70 w-full rounded-3xl">
                    <h1 className="text-3xl font-bold mb-6 text-center">About Hope Horizon</h1>
                    <div className="max-w-3xl mx-auto">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                            <p className="text-gray-700">
                                Hope Horizon is dedicated to making a positive impact in communities through sustainable development and humanitarian aid.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                            <p className="text-gray-700">
                                We envision a world where every individual has access to basic necessities and opportunities for growth.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>Community Development Programs</li>
                                <li>Educational Initiatives</li>
                                <li>Healthcare Support</li>
                                <li>Emergency Relief</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutPage