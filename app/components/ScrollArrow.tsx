'use client'

import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

const sections = ['hero', 'about', 'skills', 'projects', 'contact']

export default function ScrollArrow() {
  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.findIndex((section) => section === entry.target.id)
            if (index !== -1) {
              setCurrentSection(index)
            }
          }
        })
      },
      { threshold: 0.5 }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToNextSection = () => {
    const nextSection = sections[currentSection + 1]
    if (nextSection) {
      const element = document.getElementById(nextSection)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  if (currentSection === sections.length - 1) return null

  return (
    <button
      onClick={scrollToNextSection}
      className="fixed bottom-8 right-8 bg-indigo-600 text-white rounded-full p-2 shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 ease-in-out animate-bounce"
      aria-label="Scroll to next section"
    >
      <ChevronDown size={24} />
    </button>
  )
}