import { BsFillChatTextFill } from "react-icons/bs";
import { useNavigate, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import MobileNavBar from "../pages/MobileNavBar";
import { useState } from "react";
const Navbar = () => {
  const [menueState, setMenuState] = useState(false);
  const navigate = useNavigate();
  const handleClick = (route) => {
    navigate(route);
  };
  const handleMenuChange = () => {
    console.log("Menu Change");
    setMenuState(!menueState);
    console.log("Menu State :", menueState);
  };
  return (
    <>
      <nav className="flex justify-between">
        <p className="text-black font-bold text-xl">
          Naga<span className="text-blue-800 text-2xl">.</span>
        </p>

        <ul className="hidden sm:flex list-none gap-6 font-semibold text-gray-900 text-lg">
          <li
            key="home"
            className="hover:text-blue-600 transition cursor-pointer"
            onClick={() => handleClick("/home")}
          >
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-gray-900"
              }
            >
              Home
            </NavLink>
          </li>
          <li
            key="project"
            className="hover:text-blue-600 transition cursor-pointer"
            onClick={() => handleClick("/project")}
          >
            <NavLink
              to="/project"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-gray-900"
              }
            >
              Projects
            </NavLink>
          </li>
          <li
            key="about"
            className="hover:text-blue-600 transition cursor-pointer"
            onClick={() => handleClick("/about")}
          >
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-gray-900"
              }
            >
              About
            </NavLink>
          </li>
        </ul>
        <p
          className=" hidden sm:flex text-3xl cursor-pointer"
          onClick={() => handleClick("/contact")}
        >
          <BsFillChatTextFill />
        </p>
        <div
          className="flex items-center sm:hidden md:hidden lg:hidden"
          onClick={handleMenuChange}
        >
          <span className={menueState ? "hidden" : "block text-3xl"}>
            <GiHamburgerMenu />
          </span>
          <span className={menueState ? "block text-3xl" : "hidden"}>
            <IoCloseSharp />
          </span>
        </div>
      </nav>

      <MobileNavBar menueState={menueState} toggleState={setMenuState} />
    </>
  );
};

export default Navbar;
