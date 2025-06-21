import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden font-mont bg-black min-h-[70vh]">
      {/* Hero image */}
      <img
        src="https://images.pexels.com/photos/6326376/pexels-photo-6326376.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Student learning in a library"
        className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
      />

      {/* gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex max-w-2xl flex-col items-center px-4 text-center text-white"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
      >
        {/* Heading */}
        <motion.h1
          className="mb-6 font-bold leading-tight"
          style={{ fontSize: 'clamp(1.9rem, 5vw + 1rem, 3.75rem)' }}
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Your Learning
          {/* line break only on md and above */}
          <span className="hidden md:inline"><br /></span>{' '}
          Our Mission
        </motion.h1>

        {/* Sub-heading */}
        <motion.p
          className="mb-8 text-slate-200"
          style={{ fontSize: 'clamp(0.9rem, 2vw + 0.5rem, 1.25rem)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Bridging learners with local educators through personalised support
          and quality teaching.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            to="/contact"
            className="rounded-md border-2 border-white px-8 py-3 text-sm font-semibold transition hover:border-[#EC9706] hover:text-[#EC9706]"
          >
            Join Now
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
