import type { ProjectCardProps } from "../types/ProjectCardProps";

export default function ProjectCard(ProjectData: ProjectCardProps) {
  return (
    <div className="ProjectCard">
      <img
        src={ProjectData.Media.url}
        alt={ProjectData.Media.alt}
        className="w-75 h-auto object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-bold">{ProjectData.title}</h3>
      <p className="text-gray-300 line-clamp-2">
        {ProjectData.teaserDescription}
      </p>
      <div className="pt-5 flex flex-col gap-2">
        <h3 className="text-lg font-semibold">Tech Stack</h3>
        <p className="text-gray-300">{ProjectData.techStack.join(", ")}</p>
      </div>
    </div>
  );
}
