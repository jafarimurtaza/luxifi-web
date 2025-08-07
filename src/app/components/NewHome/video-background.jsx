"use client"

import { useEffect, useRef, useState } from "react"



export default function VideoBackground({ className = "", opacity = 0.2 }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsLoaded(true)
      video.play().catch(console.error)
    }

    const handleError = () => {
      console.warn("Video background failed to load")
    }

    video.addEventListener("loadeddata", handleLoadedData)
    video.addEventListener("error", handleError)

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData)
      video.removeEventListener("error", handleError)
    }
  }, [])

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 scale-110 video-enhanced ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          opacity: opacity,
          filter: "blur(1px) brightness(0.3) contrast(1.2) saturate(1.5)",
        }}
      >
        <source
          src="/placeholder.mp4?query=abstract+digital+network+connections+flowing+data+particles+dark+cyber+background+luxury"
          type="video/mp4"
        />
        <source
          src="/placeholder.webm?query=abstract+digital+network+connections+flowing+data+particles+dark+cyber+background+luxury"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>

      {/* Multi-layered overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-blue-900/30"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40"></div>

      {/* Animated overlay patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 animate-pulse"></div>
      </div>
    </div>
  )
}
