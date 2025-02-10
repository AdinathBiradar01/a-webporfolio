import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Import icons for social links

const Contact = () => (
  <section className="contact bg-gradient-to-r from-gray-900 to-black text-gray-100 p-4 sm:p-8 h-full flex flex-col justify-center">
    {/* Title Section */}
    <div className="max-w-4xl mx-auto text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
        Get In Touch Buddies
      </h2>
      <p className="text-sm sm:text-lg text-gray-300">
        Feel free to reach out! I am always open to discussing new opportunities, collaborations, or just a casual chat.
      </p>
    </div>

    {/* Contact Form Section */}
    <div className="flex justify-center">
      <form className="space-y-4 sm:space-y-6 max-w-md w-full">
        {/* Full Name */}
        <div>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 sm:p-4 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
            required
          />
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 sm:p-4 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
            required
          />
        </div>

        {/* Message */}
        <div>
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-3 sm:p-4 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-purple-500 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>

    {/* Additional Contact Information */}
    <div className="mt-8 sm:mt-12 text-center">
      <h3 className="text-lg sm:text-2xl font-semibold text-blue-300">Connect with Me</h3>
      <div className="flex justify-center mt-4 space-x-6">
        {/* GitHub */}
        <a
          href="https://github.com/AdinathBiradar01"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition duration-300"
        >
          <FaGithub size={30} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/adinath-biradar-aa121b232/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition duration-300"
        >
          <FaLinkedin size={30} />
        </a>

        {/* Twitter */}
        <a
          href="https://x.com/Bir33035Adinath"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition duration-300"
        >
          <FaTwitter size={30} />
        </a>
      </div>
    </div>

    {/* Optional Footer */}
    <footer className="mt-8 sm:mt-12 text-center text-gray-400 text-xs sm:text-sm">
      <p>© 2024 Biradar Adinath | All Rights Reserved</p>
    </footer>
  </section>
);

export default Contact;
