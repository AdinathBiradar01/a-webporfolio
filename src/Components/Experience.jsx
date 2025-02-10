function Experience() {
  return (
    <div className="experience space-y-8 px-4 sm:px-8">
      {/* Experience Section Heading */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-green-300 mb-6 sm:mb-8 text-center uppercase">
        Experience
      </h2>

      {/* Experience Item 1 */}
      <div className="flex flex-col sm:flex-row items-start sm:space-x-6 space-y-4 sm:space-y-0">
        {/* Icon */}
        <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-4 rounded-lg text-white w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto sm:mx-0">
          <img
            src="/briefcase.png"
            alt="Experience Icon"
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
        </div>
        {/* Description */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-semibold">Internship on AI</h3>
          <p className="text-gray-300">AICTE - CSR initiative of Microsoft</p>
          <p className="text-gray-400">Nov-Dec 2024</p>
          <p className="text-gray-400 mt-2">
            Focused on Artificial Intelligence (AI), aimed at enhancing skills
            in AI technologies and their applications in transformative
            learning.
          </p>
        </div>
      </div>

      {/* Experience Item 2 */}
      <div className="flex flex-col sm:flex-row items-start sm:space-x-6 space-y-4 sm:space-y-0">
        {/* Icon */}
        <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-4 rounded-lg text-white w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto sm:mx-0">
          <img
            src="/laptop.png"
            alt="Experience Icon"
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
        </div>
        {/* Description */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-semibold">Web Development Intern</h3>
          <p className="text-gray-300">YBI Foundation Delhi</p>
          <p className="text-gray-400">jan 24 - june  24</p>
          <p className="text-gray-400 mt-2">
            Developed responsive, user-friendly interfaces using HTML, CSS,
            and JavaScript. <br />
            Assisted with developing and maintaining server-side logic using
            Node.js and Express, ensuring efficient performance.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
