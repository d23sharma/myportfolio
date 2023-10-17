import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaBootstrap, FaNodeJs } from 'react-icons/fa';
import { BiLogoJquery, BiLogoTailwindCss, BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si"


export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML & CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-700' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-700' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React.js',
    icon: <FaReact className='h-16 w-16 text-emerald-700' />,
    text: 'Proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  
  {
    id: nanoid(),
    title: 'Node.js',
    icon: <FaNodeJs className='h-16 w-16 text-emerald-700' />,
    text: 'Basic knowledge in Node, developing efficient and dynamic back-end applications.',
  },
  {
    id: nanoid(),
    title: 'Express.js',
    icon: <SiExpress className='h-16 w-16 text-emerald-700' />,
    text: 'Basic knowledge in Express, building efficient and interactive single page or multi-page back-end applications.',
  },
  {
    id: nanoid(),
    title: 'MongoDB',
    icon: <BiLogoMongodb className='h-16 w-16 text-emerald-700' />,
    text: 'Basic knowledge in MongoDB, developing and managing database.',
  },
  {
    id: nanoid(),
    title: 'jQuery',
    icon: <BiLogoJquery className='h-16 w-16 text-emerald-700' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Bootstrap',
    icon: <FaBootstrap className='h-16 w-16 text-emerald-700' />,
    text: 'Proficiency in JQuery, developing efficient and interactive front-end applications using JavaScript library.',
  },
  {
    id: nanoid(),
    title: 'Tailwind CSS',
    icon: <BiLogoTailwindCss className='h-16 w-16 text-emerald-700' />,
    text: 'Proficiency in Tailwind CSS, developing efficient and interactive front-end responsive layout with customized styling for web pages.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://media.licdn.com/dms/image/C4E0BAQHKy_x21musGQ/company-logo_200_200/0/1618935522044?e=2147483647&v=beta&t=tJ9tJCcyplBBFlIHpx_XJCLeHYXlF1u7UzkXq84EtuA',
    url: 'https://d23sharma.github.io/todos/',
    github: 'https://github.com/d23sharma',
    title: 'To-do list',
    text: 'It is a to-do app, created using HTML, CSS and JavaScript',
  },
  {
    id: nanoid(),
    img: 'https://media.licdn.com/dms/image/C4D0BAQG_E7OWJiv4uw/company-logo_200_200/0/1625138261736?e=2147483647&v=beta&t=YvANmrWi4JTKpf9UTFqgu0bpGIHrLXQVUd09er3Ro78',
    url: 'https://d23sharma.github.io/absolutewebstore/',
    github: 'https://github.com/d23sharma',
    title: 'Absolute webstore',
    text: 'It is a simple website created using HTML and CSS',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://d23sharma.github.io/bootcamp/', target:"_blank",
    github: 'https://github.com/d23sharma',
    title: 'Bootcamp',
    text: 'This website is created using HTML, CSS and bootstrap',
  },
];
