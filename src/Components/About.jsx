import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about bg-gray-900 text-gray-100 py-12 px-6 sm:px-16 lg:px-16 space-y-16">
      {/* Introduction Section */}
        <motion.div
          className="relative bg-gradient-to-tr from-gray-900 via-gray-800 to-black rounded-lg shadow-2xl overflow-hidden p-6 sm:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Background Decorations */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-30 blur-3xl -top-12 -left-12"></div>
            <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full opacity-30 blur-3xl -bottom-12 -right-12"></div>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
            {/* Left: Profile Section */}
            <motion.div
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src="/full.webp"
                alt="Biradar Adinath"
                className="w-40 h-40 sm:w-48 sm:h-48 lg:min-w-52 lg:mt-20 lg:h-56 rounded-full shadow-lg border-4 border-transparent hover:border-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition duration-300"
              />
              
            </motion.div>

            {/* Right: Content Section */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              {/* About Section */}
              <div className="space-y-4">
                <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold text-white tracking-wide">
                  Hi, I'm <span className="text-blue-400">Adinath!</span>
                </h2>
                <p className="mt-3 text-lg text-gray-300">
                  A <span className="text-blue-400 font-semibold">Full-Stack Developer</span>, exploring the synergy of <span className="text-purple-400 font-semibold">AI</span> and <span className="text-pink-400 font-semibold">Data Analytics</span>.
                </p>
                <p className="text-lg sm:text-xl leading-relaxed text-gray-300">
                  I'm passionate about crafting impactful solutions using technology. With expertise in <span className="text-blue-400 font-semibold">web development</span>, I constantly push boundaries by exploring <span className="text-purple-400 font-semibold">Machine Learning</span> and <span className="text-pink-400 font-semibold">Data Analytics</span>.
                </p>
              </div>

              {/* Stats Section */}
              <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0">
                {/* <div className="text-center">
                  <h3 className="text-4xl font-bold text-white">3+</h3>
                  <p className="text-gray-400">Years of Experience</p>
                </div> */}
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-white">10+</h3>
                  <p className="text-gray-400">Completed Projects</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-white">6</h3>
                  <p className="text-gray-400">Technologies Mastered</p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="flex space-x-4">
                <Link
                  to="/portfolio"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-white font-semibold rounded-lg shadow-lg hover:from-blue-400 hover:to-purple-500 transform hover:scale-105 transition duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  Explore My Work
                </Link>
                <motion.a
                  href="https://www.linkedin.com/in/adinath-biradar-aa121b232/"
                  className="px-6 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  Let's Connect
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>



      {/* Animated What I'm Doing Section */}
      <motion.div
        className="space-y-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-300 uppercase tracking-wide">
          What I&apos;m Doing
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              className={`relative bg-gradient-to-r ${activity.gradient} rounded-lg p-4 flex flex-col items-center space-y-4 text-center shadow-lg`}
              whileHover={{ scale: 1.05, rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src={activity.icon}
                alt={activity.title}
                className="w-16 h-16"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
              />
              <h4 className="text-xl sm:text-2xl font-semibold text-white">
                {activity.title}
              </h4>
              <p className="text-gray-200">{activity.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const activities = [
  {
    title: "Computer Engineering",
    description:
      "Pursuing Computer Engineering with a focus on cutting-edge technologies and practical applications.",
    gradient: "from-blue-600 to-indigo-700",
    icon: "/computer.png",
  },
  {
    title: "Web Development",
    description:
      "Building high-quality web applications with modern technologies and frameworks.",
    gradient: "from-teal-500 to-cyan-600",
    icon: "/code.png",
  },
  {
    title: "Learning DSA",
    description:
      "Enhancing algorithmic thinking and problem-solving with Data Structures and Algorithms.",
    gradient: "from-orange-400 to-yellow-500",
    icon: "/dsa.png",
  },
  {
    title: "Communication Skills",
    description:
      "Developing excellent communication skills to collaborate effectively with clients and teams.",
    gradient: "from-purple-600 to-pink-600",
    icon: "/communication.png",
  },
];

export default About;
