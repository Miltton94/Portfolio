const Footer = () => {
  return (
    <footer className="flex h-14 w-full items-center justify-center bg-gray-950">
      <span className="flex items-center gap-1.5 font-mono text-xs text-gray-400 sm:text-sm">
        Made by <strong className="font-medium">Milton</strong> ©{' '}
        {new Date().getFullYear()}
      </span>
    </footer>
  )
}

export default Footer
