import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

const resume = {
  basics: {
    name: "Luis Mesajil",
    label: "Full Stack Engineer",
    image: "https://avatars.githubusercontent.com/u/45523084?v=4",
    email: "lhmesajil@gmail.com",
    phone: "+51940709267",
    url: "",
    about:
      "Full Stack Engineer prioritizing high-quality, scalable products with a focus on user experience.",
    summary:
      "With a background in computer engineering, I bring extensive experience in developing both frontend and backend applications using technologies such as React, React Native, and Node.js. I'm well-versed in agile development frameworks like Scrum and Gitflow, ensuring efficient collaboration and code management throughout the development lifecycle. Across my projects, I've successfully implemented various functionalities including user authentication, chatbots, RESTful APIs, payment gateways, cron jobs, email notifications, and relational database development.",
    location: {
      address: "",
      postalCode: "",
      city: "Lima",
      countryCode: "PE",
      region: "Perú",
      link: "https://www.google.com/maps/place/Lima",
      timezone: "UTC -5",
      display: "Lima, Perú",
    },
    profiles: [
      {
        network: "GitHub",
        username: "mesajil",
        url: "https://github.com/mesajil",
        icon: GitHubIcon,
      },
      {
        network: "LinkedIn",
        username: "lhmesajil",
        url: "https://www.linkedin.com/in/lhmesajil/",
        icon: LinkedInIcon,
      },
      {
        network: "X",
        username: "LuisMesajil",
        url: "https://x.com/LuisMesajil",
        icon: XIcon,
      },
    ],
  },
  work: [
    {
      name: "Sphere Consulting SAC",
      position: "FullStack Developer",
      url: "https://www.sphere.com.pe/en/",
      startDate: "2024",
      endDate: "2024",
      summary:
        "Spearheaded a custom data migration project from Shopify to BigCommerce for an e-commerce client, ensuring a seamless transition of their online store. Customized the one-page checkout JavaScript on BigCommerce per the client's specific requirements to enhance user experience and streamline the purchasing process. Developed data migration applications utilizing Talend Studio, enabling efficient and reliable data transfer while maintaining data integrity and accuracy.",
      highlights: [],
    },
    {
      name: "Libellus",
      position: "Frontend Developer",
      url: "https://libellus.io/",
      startDate: "2024",
      endDate: "2024",
      summary:
        "Crafted user interfaces, encompassing common components and screens. Utilized design guidelines from Figma and adhered to global design contexts. Developed user stories using Storybook for efficient testing and iteration.",
      highlights: [],
    },
    {
      name: "Henry",
      position: "Full Stack Developer Graduate",
      url: "https://www.soyhenry.com/",
      startDate: "2023",
      endDate: "2023",
      summary:
        "Engaged in various projects, including the creation of an ecommerce platform. Developed the API using Node.js and Express.js, incorporating combined filters, sorting functionalities, and relational database development for efficient data management. Implemented email notifications and ensured adherence to RESTful API standards. On the frontend, integrated third-party authentication, implemented a shopping cart with MercadoPago payment gateway, and designed a management dashboard for platform oversight. Additionally, integrated a chatbot utilizing the OpenAI API. Participated in daily group scrum meetings for project coordination and progress tracking.",
      highlights: [],
    },
    {
      name: "AprendeHoy",
      position: "Employability Bootcamp Graduate",
      url: "https://www.instagram.com/aprendehoyinfo/?hl=en",
      startDate: "2019",
      endDate: "2019",
      summary:
        "Collaborated with a multidisciplinary team to develop a solution for our client aimed at enhancing engagement on their social media platforms. Gained practical experience in innovation tools and agile development methodologies.",
      highlights: [],
    },
  ],
  volunteer: [],
  education: [
    {
      institution: "SoyHenry",
      url: "https://www.soyhenry.com/",
      area: "Full Stack Development",
      studyType: "Certification",
      startDate: "2023",
      endDate: "2023",
      score: "",
      courses: [],
    },
    {
      institution: "Pontificia Universidad Católica del Perú",
      url: "",
      area: "Computer Engineering",
      studyType: "Bachelor",
      startDate: "2014",
      endDate: "2022",
      score: "",
      courses: [],
    },
  ],
  awards: [],
  certificates: [],
  publications: [],
  skills: [
    {
      name: "Web Development",
      level: "Master",
      keywords: [
        "React.js",
        "Node.js",
        "TypeScript",
        "Express.js",
        "React Native",
        "Redux.js",
        "JavaScript",
        "HTML",
        "CSS",
        "SQL",
        "Git/Github",
        "GCP",
        "Postman",
        "Scrum",
      ],
    },
  ],
  languages: [
    {
      language: "English",
      fluency: "Native speaker",
    },
  ],
  interests: [],
  references: [],
  projects: [
    {
      name: "DigiShoes",
      startDate: "",
      endDate: "",
      description:
        "DigiShoes is an e-commerce platform specializing in footwear, offering a seamless shopping experience for customers. The platform incorporates essential features such as a shopping cart, email notifications, and user authentication to enhance user convenience and security.",
      highlights: [],
      url: "https://storecalzado.vercel.app/",
    },
    {
      name: "GymSpace",
      startDate: "",
      endDate: "",
      description:
        "GymSpace is a dynamic e-commerce platform catering to fitness enthusiasts, offering a wide range of products and services to support their fitness journey. The platform seamlessly integrates essential features such as a shopping cart, email notifications, user authentication, and a chatbot for customer support, ensuring a streamlined and engaging user experience.",
      highlights: [],
      url: "https://github.com/LautaroEZM/GymSpaceFront",
    },
  ],
};

export default resume;
