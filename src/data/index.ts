import type { Project, TechItem } from '../types';
import MinimalPreview from '../assets/images/MinimalPreview.jpeg';
import WhereInTheWorldPreview from '../assets/images/WhereInTheWorldPreview.jpeg';
import PokedexPreview from '../assets/images/PokedexPreview.jpeg';

export const techStackData: TechItem[] = [
  { name: "React", logo: "https://img.icons8.com/plasticine/100/react.png" },
  { name: "Vue", logo: "https://img.icons8.com/color/48/vue-js.png" },
  { name: "JavaScript", logo: "https://img.icons8.com/color/48/javascript--v1.png" },
  { name: "HTML", logo: "https://img.icons8.com/color/48/html-5--v1.png" },
  { name: "CSS", logo: "https://img.icons8.com/color/48/css3.png" },
  { name: "SASS", logo: "https://img.icons8.com/color/48/sass.png" },
  { name: "Tailwind", logo: "https://img.icons8.com/color/48/tailwind_css.png" },
  { name: "Figma", logo: "https://img.icons8.com/color/48/figma--v1.png" },
  { name: "Git", logo: "https://img.icons8.com/color/48/git.png" },
];

export const projectsListData: Project[] = [
  {
    id: 1,
    title: "Minimal Shop",
    description: "Experience seamless online shopping with this elegant and fully responsive e-commerce storefront. Browse products, view details, and enjoy a minimalist design.",
    tags: ["Vue.js 3", "Javascript", "SASS"],
    image: MinimalPreview,
    liveLink: "https://veluaru.github.io/Shop-vue-3/#/",
    sourceLink: "https://github.com/veluaru/Shop-vue-3"
  },
  {
    id: 2,
    title: "Pokedex",
    description: "Gotta catch 'em all! This Pokedex application lets you browse and discover your favorite Pokemon, demonstrating API integration and dynamic data display.",
    tags: ["Vue.js 3", "Javascript", "SASS"],
    image: PokedexPreview,
    liveLink: "https://veluaru.github.io/favorite-pokemon-vue-3/",
    sourceLink: "https://github.com/veluaru/favorite-pokemon-vue-3"
  },
  {
    id: 3,
    title: "Where in the world?",
    description: "Explore the globe from your browser! This application allows you to search for any country, view its details, and switch between dark and light modes for a comfortable viewing experience.",
    tags: ["React", "Next.js", "Typescript", "Tailwind CSS"],
    image: WhereInTheWorldPreview,
    liveLink: "https://veluaru.github.io/countries-nextjs/",
    sourceLink: "https://github.com/veluaru/countries-nextjs"
  },
  {
    id: 4,
    title: "TuShop",
    description: "Your personal online marketplace. 'TuShop' is a feature-rich e-commerce site with product browsing, a functional shopping cart, and detailed product views.",
    tags: ["Vue.js", "Nuxt.js", "Javascriot", "SASS"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrirbdmYkz0tNgkEu7o6-IQTPyWsqYfhdyFBeWiOTEYwBvKAaC0RKyU0dJm0UhGsFvCK9C0VhfxUyxQMRTr8Zi8_MHxMqX-JXBNWt-VOKSVEJFeThLmmgf1-7KOB8R5InRuMJudcn4Frfa1NX8FN99uGrqNaeyH4B5upr-VuPLSfddgLR5X8dcTUa8oG2uh4t65KWUa-woba4IELrzqjetdNzop4pu-0pbRNoeHNmm8y-MZ-FA0Ww2T4H5LjtjVpv1iJ529lKnFHk",
    liveLink: "",
    sourceLink: "https://github.com/veluaru/store-nuxt"
  }
];