import { GiSkills } from "react-icons/gi";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
const Skills = () => {
  return (
    <>
      <div className="flex items-center m-5 text-3xl font-bold text-black">
        Skils
        <span className="text-gray-500 ml-2">
          <GiSkills />
        </span>
      </div>
      <div className="m-5 flex flex-wrap gap-2">
        <span className="bg-blue-100 text-blue-700 text-lg font-medium px-3 py-1 rounded-full flex items-center">
          <span className="mr-2">React.js</span>
          <FaReact />
        </span>
        <span className="bg-green-100 text-green-700 text-lg font-medium px-3 py-1 rounded-full flex items-center">
          <span className="mr-2">Javascript</span>
          <IoLogoJavascript />
        </span>
        <span className="bg-yellow-100 text-yellow-700 text-lg font-medium px-3 py-1 rounded-full flex items-center">
          <span className="mr-2">Css</span>
          <FaCss3Alt />
        </span>
        <span className="bg-purple-100 text-purple-700 text-lg font-medium px-3 py-1 rounded-full flex items-center">
          <span className="mr-2">Html</span>
          <FaHtml5 />
        </span>
      </div>
    </>
  );
};

export default Skills;
