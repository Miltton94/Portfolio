'use client'

import Link from '@/components/Link'
import TechBadge from '@/components/Tech-badge'
import { Project } from '@/types/projects'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

type ProjectCardProps = {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const animProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-6 lg:flex-row lg:gap-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.5 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className=" h-[200px] w-full sm:h-[300px] lg:min-h-full lg:w-[420px]"
      >
        <Image
          width={432}
          unoptimized
          height={304}
          alt={`Thumbabail do projeto ${project.title}`}
          src={project.thumbnail.url}
          className=" h-full w-full rounded-lg object-cover  "
        />
      </motion.div>

      <div className="flex-1 lg:py-[18px]">
        <motion.h3
          {...animProps}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 text-lg font-medium text-gray-50"
        >
          <Image
            width={20}
            unoptimized
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />
          {project.title}
        </motion.h3>

        <motion.p
          {...animProps}
          transition={{ duration: 0.2, delay: 0.3 }}
          className="my-6 text-gray-400"
        >
          {project.shortDescription}
        </motion.p>

        <div className="mb-8 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[350px]">
          {project.technologies.map((tech, i) => (
            <TechBadge
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2, delay: 0.5 * i * 0.1 }}
              name={tech.name}
              key={`${project.title}-tech-${tech.name}`}
            />
          ))}
        </div>

        <Link href={`/projects/${project.slug}`}>
          Ver projeto <HiArrowNarrowRight />
        </Link>
      </div>
    </motion.div>
  )
}

export default ProjectCard
