export interface Basics {
  name: string;
  initials: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  about: string;
  summary: string;
  location: {
    address: string;
    postalCode: string;
    city: string;
    countryCode: string;
    region: string;
    link: string;
  };
  profiles: Array<{
    network: string;
    username: string;
    url: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }>;
}

export type Education = {
  school: string;
  degree: string;
  start: string;
  end: string;
};

export type WorkExperience = {
  company: string;
  link: string;
  badges: string[];
  title: string;
  logo: any; // Ajusta el tipo según el tipo de tu logo, por ejemplo, React.ComponentType si estás usando React
  start: string;
  end: string;
  description: string;
  show: boolean;
  story?: string;
};

export type Project = {
  title: string;
  techStack: string[];
  description: string;
  logo: any; // Ajusta el tipo según el tipo de tu logo, por ejemplo, React.ComponentType si estás usando React
  link: {
    label: string;
    href: string;
  };
};

export type ResumeData = {
  basics: Basics;
  education: Education[];
  work: WorkExperience[];
  skills: string[];
  projects: Project[];
};
