// src/components/CallToAction.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => (
  <section className="py-16 bg-gray-100 md:px-28">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-start gap-10">
        {/* ─────────────── Left Section ─────────────── */}
        <div className="flex-1">
          <h2
            className="mb-4 text-4xl font-bold text-[#2B526E] font-mont"
            style={{ fontFamily: 'Playfair-italic' }}
          >
            Need Academic Help?{' '}
            <span className="italic font-medium text-[#EC9706]">
              Let’s Connect You to a Local Expert!
            </span>
          </h2>

          <p className="mb-2 text-lg text-[#2B526E] font-work">
            EduConnect bridges students and parents to qualified educators nearby.
          </p>
          <p className="mb-6 text-base text-[#2B526E]/80 font-work">
            Whether it's school subjects, skill training, or entrance prep — our network of local tutors is ready to support you.
          </p>

          <div className="h-72 overflow-hidden rounded-lg shadow-lg">
            <iframe
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="EduConnect Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.362670662576!2d80.9422211!3d26.8467086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999546f3edb5f79%3A0xbb9bef723d99d0!2sHazratganj%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1717242460000"
            />
          </div>
        </div>

        {/* ─────────────── Right CTA Section ─────────────── */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <div className="w-full rounded-2xl p-8 shadow-lg bg-white">
            <h3 className="mb-2 text-2xl font-bold text-[#2B526E] font-work">
              Find a Local Tutor Today
            </h3>
            <p className="mb-6 text-[#2B526E] font-work">
              Get personalized learning help, faster.
            </p>

            <div className="flex w-full flex-col sm:flex-row gap-4">
              <Link
                to="/enquiry"
                className="px-8 py-3 text-lg font-semibold text-white bg-[#EC9706] rounded-full shadow transition hover:bg-[#cf7e04] text-center"
              >
                Send Enquiry
              </Link>

              <a
                href="tel:+919999999999"
                className="flex items-center justify-center gap-2 px-6 py-3 text-lg font-semibold text-[#2B526E] rounded-full border border-[#2B526E]"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 22 22"
                  fill="currentColor"
                  className="text-[#2B526E]"
                >
                  <path d="M16.5 14.5l-2-2a1 1 0 0 0-1.32-.08l-1.2.96a8.5 8.5 0 0 1-4.36-4.36l.96-1.2a1 1 0 0 0-.08-1.32l-2-2A1 1 0 0 0 4 5.5v2A10.5 10.5 0 0 0 14.5 18h2a1 1 0 0 0 .99-1.13z" />
                </svg>
                +91&nbsp;99999&nbsp;99999
              </a>
            </div>
          </div>

          {/* Disclaimer (optional) */}
          <p className="text-xs opacity-70 text-[#2B526E] p-2 mt-4 font-work text-center md:text-left">
            * Enquiries are shared only with verified educators. No spam or ads.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default CallToAction;
