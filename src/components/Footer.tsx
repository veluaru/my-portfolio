import InstagramIcon from '../assets/images/InstagramIcon.svg';
import GithubIcon from '../assets/images/GithubIcon.svg';
import LinkedinIcon from '../assets/images/LinkedinIcon.svg';

const Footer = () => (
  <footer className="mt-20 border-t border-gray-200 dark:border-surface-dark bg-white dark:bg-background-dark">
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-10 py-8 max-w-[960px] mx-auto">
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
        <p className="text-sm text-gray-600 dark:text-gray-400">© 2025 Angie Castañeda. All rights reserved.</p>
        <span className="hidden sm:inline text-gray-300">|</span>
        <p className="text-sm text-gray-600 dark:text-gray-400">veluaru@hotmail.com</p>
      </div>
      <div className="flex gap-4">
      <a className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="https://www.instagram.com/veluaru/">
        <img alt={`Instagram logo`} className="w-6 h-6 object-contain" src={InstagramIcon} />
      </a>
      <a className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="https://github.com/veluaru">
        <img alt={`Github logo`} className="w-6 h-6 object-contain" src={GithubIcon} />
      </a>
      <a className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="https://www.linkedin.com/in/angie-castañeda-martinez">
        <img alt={`Linkedin logo`} className="w-6 h-6 object-contain" src={LinkedinIcon} />
      </a>
      </div>
    </div>
  </footer>
);
export default Footer;
