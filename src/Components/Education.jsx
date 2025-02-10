import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const timelineData = [
    {
      title: "MIT College Of Railway Engineering And Research, Barshi",
      year: "2021 — 2025",
      degree: "Bachelors in Technology (GPA: 9.13)",
      field: "Computer Science and Engineering",
    },
    {
      title: "Science College ,Nanded",
      year: "2019 — 2021",
      degree: "Higher Secondary School Certificate (Grade: A+)",
      field: "Science (PCM)",
    },
    {
      title: "Vidhya Vardhini High School,Udgir",
      year: "2019",
      degree: "Secondary School Certificate (Grade: A+)",
      field: "Matriculation",
    },
  ];

  return (
    <section className="education bg-gray-900 text-gray-100 py-12 px-6 sm:px-16 lg:px-24 space-y-16">
      {/* Section Title */}
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center text-blue-300 uppercase tracking-wide mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>

      {/* Timeline */}
      <ol className="timeline relative border-l-2 border-blue-500 space-y-12 ">
        {timelineData.map((item, index) => (
          <motion.li
            key={index}
            className="timeline-item relative pl-8 md:pl-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Dot */}
            <div className="timeline-dot absolute left-0 top-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full border-2 border-gray-900"></div>
            {/* Content */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
              <h4 className="text-2xl font-semibold text-white">{item.title}</h4>
              <span className="block text-sm font-medium text-blue-300 mt-1">
                {item.year}
              </span>
              <p className="text-gray-300 mt-3">{item.degree}</p>
              <p className="text-gray-400">{item.field}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
};

export default Education;
