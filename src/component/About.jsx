import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Skills from "./Skills";

const About = () => {
  return (
    <div>
      <hr className="mt-6"></hr>
      <AboutMe />
      <hr className="mt-6"></hr>
      <Skills />
      <hr className="mt-6"></hr>
      <Experience />
    </div>
  );
};

export default About;
