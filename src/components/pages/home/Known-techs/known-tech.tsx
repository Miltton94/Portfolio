import CMSIcon from '@/components/Cms-icon'
import { KnownTech as IKnownTech } from '@/types/projects'
import { getRelativeTimeString } from '@/utils/get-relative-time'

interface KnownTechProps {
  tech: IKnownTech
}

const KnownTech = ({ tech }: KnownTechProps) => {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate),
    'pt-BR',
  ).replace('há', '')
  return (
    <div className="flex flex-col gap-2 rounded-lg bg-gray-600/20 p-6 text-gray-500 transition-all hover:bg-gray-600/30 hover:text-teal-500">
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        <CMSIcon icon={tech.iconSvg} />
      </div>

      <span>{relativeTime} de experiência</span>
    </div>
  )
}

export default KnownTech
