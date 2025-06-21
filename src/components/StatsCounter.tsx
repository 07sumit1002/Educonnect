// src/components/StatsCounter.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Users, Award, GraduationCap, BookOpenCheck } from 'lucide-react';
import { motion } from 'framer-motion';

/* ─── Metrics to display ─── */
const statsData = [
  {
    icon: <Users className="h-8 w-8 text-[#EC9706]" />,
    count: 3000,
    label: 'Students Taught',
    suffix: '+',
  },
  {
    icon: <BookOpenCheck className="h-8 w-8 text-[#EC9706]" />,
    count: 120,
    label: 'Qualified Tutors',
    suffix: '+',
  },
  {
    icon: <Award className="h-8 w-8 text-[#EC9706]" />,
    count: 23,
    label: 'Avg Score Improvement',
    suffix: '%',
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-[#EC9706]" />,
    count: 10,
    label: 'Years of Excellence',
    suffix: '+',
  },
];

function StatsCounter() {
  const [counters, setCounters] = useState(statsData.map(() => 0));
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  /* ─── Trigger animation once when in view ─── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  /* ─── Smooth increment logic ─── */
  const animateCounters = () => {
    statsData.forEach((stat, idx) => {
      const target = stat.count;
      let current = 0;
      const increment = Math.ceil(target / 50);

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => {
          const updated = [...prev];
          updated[idx] = current;
          return updated;
        });
      }, 30);
    });
  };

  /* ─── Render ─── */
  return (
    <motion.section
      ref={sectionRef}
      className="bg-gray-50 py-12 text-[#2B526E]"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              className="w-64 rounded-2xl border-b-2 border-[#EC9706]/60 bg-white p-6 text-center shadow-sm transition hover:scale-105 hover:bg-gray-100"
            >
              <div className="mb-4 flex justify-center">{stat.icon}</div>
              <h3 className="mb-2 text-4xl font-bold font-serif">
                {counters[idx]}
                <span className="text-[#EC9706]">{stat.suffix}</span>
              </h3>
              <p className="text-sm uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default StatsCounter;
