import { PiBuildingOfficeFill } from "react-icons/pi";
import { FiExternalLink } from "react-icons/fi";
const Experience = () => {
  return (
    <>
      <div className="flex items-center m-5 text-3xl font-bold text-black">
        <span>Experience</span>
        <span className="ml-2 text-blue-600">
          <PiBuildingOfficeFill />
        </span>
      </div>
      <div className="m-5">
        <div className="flex items-center">
          <img className="h-8" src="/images/konnectify.svg" />
          <a
            href="https://www.konnectify.co/"
            target="_blank"
            className="text-2xl ml-2 hover:text-blue-600"
          >
            <FiExternalLink />
          </a>
        </div>
        <p className="ml-2 mt-2 text-base text-gray-700 font-semibold">
          Full-time - 3 years 4 months
        </p>
        <p className="ml-2 mt-2 text-base text-gray-700 font-semibold">
          Software Developer
        </p>
        <p className="ml-2 mt-2 text-base text-gray-700 font-semibold">
          May 2022 - Aug 2024
        </p>
      </div>
    </>
  );
};

export default Experience;
