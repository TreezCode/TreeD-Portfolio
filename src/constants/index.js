import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ncc,
  du,
  lyft,
  strainwise,
  livwell,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

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
    icon: backend,
  },
  {
    title: 'UI/UX Developer',
    icon: creator,
  },
  // {
  //   title: "MongoDB Developer",
  //   icon: mongodb,
  // },
  // {
  //   title: "Express Developer",
  //   icon: express,
  // },
  // {
  //   title: "Node.js Developer",
  //   icon: node,
  // },
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
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
  // {
  //   name: 'express',
  //   icon: express,
  // },
  // {
  //   name: 'VS Code',
  //   icon: vscode,
  // },
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
    title: 'Lead Sales',
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
  {
    title: 'Sales Associate',
    company_name: 'Livwell Enlightened Health',
    icon: livwell,
    iconBg: '#383E56',
    date: 'October 2014 - November 2015',
    points: [
      'Developed new techniques to reduce wait time in a high-volume facility.',
      'Applied up-selling strategies, encompassing recommendations of accessories and complementary purchases.',
      'Provided exceptional customer service by addressing customer inquiries and concerns.',
      'Consistently met and exceeded sales goals and targets.',
    ],
  },
    // {
  //   title: 'Full-Stack Web Developer',
  //   company_name: 'MuziqueHub',
  //   icon: muziquehub,
  //   iconBg: '#383E56',
  //   date: 'May 2019 - August 2019',
  //   points: [
  //     'Designed and developed a MERN stack application with Passport JS authentication.',
  //     'Implemented API requests, user authentication, and database management.',
  //     'Integrated search functionality to allow users to find musician information such as record label, biography, videos, and upcoming concerts.',
  //     'Deployed the application on Github and showcased it in a live demo.',
  //   ],
  // },
  // {
  //   title: 'React.js Developer',
  //   company_name: 'React-Click-Game',
  //   icon: reactClickGame,
  //   iconBg: '#E6DEDD',
  //   date: 'June 2019 - July 2019',
  //   points: [
  //     'Designed and developed a web-based memory challenge game using ReactJS.',
  //     'Implemented different levels of difficulty to enhance user experience.',
  //     'Demonstrated proficiency in front-end development using ReactJS.',
  //     'Optimized the game for mobile and desktop devices.',
  //     'Deployed the application using Github’s static site hosting service, GH-Pages.',
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
