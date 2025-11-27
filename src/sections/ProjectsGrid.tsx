import { projectsListData } from '../data';
import ProjectCard from '../components/ProjectCard';

const ProjectsGrid = () => (
  <section id="projects" className="py-10 sm:py-16 scroll-mt-20">
    <h2 className="text-[22px] font-bold leading-tight text-gray-900 dark:text-white">
      Featured Projects
    </h2>
    <div className="flex items-center justify-end px-4 pb-6 max-w-[960px] mx-auto">
        <a href="#" className="text-primary text-sm font-medium hover:underline">View All</a>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 max-w-[960px] mx-auto">
      {projectsListData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </section>
);
export default ProjectsGrid;