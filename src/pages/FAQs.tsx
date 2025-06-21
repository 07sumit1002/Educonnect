import React, { useState } from 'react';

const faqData = [
  {
    question: 'What classes and subjects do you teach?',
    answer: 'We offer coaching for Classes 6–12. All subjects for Classes 6–10, and specialized coaching for Science and Commerce streams in Classes 11–12.',
  },
  {
    question: 'Are classes online or offline?',
    answer: 'We offer both online and offline batches. Students can choose their preferred mode during enrollment.',
  },
  {
    question: 'How can I enroll in a course?',
    answer: 'Click on the "Enroll" button in the top menu or visit the Enroll page to fill out a short form. Our team will contact you shortly.',
  },
  {
    question: 'Do you provide notes and practice material?',
    answer: 'Yes, all enrolled students get access to structured notes, practice papers, and chapter-wise worksheets.',
  },
  {
    question: 'Is there a demo class available?',
    answer: 'Yes, new students can request a free demo class to understand the teaching methodology before enrolling.',
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="font-mont bg-white min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[300px] w-full">
        <img
          src="https://images.pexels.com/photos/5212335/pexels-photo-5212335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="FAQs Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h1>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="pt-16 pb-16 px-4 md:px-10">
        <div className="max-w-3xl mx-auto space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border rounded-xl shadow-sm p-4 transition-all duration-200 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left text-[#2B526E] font-semibold text-lg"
              >
                <span>{faq.question}</span>
                <span>{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-700 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
