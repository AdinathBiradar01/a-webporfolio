import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Portfolio = () => {
  const projects = [
    
   // Add more projects here
    {
      title: "Emotion Recognition Using Facial Analysis",
      description:
        "This project focuses on recognizing human emotions based on facial expressions using Computer Vision.",
      image: "/emotions.jpeg", // Replace with your project image URL
      link: "https://github.com/AdinathBiradar01/Emotion-detection",
    },
    {
      title: "Handwritten Digits Recognition",
      description:
        "Handwritten digit recognition using MNIST dataset is a major project made with the help of Neural Network.",
      image: "/digit.png", // Replace with your project image URL
      link: "https://github.com/RohanGarad/Handwritten-Digits-Recognition",
    },
    {
      title: "OTP Verification System",
      description:
        "This project focuses on The OTP Verification System is a simple application that sends OTP to the user's registered mobile number.",
      image: "/otp.png", // Replace with your project image URL
      link: "https://github.com/AdinathBiradar01/OTP",
    }

  ];

  return (
    <section className="portfolio bg-gray-900 text-gray-100 py-12 px-4 sm:px-8 lg:px-16">
      {/* Section Title */}
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center text-purple-300 uppercase tracking-wide mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative group bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:shadow-xl hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Project Image */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 sm:h-64 object-cover transition-all duration-300 group-hover:opacity-80"
              />
              {/* Hover Overlay */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-3xl opacity-0 group-hover:opacity-100 transition duration-300"
              >
                <FaGithub />
              </a>
            </div>

            {/* Project Details */}
            <div className="p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <div className="text-sm sm:text-base text-gray-300 mb-4">
                {project.description}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 transition duration-300"
              >
                View on GitHub <FaGithub className="inline-block ml-1" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
