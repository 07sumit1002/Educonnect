// src/components/FeaturedServices.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const courses = [
  {
    id: 1,
    slug: 'foundation-6-8',
    title: 'Foundation (Class 6–8)',
    image:
      'https://images.pexels.com/photos/5212556/pexels-photo-5212556.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    slug: 'science-maths-9-10',
    title: 'Science & Maths (Class 9–10)',
    image:
      'https://images.pexels.com/photos/4145193/pexels-photo-4145193.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    slug: 'jee-11-12',
    title: 'JEE Prep (Class 11–12 Science)',
    image:
      'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    slug: 'commerce-11-12',
    title: 'Commerce (Class 11–12)',
    image:
      'https://images.pexels.com/photos/936018/pexels-photo-936018.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 5,
    slug: 'skills-workshops',
    title: 'Skills & Workshops',
    image:
      'https://images.pexels.com/photos/4145230/pexels-photo-4145230.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 6,
    slug: 'test-prep',
    title: 'Competitive Test Prep',
    image:
      'https://images.pexels.com/photos/5212438/pexels-photo-5212438.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const FeaturedServices: React.FC = () => (
  <div className="max-w-6xl mx-auto px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      {courses.map((c, i) => (
        <Link
          key={c.id}
          to={`/courses/${c.slug}`}
          className="w-full flex justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative mx-2 mt-6 flex w-72 flex-col items-center justify-start rounded-xl bg-white px-6 pt-12 pb-3 shadow-md transition-all duration-300 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="absolute -top-12 left-1/2 z-20 flex -translate-x-1/2 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-white shadow-lg w-28 h-28">
              <img
                src={c.image}
                alt={c.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Title + arrow */}
            <div className="mt-14 mb-2 flex items-center justify-center gap-2">
              <span className="text-2xl font-bold text-[#2B526E] group-hover:text-[#EC9706] transition-colors text-center">
                {c.title}
              </span>
              <svg
                className="h-5 w-5 text-[#EC9706] group-hover:text-[#2B526E] transition-colors"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>

            <div className="mb-2 h-0.5 w-10 rounded-full bg-[#EC9706] group-hover:bg-[#2B526E] transition-colors" />
          </motion.div>
        </Link>
      ))}
    </div>
  </div>
);

export default FeaturedServices;
