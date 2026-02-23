import { motion } from 'framer-motion'
import { Zap, Shield, Award, MapPin, Phone, Mail, ChevronDown, Wrench, Lightbulb, Plug, Building, Lock, Star, CheckCircle, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="app">
      <Hero />
      <Services />
      <Portfolio selectedImage={selectedImage} setSelectedImage={setSelectedImage} setShowModal={setShowModal} />
      <Testimonials />
      <Certifications />
      <Map />
      <Footer />
      {showModal && selectedImage && (
        <Modal image={selectedImage} onClose={() => setShowModal(false)} />
      )}
    </div>
  )
}

const Hero = () => (
  <section className="hero">
    <motion.div 
      className="hero-content"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1 
        className="hero-title"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        José Vera - Electricista Profesional
      </motion.h1>
      <motion.p 
        className="hero-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Servicios Eléctricos de Alta Calidad • 24/7 Servicio de Emergencia
      </motion.p>
      <div className="hero-buttons">
        <motion.button 
          className="whatsapp-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open('https://wa.me/+34641893995?text=Hola%20José%20Vera%2C%20electricista%20profesional.%20Me%20gustaría%20consultar%20sobre%20sus%20servicios%20eléctricos.%20Vengo%20de%20su%20página%20web.', '_blank')}
        >
          Contactar por WhatsApp
        </motion.button>
      </div>
    </motion.div>
    <motion.div 
      className="scroll-indicator"
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <ChevronDown size={32} />
    </motion.div>
  </section>
)

const Services = () => (
  <section className="services">
    <motion.h2 
      className="section-title"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      Nuestros Servicios
    </motion.h2>
    <div className="service-cards">
      {[
        { icon: Wrench, title: 'Recableado de Casa', desc: 'Recableado eléctrico completo' },
        { icon: Zap, title: 'Actualización de Panel', desc: 'Instalaciones modernas de paneles' },
        { icon: Lightbulb, title: 'Instalación de Iluminación', desc: 'Soluciones de iluminación profesional' },
        { icon: Plug, title: 'Reparación de Enchufes', desc: 'Reparaciones de enchufes y tomas' },
        { icon: Building, title: 'Cableado Comercial', desc: 'Servicios eléctricos para empresas' },
        { icon: Lock, title: 'Sistemas de Seguridad', desc: 'Cableado avanzado de seguridad' }
      ].map((service, index) => (
        <motion.div 
          key={index}
          className="service-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <service.icon size={48} className="service-icon" />
          <h3>{service.title}</h3>
          <p>{service.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
)

const Portfolio = ({ setSelectedImage, setShowModal }: any) => {
  const images = [
    { img: '/assets/tablero.png', title: 'Panel Upgrade' },
    { img: '/assets/switch_nuevos.png', title: 'Lighting Setup' },
    { img: '/assets/reparando_switch_quemados.png', title: 'Socket Repair' },
    { img: '/assets/instalando.png', title: 'Electrical Installation' },
    { img: '/assets/instalando_cableado_techo.png', title: 'Wiring Project' }
  ]

  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' })
    }
  }

  return (
    <section className="portfolio">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Nuestra Galería
      </motion.h2>
      <div className="portfolio-container">
        <button className="carousel-btn prev" onClick={scrollLeft}>
          <ChevronLeft size={32} />
        </button>
        <div className="portfolio-scroll" ref={scrollRef}>
          {images.map((item, i) => (
            <motion.div 
              key={i}
              className="portfolio-item"
              whileHover={{ scale: 1.05 }}
              onClick={() => { setSelectedImage(item.img); setShowModal(true); }}
            >
              <img src={item.img} alt={item.title} />
              <div className="portfolio-overlay">
                <h4>{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
        <button className="carousel-btn next" onClick={scrollRight}>
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  )
}

const Testimonials = () => (
  <section className="testimonials">
    <motion.h2 
      className="section-title"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      Testimonios de Clientes
    </motion.h2>
    <p className="testimonials-subtitle">La satisfacción de nuestros clientes es nuestra mejor presentación</p>
    <div className="testimonials-grid">
      {[
        { initials: 'MG', name: 'María González', text: 'Excelente servicio. Muy profesional y puntual. Resolvió el problema eléctrico de mi casa en poco tiempo. Lo recomiendo 100%.' },
        { initials: 'CR', name: 'Carlos Rodríguez', text: 'Hizo toda la instalación eléctrica de mi negocio. Trabajo impecable, cumplió con los tiempos acordados y a un precio justo.' },
        { initials: 'AM', name: 'Ana Martínez', text: 'Muy responsable y conocedor de su trabajo. Instaló iluminación inteligente en toda mi casa. Quedé muy satisfecha con el resultado.' },
        { initials: 'JL', name: 'Jorge López', text: 'Rápido, eficiente y honesto. Solucionó un problema que otros electricistas no pudieron resolver. Sin duda lo volvería a contratar.' },
        { initials: 'PS', name: 'Patricia Silva', text: 'Excelente atención y calidad de trabajo. Actualizó todo el tablero eléctrico de mi casa con materiales de primera. Muy recomendable.' },
        { initials: 'RF', name: 'Roberto Fernández', text: 'Profesional, educado y muy cuidadoso con su trabajo. Explica todo claramente y da buenos consejos de mantenimiento.' }
      ].map((testimonial, index) => (
        <motion.div 
          key={index}
          className="testimonial-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
        >
          <div className="testimonial-header">
            <div className="testimonial-avatar">{testimonial.initials}</div>
            <div>
              <h4>{testimonial.name}</h4>
              <div className="stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FFD700" color="#FFD700" />)}
              </div>
            </div>
          </div>
          <p>{testimonial.text}</p>
        </motion.div>
      ))}
    </div>
  </section>
)

const Certifications = () => (
  <section className="certifications">
    <motion.h2 
      className="section-title"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      Nuestras Certificaciones
    </motion.h2>
    <div className="certifications-grid">
      {[
        { icon: CheckCircle, title: 'ISO 9001', desc: 'Gestión de Calidad' },
        { icon: Shield, title: 'ISO 45001', desc: 'Seguridad y Salud' },
        { icon: Zap, title: 'IEC 60364-1', desc: 'Normas de Seguridad Eléctrica' },
        { icon: Building, title: 'IEC 61439-1', desc: 'Cuadros Eléctricos de Baja Tensión' },
        { icon: Award, title: 'SIS Certifications', desc: 'Certificaciones Especializadas (+5)' }
      ].map((cert, index) => (
        <motion.div 
          key={index}
          className="certification-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <cert.icon size={48} className="certification-icon" />
          <h3>{cert.title}</h3>
          <p>{cert.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
)

const Modal = ({ image, onClose }: { image: string, onClose: () => void }) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="modal-close" onClick={onClose}>
        <X size={32} />
      </button>
      <img src={image} alt="Expanded" className="modal-image" />
    </div>
  </div>
)

const Map = () => (
  <section className="map-section">
    <motion.h2 
      className="section-title"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      Encuéntranos
    </motion.h2>
    <motion.div 
      className="map-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12144.0!2d-5.6650542!3d40.9734105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDAuOTczNDEwNQ!5e0!3m2!1ses!2ses!4v1234567890!5m2!1ses!2ses&q=40.9734105,-5.6650542" 
        width="100%" 
        height="400" 
        style={{border:0}} 
        allowFullScreen 
        loading="lazy"
      ></iframe>
    </motion.div>
  </section>
)

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="contact-info">
        <h3>José Vera</h3>
        <p>Servicios eléctricos profesionales con más de 10 años de experiencia. Calidad y seguridad garantizada.</p>
        <p><Phone size={16} /> (+34) 641 89 39 95</p>
        <p><Mail size={16} /> info@josevera.com</p>
        <p><MapPin size={16} /> Salamanca, Calle Dorado Montero 13</p>
      </div>
      <div className="trust-signals">
        <div className="signal">
          <Shield size={32} />
          <span>Licensed & Insured</span>
        </div>
        <div className="signal">
          <Award size={32} />
          <span>10+ Years Experience</span>
        </div>
      </div>
    </div>
  </footer>
)

export default App
