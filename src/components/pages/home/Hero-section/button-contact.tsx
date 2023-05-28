'use client'

import Button from '@/components/Button'
import { HiArrowNarrowRight } from 'react-icons/hi'

const ButtonContact = () => {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Button className="w-max shadow-button" onClick={handleContact}>
      Entre em contato <HiArrowNarrowRight size={18} />
    </Button>
  )
}

export default ButtonContact
