'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              Sahil Shaikh
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            {/* <NavLink href="#projects">Projects</NavLink> */}
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="#about" mobile>About</NavLink>
            <NavLink href="#skills" mobile>Skills</NavLink>
            <NavLink href="#projects" mobile>Projects</NavLink>
            <NavLink href="#contact" mobile>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, children, mobile = false }: { href: string; children: React.ReactNode; mobile?: boolean }) {
  const baseClasses = "text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400"
  const desktopClasses = "text-sm font-medium"
  const mobileClasses = "block px-3 py-2 rounded-md text-base font-medium"

  return (
    <Link href={href} className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}>
      {children}
    </Link>
  )
}