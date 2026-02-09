import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: "QA Automation Lab",
      description: "Proyecto de automatización de pruebas utilizando Selenium WebDriver y Java. Incluye casos de prueba automatizados para aplicaciones web, reportes de ejecución y buenas prácticas en QA automation.",
      technologies: ["Java", "Selenium", "JUnit", "Maven"],
      githubUrl: "https://github.com/pamionj/qa-automation-lab",
      features: [
        "Framework de automatización modular",
        "Page Object Pattern",
        "Reportes HTML con ExtentReports",
        "Integración con pipelines CI/CD"
      ]
    },
    {
      title: "QA API + SQL Mini Lab",
      description: "Proyecto personal enfocado en testing de APIs utilizando Postman. Ejecución y validación de requests GET y POST, implementación de assertions en JavaScript y simulación de persistencia de datos con SQLite.",
      technologies: ["Postman", "API Testing", "SQLite", "JavaScript"],
      githubUrl: "https://github.com/pamionj/qa-api-sql-lab",
      features: [
        "Ejecución y validación de requests GET y POST",
        "Validación de códigos de estado y payloads",
        "Assertions en JavaScript con scripts Post-response",
        "Simulación de persistencia de datos con SQLite",
        "Consultas SQL básicas para verificación de integridad",
        "Documentación completa del flujo QA end-to-end"
      ]
    },
    {
      title: "Primeros Pasos en Ciberseguridad",
      description: "Repositorio con ejercicios prácticos y notas sobre conceptos fundamentales de ciberseguridad. Incluye análisis de vulnerabilidades, herramientas de seguridad y buenas prácticas.",
      technologies: ["Nmap", "Cybersecurity", "Networking", "Linux"],
      githubUrl: "https://github.com/pamionj/Primeros-pasos-en-Ciberseguridad",
      features: [
        "Detección de sistema operativo, servicios y versiones",
        "Escaneo de puertos y vulnerabilidades",
        "Configuración segura de sistemas",
        "Herramientas de pentesting"
      ]
    }
  ]

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-condensed font-bold text-gray-900 mb-12 text-center">
          Proyectos
        </h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary-dark transition-colors duration-300 mt-2 sm:mt-0"
                >
                  <FaGithub className="mr-2 h-5 w-5" />
                  GitHub
                  <FaExternalLinkAlt className="ml-1 h-3 w-3" />
                </a>
              </div>
              
              <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Tecnologías:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary text-white text-xs sm:text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Características:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm sm:text-base">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
