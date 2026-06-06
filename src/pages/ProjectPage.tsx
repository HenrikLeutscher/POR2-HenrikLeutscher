import { useParams } from "react-router-dom";
import { ProjectData } from "../data/ProjectData";
import { CopyLinkButton } from "../components/CopyLinkButton";

export default function ProjectPage() {
  const { projectId } = useParams();

  const project = ProjectData.find(
    (project) => project.id === Number(projectId),
  );

  if (!project) {
    return (
      <main className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl rounded-xl border border-gray-700 bg-gray-900 p-8 text-center">
          <h1 className="mb-3 text-2xl font-bold">
            Project could not be found.
          </h1>
          <p>Unfortunately, the requested project could not be found.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-10">
      <article className="mx-auto max-w-5xl overflow-x-hidden rounded-xl border border-gray-700 bg-gray-900 p-8">
        <figure className="w-full">
          <img
            src={project.Media.url}
            alt={project.Media.alt}
            className="w-full h-auto rounded-lg object-cover"
          />

          <figcaption className="mt-2 text-center text-sm text-gray-500">
            {project.Media.caption}
          </figcaption>
        </figure>
        <div className="space-y-8 p-6 sm:p-8">
          <div className="flex flex-col gap-4 border-b border-gray-700 pb-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-xl font-bold text-white sm:text-4xl">
                {project?.title}
              </h1>
              <p className="mt-3 max-w-3xl text-lg leading-relaxed text-gray-300">
                {project?.description}
              </p>
            </div>
          </div>
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">Tech Stack</h2>
            <ul className="flex flex-wrap gap-2">
              {project?.techStack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-gray-600 px-3 py-1 text-sm font-medium text-white"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </section>
        </div>
        <section className="flex flex-col md:flex-row items-center justify-between gap-3 border-t border-gray-700 pt-6 sm:flex-row">
          <div className="flex flex-col md:flex-row gap-3">
            {project.liveLink && (
              <a
                href={project.liveLink}
                className="rounded-lg border border-gray-600 px-5 py-3 text-center font-semibold text-gray-100 transition hover:bg-gray-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live
              </a>
            )}
            {project.repoLink && (
              <a
                href={project.repoLink}
                className="rounded-lg border border-gray-600 px-5 py-3 text-center font-semibold text-gray-100 transition hover:bg-gray-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Repository
              </a>
            )}
          </div>
          <div>
            <CopyLinkButton />
          </div>
        </section>
      </article>
    </main>
  );
}
