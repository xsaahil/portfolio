import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">Projects</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            My Recent Work
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10">
            {projects.map((project, index) => (
              <div key={project.title} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                <div className="w-full md:w-1/2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
                  <div className="mt-4 flex space-x-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Live Demo
                      <ExternalLink className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      GitHub
                      <Github className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with Java Spring Boot, React, and PostgreSQL.',
    image: '/placeholder.svg?height=400&width=600',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
  {
    title: 'Task Management App',
    description: 'A React Native mobile app for task management with a Node.js backend and MongoDB.',
    image: '/placeholder.svg?height=400&width=600',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with Next.js and Tailwind CSS.',
    image: '/placeholder.svg?height=400&width=600',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
]