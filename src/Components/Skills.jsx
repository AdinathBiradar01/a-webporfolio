import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "Web Design", percentage: 80, gradient: "from-purple-500 to-blue-600" },
    { name: "Core Java", percentage: 70, gradient: "from-green-500 to-teal-600" },
    { name: "C++", percentage: 80, gradient: "from-indigo-500 to-pink-600" },
    { name: "React JS", percentage: 70, gradient: "from-cyan-500 to-blue-600" },
    { name: "SQL", percentage: 80, gradient: "from-yellow-500 to-orange-600" },
    { name: "MongoDB", percentage: 60, gradient: "from-blue-500 to-indigo-600" },
    { name: "Node JS", percentage: 75, gradient: "from-green-500 to-lime-600" },
    { name: "Machine Learning", percentage: 75, gradient: "from-teal-500 to-green-600" },
    { name: "Python", percentage: 70, gradient: "from-orange-500 to-red-600" },
  ];

  return (
    <section className="skills bg-gray-900 text-gray-100 py-12 px-6 sm:px-12 lg:px-16 space-y-16">
      {/* Section Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center text-purple-300 uppercase tracking-wide"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={`bg-gradient-to-r ${skill.gradient} p-6 rounded-lg text-white text-center shadow-xl transform transition-all`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            <h3 className="text-2xl font-semibold">{skill.name}</h3>
            <div className="mt-6">
              {/* Skill Percentage */}
              <span
                className="block text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full bg-opacity-30"
                style={{
                  backgroundColor: skill.gradient.split(" ")[1],
                }}
              >
                {skill.percentage}%
              </span>

              {/* Fixed Progress Bar */}
              <div className="mt-4 w-full bg-gray-200 rounded-full h-3 relative border border-blue">
                {/* Inner Progress Bar */}
                <div
                  className="absolute top-0 left-0 h-full rounded-full"
                  style={{
                    width: `${skill.percentage}%`,
                    backgroundImage: `linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))`,
                  }}
                ></div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
