import SectionTitle from '@/components/Section-title'
import HorizontalDivider from '@/components/divider/horizontal'
import ProjectCard from './project-card'
import Link from '@/components/Link'

import { HiArrowNarrowRight } from 'react-icons/hi'
import { Project } from '@/types/projects'

type HighlightedProjectsProps = {
  projects: Project[]
}

const HighlightedProjects = ({ projects }: HighlightedProjectsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle title="Projetos em destaque" subtitle="destaques" />
      <HorizontalDivider className="mb-16" />

      <div>
        {projects?.map((project) => (
          <>
            <ProjectCard key={project.slug} project={project} />
            <HorizontalDivider className="my-16" />
          </>
        ))}

        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">se interessou?</span>

          <Link href="/projects">
            Ver todos <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  )
}

export default HighlightedProjects
