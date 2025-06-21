import React from 'react';
import { Users, BookOpen, ShieldCheck, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Users className="h-12 w-12 text-[#EC9706]" />,
    title: 'Verified Educators',
    description: 'All tutors undergo a rigorous screening process to ensure subject expertise and teaching experience.'
  },
  {
    icon: <Clock className="h-12 w-12 text-[#EC9706]" />,
    title: 'Flexible Timings',
    description: 'Learn at your pace with time slots that fit your school, college, or job schedule easily.'
  },
  {
    icon: <ShieldCheck className="h-12 w-12 text-[#EC9706]" />,
    title: 'Secure & Private',
    description: 'Your data and learning journey are protected through encrypted, secure communication channels.'
  },
  {
    icon: <BookOpen className="h-12 w-12 text-[#EC9706]" />,
    title: 'Diverse Subjects',
    description: 'From NEET to IELTS, we connect you to tutors in every domain — academic and beyond.'
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 bg-white font-mont" style={{ overflow: 'hidden' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column — Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B526E] mb-6">
              Why Choose EduConnect?
            </h2>
            <p className="text-[#2B526E] mb-8 font-semibold">
              Trusted by 3000+ students and educators for personalized, local learning connections.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border-l-4 border-[#EC9706] hover:shadow-md">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-[#2B526E] mb-2">{feature.title}</h3>
                  <p className="text-[#2B526E] text-justify font-medium">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column — Image with Label */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/4778625/pexels-photo-4778625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Students studying"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <p className="text-[#2B526E] font-bold text-xl mb-2">10+ Years of Impact</p>
              <p className="text-sm font-semibold text-[#2B526E]">Empowering learners since 2015.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
