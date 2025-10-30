import { FaLocationDot } from "react-icons/fa6";
import { IoPhonePortrait } from "react-icons/io5";
import { MdOutlineComputer } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import SocialMediaBanner from "./SocialMediaBanner";
const ContactDetails = () => {
  return (
    // "p-5 md:border-none md:w-full lg:w-1/2 lg:border-r lg:border-gray-500"
    <section className="p-5 md:w-full lg:w-1/2 lg:border-r lg:border-gray-500">
      <h1 className="text-blue-600 text-3xl font-bold lg:text-4xl md:text-4xl">
        Contact Details
      </h1>
      <div className="flex items-center mt-6 text-xl font-bold text-gray-700">
        <span>
          <MdOutlineComputer />
        </span>
        <span className="ml-2">Frontend Developer</span>
      </div>
      <div className="flex items-center text-xl font-bold mt-2 text-gray-700">
        <span>
          <FaLocationDot />
        </span>
        <span className="ml-2">Namakkal</span>
      </div>
      <div className="flex items-center text-xl font-bold mt-2 text-gray-700">
        <span>
          <IoPhonePortrait />
        </span>
        <span className="ml-2">+919500960553</span>
      </div>
      <div className="flex items-center text-xl font-bold mt-2 text-gray-700">
        <span>
          <MdEmail />
        </span>
        <span className="ml-2">nagamanickam@yahoo.com</span>
      </div>
      <div>
        <SocialMediaBanner />
        <p className=" text-gray-700 text-lg max-w-xl mx-auto mt-4 leading-relaxed md:mx-0">
          Feel free t
          <span className="text-blue-600 font-semibold">contact me</span>{" "}
          through the provided details or form — I’ll get back to you in just a
          few hours!
        </p>
      </div>
    </section>
  );
};

export default ContactDetails;
