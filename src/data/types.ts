export type SocialLink = {
  name: string;
  url: string;
  icon: any; // Ajusta el tipo según el tipo de tu icono, por ejemplo, React.ComponentType si estás usando React
};

export type Contact = {
  email: string;
  tel: string;
  social: SocialLink[];
};

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
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: Contact;
  education: Education[];
  work: WorkExperience[];
  skills: string[];
  projects: Project[];
};
