import { techStackData } from '../data';

const TechStack = () => (
  <section id="tech-stack" className="py-10 sm:py-16 scroll-mt-20">
    <h2 className="text-[22px] font-bold leading-tight text-gray-900 dark:text-white">
      My tech stack
    </h2>
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 p-4 mt-4 max-w-5xl mx-auto">
      {techStackData.map((tech) => (
        <div key={tech.name} className="flex flex-col items-center justify-center gap-2 p-4 bg-white/50 dark:bg-surface-dark/60 rounded-xl transition-all duration-300 hover:bg-primary-light/30 dark:hover:bg-surface-dark hover:-translate-y-1 backdrop-blur-sm border border-transparent hover:border-primary/20">
          <img alt={`${tech.name} logo`} className="w-10 h-10 object-contain" src={tech.logo} />
          <p className="text-xs font-medium text-gray-600 dark:text-gray-400">{tech.name}</p>
        </div>
      ))}
    </div>
  </section>
);
export default TechStack;