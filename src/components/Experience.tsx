const Experience = () => {
  const experiences = [
    {
      title: "Informático / Soporte TI",
      company: "TPF Ingeniería",
      period: "Noviembre 2024 - Junio 2025",
      description: [
        
        "Administración de usuarios y recursos TI en entorno corporativo.", 
        "Soporte técnico presencial y remoto a usuarios de distintas sucursales.", 
        "Gestión de activos tecnológicos (notebooks, PCs, dispositivos móviles e impresoras).", 
        "Instalación y configuración de sistemas operativos, Office y software corporativo.", 
        "Mantenimiento preventivo/correctivo de hardware y software.", 
        "Implementación de medidas básicas de ciberseguridad y optimización de equipos."
      ]
    },
    {
      title: "Operador Informático",
      company: "Colbún Chile",
      period: "Marzo 2024 - Noviembre 2024",
      description: [
        "Rollout y configuración de más de 300 equipos.",
        "Migración de usuarios utilizando Active Directory y ServiceNow",
        "Gestión de incidentes y solicitudes de servicio.",
        "Capacitación de usuarios en el uso de nuevos equipos y software.",
        "Soporte técnico a jefaturas e ingenieros durante proceso de implementación."
      ]
    },
    {
      title: "Informático / Soporte TI ",
      company: "Empresas Ripley",
      period: "Agosto 2023 - Enero 2024",
      description: [
        "Soporte técnico a usuarios internos.",
        "Responsable del soporte TI integral en tienda.", 
        "Diagnóstico y resolución de incidencias de hardware y software.", 
        "Administración básica de cuentas corporativas y herramientas internas (Jira, correo).", 
        "Instalación, configuración y mantención de infraestructura TI y una amplia gama de dispositivos." 
      ]
    }
  ]

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-condensed font-bold text-gray-900 mb-12 text-center">
          Experiencia
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-lg text-primary font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-500 mt-2 sm:mt-0">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm sm:text-base">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
