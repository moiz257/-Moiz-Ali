import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiNpm } from "react-icons/si";

import image1 from "../Assets/project1.jpg";
import image2 from "../Assets/project2.jpg";
import image3 from "../Assets/project3.jpg";
import image4 from "../Assets/project4.jpg";
import image5 from "../Assets/project5.jpg";
import image6 from "../Assets/project6.jpg";
import image7 from "../Assets/project7.jpg";
import image8 from "../Assets/project8.jpg";
import ali from "../Assets/ali.jpg";
import iqra from "../Assets/iqra.png";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "MOIZ ALI KAMALSHAH",
  info: "Full-stack developer with a flair for graphic design.",
};

export const ABOUT = {
  text1:
    "I create dynamic, responsive websites that blend creativity with efficiency",
  text2:
    "Hello! I'm Moiz Ali Kamalshah, a full-stack developer with a flair for graphic design. I thrive on crafting web experiences that are not only visually stunning but also highly functional and user-friendly. My passion for detail ensures that every project is polished and professional. Beyond coding, I'm an avid explorer of new cultures and cuisines. My curiosity drives me to stay on the cutting edge of technology and design trends, bringing innovative and practical solutions to every challenge. Whether I'm developing a sleek website or diving into the latest tech, I am dedicated to delivering excellence in every project.",
};

export const PROJECTS = [
  {
    title: "Prime Plate Restaurant",
    subtitle: "Created a Restaurant landing page using React.js and Tailwind CSS.",
    image: image1,
    href:"https://prime-plate.vercel.app/https://prime-plate.vercel.app/"
  },
  {
    title: "AI/LLM Product Design Agency",
    subtitle:
      "A full-stack  platform built with HTML, CSS and JavaScript.",
    image: image2,
    href:"https://next-gen-ai-nine.vercel.app/"
  },
  {
    title: "Personal Portfolio",
    subtitle:
      "A Personal Portfolio Website with using HTML, CSS and JavaScript.",
    image: image3,
    href:"https://protfolio-moiz.vercel.app/"
  },
  {
    title: "OOP Bank System",
    subtitle:
      "A Project of a Object Oriented Programing Bank System CLI Based program with using TypeScript.",
    image: image4,
    href:"https://github.com/moiz257/oop-My-Bank"
  },
  {
    title: "Todo-List",
    subtitle:
      "A advance Todo-List CLI Based program with using TypeScript.",
    image: image5,
    href:"https://github.com/moiz257/Todo-List"
  },
  {
    title: "Currency Converter",
    subtitle: "A Currrency Converter CLI Based program with using TypeScript.",
    image: image6,
    href:"https://github.com/moiz257/Currency-Converter"
  },
  {
    title: "Simple calculator",
    subtitle: "A Simple calculator CLI Based program with using TypeScript.",
    image: image7,
    href:"https://github.com/moiz257/Simple-Calculator-Typescript-By-Moiz/"
  },
  {
    title: "Student Management System",
    subtitle: "A Student Management System CLI Based program with using TypeScript.",
    image: image8,
    href:"https://github.com/moiz257/Student-Management-System-typescript"
  },
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
    experience: "1+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl lg:text-6xl text-white" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
    name: "MongoDB",
    experience: "6+ months",
  },
  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
    name: "Node.js",
    experience: "2+ years",
  },
];

export const ACHIEVEMENT = {
  title: "International Hackaton - Tokyo",
  award: "Gold Medalist - 2024",
  description:
    "Winner of the 2024 Algo coding representing the University of Oxford. This achievement showcases exceptional problem-solving skills and dedication. The event provided a platform to innovate and collaborate with the brightest minds, resulting in a prestigious accolade.",
};

export const TESTIMONIALS = [
  {
    name: "Ali Akbar",
    title: "CEO, Ali's Tech",
    quote:
      "Working with Moiz has been an incredible experience. His design sensibilities and technical expertise are top-notch, making him a valuable asset to any project.",
    image: ali,
  },
  {
    name: "Iqra Ali",
    title: "Project Manager, Ali's Tech",
    quote:
      "Moiz consistently delivers high-quality work, combining creativity and technical prowess. His ability to solve complex problems with elegant solutions is truly impressive.",
    image: iqra,
  },
  {
    name: "Hina Ali",
    title: "Lead Developer, Digital Solutions",
    quote:
      "Moiz's dedication to his craft is evident in every project he undertakes. His innovative approach and attention to detail set him apart as a leading designer and developer.",
    image: iqra,
  },

];

export const SOCIAL_MEDIA_LINKS = [
 
  {
    href: "https://github.com/moiz257",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/moiz-ali-20b280274/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.npmjs.com/~moiz257",
    icon: <SiNpm fontSize={25} className="hover:opacity-80" />
  }
];
