
const Hero = () => (
  <section id="home" className="@container py-10 sm:py-20">
    <div className="flex flex-col-reverse gap-8 px-4 lg:flex-row lg:items-center lg:gap-12">
      <div className="flex flex-col gap-6 text-center lg:text-left lg:flex-1">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-gray-900 dark:text-white sm:text-5xl">
            Hello World!<br></br><span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">I'm Angie Castañeda</span>
          </h1>
          <h2 className="text-base font-normal leading-normal text-gray-600 dark:text-[#9da6b9] max-w-xl mx-auto lg:mx-0">
            Passionate about building magical, user-friendly web experiences that bring ideas to life using modern web technologies.
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 hover:-translate-y-0.5">
            <span className="truncate">View My Work</span>
          </button>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-gray-100 dark:bg-surface-dark text-gray-800 dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-200 dark:hover:bg-opacity-80 transition-colors">
            <span className="truncate">Get In Touch</span>
          </button>
        </div>
      </div>
      <div 
        className="w-48 h-48 sm:w-60 sm:h-60 mx-auto lg:w-80 lg:h-80 shrink-0 bg-center bg-no-repeat bg-cover rounded-full border-4 border-white dark:border-surface-dark shadow-2xl" 
        style={{ backgroundImage: 'url("src/assets/images/HeroPhoto.jpg")' }}
      ></div>
    </div>
  </section>
);
export default Hero;