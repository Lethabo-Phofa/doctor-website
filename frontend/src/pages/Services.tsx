import { motion } from 'framer-motion'

const Services = () => {
  return (
    <div className="py-20">
      <div className="container">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-serif font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive women's healthcare services tailored to your needs at every 
            stage of life.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className={index % 2 === 0 ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}>
                <h2 className="text-3xl font-serif font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 0 ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-primary-50 p-12 rounded-lg mt-20 text-center"
        >
          <h2 className="text-3xl font-serif font-bold mb-6">
            Ready to Schedule Your Visit?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're seeking routine care or have specific concerns, we're here 
            to provide the expert care you deserve.
          </p>
          <a
            href="/appointments"
            className="btn-primary inline-block"
          >
            Book an Appointment
          </a>
        </motion.div>
      </div>
    </div>
  )
}

const services = [
  {
    id: "prenatal",
    title: "Prenatal Care",
    description: "Comprehensive care throughout your pregnancy journey, ensuring the health and well-being of both mother and baby.",
    image: "https://images.unsplash.com/photo-1584582397815-d9621d228530?ixlib=rb-4.0.3",
    features: [
      "Regular check-ups and monitoring",
      "Prenatal genetic testing",
      "Nutritional counseling",
      "High-risk pregnancy management",
      "Birth planning support"
    ]
  },
  {
    id: "gynecology",
    title: "Gynecology Services",
    description: "Complete gynecological care for women at every stage of life, from adolescence through menopause and beyond.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3",
    features: [
      "Annual well-woman exams",
      "Cancer screenings",
      "Family planning services",
      "Treatment for gynecological conditions",
      "Menopause management"
    ]
  },
  {
    id: "ultrasound",
    title: "Ultrasound Services",
    description: "State-of-the-art ultrasound technology for accurate diagnostics and monitoring throughout your pregnancy.",
    image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-4.0.3",
    features: [
      "3D/4D ultrasound imaging",
      "First trimester screening",
      "Growth monitoring",
      "Gender determination",
      "Detailed anatomy scans"
    ]
  }
]

export default Services 