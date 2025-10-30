import { FcAbout } from "react-icons/fc";
const AboutMe = () => {
  return (
    <>
      <div className="flex items-center m-5 text-3xl font-bold text-black">
        <span>About Me</span>
        <span className="ml-2">
          <FcAbout />
        </span>
      </div>
      <p className="ml-5 text-lg font-semibold text-gray-700">
        Hello! I’m a passionate <strong>JavaScript Developer</strong> with{" "}
        <strong>3.4 years of hands-on experience</strong> in building dynamic,
        user-friendly web applications. Over the years, I’ve worked extensively
        with <strong>Vanilla JavaScript</strong>, developing a strong
        understanding of core web technologies, performance optimization, and
        responsive design principles. I have designed and developed several
        projects from scratch — focusing on clean, maintainable code and
        intuitive user experiences. Through this journey, I’ve gained deep
        insights into DOM manipulation, asynchronous programming, and API
        integration. Currently, I’m expanding my expertise into{" "}
        <strong>React.js</strong>, driven by a strong interest in creating
        modern, scalable, and component-based front-end architectures. I’m
        excited to apply my JavaScript foundation to React projects, explore new
        tools in the ecosystem, and contribute to impactful web applications.
        I’m actively looking for opportunities where I can collaborate with
        creative teams, continue learning, and grow as a front-end developer
        while delivering high-quality products.
      </p>
    </>
  );
};

export default AboutMe;
