import Link from 'next/link'
import Button from '@/components/Button'
import { HiArrowNarrowLeft } from 'react-icons/hi'

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-9xl font-bold text-emerald-500">404</h1>
      <h2 className="mb-4 text-3xl font-medium text-gray-400">
        Página não encontrada
      </h2>
      <Link href="/">
        <Button>
          <HiArrowNarrowLeft size={20} />
          Voltar para Home
        </Button>
      </Link>
    </div>
  )
}
