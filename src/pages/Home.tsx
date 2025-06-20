import React from 'react';
import { ArrowRight} from 'lucide-react';
import Hero from '../components/Hero';
import StatsCounter from '../components/StatsCounter';
import FeaturedServices from '../components/FeaturedServices';
import TestimonialSlider from '../components/TestimonialSlider';
import WhyChooseUs from '../components/WhyChooseUs';
import CallToAction from '../components/CallToAction';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="font-work">
      <Hero />

      <motion.section 
        className="py-8 bg-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: false }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deeproyal">Our Practice Areas</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4 mb-6"></div>
            <p className="text-deeproyal max-w-2xl mx-auto">
              Our experienced attorneys provide expert legal representation across a wide range of practice areas.
            </p>
          </motion.div>
          
          <FeaturedServices />
          
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1.5, delay: 0.7 }}
          >
            <Link to="/practise areas" className="inline-flex items-center text-primary font-medium hover:text-deeproyal/80 transition-colors"
            >
              View All Practice Areas
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <StatsCounter />
      
      <WhyChooseUs />
      
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: false }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deeproyal">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4 mb-6"></div>
            <p className="text-deeproyal max-w-2xl mx-auto">
              We take pride in delivering exceptional legal services that exceed our clients' expectations.
            </p>
            <div className="max-w-5xl mx-auto text-center mb-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                {[
                  {
                    icon: "Google Reviews",
                    rating: "★★★★★",
                    logo: "https://static.vecteezy.com/system/resources/previews/011/598/471/original/google-logo-icon-illustration-free-vector.jpg",
                    link: "https://maps.app.goo.gl/CL2eh6WhNGqZuzxS8",
                    reviewcount:'18+ reviews',
                  },
                  {
                    icon: "Justdial",
                    rating: "★★★★★",
                    logo: "https://cdn.pnggallery.com/wp-content/uploads/justdial-jd-logo-04.png",
                    link: "https://www.justdial.com/Kurukshetra/Adv-Himanshu-Aggarwal-Near-District-Court-Kurukshetra-H-O/9999P1744-1744-220411194014-Z7M1_BZDET",
                    reviewcount:'1+ reviews',
                  },
                  {
                    icon: "Pathlegal",
                    rating: "★★★★★",
                    logo: "https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/3c/b8/5b/3cb85b03-9438-e295-8d4f-91da664fafbc/source/512x512bb.jpg",
                    link: "https://www.pathlegal.in/Advocate-Himanshu-Aggarwal-Kurukshetra/L000000000633267.htm",
                    reviewcount:'1+ reviews',
                  },
                  {
                    icon: "LawRato",
                    rating: "★★★★★",
                    logo: "https://play-lh.googleusercontent.com/FrfTAo5rpKvRgubrkpyEtkZeI8epH6IERDroFZIrlOre-gUqHmGUgL2zmAcL4eF-kB4",
                    link: "https://lawrato.com/advocate-himanshu-aggarwal",
                    reviewcount:'2+ reviews',
                  },
                ].map((review, index) => (
                  <a
                    key={index}
                    href={review.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full max-w-sm h-20 bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    {/* Logo Section - Left */}
                    <div className="w-[30%] flex items-center justify-center bg-white">
                      <img
                        src={review.logo}
                        alt={review.icon}
                        className="h-full w-auto object-contain p-2"
                      />
                    </div>

                    {/* Review Info Section - Right */}
                    <div className="w-[70%] flex flex-col justify-center px-4">
                      <div className="flex justify-start space-x-1 mb-1">
                        <p className="text-2xl text-gold-700" style={{padding:'10px'}}>{review.rating}</p>
                      </div>
                      {/* <div className="flex justify-start space-x-1 mb-1">
                        <p className="text-sm text-gray-700 underline">{review.reviewcount}</p>
                        </div> */}
                    </div>
                  </a>


                ))}
              </div>
            </div>
          </motion.div>
          
          <TestimonialSlider />
        </div>
      </motion.section>
      
      <CallToAction />
    </div>
  );
};

export default Home;
