import { ConsultlyLogo } from '@/images/logos'
import { ResumeData } from './types'
import basics from '@/data/basics'
import work from '@/data/work'
import education from '@/data/education'

const resume: ResumeData = {
  basics,
  work,
  education,
  skills: [
    'React.js',
    'Node.js',
    'TypeScript',
    'React Native',
    'Redux.js',
    'JavaScript',
    'HTML',
    'CSS',
    'SQL',
    'PostgreSQL',
    'Git/Github',
    'Express.js',
    'Postman',
    'Scrum',
    'Python',
    'Docker',
    'ETL Tools',
  ],
  projects: [
    {
      title: 'DigiShoes',
      techStack: [
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
      description:
        'DigiShoes is an e-commerce platform specializing in footwear, offering a seamless shopping experience for customers. The platform incorporates essential features such as a shopping cart, email notifications, and user authentication to enhance user convenience and security.',
      logo: ConsultlyLogo,
      link: {
        label: 'storecalzado.vercel.app',
        href: 'https://storecalzado.vercel.app/',
      },
    },
    {
      title: 'GymSpace',
      techStack: [
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
      description:
        'GymSpace is a dynamic e-commerce platform catering to fitness enthusiasts, offering a wide range of products and services to support their fitness journey. The platform seamlessly integrates essential features such as a shopping cart, email notifications, user authentication, and a chatbot for customer support, ensuring a streamlined and engaging user experience.',
      logo: ConsultlyLogo,
      link: {
        label: 'github.com/LautaroEZM/GymSpaceFront',
        href: 'https://github.com/LautaroEZM/GymSpaceFront',
      },
    },
  ],
}

export { resume }
