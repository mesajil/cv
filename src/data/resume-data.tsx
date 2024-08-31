import { ConsultlyLogo, JojoMobileLogo, NSNLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { ResumeData } from "./types";
import basics from "@/data/basics";

const resume: ResumeData = {
  basics,
  education: [
    {
      school: "SoyHenry",
      degree: "Full Stack Developer with Agile Focus",
      start: "2023",
      end: "2023",
    },
    {
      school: "Pontificia Universidad Católica del Perú",
      degree: "Top third student in computer engineering",
      start: "2014",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Sphere Consulting SAC",
      link: "https://www.sphere.com.pe/en/",
      badges: [],
      title: "FullStack Developer",
      logo: JojoMobileLogo,
      start: "2024",
      end: "2024",
      description:
        "Spearheaded a custom data migration project from Shopify to BigCommerce for an e-commerce client, ensuring a seamless transition of their online store. Customized the one-page checkout JavaScript on BigCommerce per the client's specific requirements to enhance user experience and streamline the purchasing process. Developed data migration applications utilizing Talend Studio, enabling efficient and reliable data transfer while maintaining data integrity and accuracy.",
      show: true,
    },
    {
      company: "Libellus",
      link: "https://libellus.io/",
      badges: [],
      title: "Frontend Developer",
      logo: JojoMobileLogo,
      start: "2024",
      end: "2024",
      description:
        "Crafted user interfaces, encompassing common components and screens. Utilized design guidelines from Figma and adhered to global design contexts. Developed user stories using Storybook for efficient testing and iteration.",
      show: true,
    },
    {
      company: "Henry",
      link: "https://www.soyhenry.com/",
      badges: [],
      title: "Full Stack Developer Graduate",
      logo: JojoMobileLogo,
      start: "2023",
      end: "2023",
      description:
        "Engaged in various projects, including the creation of an ecommerce platform. Developed the API using Node.js and Express.js, incorporating combined filters, sorting functionalities, and relational database development for efficient data management. Implemented email notifications and ensured adherence to RESTful API standards. On the frontend, integrated third-party authentication, implemented a shopping cart with MercadoPago payment gateway, and designed a management dashboard for platform oversight. Additionally, integrated a chatbot utilizing the OpenAI API. Participated in daily group scrum meetings for project coordination and progress tracking.",
      show: true,
    },
    {
      company: "AprendeHoy",
      link: "https://www.instagram.com/aprendehoyinfo/?hl=en",
      badges: [],
      title: "Employability Bootcamp Graduate",
      logo: NSNLogo,
      start: "2019",
      end: "2019",
      description:
        "Collaborated with a multidisciplinary team to develop a solution for our client aimed at enhancing engagement on their social media platforms. Gained practical experience in innovation tools and agile development methodologies",
      show: false,
    },
  ],
  skills: [
    "React.js",
    "Node.js",
    "TypeScript",
    "React Native",
    "Redux.js",
    "JavaScript",
    "HTML",
    "CSS",
    "SQL",
    "Git/Github",
    "Express.js",
    "Postman",
    "Scrum",
  ],
  projects: [
    {
      title: "DigiShoes",
      techStack: [
        "React.js",
        "Redux.js",
        "Material UI",
        "Node.js",
        "Express.js",
        "RESTful API",
        "MercadoPago",
        "Email notifications",
        "Firebase",
        "Scrum",
      ],
      description:
        "DigiShoes is an e-commerce platform specializing in footwear, offering a seamless shopping experience for customers. The platform incorporates essential features such as a shopping cart, email notifications, and user authentication to enhance user convenience and security.",
      logo: ConsultlyLogo,
      link: {
        label: "storecalzado.vercel.app",
        href: "https://storecalzado.vercel.app/",
      },
    },
    {
      title: "GymSpace",
      techStack: [
        "React.js",
        "Redux.js",
        "Material UI",
        "Node.js",
        "Express.js",
        "RESTful API",
        "MercadoPago",
        "Email notifications",
        "Cron jobs",
        "Auth0",
        "Chatbot",
        "OpenAI API",
        "Scrum",
      ],
      description:
        "GymSpace is a dynamic e-commerce platform catering to fitness enthusiasts, offering a wide range of products and services to support their fitness journey. The platform seamlessly integrates essential features such as a shopping cart, email notifications, user authentication, and a chatbot for customer support, ensuring a streamlined and engaging user experience.",
      logo: ConsultlyLogo,
      link: {
        label: "github.com/LautaroEZM/GymSpaceFront",
        href: "https://github.com/LautaroEZM/GymSpaceFront",
      },
    },
  ],
};

resume.work.forEach((e) => {
  e.story = `In ${e.company} as ${e.title}: ${e.description}`;
});

export { resume };
