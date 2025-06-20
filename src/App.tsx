// src/App.tsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout        from './layout/Layout';
import ScrollToTop   from './components/ScrollToTop';
import Disclaimer    from './components/Disclaimer';

/* ──────── Pages ──────── */
import Home          from './pages/Home';
import About         from './pages/About';
import Courses       from './pages/Courses';
import Schedule      from './pages/Schedule';
import Testimonials  from './pages/Testimonials';
import Gallery       from './pages/Gallery';
import FAQs          from './pages/FAQs';
import Contact       from './pages/Contact';
import Enroll        from './pages/Enroll';
// import Success       from './pages/Success';     // ✔️ confirmation page (create if not yet)

/* ------------------------------------------------------------------------------------------------ */

const App: React.FC = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  /* Show disclaimer only once per session */
  useEffect(() => {
    if (!sessionStorage.getItem('disclaimerAgreed')) setShowDisclaimer(true);
  }, []);

  const handleAgree = () => {
    sessionStorage.setItem('disclaimerAgreed', 'true');
    setShowDisclaimer(false);
  };

  return (
    <Router>
      <ScrollToTop />

      {/* Disclaimer modal */}
      {showDisclaimer && <Disclaimer onAgree={handleAgree} />}

      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Core pages */}
          <Route index element={<Home />} />
          <Route path="about"        element={<About />} />
          <Route path="courses"      element={<Courses />} />
          <Route path="schedule"     element={<Schedule />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="gallery"      element={<Gallery />} />
          <Route path="faqs"         element={<FAQs />} />
          <Route path="contact"      element={<Contact />} />
          <Route path="enroll"       element={<Enroll />} />
          {/* <Route path="success"      element={<Success />} /> */}

          {/* 404 fallback (optional – redirect to Home) */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
