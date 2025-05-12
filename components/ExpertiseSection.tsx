"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Code, Palette, PenTool } from "lucide-react"
import ExpertiseCard from "./expertise-card"
// import ExpertiseCard from "./expertise-card"

// Define the expertise areas
const expertiseAreas = [
  {
    id: "development",
    title: "Frontend Development",
    icon: <Code className="w-5 h-5" />,
    description:
      "Developing responsive and user-friendly web interfaces using HTML, CSS, JavaScript, TypeScript, React.js, and Next.js with a focus on performance and accessibility.",
    image: "/data2.jpg",
  },
  {
    id: "ui-ux",
    title: "Backend Knowledge (MERN Stack)",
    icon: <Palette className="w-5 h-5" />,
    description:
      "Basic to intermediate knowledge of backend technologies including MongoDB, Express.js, and Node.js to build full-stack applications and RESTful APIs.",
    image: "/data1.webp",
  },
  {
    id: "branding",
    title: "Version Control & Deployment",
    icon: <PenTool className="w-5 h-5" />,
    description:
      "Using Git and GitHub for version control and deploying web applications via Vercel, Netlify, and Firebase with continuous deployment workflows.",
    image: "/data2.png",
  },
];


export default function EnhancedExpertiseSection() {
  const [activeExpertise, setActiveExpertise] = useState("development")
  const [isImageChanging, setIsImageChanging] = useState(false)
  const [displayedImage, setDisplayedImage] = useState("/images/development.png")

  const handleExpertiseClick = (id: string) => {
    if (id === activeExpertise) return
    setActiveExpertise(id)
    setIsImageChanging(true)
  }

  // Update the displayed image with a fade effect
  useEffect(() => {
    if (isImageChanging) {
      const timer = setTimeout(() => {
        const activeArea = expertiseAreas.find((area) => area.id === activeExpertise)
        if (activeArea) {
          setDisplayedImage(activeArea.image)
        }
        setIsImageChanging(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [activeExpertise, isImageChanging])

  return (
    <section className="py-12 container mx-auto lg:mt-28 mt-8 p-4">
      <div className="flex items-center text-green-500 font-medium mb-2">
        <span className="mr-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 0L10.2 5.8L16 6.8L12 11.3L13.1 17L8 14.3L2.9 17L4 11.3L0 6.8L5.8 5.8L8 0Z"
              fill="currentColor"
            />
          </svg>
        </span>
        SPECIALITY
      </div>

      <h2 className="lg:text-5xl text-2xl font-semibold mb-12">Areas of Expertise</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          {expertiseAreas.map((expertise) => (
            <ExpertiseCard
              key={expertise.id}
              title={expertise.title}
              icon={expertise.icon}
              description={expertise.description}
              isActive={activeExpertise === expertise.id}
              onClick={() => handleExpertiseClick(expertise.id)}
            />
          ))}
        </div>

        <div className="relative lg:h-[400px] h-[200px] bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={displayedImage || "/placeholder.svg"}
            alt="Expertise illustration"
            fill
            className={`object-cover transition-opacity duration-300 ${isImageChanging ? "opacity-0" : "opacity-100"}`}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  )
}
