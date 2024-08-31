import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { Basics } from "./types";

const basics: Basics = {
  name: "Luis Mesajil",
  initials: "LM",
  label: "Backend Developer",
  image: "https://avatars.githubusercontent.com/u/45523084?v=4",
  email: "jlhmesajil@gmail.com",
  phone: "+51940709267",
  url: "https://cv-luis-mesajil.vercel.app/",
  about:
    "Backend developer prioritizing high-quality, scalable products with a focus on user experience.",
  summary:
    "With a background in computer engineering, I bring extensive experience in developing both frontend and backend applications using technologies such as React, React Native, and Node.js. I'm well-versed in agile development frameworks like Scrum and Gitflow, ensuring efficient collaboration and code management throughout the development lifecycle. Across my projects, I've successfully implemented various functionalities including user authentication, chatbots, RESTful APIs, payment gateways, cron jobs, email notifications, and relational database development.",
  location: {
    address: "Lima, Perú, UTC",
    postalCode: "15084",
    city: "Lima",
    countryCode: "PE",
    region: "Lima",
    link: "https://www.google.com/maps/place/Lima",
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
      username: "Luis Mesajil",
      url: "https://www.linkedin.com/in/lhmesajil/",
      icon: LinkedInIcon,
    },
    {
      network: "X",
      username: "Luis Mesajil",
      url: "https://x.com/LuisMesajil",
      icon: XIcon,
    },
  ],
};

export default basics;
