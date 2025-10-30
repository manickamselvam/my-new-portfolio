import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
const WorkPlaceProjects = ({ tab }) => {
  return (
    <div className={tab === "Workplace" ? "block " : "hidden"}>
      <section className="mt-4 grid grid-cols-1 place-items-center gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard projects={projects} />
      </section>
    </div>
  );
};

export default WorkPlaceProjects;
