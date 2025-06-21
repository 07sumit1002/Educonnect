import React from 'react';

const Disclaimer = ({ onAgree }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 sm:px-6">
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-lg sm:text-xl font-bold mb-4">Disclaimer</h2>
        <p className="text-sm text-gray-700 mb-4 text-justify">
          EduConnect is an educational platform created solely to connect students, parents, and local educators. We do not represent any government body, institution, or certification authority.
        </p>
        <p className="text-sm text-gray-700 mb-4 text-justify">
          The content on this site is intended for informational purposes only and may not always be complete, accurate, or up-to-date. EduConnect is not liable for any actions taken based on information provided here.
        </p>
        <p className="text-sm text-gray-700 mb-4 text-justify">
          We encourage users to independently verify the qualifications, availability, and credibility of any educator listed. By continuing to use this platform, you acknowledge and agree to this disclaimer.
        </p>


        <div className="flex justify-end">
          <button
            onClick={onAgree}
            className="bg-navy-800 text-white px-4 py-2 rounded hover:bg-navy-900 transition duration-300"
          >
            Agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
