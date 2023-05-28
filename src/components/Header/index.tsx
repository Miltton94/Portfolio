'use client'

import Image from 'next/image'
import Link from 'next/link'
import NavItem from './nav-item'

import { motion } from 'framer-motion'
import MenuMobile from './MenuMobile'
// import { Dispatch, SetStateAction, useState } from 'react'

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projetos',
    href: '/projects',
  },
]

// type HeaderProps = {
//   setMenuIsVisible: Dispatch<SetStateAction<boolean>>
// }

const Header = () => {
  return (
    <motion.header
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 z-10 flex h-24 w-full items-center justify-center"
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logo-white.svg"
            alt="Logo"
            height={60}
            width={58}
            className="h-20 w-20"
          />
        </Link>

        <nav className="hidden items-center gap-10 sm:flex">
          {NAV_ITEMS.map((item) => {
            return <NavItem {...item} key={item.label} />
          })}
        </nav>

        <MenuMobile />
      </div>
    </motion.header>
  )
}

export default Header
