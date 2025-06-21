import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Ananya Verma',
    quote: 'EduConnect helped me find the perfect local tutor for my NEET prep.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ravi Sinha',
    quote: 'Seamless platform with highly qualified educators. My grades improved drastically.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Nisha Patel',
    quote: 'I loved how easy it was to explore verified educators near me. Highly recommended!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Aditya Joshi',
    quote: 'EduConnect bridged the gap between me and students who needed specialized coaching.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Priyanka Kumari',
    quote: 'As a tutor, I could easily reach more students in my area. Great experience!',
    rating: 5,
  },
];

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="min-w-full px-4">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-200">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < testimonial.rating ? 'text-[#EC9706]' : 'text-gray-300'}>
                      ★
                    </span>
                  ))}
                </div>

                <blockquote className="text-lg italic text-[#2B526E] mb-6">
                  “{testimonial.quote}”
                </blockquote>

                <h4 className="font-bold text-[#2B526E] font-serif">{testimonial.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-[#EC9706]' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
