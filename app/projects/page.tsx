"use client"

import ProjectCard from "@/components/ProjectCard"
import { useState } from "react"

// Project data
const projects = [
  {
    id: 1,
    title: "Aora",
    description: "Development",
    year: "2024",
    bgColor: "bg-yellow-100",
    image: "/aora.webp",
  },
  {
    id: 2,
    title: "Code Screenshot",
    description: "Development & Design",
    year: "2024",
    bgColor: "bg-pink-100",
    image: "/aora.webp",
  },
  {
    id: 3,
    title: "iPhone 15 Pro",
    description: "Development & Design",
    year: "2024",
    bgColor: "bg-gray-200",
    image: "/aora.webp",
  },
  {
    id: 4,
    title: "Ochi Design",
    description: "Development & Design",
    year: "2024",
    bgColor: "bg-green-100",
    image: "/aora.webp",
  },
  {
    id: 5,
    title: "Ochi Design",
    description: "Development & Design",
    year: "2024",
    bgColor: "bg-green-100",
    image: "/aora.webp",
  },
  {
    id: 6,
    title: "Ochi Design",
    description: "Development & Design",
    year: "2024",
    bgColor: "bg-green-100",
    image: "/aora.webp",
  },
  {
    id: 7,
    title: "Ochi Design",
    description: "Development & Design",
    year: "2024",
    bgColor: "bg-green-100",
    image: "/aora.webp",
  },
  {
    id: 8,
    title: "Ochi Design",
    description: "Development & Design",
    year: "2024",
    bgColor: "bg-green-100",
    image: "/aora.webp",
  },
]

export default function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const handleMouseEnter = (id: number) => {
    setHoveredId(id)
  }

  const handleMouseLeave = () => {
    setHoveredId(null)
  }

  return (
    <section className="container mx-auto px-4 md:px-6 py-12 lg:pt-[200px] pt-[100px]">
      <div className="flex items-center text-green-500 font-medium mb-2">
        <span className="mr-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 0L10.2 5.8L16 6.8L12 11.3L13.1 17L8 14.3L2.9 17L4 11.3L0 6.8L5.8 5.8L8 0Z"
              fill="currentColor"
            />
          </svg>
        </span>
        MY WORK
      </div>

      <h2 className="lg:text-5xl text-2xl font-semibold lg:w-1/2  mb-2">Creating next level digital products</h2>
      {/* <p className="text-gray-600 mb-10">
        Here's a curated selection showcasing my expertise and the achieved results.
      </p> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:mt-20 mt-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isHovered={hoveredId === project.id}
            isDisabled={hoveredId !== null && hoveredId !== project.id}
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>

    </section>
  )
}
