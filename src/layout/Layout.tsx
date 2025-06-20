// src/layout/Layout.tsx
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Layout: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();           // detect route changes

  /* ───────────────────────────────── Scroll listener ───────────────────────────────── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();                         // set initial state on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ───────────────────────────────── Reset scroll on route change ───────────────────────────────── */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col overflow-hidden font-mont">
      <Navbar scrolled={scrolled} />

      <main className="flex-grow">
        {/* Extra safety: ensures ScrollToTop for browsers that can’t smooth‑scroll */}
        <ScrollToTop />
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
