"use client"

import Image from "next/image"

interface Project {
  id: number
  title: string
  description: string
  year: string
  bgColor: string
  image: string
  develop: string
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
  className={`rounded-xl overflow-hidden border hover:border-[#30af5b] p-7 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer  ${
    isDisabled ? "opacity-50 grayscale" : ""
  }`}
  onMouseEnter={onMouseEnter}
  onMouseLeave={onMouseLeave}
>
  <div className={` relative w-full h-[300px] md:h-[300px]  rounded-lg p-`}>
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      <Image
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-300"
        style={{
          transform: isHovered ? "scale(1.05)" : "scale(1)",
        }}
        priority={project.id === 1}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  </div>
  <div className="pt-6">
    <h3 className="text-xl font-medium text-black dark:text-white">{project.title}</h3>
    <div className="flex justify-between items-center mt-2">
      <p className="text-sm text-gray-500">{project.develop}</p>
      <p className="text-sm text-gray-500 font-medium">{project.year}</p>
    </div>
  </div>
</div>
  )
}