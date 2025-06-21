import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import StatsCounter from '../components/StatsCounter';
import FeaturedServices from '../components/FeaturedServices';
import TestimonialSlider from '../components/TestimonialSlider';
import WhyChooseUs from '../components/WhyChooseUs';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <div className="font-work">
      <Hero />

      {/* Services Section */}
      <motion.section
        className="py-8 bg-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B526E]">Top Categories</h2>
            <div className="w-24 h-1 bg-[#EC9706] mx-auto mt-4 mb-6"></div>
            <p className="text-[#2B526E] max-w-2xl mx-auto">
              Explore popular learning domains where students meet certified tutors for personalized education.
            </p>
          </motion.div>

          <FeaturedServices />

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.7 }}
          >
            <Link
              to="/categories"
              className="inline-flex items-center text-[#EC9706] font-medium hover:text-[#2B526E]/80 transition-colors"
            >
              View All Categories
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <StatsCounter />

      <WhyChooseUs />

      {/* Testimonials Section */}
      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B526E]">What Our Users Say</h2>
            <div className="w-24 h-1 bg-[#EC9706] mx-auto mt-4 mb-6"></div>
            <p className="text-[#2B526E] max-w-2xl mx-auto">
              Trusted by thousands of learners and educators across India.
            </p>

            <div className="max-w-5xl mx-auto text-center mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  {
                    icon: 'Google',
                    rating: '★★★★★',
                    logo: 'https://images.pexels.com/photos/1061588/pexels-photo-1061588.jpeg?auto=compress&cs=tinysrgb&w=640',
                    link: '#',
                  },
                  {
                    icon: 'Trustpilot',
                    rating: '★★★★★',
                    logo: 'https://images.pexels.com/photos/5052880/pexels-photo-5052880.jpeg?auto=compress&cs=tinysrgb&w=640',
                    link: '#',
                  },
                  {
                    icon: 'Facebook',
                    rating: '★★★★☆',
                    logo: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=640',
                    link: '#',
                  },
                  {
                    icon: 'Justdial',
                    rating: '★★★★★',
                    logo: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=640',
                    link: '#',
                  }
                ].map((review, index) => (
                  <a
                    key={index}
                    href={review.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full max-w-sm h-20 bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-[30%] flex items-center justify-center">
                      <img
                        src={review.logo}
                        alt={review.icon}
                        className="h-full w-auto object-contain p-2"
                      />
                    </div>
                    <div className="w-[70%] flex flex-col justify-center px-4">
                      <p className="text-2xl text-[#EC9706]">{review.rating}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <TestimonialSlider />
        </div>
      </motion.section>

      <CallToAction />
    </div>
  );
};

export default Home;
