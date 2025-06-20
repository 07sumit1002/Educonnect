// src/pages/About.tsx
import { motion } from 'framer-motion';
import { Check, Award, Users, Lightbulb, ShieldCheck } from 'lucide-react';
import CallToAction from '../components/CallToAction';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

/* ─── Team data ─── */
const teamMembers = [
  {
    name: 'Anjali Sharma',
    position: 'Founder & Lead Educator',
    image:
      'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600',
    specialization:
      'Physics · Chemistry · Mathematics · Academic Counselling',
    experience: '12 years of experience',
  },
  {
    name: 'Rohit Gupta',
    position: 'Senior Commerce Mentor',
    image:
      'https://images.pexels.com/photos/936018/pexels-photo-936018.jpeg?auto=compress&cs=tinysrgb&w=600',
    specialization: 'Accountancy · Economics · Business Studies',
    experience: '9 years of experience',
  },
];

const About = () => {
  return (
    <div className="font-mont">
      {/* ───────── Hero ───────── */}
      <motion.section
        className="relative bg-[#2B526E] pt-32 pb-20"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            About EduConnect
          </h1>
          <p className="text-lg text-orange-100/90">
            Empowering young minds through personalised, concept‑driven
            learning since 2013.
          </p>
        </div>
      </motion.section>

      {/* ───────── Our story ───────── */}
      <motion.section
        className="bg-white px-4 py-16 md:px-10"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 text-justify">
          {/* text */}
          <div>
            <h2 className="mb-6 text-4xl font-bold text-[#2B526E]">
              Our Story
            </h2>
            <p className="mb-4 text-base text-gray-800">
              Founded in 2013 by <strong>Anjali Sharma</strong>, EduConnect
              began as a single‑room coaching class with five students and one
              dream — to make quality education accessible and engaging for
              everyone. Over the years, we’ve evolved into a full‑fledged
              learning hub helping more than <span className="font-semibold">
                3 000
              </span>{' '}
              students secure top grades in board and competitive exams.
            </p>
            <p className="mb-4 text-base text-gray-800">
              Our blended approach combines clear concept explanation, regular
              assessments, and modern ed‑tech tools such as AR try‑ons for
              science labs and AI‑powered progress tracking.
            </p>
            <p className="mb-6 text-base text-gray-800">
              With every success story, our commitment to student‑centred
              learning grows stronger.
            </p>

            <div className="space-y-3">
              {[
                'Individual attention in small batches',
                'Weekly progress reports for parents',
                'Interactive doubt‑clearing sessions',
                'Experienced & passionate faculty',
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 text-[#2B526E]" />
                  <span className="text-sm text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* image & badge */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/5212330/pexels-photo-5212330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="EduConnect classroom"
              className="h-[700px] w-full rounded-lg object-cover shadow-lg"
            />
            <div className="absolute -bottom-8 -right-8 rounded-lg bg-gray-50 p-6 shadow-lg">
              <p className="text-3xl font-bold text-[#EC9706]">10+</p>
              <p className="font-medium text-[#2B526E]">Years of Excellence</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ───────── Values ───────── */}
      <motion.section
        className="bg-gray-50 py-16"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#2B526E] md:text-4xl">
            Our Values
          </h2>
          <div className="mx-auto mt-4 mb-6 h-1 w-24 bg-[#EC9706]" />
          <p className="mx-auto mb-12 max-w-2xl text-gray-600">
            The principles that shape every lesson, every interaction, and
            every success story.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Integrity',
                desc: 'Honesty and transparency in all we do.',
                icon: <ShieldCheck className="h-12 w-12 text-[#EC9706]" />,
              },
              {
                title: 'Excellence',
                desc: 'Relentless pursuit of academic mastery.',
                icon: <Award className="h-12 w-12 text-[#EC9706]" />,
              },
              {
                title: 'Student Focus',
                desc: 'Every decision starts with learner needs.',
                icon: <Users className="h-12 w-12 text-[#EC9706]" />,
              },
              {
                title: 'Innovation',
                desc: 'Leveraging technology for smarter learning.',
                icon: <Lightbulb className="h-12 w-12 text-[#EC9706]" />,
              },
            ].map((v, i) => (
              <div
                key={i}
                className="rounded-lg bg-white p-6 shadow-md transition hover:shadow-lg"
              >
                <div className="mb-4">{v.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-[#2B526E]">
                  {v.title}
                </h3>
                <p className="text-sm text-gray-700">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ───────── Team ───────── */}
      <motion.section
        className="bg-white py-16"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#2B526E] md:text-4xl">
              Meet Our Faculty
            </h2>
            <div className="mx-auto mt-4 mb-6 h-1 w-24 bg-[#EC9706]" />
            <p className="mx-auto max-w-3xl text-gray-600">
              Experienced mentors committed to unlocking every student’s
              potential.
            </p>
          </div>

          <div className="flex flex-col items-center gap-8">
            {teamMembers.map((m) => (
              <Link
                key={m.name}
                to={`/team/${m.name.replace(/\s+/g, '-').toLowerCase()}`}
                className="group flex w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-lg"
              >
                {/* image */}
                <div className="flex h-56 w-full items-start justify-center overflow-hidden md:h-48 md:w-48">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="h-full w-full scale-90 object-cover object-top transition-transform duration-500 group-hover:scale-110 md:scale-100"
                  />
                </div>

                {/* text */}
                <div className="flex flex-1 flex-col justify-center p-6">
                  <h3 className="text-2xl font-bold text-[#2B526E]">
                    {m.name}
                  </h3>
                  <p className="mb-2 text-sm text-gray-600">{m.position}</p>
                  <p className="text-sm text-gray-700">
                    Experience: {m.experience}
                  </p>
                  <p className="mt-1 text-sm text-gray-700">
                    Specialisation: {m.specialization}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ───────── CTA banner ───────── */}
      <CallToAction />
    </div>
  );
};

export default About;
