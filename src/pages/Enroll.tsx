import React, { useState } from 'react';

const Enroll = () => {
  const [formData, setFormData] = useState({
    name: '',
    classLevel: '',
    stream: '',
    contact: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you! Your enrollment request has been submitted.');
    setFormData({
      name: '',
      classLevel: '',
      stream: '',
      contact: '',
      message: '',
    });
  };

  return (
    <div className="font-mont bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[300px] w-full">
        <img
          src="https://images.pexels.com/photos/5212350/pexels-photo-5212350.jpeg"
          alt="Enroll Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
            Enroll Now
          </h1>
        </div>
      </div>

      {/* Form Section */}
      <div className="pt-16 pb-16 px-4 md:px-10">
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-md space-y-6"
        >
          <div>
            <label className="block mb-1 text-sm font-medium text-[#2B526E]">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#EC9706]"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-[#2B526E]">Class</label>
            <select
              name="classLevel"
              required
              value={formData.classLevel}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#EC9706]"
            >
              <option value="">Select Class</option>
              <option value="6">Class 6</option>
              <option value="7">Class 7</option>
              <option value="8">Class 8</option>
              <option value="9">Class 9</option>
              <option value="10">Class 10</option>
              <option value="11">Class 11</option>
              <option value="12">Class 12</option>
            </select>
          </div>

          {(formData.classLevel === '11' || formData.classLevel === '12') && (
            <div>
              <label className="block mb-1 text-sm font-medium text-[#2B526E]">Stream</label>
              <select
                name="stream"
                value={formData.stream}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#EC9706]"
              >
                <option value="">Select Stream</option>
                <option value="Science">Science</option>
                <option value="Commerce">Commerce</option>
              </select>
            </div>
          )}

          <div>
            <label className="block mb-1 text-sm font-medium text-[#2B526E]">Contact Number / WhatsApp</label>
            <input
              type="tel"
              name="contact"
              required
              value={formData.contact}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#EC9706]"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-[#2B526E]">Message (Optional)</label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#EC9706]"
              placeholder="Any specific subject, batch time, etc."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#EC9706] hover:brightness-110 text-white font-semibold py-2 rounded-md transition"
          >
            Submit Enrollment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Enroll;
