'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useEffect } from 'react'

import Profile from "../../assets/Sahil.jpg"
export default function Hero() {
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      e.preventDefault()
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
      if (href) {
        const targetId = href.replace('#', '')
        const elem = document.getElementById(targetId)
        elem?.scrollIntoView({
          behavior: 'smooth'
        })
      }
    }

    const link = document.querySelector('a[href="#contact"]')
    link?.addEventListener('click', handleSmoothScroll as EventListener)

    return () => {
      link?.removeEventListener('click', handleSmoothScroll as EventListener)
    }
  }, [])

  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="inline">Hi, I'm </span>
              <span className="inline text-indigo-600 dark:text-indigo-400">Sahil</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Full Stack Java, React and React Native Developer
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Get in touch
                  <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src={Profile}
              alt="Sahil S"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}