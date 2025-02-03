import React from 'react'

const ContactPage = () => {
    return (
        <div className='bg-white/70 min-h-screen'>
            <section className='max-w-6xl mx-auto text-black pt-10 px-4'>
                <div className="min-h-screen p-8 bg-white/70">
                    <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white/70 rounded-lg shadow-xl p-6">
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="mt-1 border-black border block w-full rounded-md  shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="mt-1 border-black border block w-full rounded-md  shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="mt-1 border-black border block w-full rounded-md  shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                                >
                                    Send Message
                                </button>
                            </form>

                            <div className="mt-8 border-t pt-6">
                                <h2 className="text-xl font-semibold mb-4">Other Ways to Reach Us</h2>
                                <div className="space-y-2 text-gray-700">
                                    <p>Email: contact@hopehorizon.org</p>
                                    <p>Phone: +1 (555) 123-4567</p>
                                    <p>Address: 123 Hope Street, Charity City, CC 12345</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactPage