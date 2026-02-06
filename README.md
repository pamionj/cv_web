# 🚀 CV Web - Pablo Amion

> Un currículum vitae interactivo y moderno desarrollado con Next.js y Tailwind CSS, optimizado para dispositivos móviles y con diseño responsive.

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz limpia y profesional con Tailwind CSS
- 📱 **Mobile-First**: Totalmente responsive para todos los dispositivos
- ⚡ **Alto Rendimiento**: Optimizado con Next.js para carga rápida
- 🎯 **SEO Optimizado**: Meta tags y estructura semántica
- 🔧 **TypeScript**: Código tipado y mantenible
- 🌙 **Modo Oscuro**: Diseño elegante con esquema de colores profesional

## 🛠️ Tecnologías Utilizadas

### Frontend
- **[Next.js 14](https://nextjs.org/)** - Framework React con renderizado del lado del servidor
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado de JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[React Icons](https://react-icons.github.io/react-icons/)** - Biblioteca de iconos

### Desarrollo
- **[ESLint](https://eslint.org/)** - Linting y calidad de código
- **[PostCSS](https://postcss.org/)** - Procesamiento CSS
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - Compatibilidad CSS

## 📋 Estructura del Proyecto

```
cv_web/
├── public/                 # Archivos estáticos
│   ├── profile.jpeg       # Foto de perfil
│   └── PabloAmion_QA_Junior_ES.pdf # CV para descarga
├── src/
│   ├── app/              # Páginas Next.js
│   │   ├── globals.css   # Estilos globales
│   │   ├── layout.tsx   # Layout principal
│   │   └── page.tsx    # Página principal
│   └── components/       # Componentes React
│       ├── Navigation.tsx # Navegación responsive
│       ├── Hero.tsx      # Sección principal
│       ├── About.tsx     # Sobre mí
│       ├── Experience.tsx # Experiencia laboral
│       ├── Education.tsx  # Educación
│       ├── Skills.tsx     # Habilidades técnicas
│       ├── Projects.tsx   # Proyectos destacados
│       ├── Awards.tsx     # Impacto y resultados
│       └── Footer.tsx     # Pie de página
├── .gitignore           # Archivos ignorados por Git
├── next.config.js       # Configuración Next.js
├── tailwind.config.js   # Configuración Tailwind
├── tsconfig.json        # Configuración TypeScript
└── package.json         # Dependencias y scripts
```

## 🚀 Empezar

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/pamionj/cv_web.git

# Navegar al proyecto
cd cv_web

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) para ver el CV.

## 📱 Secciones del CV

### 🎯 **Contacto**
- Foto de perfil profesional
- Información de contacto
- Enlaces a redes sociales
- Descarga directa del CV

### 💼 **Experiencia**
- QA Analyst Junior en TPF Ingeniería
- Operador Informático en Colbún Chile
- Soporte TI en Empresas Ripley

### 🎓 **Educación**
- Ingeniería Informática (en curso)
- Analista Programador
- Administración de Empresas

### 🔧 **Habilidades**
- **QA & Testing**: Selenium, JUnit, Cypress, Postman
- **Lenguajes**: Java, Python, JavaScript, TypeScript
- **Otros**: Metodologías Ágiles, Redes, Ciberseguridad

### 🚀 **Proyectos**
- **QA Automation Lab**: Framework de automatización con Selenium
- **Ciberseguridad**: Herramientas de seguridad y análisis

### 🏆 **Impacto y Resultados**
- Estrategia SEO y optimización UX
- Modernización de sistemas críticos
- Implementación de protocolos de seguridad

## 🌐 Despliegue

### Vercel (Recomendado)
El sitio está configurado para despliegue automático en Vercel:

1. Conectar repositorio GitHub a Vercel
2. Configurar variables de entorno (si aplica)
3. Despliegue automático en cada push

### Build Estático
```bash
# Construir versión estática
npm run build

# Archivos generados en /out
```

## 🎨 Características de Diseño

- **Responsive Design**: Mobile-first con breakpoints optimizados
- **Microinteracciones**: Hover effects y transiciones suaves
- **Tipografía**: Fuentes profesionales (Saira Extra Condensed, Muli)
- **Colores**: Esquema primario con acentos profesionales
- **Accesibilidad**: Estructura semántica y navegación por teclado

## 📊 Performance

- **First Contentful Paint**: ~1.2s
- **Largest Contentful Paint**: ~1.8s  
- **Cumulative Layout Shift**: ~0.05
- **Time to Interactive**: ~2.1s

## 🤝 Contribuir

Este es un proyecto personal de portafolio. Las sugerencias son bienvenidas:

1. Fork el proyecto
2. Crear feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo licencia MIT License - ver archivo [LICENSE](LICENSE) para detalles.

## 👨‍💻 Autor

**Pablo Amion**
- Email: [pamionj@gmail.com](mailto:pamionj@gmail.com)
- LinkedIn: [linkedin.com/in/pamionj](https://www.linkedin.com/in/pamionj)
- GitHub: [github.com/pamionj](https://github.com/pamionj)

---

⭐ Si te gusta este proyecto, dale una estrella en GitHub!
