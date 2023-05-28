import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItemProps {
  label: string
  href: string
}

const NavItem = ({ label, href }: NavItemProps) => {
  const pathName = usePathname()

  const isActive = pathName === href
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-2 font-mono text-base font-medium text-gray-400',
        isActive && 'text-gray-50',
      )}
    >
      <span className="hidden text-teal-400 sm:flex">#</span>
      {label}
    </Link>
  )
}

export default NavItem
