import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {

    // Linkedin: https://www.linkedin.com/in/itssaahiil/
    // Github: https://github.com/xsaahil
    // Twitter: https://x.com/Saahiil2
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="https://github.com/xsaahil" className="text-gray-400 hover:text-gray-500" target="_blank" rel="noopener noreferrer">
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/itssaahiil/" className="text-gray-400 hover:text-gray-500" target="_blank" rel="noopener noreferrer">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" aria-hidden="true" />
          </a>
          <a href="https://x.com/Saahiil2" className="text-gray-400 hover:text-gray-500" target="_blank" rel="noopener noreferrer">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} Sahil S. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}