
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
const Certificates = ({ certificates=[]}) => {
  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Certificates</h2>
      <div className="p-6">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          {certificates.map((certificate, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <img
                  src={`${process.env.PUBLIC_URL}/images/certi/${certificate.image}` || "/api/placeholder/300/200"}
                  alt={certificate.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {certificate.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {certificate.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Certificates;