import { GrLinkPrevious } from "react-icons/gr";
const PreviousPageNavigator = ({ handlePrev }) => {
  return (
    <div
      className="text-xl border h-12 w-12 rounded-full flex justify-center items-center hover:bg-blue-600 transition hover:text-white"
      onClick={handlePrev}
    >
      <GrLinkPrevious />
    </div>
  );
};

export default PreviousPageNavigator;
