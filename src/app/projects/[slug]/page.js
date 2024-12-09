// app/[slug]/page.js

import { getRepoData, getRepoReadme } from "@/server-action/github";
import { getProject } from "@/server-action/project";
import ProjectTabs from "./ProjectTabs";
import { retrieveGitHubRepoInfo } from "@/utils/utils";

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = await getProject(slug);

  const readmeData = await getRepoReadme(project.github);

  const repoData = await getRepoData(project.github);

  const context = await retrieveGitHubRepoInfo(project.github);

  return (
    <ProjectTabs
      project={project}
      readmeData={readmeData}
      repoData={repoData.data}
      context={context}
    />
  );
}
