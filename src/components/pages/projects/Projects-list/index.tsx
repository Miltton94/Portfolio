'use client'
import Link from '@/components/Link'
import ProjectCard from './project-card'
import { ProjectsPageInfo } from '@/types/projects'
import { motion } from 'framer-motion'
import { fadeUpAnimation } from '@/lib/animations'

type ProjectsListProps = {
  projects: ProjectsPageInfo[]
}
const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <section className="container grid grid-cols-1 gap-x-4 gap-y-6  py-32 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
      {projects.map((project, i) => {
        return (
          <motion.div
            key={project.slug}
            {...fadeUpAnimation}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link href={`/projects/${project.slug}`}>
              <ProjectCard project={project} />
            </Link>
          </motion.div>
        )
      })}
    </section>
  )
}

export default ProjectsList
