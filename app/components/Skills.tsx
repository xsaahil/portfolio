export default function Skills() {
    return (
      <section id="skills" className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">Skills</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              My Technical Expertise
            </p>
          </div>
  
          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {skills.map((skill) => (
                <div key={skill.name} className="relative">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        {skill.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">{skill.name}</h3>
                      <p className="mt-2 text-base text-gray-500 dark:text-gray-300">{skill.description}</p>
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
  
  const skills = [
    {
      name: 'Java',
      description: 'Expert in Java development, including Spring Boot and Java EE.',
      icon: 'J',
    },
    {
      name: 'React',
      description: 'Proficient in building modern web applications with React and Redux.',
      icon: 'R',
    },
    {
      name: 'React Native',
      description: 'Experienced in developing cross-platform mobile apps.',
      icon: 'RN',
    },
    {
      name: 'Node.js',
      description: 'Skilled in server-side JavaScript and building RESTful APIs.',
      icon: 'N',
    },
    {
      name: 'SQL & NoSQL',
      description: 'Proficient with both relational and non-relational databases.',
      icon: 'DB',
    },
    {
      name: 'DevOps',
      description: 'Familiar with CI/CD, Docker, and cloud platforms like AWS and Azure.',
      icon: 'DO',
    },
  ]