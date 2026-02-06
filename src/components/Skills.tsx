import { FaCheck } from 'react-icons/fa'

const Skills = () => {
  const skillCategories = [
    {
      title: "QA & Testing",
      skills: [
        "Selenium WebDriver",
        "JUnit",
        "TestNG",
        "Cypress",
        "Postman",
        "JIRA",
        "Pruebas Funcionales",
        "Pruebas de Regresión"
      ]
    },
    {
      title: "Lenguajes / Herramientas",
      skills: [
        "Java",
        "Python",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
        "SQL",
        "Git",
        "GitHub"
      ]
    },
    {
      title: "Otros",
      skills: [
        "Metodologías Ágiles",
        "Scrum",
        "Base de Datos",
        "Redes",
        "Soporte Técnico",
        "Microsoft Office",
        "Windows/Linux"
      ]
    }
  ]

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-condensed font-bold text-gray-900 mb-12 text-center">
          Habilidades
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-primary mb-6 text-center">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-gray-700">
                    <FaCheck className="text-primary mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
