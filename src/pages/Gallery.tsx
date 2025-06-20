import React from 'react';

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/5212325/pexels-photo-5212325.jpeg',
    alt: 'Classroom Teaching Session',
  },
  {
    src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    alt: 'Online Interactive Class',
  },
  {
    src: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg',
    alt: 'Student Group Discussion',
  },
  {
    src: 'https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg',
    alt: 'Teacher Helping Students',
  },
  {
    src: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg',
    alt: 'Award Distribution',
  },
  {
    src: 'https://images.pexels.com/photos/4145193/pexels-photo-4145193.jpeg',
    alt: 'Whiteboard Explanation',
  },
];

const Gallery = () => {
  return (
    <div className="pt-24 pb-16 px-4 md:px-10 font-mont bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-[#2B526E] text-center mb-10">Our Classroom Moments</h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300 bg-white"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="p-3 text-center text-sm text-[#2B526E] font-medium">
              {image.alt}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
