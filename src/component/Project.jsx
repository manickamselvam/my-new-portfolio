import { useState } from "react";
import PersonalProject from "./PersonalProject";
import WorkPlaceProjects from "./WorkPlaceProjects";

const Project = () => {
  const [tab, setTab] = useState("Workplace");
  const switchToWorkplace = () => {
    setTab("Workplace");
  };
  const switchToPersonal = () => {
    setTab("Personal");
  };

  return (
    <div>
      <nav className="mt-5 mb-5">
        <button
          className="mr-2 p-2 rounded-md border border-black text-gray-900 font-medium"
          onClick={switchToWorkplace}
        >
          Workplace Achievement {tab === "Workplace" ? "✔" : ""}
        </button>
        <button
          className="mt-3 p-2 rounded-md border border-black text-gray-900 font-medium sm:mt-0 md:mt-0 lg:mt-0"
          onClick={switchToPersonal}
        >
          Personal Initiatives {tab === "Personal" ? "✔" : ""}
        </button>
      </nav>

      <WorkPlaceProjects tab={tab} />
      <PersonalProject tab={tab} />
    </div>
  );
};

export default Project;
