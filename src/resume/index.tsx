import { ResumeData } from './types'
import basics from '@/resume/basics'
import work from '@/resume/work'
import education from '@/resume/education'
import skills from '@/resume/skills'
import projects from '@/resume/projects'

const resume: ResumeData = {
  basics,
  work,
  education,
  skills,
  projects,
}

export { resume }
