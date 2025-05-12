"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { useMobile } from "@/hooks/use-mobile"

interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  avatar: string
  content: string
  linkedIn?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Shriram Parab",
    position: "Media And Productions Head",
    company: "Team Phoenix Goa",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "Devraj is a great designer and an awesome team player. I and Devraj have worked on various UI/UX design projects. Apart from UI/UX design he is also a great web developer. He also runs Design and Code community which helps designers and developers to collaborate and learn from each other. He will be...",
    linkedIn: "https://linkedin.com",
  },
  {
    id: 2,
    name: "Alex Johnson",
    position: "Senior Product Designer",
    company: "Creative Solutions",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "Working with the team was an absolute pleasure. Their attention to detail and creative approach to problem-solving made our project a success. The final product exceeded our expectations and our clients were thrilled with the results...",
    linkedIn: "https://linkedin.com",
  },
  {
    id: 3,
    name: "Sarah Williams",
    position: "CTO",
    company: "Tech Innovations",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "The development process was smooth and efficient. Communication was clear throughout the project, and the team was responsive to our feedback. The final product is robust, user-friendly, and exactly what we were looking for...",
    linkedIn: "https://linkedin.com",
  },
  {
    id: 4,
    name: "Michael Chen",
    position: "Marketing Director",
    company: "Global Brands",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "The website redesign has significantly improved our conversion rates. The intuitive interface and responsive design have received positive feedback from our users. I highly recommend their services for any digital transformation project...",
    linkedIn: "https://linkedin.com",
  },
  {
    id: 5,
    name: "Emily Rodriguez",
    position: "Founder",
    company: "Startup Ventures",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "As a startup, we needed a partner who understood our vision and could work within our budget constraints. The team delivered a solution that not only met our current needs but also provided a foundation for future growth...",
    linkedIn: "https://linkedin.com",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
//   const isMobile = useMobile()

  const goToNext = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  const goToPrev = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left side - Heading and intro */}
          <div className="w-full lg:w-5/12 space-y-6">
            <div className="flex items-center gap-2 text-emerald-500 font-medium">
              <Sparkles className="h-5 w-5" />
              <span className="uppercase tracking-wide">Testimonials</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 tracking-tight">What others say</h2>

            <p className="text-lg text-gray-600">
              I&apos;ve worked with some amazing people over the years, here is what they have to say about me.
            </p>
          </div>

          {/* Right side - Testimonial carousel */}
          <div className="w-full lg:w-7/12">
            <div className="relative">
              <Card className="p-6 md:p-8 border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <div className={cn("transition-opacity duration-500", isAnimating ? "opacity-0" : "opacity-100")}>
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-16 w-16 border-2 border-white shadow-md">
                      <AvatarImage
                        src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                      />
                      <AvatarFallback>{testimonials[currentIndex].name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-medium">{testimonials[currentIndex].name}</h3>
                      <p className="text-gray-600">
                        {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-gray-700 leading-relaxed">
                      {testimonials[currentIndex].content}
                      <button className="text-emerald-600 font-medium ml-1 hover:underline focus:outline-none">
                        see more
                      </button>
                    </p>
                  </div>

                  {testimonials[currentIndex].linkedIn && (
                    <a
                      href={testimonials[currentIndex].linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-700 hover:text-emerald-600 transition-colors"
                    >
                      Check it out on LinkedIn
                      <ArrowUpRight className="ml-1 h-4 w-4" />
                    </a>
                  )}
                </div>
              </Card>

              {/* Navigation controls */}
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={goToPrev}
                    disabled={isAnimating}
                    aria-label="Previous testimonial"
                    className="h-10 w-10 rounded-full border border-gray-200"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={goToNext}
                    disabled={isAnimating}
                    aria-label="Next testimonial"
                    className="h-10 w-10 rounded-full border border-gray-200"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="text-sm text-gray-500">
                  {currentIndex + 1} / {testimonials.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
