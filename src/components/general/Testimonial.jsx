'use client'

import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

const Testimonial = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Autoplay functionality
  useEffect(() => {
    let interval;
    if (isAutoplay) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoplay, testimonials.length]);

  // Pause autoplay when user interacts with controls
  const handleManualNavigation = (index) => {
    setActiveIndex(index);
    setIsAutoplay(false);
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoplay(true), 10000);
  };

  const goToPrevious = () => {
    const newIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    handleManualNavigation(newIndex);
  };

  const goToNext = () => {
    const newIndex = (activeIndex + 1) % testimonials.length;
    handleManualNavigation(newIndex);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-indigo-900 to-purple-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          What Our Community Says
        </h2>

        <div className="relative">
          {/* Testimonial Carousel */}
          <div className="overflow-hidden">
            <div 
              className="transition-all duration-700 ease-in-out flex"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="max-w-3xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-sm p-8 md:p-10 rounded-xl shadow-lg border border-white/20">
                      <div className="text-pink-300 mb-6">
                        <FaQuoteLeft className="text-4xl" />
                      </div>
                      
                      <p className="text-xl md:text-2xl italic text-white mb-8 leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      
                      <div className="flex items-center">
                        {testimonial.image ? (
                          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                            <Image 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              width={64}
                              height={64}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        ) : (
                          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                            <span className="text-white font-bold text-xl">
                              {testimonial.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        )}
                        
                        <div>
                          <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                          <p className="text-purple-200">{testimonial.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-all"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-all"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-xl" />
          </button>
          
          {/* Indicator Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => handleManualNavigation(index)}
                className={`h-3 rounded-full transition-all ${
                  activeIndex === index 
                    ? 'bg-pink-400 w-8' 
                    : 'bg-white/30 w-3 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial; 