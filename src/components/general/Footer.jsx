'use client'

import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaHeart, FaGraduationCap, FaHandHoldingHeart } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-indigo-900 to-purple-950 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: About */}
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Hope Horizon</h3>
            <p className="text-purple-200 mb-6 leading-relaxed">
              We're dedicated to transforming lives through education, providing opportunities for children around the world to build a brighter future.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<FaTwitter />} href="https://twitter.com" />
              <SocialIcon icon={<FaFacebook />} href="https://facebook.com" />
              <SocialIcon icon={<FaInstagram />} href="https://instagram.com" />
              <SocialIcon icon={<FaYoutube />} href="https://youtube.com" />
              <SocialIcon icon={<FaLinkedin />} href="https://linkedin.com" />
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/programs">Our Programs</FooterLink>
              <FooterLink href="/impact">Our Impact</FooterLink>
              <FooterLink href="/volunteer">Volunteer</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            </ul>
          </div>
          
          {/* Column 3: Impact Stats */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Our Impact</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-800 flex items-center justify-center mr-4">
                  <FaGraduationCap className="text-pink-300" />
                </div>
                <div>
                  <p className="font-bold text-white">5,000+ Children</p>
                  <p className="text-purple-200 text-sm">Received education</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-800 flex items-center justify-center mr-4">
                  <FaHeart className="text-pink-300" />
                </div>
                <div>
                  <p className="font-bold text-white">20+ Communities</p>
                  <p className="text-purple-200 text-sm">Supported worldwide</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-800 flex items-center justify-center mr-4">
                  <FaHandHoldingHeart className="text-pink-300" />
                </div>
                <div>
                  <p className="font-bold text-white">$1M+ Donations</p>
                  <p className="text-purple-200 text-sm">Delivered to programs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Donation Info */}
        <div className="border-t border-purple-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-purple-200 mb-4 md:mb-0">
              <span className="font-semibold text-pink-300">Hope Horizon</span> is a 501(c)(3) nonprofit organization
            </p>
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full">
              <p className="font-bold text-white">100% of donations go directly to our programs</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-purple-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-purple-300 mb-4 md:mb-0">
            © 2025 Hope Horizon. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/terms" className="text-purple-300 hover:text-pink-300 transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="text-purple-300 hover:text-pink-300 transition-colors">
              Privacy
            </Link>
            <Link href="/cookies" className="text-purple-300 hover:text-pink-300 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, href }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="w-10 h-10 rounded-full bg-purple-800 hover:bg-pink-600 flex items-center justify-center transition-colors duration-300"
      aria-label={`Visit our ${href.split('https://')[1]} page`}
    >
      {icon}
    </a>
  );
};

const FooterLink = ({ href, children }) => {
  return (
    <li>
      <Link 
        href={href} 
        className="text-purple-200 hover:text-pink-300 transition-colors duration-300 flex items-center"
      >
        <span className="mr-2">›</span> {children}
      </Link>
    </li>
  );
};

export default Footer; 