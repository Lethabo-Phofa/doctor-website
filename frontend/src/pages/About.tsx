import { motion } from 'framer-motion'

const About = () => {
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
          <h1 className="text-4xl font-serif font-bold mb-6">About Dr. Smith</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to providing exceptional women's healthcare with compassion, 
            expertise, and a personalized approach.
          </p>
        </motion.div>

        {/* Doctor's Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3"
              alt="Dr. Smith"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl font-serif font-bold mb-4">Dr. Sarah Smith, MD, FACOG</h2>
            <p className="text-gray-600 mb-6">
              With over 15 years of experience in obstetrics and gynecology, Dr. Smith 
              has dedicated her career to providing comprehensive women's healthcare. 
              She completed her medical degree at Harvard Medical School and her 
              residency at Johns Hopkins Hospital.
            </p>
            <ul className="space-y-4">
              {qualifications.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Practice Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-primary-50 p-12 rounded-lg mb-20"
        >
          <h2 className="text-3xl font-serif font-bold mb-6 text-center">
            Our Practice Philosophy
          </h2>
          <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto">
            We believe in providing personalized, evidence-based care that empowers 
            women to make informed decisions about their health. Our practice combines 
            cutting-edge medical expertise with a compassionate, patient-centered approach.
          </p>
        </motion.div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const qualifications = [
  "Board Certified in Obstetrics and Gynecology",
  "Fellow of the American College of Obstetricians and Gynecologists",
  "Specialized in High-Risk Pregnancies",
  "Advanced Training in Minimally Invasive Surgery",
  "Published Researcher in Women's Health"
]

const team = [
  {
    name: "Dr. Sarah Smith",
    role: "Lead Gynecologist & Obstetrician",
    description: "Specializing in high-risk pregnancies and minimally invasive surgery.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3"
  },
  {
    name: "Nurse Jennifer Wilson",
    role: "Head Nurse",
    description: "Over 10 years of experience in women's health nursing care.",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3"
  },
  {
    name: "Lisa Thompson",
    role: "Practice Manager",
    description: "Ensuring smooth operations and excellent patient experience.",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3"
  }
]

export default About 