import resume from "@/data/resume";
const { name, summary, location } = resume.basics;
export const resumeConfig = {
  fileName: `CV - ${name}`,
  description: summary,
};
