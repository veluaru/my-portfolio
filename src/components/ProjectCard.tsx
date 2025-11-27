
import type { Project } from '../types';
import { ExternalLink, Code2 } from 'lucide-react';

export default function ProjectCard({ project }: { project: Project }) {

    return (
  <div className="flex flex-col gap-4 p-4 bg-white dark:bg-surface-dark rounded-xl border border-gray-200/80 dark:border-surface-dark shadow-sm hover:shadow-lg hover:border-primary-light dark:hover:border-secondary transition-all duration-300 group">
    <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg overflow-hidden relative">
      <img 
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
        src='src\assets\images\MinimalPreview.jpeg'
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
    </div>
    <div className="flex flex-col gap-2 grow">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{project.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {project.tags.map(tag => (
          <span key={tag} className="text-xs font-medium px-2 py-1 bg-primary-light/20 text-primary-dark dark:text-primary-light border border-primary-light/20 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
    <div className="flex items-center gap-4 mt-2 border-t border-gray-100 dark:border-white/5 pt-4">
      <a className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href={project.liveLink}>
        <ExternalLink size={16} /> Live Demo
      </a>
      <a className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href={project.sourceLink}>
        <Code2 size={16} /> Source Code
      </a>
    </div>
  </div>
    )
};