import React from 'react';
import CourseCard from '../components/CourseCard';

const Courses = () => {
  return (
    <div className="font-mont bg-gray-50 min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[300px] w-full">
        <img
          src="https://images.pexels.com/photos/5212334/pexels-photo-5212334.jpeg"
          alt="Courses Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
            Our Courses
          </h1>
        </div>
      </div>

      {/* Course Sections */}
      <div className="pt-16 pb-16 px-4 md:px-10">
        {/* Section: Classes 6–8 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#2B526E] mb-4">Classes 6 – 8</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <CourseCard
              title="Foundation Program"
              classes="Classes 6–8"
              description="Covers Math, Science, English & Social Studies. Focus on fundamentals, concept clarity, and interactive learning."
            />
          </div>
        </section>

        {/* Section: Classes 9–10 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#2B526E] mb-4">Classes 9 – 10</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <CourseCard
              title="Science & Math"
              classes="Classes 9–10"
              description="Comprehensive coaching in Physics, Chemistry, Biology & Maths for board exam success."
            />
            <CourseCard
              title="SST & English"
              classes="Classes 9–10"
              description="Focused sessions for high-score strategies in Social Science and English."
            />
          </div>
        </section>

        {/* Section: Classes 11–12 */}
        <section>
          <h2 className="text-2xl font-semibold text-[#2B526E] mb-4">Classes 11 – 12</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <CourseCard
              title="Physics & Chemistry"
              classes="Classes 11–12"
              stream="Science Stream"
              description="Advanced coaching with concept mastery, numerical practice & exam readiness."
            />
            <CourseCard
              title="Maths / Biology"
              classes="Classes 11–12"
              stream="Science Stream"
              description="In-depth subject coverage with NEET/JEE-oriented problem solving."
            />
            <CourseCard
              title="Accounts, BST & Economics"
              classes="Classes 11–12"
              stream="Commerce Stream"
              description="Commerce coaching for conceptual clarity, case studies, and scoring techniques."
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Courses;
