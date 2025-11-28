import { Sun, Moon, Code2 } from 'lucide-react';
import { usePortfolioStore } from '../store/usePortfolioStore';

const Header = () => {
  const { isDarkMode, toggleTheme } = usePortfolioStore();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-surface-dark bg-background-light/80 dark:bg-background-dark/80 px-4 sm:px-10 py-3">
      <div className="flex items-center gap-4">
        <div className="text-primary size-7 flex items-center justify-center">
          <Code2 className="w-full h-full" />
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white">Angie Castañeda</h2>
      </div>

      <div className="flex flex-1 justify-end items-center gap-4 sm:gap-8">
        <nav className="hidden sm:flex items-center gap-9">
          <button onClick={() => scrollToSection('hero')} className="text-sm font-medium leading-normal text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-sm font-medium leading-normal text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">About</button>
          <button onClick={() => scrollToSection('tech-stack')} className="text-sm font-medium leading-normal text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Tech stack</button>
          <button onClick={() => scrollToSection('projects')} className="text-sm font-medium leading-normal text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Projects</button>
          <button onClick={() => scrollToSection('contact')} className="text-sm font-medium leading-normal text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Contact</button>
        </nav>

        <div className="flex gap-2">
          <a className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-gray-100 dark:bg-surface-dark text-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}

            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;