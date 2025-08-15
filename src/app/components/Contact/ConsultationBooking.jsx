"use client"

import { useState } from "react"

export function ConsultationBooking() {
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [showContactForm, setShowContactForm] = useState(false)
  const [contactInfo, setContactInfo] = useState({ name: "", email: "", phone: "" })

  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - firstDay.getDay())

    const days = []
    const currentDate = new Date(startDate)

    for (let i = 0; i < 42; i++) {
      days.push(new Date(currentDate))
      currentDate.setDate(currentDate.getDate() + 1)
    }

    return days
  }

  // Available dates (highlighted in blue)
  const availableDates = [18, 19, 20, 21, 22, 25, 26, 27, 28, 29]
  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"]

  const showSuccessToast = () => {
    const toast = document.createElement("div")
    toast.className = "toast toast-top toast-end"
    toast.innerHTML = `
      <div class="alert alert-success">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Consultation booked successfully! Check your email for confirmation.</span>
      </div>
    `
    document.body.appendChild(toast)

    setTimeout(() => {
      toast.remove()
    }, 5000)
  }

  const handleDateSelect = (day) => {
    const dayNumber = day.getDate()
    const isCurrentMonth = day.getMonth() === currentMonth.getMonth()
    const isAvailable = isCurrentMonth && availableDates.includes(dayNumber)
    const today = new Date()
    const isNotPast = day >= today.setHours(0, 0, 0, 0)

    if (isAvailable && isNotPast) {
      setSelectedDate(day)
      setSelectedTime(null) 
    }
  }

  const handleTimeSelect = (time) => {
    setSelectedTime(time)
    setShowContactForm(true)
  }

  const handleBooking = (e) => {
    e.preventDefault()
    if (selectedDate && selectedTime && contactInfo.name && contactInfo.email) {
      showSuccessToast()
      // Reset form after booking
      setTimeout(() => {
        setSelectedDate(null)
        setSelectedTime(null)
        setShowContactForm(false)
        setContactInfo({ name: "", email: "", phone: "" })
      }, 2000)
    }
  }

  const navigateMonth = (direction) => {
    const newMonth = new Date(currentMonth)
    newMonth.setMonth(newMonth.getMonth() + direction)
    setCurrentMonth(newMonth)
  }

  const calendarDays = generateCalendarDays()
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const dayNames = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center px-4 py-14">
      {/* Main Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
        Book Your FREE Consultation Today!
      </h1>

      {/* Booking Widget */}
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Consultant Info */}
          <div className="lg:w-1/3 p-6 bg-gray-50 border-r">
            {/* Profile Section */}
            <div className="flex items-center gap-3 mb-4">
              <div className="avatar">
                <div className="w-12 h-12 rounded-full">
                  <img src="/placeholder.svg?height=48&width=48" alt="Masouda sh" />
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Masouda shams</div>
              </div>
            </div>

            {/* Meeting Info */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4">30 Minute Meeting</h3>

            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>30 min</span>
              </div>

              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
                <span>Web conferencing details provided upon confirmation.</span>
              </div>
            </div>

            {selectedDate && selectedTime && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Selected Appointment</h4>
                <div className="text-sm text-gray-600">
                  <div>
                    {selectedDate.toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div>{selectedTime}</div>
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Calendar & Booking */}
          <div className="lg:w-2/3 p-6">
            {!showContactForm ? (
              <>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Select a Date & Time</h4>

                  {/* Calendar Header */}
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={() => navigateMonth(-1)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    <h5 className="font-semibold text-gray-800">
                      {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                    </h5>

                    <button
                      onClick={() => navigateMonth(1)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {/* Day Headers */}
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {dayNames.map((day) => (
                      <div key={day} className="text-xs font-medium text-gray-500 text-center py-2">
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-1">
                    {calendarDays.map((day, index) => {
                      const dayNumber = day.getDate()
                      const isCurrentMonth = day.getMonth() === currentMonth.getMonth()
                      const isAvailable = isCurrentMonth && availableDates.includes(dayNumber)
                      const today = new Date()
                      const isNotPast = day >= today.setHours(0, 0, 0, 0)
                      const isSelected =
                        selectedDate &&
                        selectedDate.getDate() === dayNumber &&
                        selectedDate.getMonth() === day.getMonth()

                      return (
                        <button
                          key={index}
                          onClick={() => handleDateSelect(day)}
                          disabled={!isAvailable || !isNotPast}
                          className={`
                            h-10 w-10 cursor-pointer  text-sm rounded-lg flex items-center justify-center transition-all duration-200 font-medium
                            ${!isCurrentMonth ? "text-gray-300" : ""}
                            ${isAvailable && isNotPast ? "hover:bg-blue-100 hover:scale-105 cursor-pointer" : "cursor-not-allowed"}
                            ${isSelected ? "bg-blue-500 text-white shadow-lg scale-105" : ""}
                            ${isAvailable && isNotPast && !isSelected ? "bg-blue-50 text-blue-600 border border-blue-200" : ""}
                            ${!isAvailable && isCurrentMonth ? "text-gray-400" : ""}
                          `}
                        >
                          {dayNumber}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Time Zone */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Time zone</div>
                  <div className="flex items-center gap-2 text-sm bg-gray-50 p-3 rounded-lg">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Pacific Time - US & Canada (21:04)</span>
                    <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Time Slots */}
                {selectedDate && (
                  <div className="mb-6">
                    <div className="text-sm font-medium text-gray-700 mb-3">Available Times</div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => handleTimeSelect(time)}
                          className="py-3 px-4 cursor-pointer text-sm border-2 rounded-lg transition-all duration-200 font-medium hover:scale-105 border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="max-w-md mx-auto">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Almost Done!</h4>
                  <p className="text-gray-600 text-sm">Just a few details to confirm your consultation</p>
                </div>

                {/* Appointment Summary Card */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">30 Minute Consultation</div>
                      <div className="text-sm text-gray-600">with masouda shams</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-700 space-y-1">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>
                        {selectedDate.toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{selectedTime}</span>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleBooking} className="space-y-5">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={contactInfo.name}
                          onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                          className="w-full px-4 py-3 text-black pl-11 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white shadow-sm"
                          placeholder="Enter your full name"
                        />
                        <svg
                          className="absolute left-3 top-3.5 w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          required
                          value={contactInfo.email}
                          onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                          className="w-full px-4 text-black py-3 pl-11 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white shadow-sm"
                          placeholder="Enter your email address"
                        />
                        <svg
                          className="absolute left-3 top-3.5 w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                          />
                        </svg>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Phone Number <span className="text-gray-400 text-xs">(Optional)</span>
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          value={contactInfo.phone}
                          onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                          className="w-full px-4 text-black py-3 pl-11 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white shadow-sm"
                          placeholder="Enter your phone number"
                        />
                        <svg
                          className="absolute left-3 top-3.5 w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-6">
                    <button
                      type="button"
                      onClick={() => setShowContactForm(false)}
                      className="flex-1 py-3 cursor-pointer px-6 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-semibold flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                      </svg>
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Confirm Booking
                    </button>
                  </div>
                </form>

                <div className="text-center mt-6">
                  <p className="text-xs text-gray-500">
                    By booking, you agree to receive confirmation details via email
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
