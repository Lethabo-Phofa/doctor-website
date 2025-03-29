import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary-50 py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Compassionate Women's Healthcare
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Specialized care for every stage of your journey, from routine check-ups 
                to pregnancy and beyond.
              </p>
              <div className="flex gap-4">
                <Link to="/appointments" className="btn-primary">
                  Book Appointment
                </Link>
                <Link to="/services" className="btn-secondary">
                  Our Services
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3"
                alt="Doctor consulting with patient"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-primary-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to={service.link} 
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Learn more →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Ready to Schedule Your Visit?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We're here to provide you with exceptional care. Book your appointment 
            today and take the first step towards better health.
          </p>
          <Link 
            to="/appointments" 
            className="bg-white text-primary-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule Now
          </Link>
        </div>
      </section>
    </div>
  )
}

const services = [
  {
    icon: "👶",
    title: "Prenatal Care",
    description: "Comprehensive care throughout your pregnancy journey, ensuring the health of both mother and baby.",
    link: "/services#prenatal"
  },
  {
    icon: "👩‍⚕️",
    title: "Gynecology",
    description: "Regular check-ups and specialized care for all aspects of women's health.",
    link: "/services#gynecology"
  },
  {
    icon: "🔬",
    title: "Diagnostics",
    description: "State-of-the-art ultrasound and testing facilities for accurate diagnostics.",
    link: "/services#diagnostics"
  }
]

export default Home 