import NextPageNavigator from "./NextPageNavigator";
import PreviousPageNavigator from "./PreviousPageNavigator";
import { routePath } from "../data/footerRoutePath";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const currentIndex = routePath.indexOf(location.pathname);
  const prevRoute = routePath[currentIndex - 1];
  const nextRoute = routePath[currentIndex + 1];
  const navigate = useNavigate();
  const handlePrev = () => {
    navigate(prevRoute);
  };
  const handleNext = () => {
    navigate(nextRoute);
  };
  return (
    <div className="flex justify-between pt-2 pb-2">
      <PreviousPageNavigator handlePrev={handlePrev} />
      <NextPageNavigator handleNext={handleNext} />
    </div>
  );
};

export default Footer;
