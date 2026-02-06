'use client'

import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa'
import { FaDownload } from 'react-icons/fa'
import { useState } from 'react'

const Hero = () => {
  const [imageError, setImageError] = useState(false)

  return (
    <section id="about" className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-primary-dark">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8">
          {!imageError ? (
            <img
              className="mx-auto h-32 w-32 sm:h-40 sm:w-40 lg:h-48 lg:w-48 rounded-full border-4 border-white shadow-xl object-cover"
              src="/profile.jpeg"
              alt="Pablo Amion"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="mx-auto h-32 w-32 sm:h-40 sm:w-40 lg:h-48 lg:w-48 rounded-full border-4 border-white shadow-xl flex items-center justify-center bg-primary">
              <span className="text-white text-4xl font-bold">PA</span>
            </div>
          )}
        </div>

        {/* Name and Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-condensed font-bold text-white mb-4">
          Pablo
          <span className="text-white"> Amion</span> Jeria
        </h1>

        <div className="text-lg sm:text-xl text-white mb-6 font-medium">
          QA Automation Engineer / QA Analyst Junior
        </div>

        {/* Contact Info */}
        <div className="text-sm sm:text-base text-white mb-8 space-y-1">
          <div className="flex justify-center items-center space-x-2">
            <span>📧</span>
            <a href="mailto:pamionj@gmail.com" className="hover:text-gray-200 transition-colors">
              pamionj@gmail.com
            </a>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <span>📱</span>
            <span>+569 94000569</span>
          </div>
        </div>

        {/* Download CV Button */}
        <div className="mb-8">
          <a
            href="/PabloAmion_QA_Junior_ES.pdf"
            download="PabloAmion_QA_Junior_ES.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
          >
            <FaDownload className="mr-2 h-5 w-5" />
            Descargar CV
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/pamionj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 transition-colors duration-300 transform hover:scale-110"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/pamionj"
            target="_blank"
            className="text-white hover:text-gray-200 transition-colors duration-300 transform hover:scale-110"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          <a
            href="#!"
            className="text-white hover:text-gray-200 transition-colors duration-300 transform hover:scale-110"
          >
            <FaTwitter className="h-6 w-6" />
          </a>
          <a
            href="#!"
            className="text-white hover:text-gray-200 transition-colors duration-300 transform hover:scale-110"
          >
            <FaFacebook className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
