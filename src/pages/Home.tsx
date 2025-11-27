import Hero from '../sections/Hero';
import About from '../sections/About.tsx';
import TechStack from '../sections/TechStack.tsx';
import ProjectsGrid from '../sections/ProjectsGrid';
import Contact from '../sections/Contact.tsx';

const Home = () => {
  return (
    <div className="w-full max-w-[960px] px-4 mx-auto">
      <Hero />
      <About />
      <TechStack />
      <ProjectsGrid />
      <Contact />
    </div>
  );
};
export default Home;