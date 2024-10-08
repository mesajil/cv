import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CommandMenu } from '@/components/command-menu'
import { Metadata } from 'next'
import { Section } from '@/components/ui/section'
import { GlobeIcon, MailIcon, PhoneIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { resume } from '@/resume'
import { ProjectCard } from '@/components/project-card'

export const metadata: Metadata = {
  title: `CV ${resume.basics.name}`,
  description: resume.basics.summary,
}

export default function Page() {
  return (
    <main className='container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16'>
      <section className='mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6'>
        <div className='flex items-center justify-between'>
          <div className='flex-1 space-y-1.5'>
            <h1 className='text-2xl font-bold'>{resume.basics.name}</h1>
            <p className='max-w-md text-pretty font-mono text-sm text-muted-foreground'>{resume.basics.about}</p>
            <p className='max-w-md items-center text-pretty font-mono text-xs text-muted-foreground'>
              <a
                className='inline-flex gap-x-1.5 align-baseline leading-none hover:underline'
                href={resume.basics.location.link}
                target='_blank'>
                <GlobeIcon className='size-3' />
                {resume.basics.location.address}
              </a>
            </p>
            <div className='flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden'>
              {resume.basics.email ? (
                <Button className='size-8' variant='outline' size='icon' asChild>
                  <a href={`mailto:${resume.basics.email}`}>
                    <MailIcon className='size-4' />
                  </a>
                </Button>
              ) : null}
              {resume.basics.phone ? (
                <Button className='size-8' variant='outline' size='icon' asChild>
                  <a href={`tel:${resume.basics.phone}`}>
                    <PhoneIcon className='size-4' />
                  </a>
                </Button>
              ) : null}
              {resume.basics.profiles.map(profile => (
                <Button key={profile.network} className='size-8' variant='outline' size='icon' asChild>
                  <a href={profile.url} target='_blank' rel='noopener noreferrer'>
                    <profile.icon className='size-4' />
                  </a>
                </Button>
              ))}
            </div>
            <div className='hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex'>
              {resume.basics.email ? (
                <a href={`mailto:${resume.basics.email}`}>
                  <span className='underline'>{resume.basics.email}</span>
                </a>
              ) : null}
              {resume.basics.phone ? (
                <a href={`tel:${resume.basics.phone}`}>
                  <span className='underline'>{resume.basics.phone}</span>
                </a>
              ) : null}
            </div>
          </div>

          <Avatar className='size-28'>
            <AvatarImage alt={resume.basics.name} src={resume.basics.image} />
            <AvatarFallback>{resume.basics.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className='text-xl font-bold'>About</h2>
          <p className='text-pretty font-mono text-sm text-muted-foreground'>{resume.basics.summary}</p>
        </Section>
        <Section>
          <h2 className='text-xl font-bold'>Work Experience</h2>
          {resume.work.map(work => {
            if (!work.show) return
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className='flex items-center justify-between gap-x-2 text-base'>
                    <h3 className='inline-flex items-center justify-center gap-x-1 font-semibold leading-none'>
                      <a className='hover:underline' href={work.link}>
                        {work.company}
                      </a>

                      <span className='inline-flex gap-x-1'>
                        {work.highlights.map(badge => (
                          <Badge variant='secondary' className='align-middle text-xs' key={badge}>
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className='text-sm tabular-nums text-gray-500'>
                      {work.start} - {work.end}
                    </div>
                  </div>

                  <h4 className='font-mono text-sm leading-none'>{work.title}</h4>
                </CardHeader>
                <CardContent className='mt-2 text-xs'>{work.description}</CardContent>
              </Card>
            )
          })}
        </Section>
        <Section className='print-force-new-page scroll-mb-16'>
          <h2 className='text-xl font-bold'>Projects</h2>
          <div className='-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3'>
            {resume.projects.map(project => {
              return (
                <ProjectCard
                  key={project.name}
                  title={project.name}
                  description={project.description}
                  tags={project.highlights}
                  link={'url' in project ? project.url : undefined}
                />
              )
            })}
          </div>
        </Section>
        <Section>
          <h2 className='text-xl font-bold'>Education</h2>
          {resume.education.map(education => {
            return (
              <Card key={education.institution}>
                <CardHeader>
                  <div className='flex items-center justify-between gap-x-2 text-base'>
                    <h3 className='font-semibold leading-none'>{education.institution}</h3>
                    <div className='text-sm tabular-nums text-gray-500'>
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className='mt-2'>{education.area}</CardContent>
              </Card>
            )
          })}
        </Section>
        <Section>
          <h2 className='text-xl font-bold'>Skills</h2>
          <div className='flex flex-wrap gap-1'>
            {resume.skills
              .flatMap(skill => skill.keywords)
              .map(skill => {
                return <Badge key={skill}>{skill}</Badge>
              })}
          </div>
        </Section>
      </section>

      <CommandMenu
        links={[
          {
            url: resume.basics.url,
            title: 'Personal Website',
          },
          ...resume.basics.profiles.map(profile => ({
            url: profile.url,
            title: profile.network,
          })),
        ]}
      />
    </main>
  )
}
