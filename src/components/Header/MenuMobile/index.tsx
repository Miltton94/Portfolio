'use client'

import { AiOutlineClose } from 'react-icons/ai'
import NavItem from '../nav-item'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { cn } from '@/lib/utils'

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

type MenuMobileProps = {
  menuIsVisible: boolean
  setMenuIsVisible: Dispatch<SetStateAction<boolean>>
}

const MenuMobile = ({ menuIsVisible, setMenuIsVisible }: MenuMobileProps) => {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto'
  }, [menuIsVisible])

  return (
    <section
      className={cn(
        'pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full translate-y-32 justify-center bg-blurMenu opacity-0 backdrop-blur-sm transition-all duration-500 ',
        menuIsVisible && 'pointer-events-auto translate-y-0 opacity-100',
      )}
    >
      <AiOutlineClose
        onClick={() => setMenuIsVisible(false)}
        className={cn(
          'absolute right-6 top-8 h-8 w-8 rotate-45 cursor-pointer transition-all duration-500 ',
          menuIsVisible && 'rotate-0 ',
        )}
      />

      <nav
        onClick={() => setMenuIsVisible(false)}
        className={cn(
          'mt-20 flex scale-50 flex-col items-center gap-10 transition-all duration-700 ',
          menuIsVisible && 'scale-100',
        )}
      >
        {NAV_ITEMS.map((item) => {
          return <NavItem {...item} key={item.label} />
        })}
      </nav>
    </section>
  )
}

export default MenuMobile
