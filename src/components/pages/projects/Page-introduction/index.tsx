'use client'

import Link from '@/components/Link'
import SectionTitle from '@/components/Section-title'
import { motion } from 'framer-motion'
import { HiArrowNarrowLeft } from 'react-icons/hi'

const PageIntroduction = () => {
  return (
    <section className="flex h-[580px] w-full flex-col items-center justify-center bg-hero-image bg-cover bg-center bg-no-repeat px-6 lg:min-h-screen">
      <SectionTitle
        subtitle="projetos"
        title="Meus Projetos"
        className="items-center text-center [&>h3]:text-4xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center"
      >
        <p className="my-6 max-w-[640px] text-center text-sm text-gray-400 sm:text-base">
          Aqui você poderá ver alguns dos trabalhos que eu desenvolvi. Navegue à
          vontade e explore os projetos para ver como foram criados, as
          tecnologias utilizadas e as funcionalidades implementadas.
        </p>

        <Link href="/">
          <HiArrowNarrowLeft />
          Voltar para home
        </Link>
      </motion.div>
    </section>
  )
}

export default PageIntroduction
