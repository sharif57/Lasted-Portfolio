"use client"

import Image from "next/image"

interface Project {
  id: number
  title: string
  description: string
  year: string
  bgColor: string
  image: string
}

interface ProjectCardProps {
  project: Project
  isHovered: boolean
  isDisabled: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export default function ProjectCard({ project, isHovered, isDisabled, onMouseEnter, onMouseLeave }: ProjectCardProps) {
  return (
    <div
      className={`rounded-3xl overflow-hidden transition-all cursor-pointer duration-300 ${project.bgColor} ${
        isDisabled ? "opacity-50 grayscale" : ""
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="p-6 h-[300px] flex items-center justify-center relative">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={800}
          height={800}
          className="object-cover-full lg:h-[500px]"
        />
      </div>
      <div className="pt-2 pb-4 px-6">
        <h3 className="text-xl font-medium">{project.title}</h3>
        <div className="flex justify-between items-center mt-1">
          <p className="text-sm text-gray-600">{project.description}</p>
          <p className="text-sm text-gray-600">{project.year}</p>
        </div>
      </div>
    </div>
  )
}
