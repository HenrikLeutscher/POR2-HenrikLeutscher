import type { ProjectCardProps } from "../types/ProjectCardProps";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

export default function ProjectSection({
  ProjectData,
}: {
  ProjectData: ProjectCardProps[];
}) {
  return (
    <div className="container max-w-7xl">
      <div className="flex items-center gap-5 mb-5">
        <div className="SectionDivider"></div>
        <h2 className="text-center SectionHeader">Projects</h2>
        <div className="SectionDivider"></div>
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        {ProjectData.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id}>
            <ProjectCard {...project} />
          </Link>
        ))}
      </div>
    </div>
  );
}
