import React from 'react';

const Schedule = () => {
  return (
    <div className="pt-24 pb-16 px-4 md:px-10 font-mont bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-[#2B526E] text-center mb-10">Class Schedule</h1>

      {/* Section: Classes 6–8 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#2B526E] mb-4">Classes 6 – 8</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-50 rounded-xl overflow-hidden shadow-sm">
            <thead className="bg-[#2B526E] text-white text-left">
              <tr>
                <th className="p-4">Subject</th>
                <th className="p-4">Days</th>
                <th className="p-4">Time</th>
                <th className="p-4">Mode</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              <tr className="border-t">
                <td className="p-4">Math & Science</td>
                <td className="p-4">Mon, Wed, Fri</td>
                <td className="p-4">4:00 PM – 5:30 PM</td>
                <td className="p-4">Offline</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">English & SST</td>
                <td className="p-4">Tue, Thu</td>
                <td className="p-4">4:00 PM – 5:30 PM</td>
                <td className="p-4">Online</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section: Classes 9–10 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#2B526E] mb-4">Classes 9 – 10</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-50 rounded-xl overflow-hidden shadow-sm">
            <thead className="bg-[#2B526E] text-white text-left">
              <tr>
                <th className="p-4">Subject</th>
                <th className="p-4">Days</th>
                <th className="p-4">Time</th>
                <th className="p-4">Mode</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              <tr className="border-t">
                <td className="p-4">Science & Math</td>
                <td className="p-4">Mon, Wed, Fri</td>
                <td className="p-4">6:00 PM – 7:30 PM</td>
                <td className="p-4">Offline</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">SST & English</td>
                <td className="p-4">Tue, Thu</td>
                <td className="p-4">6:00 PM – 7:30 PM</td>
                <td className="p-4">Online</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section: Classes 11–12 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#2B526E] mb-4">Classes 11 – 12</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-50 rounded-xl overflow-hidden shadow-sm">
            <thead className="bg-[#2B526E] text-white text-left">
              <tr>
                <th className="p-4">Subject</th>
                <th className="p-4">Stream</th>
                <th className="p-4">Days</th>
                <th className="p-4">Time</th>
                <th className="p-4">Mode</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              <tr className="border-t">
                <td className="p-4">Physics & Chemistry</td>
                <td className="p-4">Science</td>
                <td className="p-4">Mon, Wed, Fri</td>
                <td className="p-4">7:30 PM – 9:00 PM</td>
                <td className="p-4">Offline</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">Maths / Biology</td>
                <td className="p-4">Science</td>
                <td className="p-4">Tue, Thu, Sat</td>
                <td className="p-4">7:30 PM – 9:00 PM</td>
                <td className="p-4">Online</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">Accounts, BST, Economics</td>
                <td className="p-4">Commerce</td>
                <td className="p-4">Tue, Thu, Sat</td>
                <td className="p-4">5:00 PM – 6:30 PM</td>
                <td className="p-4">Offline</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center mt-12">
        <a
          href="/enroll"
          className="inline-block rounded-md bg-[#EC9706] px-6 py-3 text-white font-semibold text-sm hover:brightness-110 transition"
        >
          Enroll in a Class
        </a>
      </div>
    </div>
  );
};

export default Schedule;
