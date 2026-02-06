import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-primary">Contacto</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="mr-2 text-primary" />
                <a href="mailto:pamionj@gmail.com" className="hover:text-primary transition-colors">
                  pamionj@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <FaPhone className="mr-2 text-primary" />
                <span>+569 94000569</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-primary">Enlaces Rápidos</h3>
            <div className="space-y-2">
              <a href="#about" className="block hover:text-primary transition-colors">Sobre Mí</a>
              <a href="#experience" className="block hover:text-primary transition-colors">Experiencia</a>
              <a href="#projects" className="block hover:text-primary transition-colors">Proyectos</a>
              <a href="/PabloAmion_QA_Junior_ES.pdf" 
                 download="PabloAmion_QA_Junior_ES.pdf"
                 className="block hover:text-primary transition-colors">
                Descargar CV
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4 text-primary">Sígueme</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://www.linkedin.com/in/pamionj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/pamionj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors transform hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Pablo Amion. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Desarrollado con Next.js y Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
