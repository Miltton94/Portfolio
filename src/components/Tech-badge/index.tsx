'use client'

import { ComponentProps } from 'react'
import { motion } from 'framer-motion'

type TechBadgeProps = ComponentProps<typeof motion.span> & {
  name: string
}

const TechBadge = ({ name, ...props }: TechBadgeProps) => {
  return (
    <motion.span
      className="rounded-lg bg-teal-900/80 px-3 py-1 text-sm text-teal-400"
      {...props}
    >
      {name}
    </motion.span>
  )
}

export default TechBadge
