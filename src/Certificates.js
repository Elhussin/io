import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Award, Calendar } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Certificates = ({ certificates = [] }) => {
  return (
    <section id="certificates" className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Professional Certifications
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-center max-w-2xl">
            Recognition of continuous learning and expertise in software development and optics.
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{ 
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active bg-blue-600',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {certificates.map((certificate, index) => (
              <SwiperSlide key={index} className="h-full">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full flex flex-col group overflow-hidden">
                  
                  {/* Image Container with Overlay */}
                  <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-gray-700">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/certi/${certificate.image}` || "/api/placeholder/400/300"}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1570616969692-5a005f6a903c?auto=format&fit=crop&q=80&w=1000"; // Fallback placeholder
                      }}
                      alt={certificate.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-60"></div>
                     <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/90 text-white text-xs font-medium backdrop-blur-sm">
                          <Award size={12} />
                          Certification
                        </span>
                     </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 min-h-[3.5rem]">
                      {certificate.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                      {certificate.description || "Official certification verifying expertise in this domain."}
                    </p>

                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center text-gray-500 dark:text-gray-400 text-xs">
                      <Calendar size={14} className="mr-1.5" />
                      <span>Issued Date</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Helper - Optional: Add custom arrow buttons if needed, or stick to Swiper defaults which are now cleaner */}
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #cbd5e1;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background-color: #2563eb;
          width: 20px;
          border-radius: 4px;
          transition: all 0.3s;
        }
        .dark .swiper-pagination-bullet {
          background-color: #475569;
        }
        .dark .swiper-pagination-bullet-active {
          background-color: #3b82f6;
        }
      `}</style>
    </section>
  );
};

export default Certificates;