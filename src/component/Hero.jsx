import { useNavigate } from "react-router-dom";
import { hero } from "../data/heroData";
const Hero = () => {
  const navigate = useNavigate();
  const getInTouch = () => {
    navigate("/contact");
  };
  const browseProject = () => {
    navigate("/project");
  };
  return (
    <section className="mt-24 flex flex-col justify-between sm:flex-col md:flex-col lg:flex-row">
      <div className="sm:w-full md:w-full lg:w-1/2">
        <span className="text-gray-700 text-xl">Hey, I'm {hero.name} 👋🏻</span>
        <br />
        <span className="text-6xl font-extrabold">
          <span className="text-blue-600">{hero.titleArray[0]}</span>
          {hero.titleArray[1]}
        </span>
        <br />
        <span className="text-6xl font-extrabold">{hero.role}</span>
        <p className="pt-5 text-gray-700 text-xl">{hero.description}</p>
        <nav className="mt-6">
          <button
            className="bg-blue-600 p-2 mr-4 rounded-md text-white font-medium"
            onClick={getInTouch}
          >
            Get In Touch
          </button>
          <button
            className="p-2 rounded-md border border-black text-gray-900 font-medium hover:bg-black transition hover:text-white"
            onClick={browseProject}
          >
            Browse Project
          </button>
        </nav>
      </div>
      <div className="mt-14 sm:mt-14 md:mt-14 flex justify-end lg:mt-0">
        <img
          className="w-80 h-80 rounded-full border border-blue-500 p-10 md:w-96 md:h-96 lg:h-96 lg:w-96"
          src="/images/my-profile-photo.jpg"
          alt="profile-image"
        />
      </div>
    </section>
  );
};

export default Hero;
