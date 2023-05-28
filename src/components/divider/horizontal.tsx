import { cn } from '@/lib/utils'

interface HorizontalDividerProps {
  className?: string
}

const HorizontalDivider = ({ className }: HorizontalDividerProps) => {
  return (
    <div className={cn('my-8 w-full border-b border-b-gray-800', className)} />
  )
}

export default HorizontalDivider
