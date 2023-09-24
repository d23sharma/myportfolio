import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaBootstrap } from 'react-icons/fa';
import { BiLogoJquery, BiLogoTailwindCss } from "react-icons/bi";


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
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-700' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
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
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Tailwind CSS',
    icon: <BiLogoTailwindCss className='h-16 w-16 text-emerald-700' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
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
