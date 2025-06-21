// src/pages/Contact.tsx
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Contact: React.FC = () => {
  /* ───── Form state ───── */
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  /* ───── Helpers ───── */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      e.email = 'Invalid email';
    if (!formData.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData); // replace with API call
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', course: '', message: '' });
    }
  };

  /* ───── Render ───── */
  return (
    <div className="font-mont">
      {/* Hero */}
      <section className="relative bg-[#2B526E] pt-32 pb-20">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/4145192/pexels-photo-4145192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-6 text-4xl font-bold text-white md:text-5xl"
          >
            Contact Us
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-lg text-orange-100/90"
          >
            Have a question about our courses or enrollment? We’re here to help.
          </motion.p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="bg-white py-16">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2">
          {/* Info column */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="mb-6 text-3xl font-bold text-[#2B526E]">
              Get in Touch
            </h2>
            <p className="mb-8 text-gray-700">
              Reach out for admission queries, demo class bookings, or any other
              assistance. Our team responds within 24 hours.
            </p>

            {[
              {
                icon: <MapPin className="h-6 w-6 text-[#2B526E]" />,
                title: 'Academy Address',
                lines: ['2nd Floor, ABC Plaza', 'Hazratganj, Lucknow 226001'],
              },
              {
                icon: <Phone className="h-6 w-6 text-[#2B526E]" />,
                title: 'Phone / WhatsApp',
                lines: ['+91 91234 56789'],
              },
              {
                icon: <Mail className="h-6 w-6 text-[#2B526E]" />,
                title: 'Email',
                lines: ['info@educonnect.in'],
              },
              {
                icon: <Clock className="h-6 w-6 text-[#2B526E]" />,
                title: 'Timings',
                lines: ['Mon – Sat: 9 am – 7 pm', 'Sun: 10 am – 1 pm'],
              },
            ].map(({ icon, title, lines }, i) => (
              <div
                key={i}
                className="mt-2 flex w-full max-w-md items-start rounded-3xl border-2 border-[#EC9706]/60 px-4 py-3 transition hover:bg-[#EC9706]/5"
              >
                <div className="mr-4 rounded-full border border-[#2B526E] p-3 bg-white">
                  {icon}
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-[#2B526E]">
                    {title}
                  </h3>
                  {lines.map((l, idx) => {
                    const isEmail = l.includes('@');
                    const isPhone = l.startsWith('+');
                    return (
                      <p
                        key={idx}
                        className="break-words text-sm text-gray-700 sm:text-base"
                      >
                        {isEmail ? (
                          <a href={`mailto:${l}`} className="hover:text-[#EC9706]">
                            {l}
                          </a>
                        ) : isPhone ? (
                          <a href={`tel:${l.replace(/\s+/g, '')}`} className="hover:text-[#EC9706]">
                            {l}
                          </a>
                        ) : (
                          l
                        )}
                      </p>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Social icons */}
            <div className="mt-8">
              <h3 className="mb-4 text-lg font-semibold text-[#2B526E]">
                Follow Us
              </h3>
              <div className="flex space-x-3">
                {[
                  {
                    name: 'LinkedIn',
                    url: 'https://www.linkedin.com/',
                    icon: <FaLinkedin />,
                  },
                  {
                    name: 'YouTube',
                    url: 'https://www.youtube.com/',
                    icon: <FaYoutube />,
                  },
                  {
                    name: 'Instagram',
                    url: 'https://www.instagram.com/',
                    icon: <FaInstagram />,
                  },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EC9706]/10 text-[#2B526E] transition hover:bg-[#EC9706] hover:text-white"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="rounded-lg bg-gray-50 p-8 shadow-md">
              <h2 className="mb-6 text-2xl font-bold text-[#2B526E]">
                Send Us a Message
              </h2>
              {submitted && (
                <div className="mb-6 rounded bg-green-100 px-4 py-3 text-green-700">
                  Thank you! We’ll get back to you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 ${
                      errors.name
                        ? 'border-red-500 focus:ring-red-400'
                        : 'border-gray-300 focus:ring-[#EC9706]'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 ${
                      errors.email
                        ? 'border-red-500 focus:ring-red-400'
                        : 'border-gray-300 focus:ring-[#EC9706]'
                    }`}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#EC9706]"
                    placeholder="+91 9876543210"
                  />
                </div>

                {/* Course dropdown */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Course of Interest
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#EC9706]"
                  >
                    <option value="">Select a course</option>
                    <option value="Class 6–8 Foundation">
                      Class 6–8 Foundation
                    </option>
                    <option value="Class 9–10 Science & Maths">
                      Class 9–10 Science & Maths
                    </option>
                    <option value="Class 11–12 Science">
                      Class 11–12 Science
                    </option>
                    <option value="Class 11–12 Commerce">
                      Class 11–12 Commerce
                    </option>
                    <option value="Other">Other / Not sure</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 ${
                      errors.message
                        ? 'border-red-500 focus:ring-red-400'
                        : 'border-gray-300 focus:ring-[#EC9706]'
                    }`}
                    placeholder="How can we assist you?"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-[#EC9706] py-3 text-sm font-semibold text-white transition hover:brightness-110"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <motion.section
        className="bg-gray-50 py-16"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#2B526E]">
              Our Location
            </h2>
            <p className="text-gray-600">
              We’re centrally located in Lucknow and easily reachable by metro
              or bus.
            </p>
          </div>
          <div className="h-96 overflow-hidden rounded-lg shadow-md">
            <iframe
              className="h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.362670662576!2d80.9422211!3d26.8467086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999546f3edb5f79%3A0xbb9bef723d99d0!2sHazratganj%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1717242460000"
            />
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
