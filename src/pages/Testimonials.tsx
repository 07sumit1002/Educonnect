// ──────────────────────────────────────────────────────────────
// src/pages/Testimonials.tsx
// ──────────────────────────────────────────────────────────────
import React, { useState } from 'react';
import CallToAction from '../components/CallToAction';
import { Star } from 'lucide-react';

/* -------------------------------- Testimonial data -------------------------------- */
const testimonials = [
  {
    id: 1,
    name: 'Riya Verma',
    relation: 'Class 10 Student',
    image: 'https://images.pexels.com/photos/4145193/pexels-photo-4145193.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote:
      'EduConnect’s concept‑first approach made Physics and Maths so easy. I jumped from 67 % to 90 % in my boards!',
    rating: 5,
    group: 'Class 9‑10',
  },
  {
    id: 2,
    name: 'Sanjay Kumar',
    relation: 'Parent (Class 8)',
    image: 'https://images.pexels.com/photos/936018/pexels-photo-936018.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote:
      'My son looks forward to every class now. The weekly quizzes and progress reports keep us fully informed.',
    rating: 5,
    group: 'Class 6‑8',
  },
  {
    id: 3,
    name: 'Megha Shah',
    relation: 'Class 12 (Science)',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote:
      'The doubt‑solving sessions and JEE pattern tests boosted my confidence. I secured 96 % in PCM!',
    rating: 5,
    group: 'Class 11‑12 Science',
  },
  {
    id: 4,
    name: 'Anil Patel',
    relation: 'Class 12 (Commerce)',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote:
      'Accounts finally makes sense thanks to clear explanations and real‑life examples. Highly recommended.',
    rating: 4,
    group: 'Class 11‑12 Commerce',
  },
];

const Testimonials: React.FC = () => {
  /* -------------- simple filter -------------- */
  const [filter, setFilter] = useState('All');
  const groups = ['All', ...new Set(testimonials.map((t) => t.group))];
  const shown = filter === 'All' ? testimonials : testimonials.filter((t) => t.group === filter);

  return (
    <div className="font-mont">
      {/* ───── Hero ───── */}
      <section className="relative bg-[#2B526E] pt-32 pb-20 text-center text-white">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Student & Parent Stories</h1>
          <p className="text-lg text-orange-100/90">
            Real results. Real smiles. Hear how EduConnect is transforming learning.
          </p>
        </div>
      </section>

      {/* ───── Review widgets (Google etc.) ───── */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-[#2B526E] mb-3">We’re rated 4.8 ★ on Google</h2>
            <p className="text-gray-600">
              Trusted by hundreds of families across the city.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {[
              {
                name: 'Google Reviews',
                rating: '4.8/5',
                logo: 'https://static.vecteezy.com/system/resources/previews/011/598/471/original/google-logo-icon-illustration-free-vector.jpg',
                link: 'https://www.google.com/',
              },
              {
                name: 'Justdial',
                rating: '4.7/5',
                logo: 'https://cdn.pnggallery.com/wp-content/uploads/justdial-jd-logo-04.png',
                link: 'https://www.justdial.com/',
              },
              {
                name: 'Facebook',
                rating: '4.6/5',
                logo: 'https://cdn-icons-png.flaticon.com/512/124/124010.png',
                link: 'https://www.facebook.com/',
              },
              {
                name: 'School Connect',
                rating: '4.5/5',
                logo: 'https://static-00.iconduck.com/assets.00/star-icon-1024x975-k41y4rod.png',
                link: '#',
              },
            ].map((w, i) => (
              <a
                key={i}
                href={w.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border-t-4 border-[#EC9706] bg-white p-6 text-center shadow-md transition hover:shadow-lg"
              >
                <img src={w.logo} alt={w.name} className="mx-auto h-10 mb-4" />
                <p className="text-[#2B526E] font-semibold">{w.rating}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Filter buttons ───── */}
      <section className="py-6 bg-gray-50">
        <div className="flex flex-wrap justify-center gap-2">
          {groups.map((g) => (
            <button
              key={g}
              onClick={() => setFilter(g)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === g
                  ? 'bg-[#EC9706] text-white'
                  : 'bg-white text-[#2B526E] border border-[#2B526E]/30 hover:bg-[#EC9706]/10'
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </section>

      {/* ───── Testimonials grid ───── */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((t) => (
            <article
              key={t.id}
              className="rounded-xl border border-gray-200 p-6 shadow-sm transition hover:shadow-lg"
            >
              {/* avatar */}
              <div className="flex items-center mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-14 w-14 rounded-full object-cover mr-3"
                />
                <div>
                  <h3 className="font-semibold text-[#2B526E]">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.relation}</p>
                </div>
              </div>

              {/* rating */}
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < t.rating ? 'text-[#EC9706]' : 'text-gray-300'}
                    fill={i < t.rating ? '#EC9706' : 'none'}
                  />
                ))}
              </div>

              {/* quote */}
              <blockquote className="italic text-gray-700 mb-4">“{t.quote}”</blockquote>

              <span className="text-xs font-medium text-[#EC9706]">{t.group}</span>
            </article>
          ))}
        </div>
      </section>

      {/* ───── Success metrics ───── */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Average Score Improvement', value: '23 %' },
            { label: 'Students Graded A1‑A2', value: '350+' },
            { label: 'Years of Teaching', value: '15+' },
            { label: 'Demo Class Satisfaction', value: '98 %' },
          ].map((s, i) => (
            <div key={i} className="rounded-lg bg-white p-8 text-center shadow">
              <p className="text-4xl font-bold text-[#EC9706] mb-1">{s.value}</p>
              <p className="text-[#2B526E] text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ───── Share your experience ───── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-2xl bg-[#2B526E] p-8 shadow-lg">
            <h2 className="text-center text-2xl font-bold text-white mb-6">
              Share Your Experience
            </h2>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-md border border-white/30 bg-white/10 px-4 py-2 text-sm text-white placeholder-gray-300 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md border border-white/30 bg-white/10 px-4 py-2 text-sm text-white placeholder-gray-300 focus:outline-none"
              />
              <textarea
                rows={4}
                placeholder="Your Testimonial"
                className="w-full rounded-md border border-white/30 bg-white/10 px-4 py-2 text-sm text-white placeholder-gray-300 focus:outline-none"
              />
              <button
                type="submit"
                className="block w-full rounded-md bg-[#EC9706] py-2 text-center text-sm font-semibold text-white transition hover:brightness-110"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ───── CTA banner ───── */}
      <CallToAction />
    </div>
  );
};

export default Testimonials;
