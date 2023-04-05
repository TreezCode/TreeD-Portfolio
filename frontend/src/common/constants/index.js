// external imports
import {
  FaLinkedin,
  FaGithub,
  FaDribbble,
  FaYoutube,
  FaEtsy,
  FaPinterest,
} from 'react-icons/fa';
// internal imports
import {
  resume,
  mobile,
  frontend,
  creator,
  web,
  html,
  css,
  tailwind,
  javascript,
  nextjs,
  threejs,
  typescript,
  mern,
  mongodb,
  express,
  reactjs,
  nodejs,
  redux,
  git,
  vscode,
  ncc,
  du,
  lyft,
  strainwise,
  treecommerce,
  vanilla,
  clickgame,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'tech',
    title: 'Tech',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

export const navLinksSecondary = [
  {
    id: 'new', // valid element id
    title: 'Whats New', // UI title
    url: false, // website url/relative path/import
  },
  {
    id: 'gallery',
    title: 'Gallery',
    url: false,
  },
  {
    id: 'articles',
    title: 'Articles',
    url: false,
  },
  {
    id: 'resume',
    title: 'Resume',
    url: resume,
  },
];

const socials = [
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/joey-kubalak-425032180/',
    Icon: FaLinkedin,
  },
  {
    title: 'Github',
    link: 'https://github.com/TreezCode',
    Icon: FaGithub,
  },
  {
    title: 'Etsy',
    link: 'https://www.etsy.com/shop/TranscendentTreez',
    Icon: FaEtsy,
  },
  // {
  //   title: 'Pinterest',
  //   link: 'https://www.pinterest.com/transcendenttreez/',
  //   Icon: FaPinterest
  // },
  {
    title: 'YouTube',
    link: 'https://www.youtube.com/channel/UCXuGXX7rA1wmk_fEpWmCQhA',
    Icon: FaYoutube,
  },
  {
    title: 'Dribble',
    link: 'https://dribbble.com/TreezCode',
    Icon: FaDribbble,
  },
];

const heroContent = {
  headText: ["Hi I'm <span style='color:#915eff'>Joey</span>"],
  subText: [
    "I develop immersive 3D visuals, intuitive user interfaces and dynamic web applications.",
    "Whether I'm creating complex user interfaces or implementing complex logic, React allows me to write scalable code.",
    "With a passion for visual design and a keen eye for detail, I create immersive 3D animations that bring web experiences to life.",
    "From HTML and CSS to JavaScript and Node.js, I have expertise in both frontend and backend technologies.",
    "I work with a wide range of tools and frameworks to build custom web applications that meet business needs.",
    "I focus on creating intuitive, user-friendly interfaces that drive engagement and conversions.",
  ],
};

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'MERN Stack Developer',
    icon: mobile,
  },
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'UI/UX Developer',
    icon: creator,
  },
  // {
  //   title: "React Developer",
  //   icon: react,
  // },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'MERN',
    icon: mern,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Express JS',
    icon: express,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'VS Code',
    icon: vscode,
  },
];

const experiences = [
  {
    title: 'Computer Science Major',
    company_name: 'Northampton Community College',
    icon: ncc,
    iconBg: '#383E56',
    date: 'September 2022 - Present',
    points: [
      'Pursuing a degree in computer science to expand knowledge and skills in the field.',
      'Taking courses in data structures, algorithms, computer networks, and database management.',
      'Participating in coding challenges and hackathons to improve problem-solving and teamwork skills.',
      'Expected graduation date: May 2024.',
    ],
  },
  {
    title: 'Rideshare Driver',
    company_name: 'Lyft / Uber',
    icon: lyft,
    iconBg: '#383E56',
    date: 'November 2017 - 2021',
    points: [
      'Navigated busy city streets to safely and promptly deliver patrons to their destination.',
      'Maintained high ratings and received positive feedback from riders.',
      'Demonstrated excellent customer service skills by engaging with riders and creating a comfortable and enjoyable experience.',
      'Adhered to company policies and regulations while providing efficient transportation services.',
    ],
  },
  {
    title: 'Full-stack Web Development Bootcamp',
    company_name: 'University of Denver',
    icon: du,
    iconBg: '#E6DEDD',
    date: 'January 2019 - April 2019',
    points: [
      'Completed a full-stack web development bootcamp to acquire skills necessary to design, create and bring concepts to life.',
      'Learned front-end development using HTML5, CSS3, JavaScript ES6, React, Handlebars, and Bootstrap.',
      'Learned back-end development using Node.js, Express, Firebase, MySQL, MongoDB, and NPM.',
      'Developed collaborative skills through group projects and peer programming.',
    ],
  },
  {
    title: 'Lead Sales Associate',
    company_name: 'The Shelter: Strainwise',
    icon: strainwise,
    iconBg: '#E6DEDD',
    date: 'March 2016 - November 2017',
    points: [
      'Implemented new marketing initiatives to drive sales and improve overall performance.',
      'Studied product markets to adjust sales pitches and adapt strategies for optimized sales.',
      'Developed sales training programs to enhance team performance and increase sales.',
      'Collaborated with the management team to develop promotional strategies and enhance customer experience.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I was Joey's Full Stack Bootcamp Professor at DU in partnership with Trilogy Education. Joey has a lot of potential if given an opportunity. He was a pleasure to have in class. He never gave up and was always seeking to advance his knowledge in and out of the classroom. I hope that you consider him for a development position as he will provide great value to your company.",
    name: 'Bryan Salicco',
    designation: 'Senior Software Engineer',
    company: 'Unified an iHeartMedia Company',
    image:
      'https://media.licdn.com/dms/image/C4E03AQF2XlgXvJtvxg/profile-displayphoto-shrink_200_200/0/1568088484690?e=1684368000&v=beta&t=bRjFeg6O2Mw27btboOnvckYAqVI4kEcr5XmOLeZuMLU',
  },
  // {
  //   testimonial:
  //     'I thought it was impossible to make a website as beautiful as our product, but Joey proved me wrong.',
  //   name: 'Sara Lee',
  //   designation: 'CFO',
  //   company: 'Acme Co',
  //   image: 'https://randomuser.me/api/portraits/women/4.jpg',
  // },
];

const projects = [
  {
    name: 'Treecommerce',
    description:
      "Treecommerce is a simple, yet powerful ecommerce website built with the Next.js framework. We use Sanity for content management, Auth0 for authentication, Stripe for payments, and Vercel to deploy the site. With this stack, we're able to provide a fast, secure, and scalable ecommerce solution.",
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'sanity',
        color: 'green-text-gradient',
      },
      {
        name: 'stripe',
        color: 'pink-text-gradient',
      },
    ],
    image: treecommerce,
    source_code_link: 'https://github.com/TreezCode/treecommerce',
    live_demo_link: 'https://treecommerce.vercel.app/',
  },
  {
    name: 'Vanilla JS Portfolio',
    description:
      'A static website built with Vanilla JS, which highlights my front-end web development skills and passion. The website is designed without using any JS frameworks, demonstrating my proficiency in pure JavaScript coding.',
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'html',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: vanilla,
    source_code_link: 'https://github.com/TreezCode/TreezCode.github.io',
    live_demo_link: 'https://iamtreez.com/',
  },
  {
    name: 'React Click Game',
    description:
      'Built using ReactJS and deployed on Github using GH-Pages, the React-Click-Game is a web-based memory challenge. The user must click on randomly generated images of Rick Sanchez to test their memory skills. The images will be repositioned randomly and the user must click a different image to continue playing.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: clickgame,
    source_code_link: 'https://github.com/TreezCode/React-Click-Game',
    live_demo_link: 'https://iamtreez.com/React-Click-Game/',
  },
];

export {
  services,
  heroContent,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
};
