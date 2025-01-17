import { Work } from './types'

const work: Work[] = [
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
]

export default work
