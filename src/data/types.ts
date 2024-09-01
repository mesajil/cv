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

export interface Education {
  institution: string;
  url?: string;
  area?: string;
  studyType?: string;
  start: string;
  end: string;
  score?: string;
  courses?: string[];
}

export interface Work {
  company: string;
  link: string;
  highlights: string[];
  title: string;
  start: string;
  end: string;
  description: string;
  show: boolean;
}

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
  work: Work[];
  education: Education[];
  skills: string[];
  projects: Project[];
};
