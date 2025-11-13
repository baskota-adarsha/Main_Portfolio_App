export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-15 sm:py-16">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-gray-800 font-medium text-center">
            Built with <span className="text-red-500">❤️</span> by Adarsha Baskota
          </p>
          <p className="text-gray-600 text-sm text-center">© {currentYear} Adarsha Baskota. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
