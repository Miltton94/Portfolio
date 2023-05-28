'use client'

import { useCallback, useEffect, useState } from 'react'
import { TbArrowNarrowUp } from 'react-icons/tb'
import Button from '../Button'
import { AnimatePresence, motion } from 'framer-motion'

const BackToTop = () => {
  const [show, setShow] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const handleScroll = useCallback(() => {
    if (!show && window.scrollY > 500) setShow(true)
    if (show && window.scrollY <= 500) setShow(false)
  }, [show])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, right: -10 }}
          animate={{ opacity: 1, right: 16 }}
          exit={{ opacity: 0, right: -10 }}
          className="fixed bottom-4 right-4 z-20"
        >
          <Button
            className=" h-10 w-10 rounded-full p-2 shadow-lg shadow-teal-400/20"
            onClick={scrollToTop}
          >
            <TbArrowNarrowUp size={24} className="font-bold" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default BackToTop
