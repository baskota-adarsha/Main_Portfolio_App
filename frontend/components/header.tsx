import Link from "next/link"
import MobileMenuButton from "./mobile-menu-button"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
    { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
  { label: "Work", href: "/work" },

]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
         Adarsha Baskota
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-gray-700 hover:text-teal-600 transition-colors font-medium text-sm"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button - Client Component */}
        <MobileMenuButton navItems={navItems} />
      </nav>
    </header>
  )
}
