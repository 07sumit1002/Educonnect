// src/pages/Success.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Success: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 font-mont">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg"
      >
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#EC9706]/10">
          <CheckCircle size={48} className="text-[#EC9706]" />
        </div>

        <h1 className="mb-2 text-2xl font-bold text-[#2B526E]">
          Thank You!
        </h1>
        <p className="mb-6 text-sm text-gray-600">
          Your request has been received. Our team will contact you shortly with
          the next steps.
        </p>

        <Link
          to="/"
          className="inline-block rounded-md bg-[#EC9706] px-6 py-2 text-sm font-semibold text-white transition hover:brightness-110"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default Success;
