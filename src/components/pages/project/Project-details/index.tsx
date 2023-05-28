'use client'

import Button from '@/components/Button'
import SectionTitle from '@/components/Section-title'
import TechBadge from '@/components/Tech-badge'
import React from 'react'
import { TbBrandGithub } from 'react-icons/tb'
import { FiGlobe } from 'react-icons/fi'
import Link from '@/components/Link'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { Project } from '@/types/projects'
import { RichText } from '@graphcms/rich-text-react-renderer'
import { delay, motion } from 'framer-motion'
import { fadeUpAnimation, techBadgeAnimation } from '@/lib/animations'

type ProjectDetailsProps = {
  projectInfo: Project
}

const ProjectDetails = ({ projectInfo }: ProjectDetailsProps) => {
  return (
    <section className="relative flex w-full flex-col items-center justify-end overflow-hidden py-24 pb-10 sm:min-h-[750px] sm:pb-24">
      <motion.div
        initial={{ opacity: 0, scale: 1.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 z-[-1] "
        style={{
          background: `url(/images/hero-bg.png) no-repeat center/cover, url(${projectInfo.pageThumbnail.url}) no-repeat center/cover`,
        }}
      />

      <SectionTitle
        subtitle="projeto"
        title={projectInfo.title}
        className="mt-10 items-center text-center sm:[&>h3]:text-4xl"
      />

      <motion.div
        {...fadeUpAnimation}
        className="sm:my:6 my-4 max-w-[640px] px-6 text-center text-sm text-gray-400 sm:text-base"
      >
        <RichText content={projectInfo.description.raw} />
      </motion.div>

      <div className="flex w-full max-w-[330px] flex-wrap items-center justify-center gap-2">
        {projectInfo.technologies.map((tech, i) => (
          <TechBadge
            {...techBadgeAnimation}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            name={tech.name}
            key={`${projectInfo.title}-tech-${tech.name}`}
          />
        ))}
      </div>

      <motion.div
        {...fadeUpAnimation}
        className="my-6 flex flex-col items-center gap-2 sm:my-12 sm:flex-row sm:gap-4"
      >
        <a href={projectInfo.githubUrl} target="_blank" rel="noreferrer">
          <Button className="min-w-[180px]">
            <TbBrandGithub size={20} /> Repositório
          </Button>
        </a>

        {projectInfo.liveProjectUrl && (
          <a href={projectInfo.liveProjectUrl} target="_blank" rel="noreferrer">
            <Button className="min-w-[180px]">
              <FiGlobe size={20} /> Projeto online
            </Button>
          </a>
        )}
      </motion.div>

      <Link href="/projects">
        <HiArrowNarrowLeft size={20} /> Voltar para projetos
      </Link>
    </section>
  )
}

export default ProjectDetails
