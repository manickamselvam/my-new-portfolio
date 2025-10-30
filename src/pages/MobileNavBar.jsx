import { useNavigate } from "react-router-dom";

const MobileNavBar = ({ menueState, toggleState }) => {
  const navigate = useNavigate();
  const handleClick = (route) => {
    navigate(route);
    toggleState(false);
  };
  return (
    <div
      className={
        menueState
          ? "flex items-center flex-col font-semibold bg-blue-500/20 mt-2"
          : "hidden"
      }
    >
      <p onClick={() => handleClick("/home")}>Home</p>
      <p onClick={() => handleClick("/project")}>Project</p>
      <p onClick={() => handleClick("/about")}>About</p>
      <p onClick={() => handleClick("/contact")}>Contact</p>
    </div>
  );
};

export default MobileNavBar;
