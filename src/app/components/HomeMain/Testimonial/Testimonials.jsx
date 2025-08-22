"use client"
import { useState, useEffect, useRef } from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"

const testimonials = [
  {
    id: 1,
    company: "SQUIRE",
    quote:
      "Robin consistently delivers clean, intuitive designs that strike the perfect balance between aesthetic and usability. Whether it's for a complex workflow or a lightweight self-service feature, the user experience always feels effortless and refined.",
    author: "Dave Salvant",
    title: "Co-founder of Squire",
    avatar: "/dave-salvant-headshot.png",
    initials: "DS",
  },
  {
    id: 2,
    company: "TECHFLOW",
    quote:
      "Working with Robin transformed our entire product experience. The attention to detail and user-centric approach resulted in a 40% increase in user engagement and significantly reduced support tickets.",
    author: "Sarah Chen",
    title: "CEO of TechFlow",
    avatar: "/professional-woman-headshot.png",
    initials: "SC",
  },
  {
    id: 3,
    company: "NEXUS",
    quote:
      "The design system Robin created for us became the foundation of our entire platform. It's scalable, beautiful, and has enabled our team to ship features 3x faster while maintaining consistency.",
    author: "Marcus Rodriguez",
    title: "Head of Product at Nexus",
    avatar: "/professional-man-headshot.png",
    initials: "MR",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const splideRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (splideRef.current) {
        splideRef.current.splide.go("+1")
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const getCardTransform = (index, currentIndex) => {
    const diff = (index - currentIndex + testimonials.length) % testimonials.length
    if (diff === 0) {
      // Active card - front and center
      return {
        transform: "translateZ(0px) translateY(0px) rotateY(0deg) rotateX(0deg)",
        opacity: 1,
        zIndex: 30,
      }
    } else if (diff === 1) {
      // Next card - slightly behind and to the right
      return {
        transform: "translateZ(-80px) translateY(20px) translateX(40px) rotateY(-15deg) rotateX(5deg)",
        opacity: 0.8,
        zIndex: 20,
      }
    } else if (diff === 2) {
      // Third card - further behind and to the left
      return {
        transform: "translateZ(-160px) translateY(40px) translateX(-40px) rotateY(15deg) rotateX(10deg)",
        opacity: 0.6,
        zIndex: 10,
      }
    } else {
      // Hidden cards
      return {
        transform: "translateZ(-240px) translateY(60px) rotateY(0deg) rotateX(15deg)",
        opacity: 0.3,
        zIndex: 5,
      }
    }
  }

  const splideOptions = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    arrows: false,
    pagination: false,
    autoplay: false,
    speed: 1000,
    easing: "ease-out",
    focus: "center",
    trimSpace: false,
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header Section - restored original styling */}
        <div className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-primary py-8 mb-4 leading-tight">
            What Client Are Saying
          </h1>
        </div>

        <div
          className="relative max-w-2xl mx-auto  h-[500px]"
          style={{
            perspective: "1200px",
            perspectiveOrigin: "center center",
          }}
        >
          {/* Original binding  visual effect */}
          <div className="absolute  top-0 left-1/2 transform -translate-x-1/2 z-40">
           {/* <div className="absolute -top-24 -z-40  left-10 w-12 h-32 rotate-12 bg-[#CECECE]   rounded-lg shadow-inner"></div> */}
            <div className="h-6 w-32  top-4 border-8 mt-2 shadow-gray-600 border-[#CECECE] rounded-full shadow-inner   transform  opacity-80"></div>
          </div>

          <div className="opacity-0 absolute   -z-10">
            <Splide ref={splideRef} options={splideOptions} onMoved={(splide, newIndex) => setCurrentIndex(newIndex)}>
              {testimonials.map((testimonial) => (
                <SplideSlide key={testimonial.id}>
                  <div></div>
                </SplideSlide>
              ))}
            </Splide>
          </div>

          {testimonials.map((testimonial, index) => {
            const cardStyle = getCardTransform(index, currentIndex)

            return (
              <div
                key={testimonial.id}
                className="absolute top-0 left-0 w-full bg-white shadow-2xl border-0 p-8 rounded-xl cursor-pointer select-none transition-all duration-1000 ease-out transform-gpu"
                style={{
                  ...cardStyle,
                  background: "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)",
                  boxShadow: `
                    0 ${25 + index * 10}px ${50 + index * 20}px -12px rgba(0, 0, 0, ${0.15 + index * 0.05}),
                    0 0 0 1px rgba(255, 255, 255, 0.8),
                    inset 0 1px 0 rgba(255, 255, 255, 0.9)
                  `,
                }}
                onClick={() => {
                  if (index !== currentIndex && splideRef.current) {
                    splideRef.current.splide.go(index)
                  }
                }}
              >
               
                <div className="absolute  flex gap-3">
                  <div className="w-2 h-2 bg-gray-200 rounded-full shadow-inner"></div>
                  <div className="w-2 h-2 bg-gray-200 rounded-full shadow-inner"></div>
                  <div className="w-2 h-2 bg-gray-200 rounded-full shadow-inner"></div>
                </div>

                {/* Paper texture overlay */}
                <div
                  className="absolute inset-0 rounded-xl pointer-events-none opacity-5"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                ></div>

                {/* Company Name */}
                <div className="mb-8 relative mt-4">
                  <h3 className="text-xl font-bold text-gray-900 tracking-wide drop-shadow-sm">
                    {testimonial.company}
                  </h3>
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 blur-sm"></div>
                </div>

                {/* Quote */}
                <div className="mb-8 relative">
                  <div className="text-5xl text-gray-200 mb-4 font-serif absolute -top-4 -left-2 drop-shadow-sm">"</div>
                  <p className="text-gray-700 text-lg leading-relaxed relative z-10 font-medium">{testimonial.quote}</p>
                </div>

                {/* Author Section */}
                <div className="flex items-center justify-between relative">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-14 h-14 ring-2 ring-white shadow-lg rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                        {testimonial.avatar ? (
                          <img
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = "none"
                              e.target.nextSibling.style.display = "flex"
                            }}
                          />
                        ) : null}
                        <div
                          className="w-full h-full flex items-center justify-center text-white font-semibold"
                          style={{ display: testimonial.avatar ? "none" : "flex" }}
                        >
                          {testimonial.initials}
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-sm"></div>
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-gray-900 text-lg drop-shadow-sm">{testimonial.author}</p>
                      <p className="text-sm text-gray-600 font-medium">{testimonial.title}</p>
                    </div>
                  </div>

                  {/* LinkedIn Icon with 3D effect */}
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-1.5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.771v20.451C0 23.2.774 24 1.729 24h20.542C23.227 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                </div>

                {/* Corner fold effect */}
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-12 border-b-12 border-l-transparent border-b-gray-100 transform rotate-0"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-gray-50 to-gray-100 transform rotate-45 translate-x-4 -translate-y-4 shadow-inner"></div>
                </div>
              </div>
            )
          })}

          {/* Binding mechanism visual effect */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="w-px h-32 bg-gradient-to-b from-gray-300 via-gray-400 to-transparent transform rotate-12 opacity-60"></div>
            <div className="absolute top-0 left-0 w-px h-32 bg-gradient-to-b from-transparent via-gray-400 to-gray-300 transform -rotate-12 opacity-60"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
