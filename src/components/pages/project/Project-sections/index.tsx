'use client'

import { fadeUpAnimation } from '@/lib/animations'
import { ProjectSection } from '@/types/projects'
import { motion } from 'framer-motion'
import Image from 'next/image'

type ProjectSectionsProps = {
  sections: ProjectSection[]
}

const ProjectSections = ({ sections }: ProjectSectionsProps) => {
  return (
    <section className="md:md-y-32 container my-12 flex flex-col gap-8 md:gap-32">
      {sections.map((section, index) => (
        <motion.div
          {...fadeUpAnimation}
          transition={{ duration: 0.5 }}
          key={index}
          className="flex flex-col items-center gap-6 md:gap-12"
        >
          <h2 className="text-2xl font-medium text-gray-500 md:text-3xl">
            {section.title}
          </h2>

          <Image
            src={section.image.url}
            width={1080}
            height={672}
            alt={`Imagem da sessão: ${section.title}`}
            unoptimized
            className="aspect-auto w-full rounded-lg object-cover"
          />
        </motion.div>
      ))}
    </section>
  )
}

export default ProjectSections
