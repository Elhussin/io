import React from "react";
import { certificates } from "./data"; // استيراد الشهادات

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Certificates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-6">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={`/images/certi/${certificate.image}` || "/api/placeholder/300/200"}
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
        ))}
      </div>
    </section>
  );
};

export default Certificates;
