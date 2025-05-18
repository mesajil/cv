import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/icons'
import { ResumeData } from './types'

const resume: ResumeData = {
  basics: {
    name: 'Luis Mesajil',
    initials: 'LM',
    label: 'Backend Developer',
    image: 'https://avatars.githubusercontent.com/u/45523084?v=4',
    email: 'jlhmesajil@gmail.com',
    phone: '+51940709267',
    url: 'https://cv-luis-mesajil.vercel.app/',
    about: 'Backend developer prioritizing high-quality, scalable products with a focus on user experience.',
    summary:
      "With a background in computer engineering, I bring extensive experience in developing both frontend and backend applications using technologies such as React, React Native, and Node.js. I'm well-versed in agile development frameworks like Scrum and Gitflow, ensuring efficient collaboration and code management throughout the development lifecycle.",
    location: {
      address: 'Lima, Perú - UTC',
      postalCode: '15084',
      city: 'Lima',
      countryCode: 'PE',
      region: 'Lima',
      link: 'https://www.google.com/maps/place/Lima',
    },
    profiles: [
      {
        network: 'GitHub',
        username: 'mesajil',
        url: 'https://github.com/mesajil',
        icon: GitHubIcon,
      },
      {
        network: 'LinkedIn',
        username: 'Luis Mesajil',
        url: 'https://www.linkedin.com/in/lhmesajil/',
        icon: LinkedInIcon,
      },
      {
        network: 'X',
        username: 'Luis Mesajil',
        url: 'https://x.com/LuisMesajil',
        icon: XIcon,
      },
    ],
  },
  work: [
    {
      company: 'Sphere Consulting SAC',
      link: 'https://www.sphere.com.pe/en/',
      highlights: [],
      title: 'Full Stack Developer',
      start: '2024',
      end: 'Present',
      description: [
        'As part of my role, I was responsible for delivering a range of projects, including the following key tasks:',
        "> BigCommerce Interface Development: I developed custom user interfaces for e-commerce stores using BigCommerce's Stencil CLI framework, ensuring optimal performance and seamless user experience.",
        '> Data Pipeline Development: I created and implemented data pipelines using Node.js for the migration of e-commerce data from Shopify to BigCommerce, ensuring accurate and efficient data transfer.',
        '> Legacy System Migration: I led the migration of multiple legacy processes written in Pro*C to PLSQL, performing rigorous testing in development environments to ensure the successful execution and functionality of the migrated processes.',
      ],
      show: true,
    },
    {
      company: 'Libellus',
      link: 'https://libellus.io/',
      highlights: [],
      title: 'Frontend Developer',
      start: '2024',
      end: '2024',
      description: [
        'Crafted user interfaces, encompassing common components and screens. Utilized design guidelines from Figma and adhered to global design contexts. Developed user stories using Storybook for efficient testing and iteration.',
      ],
      show: true,
    },
    {
      company: 'Henry',
      link: 'https://www.soyhenry.com/',
      highlights: [],
      title: 'Full Stack Developer Graduate',
      start: '2023',
      end: '2023',
      description: [
        'Engaged in various projects, including the creation of an ecommerce platform. Developed the API using Node.js and Express.js, incorporating combined filters, sorting functionalities, and relational database development for efficient data management. Implemented email notifications and ensured adherence to RESTful API standards. On the frontend, integrated third-party authentication, implemented a shopping cart with MercadoPago payment gateway, and designed a management dashboard for platform oversight. Additionally, integrated a chatbot utilizing the OpenAI API. Participated in daily group scrum meetings for project coordination and progress tracking.',
      ],
      show: true,
    },
    {
      company: 'AprendeHoy',
      link: 'https://www.instagram.com/aprendehoyinfo/?hl=en',
      highlights: [],
      title: 'Employability Bootcamp Graduate',
      start: '2019',
      end: '2019',
      description: [
        'Collaborated with a multidisciplinary team to develop a solution for our client aimed at enhancing engagement on their social media platforms. Gained practical experience in innovation tools and agile development methodologies.',
      ],
      show: false,
    },
  ],
  education: [
    {
      institution: 'Pontificia Universidad Católica del Perú',
      url: 'https://www.pucp.edu.pe/',
      studyType: 'Bachelor',
      area: 'Top third student in computer engineering',
      start: '2014',
      end: 'Present',
    },
    {
      institution: 'SoyHenry',
      url: 'https://www.soyhenry.com/',
      area: 'Full Stack Developer with Agile Focus',
      studyType: 'Bootcamp',
      start: '2024',
      end: '2023',
    },
  ],
  skills: [
    {
      name: 'Web Development',
      level: 'Intermediate',
      keywords: [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'React.js',
        'Redux.js',
        'Node.js',
        'Express.js',
        'Python',
        'Postman',
        'BigCommerce',
      ],
    },
    {
      name: 'Databases',
      level: 'Intermediate',
      keywords: ['PostgreSQL', 'PL/SQL'],
    },
    {
      name: 'Devops',
      level: 'Advanced',
      keywords: ['Git/Github', 'Docker', 'GCP', 'Snowflake'],
    },
    {
      name: 'Web Development',
      level: 'Advanced',
      keywords: ['Scrum'],
    },
    {
      name: 'Web Development',
      level: 'Advanced',
      keywords: ['Airflow'],
    },
    {
      name: 'Mobile Development',
      level: 'Beginner',
      keywords: ['React Native', '.NET MAUI'],
    },
  ],
  projects: [
    {
      name: 'DigiShoes',
      startDate: '2023-12-01',
      endDate: '2024-01-01',
      description:
        'DigiShoes is an e-commerce platform specializing in footwear, offering a seamless shopping experience for customers. The platform incorporates essential features such as a shopping cart, email notifications, and user authentication to enhance user convenience and security.',
      highlights: [
        'React.js',
        'Redux.js',
        'Material UI',
        'Node.js',
        'Express.js',
        'RESTful API',
        'MercadoPago',
        'Email notifications',
        'Firebase',
        'Scrum',
      ],
      url: 'https://storecalzado.vercel.app/',
    },
    {
      name: 'GymSpace',
      startDate: '2023-11-01',
      endDate: '2023-12-01',
      description:
        'GymSpace is a dynamic e-commerce platform catering to fitness enthusiasts, offering a wide range of products and services to support their fitness journey. The platform seamlessly integrates essential features such as a shopping cart, email notifications, user authentication, and a chatbot for customer support, ensuring a streamlined and engaging user experience.',
      highlights: [
        'React.js',
        'Redux.js',
        'Material UI',
        'Node.js',
        'Express.js',
        'RESTful API',
        'MercadoPago',
        'Email notifications',
        'Cron jobs',
        'Auth0',
        'Chatbot',
        'OpenAI API',
        'Scrum',
      ],
      url: 'https://github.com/LautaroEZM/GymSpaceFront',
    },
  ],
}

export { resume }
