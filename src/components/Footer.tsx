// src/components/Footer.tsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  BookOpenCheck,
  Phone,
  Mail,
  MapPin,
  Clock,
  Youtube,
  Instagram,
  Linkedin,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2B526E] text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* ───── Brand Section ───── */}
          <div>
            <div className="flex items-center mb-4">
              <BookOpenCheck className="h-8 w-8 text-orange-400 mr-2" />
              <span className="text-xl font-serif font-bold">EduConnect</span>
            </div>
            <p className="text-sm text-white/80 mb-4 text-justify">
              Bridging students with quality educators nearby. We help learners
              find the right academic support — right where they live.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://youtube.com"
                target="_blank"
                className="text-white hover:text-orange-300 transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="text-white hover:text-orange-300 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="text-white hover:text-orange-300 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* ───── Course Categories ───── */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-orange-400 pb-2">
              Subjects Offered
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/courses/foundation" className="text-white/70 hover:text-orange-300 transition">
                  Class 6–8 Foundation
                </Link>
              </li>
              <li>
                <Link to="/courses/science-maths" className="text-white/70 hover:text-orange-300 transition">
                  Class 9–10 Science & Math
                </Link>
              </li>
              <li>
                <Link to="/courses/commerce" className="text-white/70 hover:text-orange-300 transition">
                  Commerce (11–12)
                </Link>
              </li>
              <li>
                <Link to="/courses/science" className="text-white/70 hover:text-orange-300 transition">
                  Science (11–12)
                </Link>
              </li>
              <li>
                <Link to="/courses/competitive-exams" className="text-white/70 hover:text-orange-300 transition">
                  Competitive Prep
                </Link>
              </li>
            </ul>
          </div>

          {/* ───── Quick Links ───── */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-orange-400 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {['Home', 'About', 'Courses', 'Contact', 'Terms', 'Privacy'].map((item) => (
                <li key={item}>
                  <NavLink
                    to={
                      item === 'Home'
                        ? '/'
                        : `/${item.toLowerCase().replace(/\s+/g, '-')}`
                    }
                    className="text-white/70 hover:text-orange-300 transition"
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ───── Contact Info ───── */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-orange-400 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-400 mr-2 mt-0.5" />
                <span>2nd Floor, ABC Plaza, Hazratganj, Lucknow</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-orange-400 mr-2" />
                <a href="tel:+919123456789" className="hover:text-orange-300 transition">
                  +91 91234 56789
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-orange-400 mr-2" />
                <a href="mailto:info@educonnect.in" className="hover:text-orange-300 transition">
                  info@educonnect.in
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-orange-400 mr-2 mt-0.5" />
                <span>Mon–Sat: 9:00 AM – 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ───── Bottom Bar ───── */}
        <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} EduConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
