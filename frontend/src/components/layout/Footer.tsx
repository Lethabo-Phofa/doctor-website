import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-serif font-bold mb-4">Dr. Smith</h3>
          <p className="text-gray-400">
            Specialized care for women's health and pregnancy, providing compassionate service for over 15 years.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
            <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
            <li><Link to="/appointments" className="text-gray-400 hover:text-white">Book Appointment</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            <li><Link to="/services#prenatal" className="text-gray-400 hover:text-white">Prenatal Care</Link></li>
            <li><Link to="/services#obstetrics" className="text-gray-400 hover:text-white">Obstetrics</Link></li>
            <li><Link to="/services#gynecology" className="text-gray-400 hover:text-white">Gynecology</Link></li>
            <li><Link to="/services#ultrasound" className="text-gray-400 hover:text-white">Ultrasound</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-2 text-gray-400">
            <li>123 Medical Center Drive</li>
            <li>Suite 456</li>
            <li>City, State 12345</li>
            <li>Phone: (555) 123-4567</li>
            <li>Email: info@drsmith.com</li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 Dr. Smith. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 