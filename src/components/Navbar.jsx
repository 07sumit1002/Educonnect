import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { IoLogoWhatsapp } from 'react-icons/io5';

function Navbar({ scrolled }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    'Home',
    'About',
    'Courses',
    'Schedule',
    'Testimonials',
    'Gallery',
    'FAQs',
    'Contact',
  ];

  const linkColour = scrolled ? 'text-[#2B526E]' : 'text-white';

  return (
    <>
      {/* ─────────── Overlay ─────────── */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/0"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ─────────── Header ─────────── */}
      <header
        className={`fixed top-0 z-50 w-full font-mont transition-all duration-300 ${
          scrolled ? 'bg-white py-2 shadow-lg' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <h1
              className={`text-[22px] font-bold ${linkColour}`}
              style={{ letterSpacing: '1px' }}
            >
              EduConnect
            </h1>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-wider transition-colors ${
                    isActive
                      ? `${linkColour} font-semibold`
                      : `${linkColour} hover:text-[#EC9706]`
                  }`
                }
              >
                {item}
              </NavLink>
            ))}

            {/* CTA */}
            <NavLink
              to="/enroll"
              className="ml-4 rounded-md bg-[#EC9706] px-5 py-2 text-sm font-semibold text-white transition-colors hover:brightness-110"
            >
              Enroll
            </NavLink>

            {/* Call */}
            <a
              href="tel:+919729079252"
              className={`ml-4 flex items-center gap-1 rounded-md border px-4 py-2 text-sm transition-colors ${
                scrolled
                  ? 'border-[#2B526E] text-[#2B526E] hover:border-[#EC9706] hover:text-[#EC9706]'
                  : 'border-white text-white hover:border-[#EC9706] hover:text-[#EC9706]'
              }`}
            >
              <Phone size={18} /> Call
            </a>
          </nav>

          {/* Mobile buttons */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Call small */}
            <a
              href="tel:+919729079252"
              className={`rounded-[15px] px-3 py-2 shadow-md transition-colors duration-200 ${
                scrolled
                  ? 'bg-white text-[#2B526E] hover:bg-[#EC9706] hover:text-white'
                  : 'bg-transparent text-white hover:bg-[#EC9706] hover:text-white'
              }`}
            >
              <Phone size={18} />
            </a>
            {/* Menu toggle */}
            <button
              className={`${linkColour} hover:text-[#EC9706] focus:outline-none`}
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile nav menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-screen py-4 bg-[#2B526E]' : 'max-h-0'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className={({ isActive }) =>
                    `py-2 text-sm uppercase tracking-wider transition-colors ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-white hover:text-[#EC9706]'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </NavLink>
              ))}
              {/* CTA for mobile */}
              <NavLink
                to="/enroll"
                className="rounded-md bg-[#EC9706] px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:brightness-110"
                onClick={() => setIsOpen(false)}
              >
                Enroll
              </NavLink>
            </div>
          </div>
        </div>
      </header>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/+919729079252"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-green-500 p-3 text-white shadow-lg transition-colors duration-200 hover:bg-green-600"
        aria-label="Contact us on WhatsApp"
      >
        <IoLogoWhatsapp size={28} />
      </a>
    </>
  );
}

export default Navbar;
