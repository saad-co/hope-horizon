'use client'

import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            
            // Reset form after 3 seconds
            setTimeout(() => {
                setSubmitSuccess(false);
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            }, 3000);
        }, 1500);
    };
    
    return (
        <div className='bg-gradient-to-b from-purple-900 to-indigo-900 min-h-screen text-white'>
            {/* Hero Section */}
            <section className='pt-16 pb-20 px-4'>
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Contact Us</h1>
                    <p className="text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto">
                        We'd love to hear from you. Reach out with questions, partnership opportunities, or to learn more about our work.
                    </p>
                </div>
            </section>
            
            {/* Contact Form and Info Section */}
            <section className='py-16 bg-white/5 backdrop-blur-sm'>
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/20">
                            <h2 className="text-3xl font-bold mb-6 text-white">Send Us a Message</h2>
                            
                            {submitSuccess ? (
                                <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 text-center">
                                    <p className="text-white font-semibold">Thank you for your message!</p>
                                    <p className="text-purple-200">We'll get back to you as soon as possible.</p>
                                </div>
                            ) : (
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-purple-200 mb-1">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 border border-purple-400/30 rounded-lg px-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-pink-400/50 transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-purple-200 mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 border border-purple-400/30 rounded-lg px-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-pink-400/50 transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-purple-200 mb-1">Subject</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 border border-purple-400/30 rounded-lg px-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-pink-400/50 transition-all"
                                            placeholder="How can we help you?"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-purple-200 mb-1">Your Message</label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 border border-purple-400/30 rounded-lg px-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-pink-400/50 transition-all"
                                            placeholder="Tell us how we can help..."
                                        ></textarea>
                                    </div>
                                    
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            )}
                        </div>
                        
                        {/* Contact Information */}
                        <div className="flex flex-col gap-8">
                            {/* Get in Touch */}
                            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/20">
                                <h2 className="text-3xl font-bold mb-6 text-white">Get in Touch</h2>
                                
                                <div className="space-y-6">
                                    <ContactInfo 
                                        icon={<FaEnvelope />}
                                        title="Email Us"
                                        detail="contact@hopehorizon.org"
                                        link="mailto:contact@hopehorizon.org"
                                    />
                                    
                                    <ContactInfo 
                                        icon={<FaPhone />}
                                        title="Call Us"
                                        detail="+1 (555) 123-4567"
                                        link="tel:+15551234567"
                                    />
                                    
                                    <ContactInfo 
                                        icon={<FaMapMarkerAlt />}
                                        title="Visit Us"
                                        detail="123 Hope Street, Charity City, CC 12345"
                                        link="https://maps.google.com/?q=123+Hope+Street,+Charity+City"
                                    />
                                </div>
                            </div>
                            
                            {/* Social Media */}
                            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/20">
                                <h2 className="text-2xl font-bold mb-6 text-white">Connect With Us</h2>
                                
                                <div className="flex flex-wrap gap-4">
                                    <SocialButton 
                                        icon={<FaTwitter />}
                                        href="https://twitter.com/hopehorizon"
                                        label="Twitter"
                                    />
                                    
                                    <SocialButton 
                                        icon={<FaFacebook />}
                                        href="https://facebook.com/hopehorizon"
                                        label="Facebook"
                                    />
                                    
                                    <SocialButton 
                                        icon={<FaInstagram />}
                                        href="https://instagram.com/hopehorizon"
                                        label="Instagram"
                                    />
                                    
                                    <SocialButton 
                                        icon={<FaLinkedin />}
                                        href="https://linkedin.com/company/hopehorizon"
                                        label="LinkedIn"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* FAQ Section */}
            <section className='py-16'>
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Frequently Asked Questions</h2>
                    
                    <div className="space-y-6">
                        <FaqItem 
                            question="How can I volunteer with Hope Horizon?"
                            answer="We welcome volunteers in various capacities. Please fill out our volunteer form on the website or contact us directly to discuss opportunities that match your skills and interests."
                        />
                        
                        <FaqItem 
                            question="How is my donation used?"
                            answer="100% of public donations go directly to our programs. Our operational costs are covered by dedicated donors, ensuring your contribution has maximum impact on the communities we serve."
                        />
                        
                        <FaqItem 
                            question="Can I sponsor a specific project or child?"
                            answer="Yes, we offer sponsorship programs for both individual children and specific community projects. Contact us for more information on how you can make a targeted impact."
                        />
                        
                        <FaqItem 
                            question="Do you provide tax receipts for donations?"
                            answer="Yes, as a registered 501(c)(3) nonprofit organization, all donations are tax-deductible. We provide tax receipts for all contributions."
                        />
                    </div>
                </div>
            </section>
            
            {/* Map Section (Placeholder) */}
            <section className='py-16 bg-white/5 backdrop-blur-sm'>
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8 text-white">Find Us</h2>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 h-80 flex items-center justify-center">
                        <p className="text-purple-200">Interactive map would be displayed here</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

const ContactInfo = ({ icon, title, detail, link }) => {
    return (
        <a 
            href={link} 
            className="flex items-start gap-4 group hover:bg-white/5 p-3 rounded-lg transition-all"
            target={link.startsWith('http') ? "_blank" : undefined}
            rel={link.startsWith('http') ? "noopener noreferrer" : undefined}
        >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <div className="text-white text-lg">
                    {icon}
                </div>
            </div>
            <div>
                <h3 className="font-bold text-white group-hover:text-pink-300 transition-colors">{title}</h3>
                <p className="text-purple-200">{detail}</p>
            </div>
        </a>
    )
}

const SocialButton = ({ icon, href, label }) => {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all"
            aria-label={`Follow us on ${label}`}
        >
            <span className="text-white text-lg">{icon}</span>
            <span className="text-white">{label}</span>
        </a>
    )
}

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden">
            <button 
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="font-bold text-white text-lg">{question}</h3>
                <span className={`text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    ▼
                </span>
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 pt-0 text-purple-200">
                    {answer}
                </div>
            </div>
        </div>
    )
}

export default ContactPage