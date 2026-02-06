const Awards = () => {
  const achievements = [
    {
      title: "Estrategia Digital y SEO",
      category: "Optimización SEO y Conversión",
      project: "biomagnetismoyterapiasalternativas.cl",
      description: "Ejecuté una estrategia integral de SEO que posicionó al sitio en los primeros resultados de búsqueda para palabras clave estratégicas. Como resultado directo, se duplicó la cartera de pacientes y la facturación neta de la clínica.",
      impact: "Duplicación de cartera de pacientes y facturación"
    },
    {
      title: "Estrategia Digital y SEO",
      category: "Optimización de Experiencia de Usuario (UX)",
      description: "Implementé mejoras basadas en análisis de datos y herramientas de monitoreo web, logrando una navegación más fluida y una mayor tasa de retención de usuarios en el sitio.",
      impact: "Mayor retención de usuarios y mejor UX"
    },
    {
      title: "Soporte IT y Optimización de Sistemas",
      category: "Modernización de Terminales de Venta",
      project: "Ripley",
      description: "Optimicé el rendimiento de 'tótems' de consulta de precios basados en hardware legado, eliminando cuellos de botella y mejorando la operatividad diaria del personal.",
      impact: "Mejora operativa y eliminación de cuellos de botella"
    },
    {
      title: "Soporte IT y Optimización de Sistemas",
      category: "Mantenimiento de Infraestructura Crítica",
      description: "Resolví problemas crónicos de hardware en sistemas de etiquetado y reestructuré el cableado de red local, garantizando la continuidad operativa y reduciendo los tiempos de inactividad por fallos técnicos.",
      impact: "Reducción de tiempos de inactividad y continuidad operativa"
    },
    {
      title: "Ciberseguridad y Gestión de Activos",
      category: "Implementación de Protocolos de Seguridad",
      project: "TPF Ingeniería",
      description: "Implementé protocolos básicos de seguridad (bloqueo de trackers, actualización de software y limpieza de malware) en la flota de laptops y móviles de la empresa. Adicionalmente, realicé capacitaciones a usuarios para prevenir ataques de ingeniería social.",
      impact: "Mejora de seguridad y prevención de ataques"
    },
    {
      title: "Ciberseguridad y Gestión de Activos",
      category: "Upgrade y Gestión de Hardware",
      description: "Especialista en el diagnóstico, selección y montaje de componentes (almacenamiento SSD, memoria RAM, fuentes de poder), asegurando la compatibilidad total con la arquitectura de los equipos y extendiendo su vida útil.",
      impact: "Extensión de vida útil de equipos y optimización"
    }
  ]

  return (
    <section id="awards" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-condensed font-bold text-gray-900 mb-12 text-center">
          Impacto y Resultados Profesionales
        </h2>
        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{achievement.title}</h3>
                <p className="text-primary font-medium text-sm">{achievement.category}</p>
                {achievement.project && (
                  <p className="text-gray-600 text-sm">Proyecto: {achievement.project}</p>
                )}
              </div>
              <p className="text-gray-700 text-sm sm:text-base mb-3 leading-relaxed">
                {achievement.description}
              </p>
              <div className="bg-primary bg-opacity-10 px-3 py-2 rounded-md">
                <p className="text-primary font-semibold text-sm">
                  <span className="font-bold">Impacto:</span> {achievement.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Awards
