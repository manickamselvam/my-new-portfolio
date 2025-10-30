import { GrLinkNext } from "react-icons/gr";
const NextPageNavigator = ({ handleNext }) => {
  return (
    <div
      className="text-xl border h-12 w-12 rounded-full flex justify-center items-center hover:bg-blue-600 transition hover:text-white"
      onClick={handleNext}
    >
      <GrLinkNext />
    </div>
  );
};

export default NextPageNavigator;
