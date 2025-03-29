import { useState } from 'react'
import { motion } from 'framer-motion'
import { format } from 'date-fns'

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [appointmentType, setAppointmentType] = useState<string>('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement appointment booking logic
    console.log({ selectedDate, selectedTime, appointmentType })
  }

  return (
    <div className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-serif font-bold mb-6 text-center">
            Book an Appointment
          </h1>
          <p className="text-gray-600 mb-12 text-center">
            Choose your preferred date and time for your appointment. We'll confirm 
            your booking within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type of Appointment
              </label>
              <select
                value={appointmentType}
                onChange={(e) => setAppointmentType(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                required
              >
                <option value="">Select appointment type</option>
                {appointmentTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={format(new Date(), 'yyyy-MM-dd')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Time
              </label>
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                required
              >
                <option value="">Select time slot</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full btn-primary"
            >
              Request Appointment
            </button>
          </form>

          <div className="mt-12 bg-primary-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-4">Important Information:</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {appointmentInfo.map((info, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>{info}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const appointmentTypes = [
  { value: 'routine', label: 'Routine Check-up' },
  { value: 'prenatal', label: 'Prenatal Visit' },
  { value: 'ultrasound', label: 'Ultrasound' },
  { value: 'consultation', label: 'Initial Consultation' },
  { value: 'followup', label: 'Follow-up Visit' }
]

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
]

const appointmentInfo = [
  'Please arrive 15 minutes before your scheduled appointment time.',
  'Bring your insurance card and photo ID.',
  'First-time patients should complete new patient forms prior to arrival.',
  'We require 24-hour notice for appointment cancellations.',
  'If you are experiencing a medical emergency, please call 911 or go to the nearest emergency room.'
]

export default Appointments 