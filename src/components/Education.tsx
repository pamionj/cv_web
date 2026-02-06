const Education = () => {
  const education = [
    {
      degree: "Ingeniería Informática (en curso – último año)",
      institution: "INACAP",
      period: "2025-2026",
      description: "Estudios de ingeniería informática con enfoque en desarrollo de software y sistemas."
    },
    {
      degree: "Analista Programador",
      institution: "INACAP",
      period: "2021-2022",
      description: "Formación en desarrollo de software, bases de datos y programación web."
    },
    {
      degree: "Administración de Empresas",
      institution: "INACAP",
      period: "2007-2011",
      description: "Formación técnica en administración de empresas y gestión de procesos."
    }
  ]

  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-condensed font-bold text-gray-900 mb-12 text-center">
          Educación
        </h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-lg text-primary font-medium">{edu.institution}</p>
                </div>
                <span className="text-sm text-gray-500 mt-2 sm:mt-0">{edu.period}</span>
              </div>
              <p className="text-gray-700 text-sm sm:text-base">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
