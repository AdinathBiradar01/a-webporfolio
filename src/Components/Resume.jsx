import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

const Resume = () => {
  return (
    <section className="resume bg-gray-900 text-gray-100 p-8 space-y-16">
      <Experience />

      <Skills />

      <Education />
    </section>
  );
};

export default Resume;