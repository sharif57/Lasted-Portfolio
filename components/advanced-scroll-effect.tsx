"use client"

import { useEffect, useRef, useState } from "react"

export default function AdvancedScrollEffect() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate how much of the element is in view
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)
      const percentVisible = visibleHeight / rect.height

      setScrollProgress(Math.max(0, Math.min(1, percentVisible)))
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Split the text into two parts
  const firstPart =
    "I'm Devraj Chatribin, with over 4+ years of experience in design & development with strong focus on producing high quality & impactful digital experiences. I have worked with"
  const secondPart = "some of the most innovative industry leaders to help build their top-notch products."

  return (
    <div ref={sectionRef} className="text-3xl font-normal leading-relaxed">
      {firstPart}{" "}
      <span
        style={{
          color: `rgba(0, 0, 0, ${scrollProgress})`,
          transition: "color 0.2s ease",
        }}
      >
        {secondPart}
      </span>
    </div>
  )
}
