import { Mail } from 'lucide-react';

const Contact = () => (
  <section id="contact" className="py-10 sm:py-16 scroll-mt-20">
    <h2 className="text-[22px] font-bold leading-tight text-gray-900 dark:text-white">
      Contact me
    </h2>
    <div className="p-4 mt-4 max-w-5xl mx-auto">
      <p className="text-base font-normal text-gray-600 dark:text-[#9da6b9]">
        Feel free to reach out to me. I'm open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        <br />
        <br />
        <strong>Angie Castañeda Martinez</strong>
        <br />
        <a href="mailto:veluaru@hotmail.com" className="text-primary hover:underline">veluaru@hotmail.com</a>
        <br />
        Medellín, Colombia
      </p>
    </div>
    <div className='p-4 mt-4 flex flex-row gap-3'>
      <button
        className="flex items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-gray-100 dark:bg-surface-dark text-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
      >
        <img alt={`Github logo`} className="w-6 h-6 object-contain" src='src/assets/images/GithubIcon.svg' />
      </button>
      <button
        className="flex items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-gray-100 dark:bg-surface-dark text-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
      >
        <img alt={`Instagram logo`} className="w-6 h-6 object-contain" src='src/assets/images/InstagramIcon.svg' />
      </button>
      <button
        className="flex items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-gray-100 dark:bg-surface-dark text-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
      >
        <img alt={`Linkedin logo`} className="w-6 h-6 object-contain" src='src/assets/images/LinkedinIcon.svg' />
      </button>
      <button
        className="flex items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-gray-100 dark:bg-surface-dark text-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
      >
        <Mail size={20} color='#6B7280' />
      </button>

    </div>

  </section>
);
export default Contact;