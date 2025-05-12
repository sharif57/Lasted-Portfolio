"use client"

import { useEffect, useRef } from "react"

export default function ScrollTextEffect() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Split text into words and wrap each in a span
    const text = container.textContent || ""
    container.textContent = ""

    const words = text.split(" ")
    words.forEach((word, index) => {
      const span = document.createElement("span")
      span.textContent = word + " "
      span.style.color = "rgb(209, 213, 219)" // Start with gray color
      span.style.transition = "color 0.5s ease"
      container.appendChild(span)
    })

    // Function to check if element is in viewport
    const isInViewport = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect()
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    }

    // Function to handle scroll
    const handleScroll = () => {
      const spans = container.querySelectorAll("span")
      spans.forEach((span, index) => {
        if (isInViewport(span as HTMLElement)) {
          setTimeout(() => {
            span.style.color = "rgb(0, 0, 0)" // Change to black when in viewport
          }, index * 50) // Staggered effect
        }
      })
    }

    // Initial check
    handleScroll()

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div ref={containerRef} className="text-3xl font-normal leading-relaxed">
      I&apos;m Devraj Chatribin, with over 4+ years of experience in design & development with strong focus on producing
      high quality & impactful digital experiences. I have worked with some of the most innovative industry leaders to
      help build their top-notch products.
    </div>
  )
}
