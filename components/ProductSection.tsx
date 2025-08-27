"use client"

import { useState } from "react"
import ProjectCard from "./ProjectCard"
import Link from "next/link"

// Project data
const projects = [

  {
    id: 1,
    title: "Oeg Fitness",
    description: "A modern fitness and gym management web application designed for tracking workouts, diet plans, membership management, and performance analytics.",
    year: "2025",
    bgColor: "bg-yellow-100",
    image: "/p1.png",
    liveLink: "https://oegfitness.com/",
    githubLink: "https://github.com/sharif57/oeg-fitness",
    category: "Fitness & Health",
    role: "Full Stack Developer",
    duration: "Jan 2025 - Mar 2025",
    teamSize: 3,
    status: "Completed",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase"
    ],
    features: [
      "User authentication with Firebase",
      "Workout and diet plan tracking",
      "Membership & subscription management",
      "Admin dashboard for trainers and staff",
      "Responsive UI with Tailwind CSS",
      "Analytics and progress tracking"
    ],
    tags: ["Fitness", "Gym", "Health", "Web App"],
    contribution: "Developed frontend UI, integrated authentication, and implemented dashboard functionalities.",
    develop: "Design and Development"
  }
  ,
  {
    id: 2,
    title: "Crypto Education",
    description: "Development & Design",
    year: "2025",
    bgColor: "bg-pink-100",
    image: "/Screenshot 2025-08-24 154754.png",
    develop: "Design and Development"

  },
  {
    id: 3,
    title: "Dhataharris Health-Care Platform",
    subtitle: "Doctor Consultation & Donation",
    description:
      "A modern healthcare platform that enables patients to reach doctors, access medical papers and reports, and support healthcare initiatives through donations.",
    year: "2025",
    bgColor: "bg-gray-200",
    image: "/Screenshot 2025-08-24 163330.png",
    liveLink: "https://your-dhataharris-live-link.com",
    githubLink: "https://github.com/sharif57/dhataharris-healthcare",
    category: "Healthcare & Donation",
    role: "Full-Stack Developer",
    duration: "Mar 2025 - Apr 2025",
    teamSize: 4,
    status: "Ongoing",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe / PayPal Integration"
    ],
    features: [
      "Doctor consultation booking",
      "Medical paper & report access",
      "Donation system for healthcare causes",
      "Patient dashboard with history",
      "Secure authentication & payments"
    ],
    tags: ["Healthcare", "Donation", "Doctor", "Web App", "Reports"],
    contribution:
      "Developed user dashboard, integrated donation system, and designed healthcare report access functionality.",
    develop: "Design and Development"
  }
  ,
  {
    id: 4,
    title: "Angry GPT",
    subtitle: "AI Bookstore & Chat Assistant",
    description:
      "An innovative platform combining AI-powered chatbot assistance with an online bookstore. Users can purchase books, receive personalized recommendations, and interact with an AI for guidance and support.",
    year: "2024",
    bgColor: "bg-green-100",
    image: "/Screenshot 2025-08-24 164510.png",
    liveLink: "https://your-angrygpt-live-link.com",
    githubLink: "https://github.com/sharif57/angry-gpt",
    category: "AI & E-commerce",
    role: "Frontend Developer",
    duration: "Oct 2024 - Dec 2024",
    teamSize: 3,
    status: "Completed",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "OpenAI API",
      "MongoDB",
      "Stripe"
    ],
    features: [
      "AI-powered chatbot",
      "Bookstore with search & filter",
      "Personalized book recommendations",
      "Secure checkout & payments",
      "User accounts & order history"
    ],
    tags: ["AI", "Books", "Chatbot", "E-commerce", "Web App"],
    contribution:
      "Built the responsive UI, integrated AI chatbot with OpenAI API, and implemented book catalog with checkout functionality.",
    develop: "Design and Development"
  }
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
    <section className="container mx-auto px-4 md:px-6 py-12">
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

      <h2 className="lg:text-5xl text-2xl font-semibold mb-2">Selected Projects</h2>
      <p className="dark:text-gray-200 text-muted-foreground  mb-10">
        Here's a curated selection showcasing my expertise and the achieved results.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <ProjectCard
              project={project}

              isHovered={hoveredId === project.id}
              isDisabled={hoveredId !== null && hoveredId !== project.id}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
            />
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link href={'/projects'}>  <button className="bg-black border text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
          View All Projects
        </button></Link>
      </div>
    </section>
  )
}
