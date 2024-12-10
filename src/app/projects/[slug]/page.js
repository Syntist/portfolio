
import { getRepoData, getRepoReadme } from "@/server-action/github";
import { getProject } from "@/server-action/project";
import ProjectTabs from "./ProjectTabs";

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = await getProject(slug);

  const repoData = await getRepoData(project.github);

  return (
    <ProjectTabs
      project={project}
      repoData={repoData.data}
    />
  );
}
