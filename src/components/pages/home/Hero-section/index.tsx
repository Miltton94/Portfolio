'use client'

import TechBadge from '@/components/Tech-badge'
import Image from 'next/image'

import ButtonContact from './button-contact'
import { HomePageInfo } from '@/types/page-info'
import { RichText } from '@graphcms/rich-text-react-renderer'
import CMSIcon from '@/components/Cms-icon'

import { motion } from 'framer-motion'

type HeroSectionProps = {
  homeInfo: HomePageInfo
}

const HeroSection = ({ homeInfo }: HeroSectionProps) => {
  return (
    <section className="flex w-full flex-col justify-end bg-hero-image bg-cover bg-center bg-no-repeat py-32 pb-10 sm:pb-32 lg:min-h-screen lg:pb-[110px]">
      <div className="container flex flex-col-reverse items-start justify-between lg:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, x: -100 }}
          className="w-full lg:max-w-[530px]"
        >
          <span className="font-mono text-teal-400">Olá, meu nome é</span>

          <h2 className="mt-2 text-4xl font-medium">Milton</h2>

          <div className="my-6 text-sm text-gray-400 sm:text-base">
            <RichText content={homeInfo.introduction.raw} />
          </div>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {homeInfo.technologies.map((tech, i) => (
              <TechBadge
                name={tech.name}
                key={`intro-tech-${tech.name}`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.2, delay: i * 0.1 }}
              />
            ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-5 lg:mt-10">
            <ButtonContact />

            <div className="flex h-20 items-center gap-3 text-2xl text-gray-600">
              {homeInfo.socials.map((social, index) => (
                <a
                  href={social.url}
                  key={`contact-${index}`}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-gray-100"
                >
                  <CMSIcon icon={social.iconSvg} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0 }}
          transition={{ duration: 0.5 }}
          className="origin-center"
        >
          <Image
            src={homeInfo.profilePicture.url}
            alt="Foto de perfil"
            width={420}
            height={404}
            className="mb-6 h-[300px] w-[300px] rounded-lg object-cover object-top shadow-2xl lg:mb-0 lg:h-[404px] lg:w-[420px]"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
