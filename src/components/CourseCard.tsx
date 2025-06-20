import React from 'react';

interface CourseCardProps {
  title: string;
  description: string;
  classes: string;
  stream?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, classes, stream }) => {
  return (
    <div className="rounded-2xl border p-6 shadow-md transition hover:shadow-lg bg-white">
      <h3 className="text-xl font-semibold text-[#2B526E]">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{classes} {stream && ` | ${stream}`}</p>
      <p className="mt-3 text-sm text-gray-700">{description}</p>
      <button className="mt-4 rounded-md bg-[#EC9706] px-4 py-2 text-sm font-medium text-white hover:brightness-110">
        Join Now
      </button>
    </div>
  );
};

export default CourseCard;
