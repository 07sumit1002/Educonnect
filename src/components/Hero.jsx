import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden font-mont bg-black flex justify-center items-center">
      <img
        src="https://images.pexels.com/photos/6326376/pexels-photo-6326376.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Student learning in a library"
        className="w-full h-auto max-h-screen object-cover object-[center_20%]"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/60 px-4">
        <motion.div
          className="text-white max-w-2xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-relaxed mb-6"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="inline-block lg:-ml-[3in] sm:-ml-[1in]">Your Learning</span><br />
            <span className="inline-block lg:pl-[3in] sm:pl-[1in]">Our Mission</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl mb-8 font-medium text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Bridging learners with local educators through personalized support and quality teaching.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-white hover:border-[#EC9706] hover:text-[#EC9706] text-white font-medium rounded-md transition-all"
            >
              Join Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
