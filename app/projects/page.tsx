"use client"

import ProjectCard from "@/components/ProjectCard"
import Link from "next/link"
import { useState } from "react"

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
    githubLink: "https://github.com/sharif57/fitness",
    category: "Fitness & Health",
    role: "Full Stack Developer",
    duration: "Jan 2025 - Mar 2025",
    teamSize: 3,
    status: "Completed",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Shadcn UI",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    features: [
      "User authentication with Custom",
      'Ai use workout and nutrition data create personalized plans',
      'Daily life routine suggestions',
      "Workout and diet plan tracking",
      "Membership & subscription management",
      "Admin dashboard for trainers and staff",
      "Responsive UI with Tailwind CSS",
      "Analytics and progress tracking"
    ],
    tags: ["Fitness", "Gym", "Health", "Web App", 'Workout Tracking', 'Nutrition Generating'],
    contribution: "Developed frontend UI, integrated authentication, and implemented dashboard functionalities.",
    develop: "Design and Development"
  },
  {
    id: 2,
    title: "Crypto Education",
    subtitle: "Learning Platform",
    description:
      "A comprehensive cryptocurrency education platform designed to teach users about blockchain technology, trading strategies, and digital asset management.",
    year: "2025",
    bgColor: "bg-gradient-to-br from-blue-500 to-purple-600",
    image: "/Screenshot 2025-08-24 154754.png",
    liveLink: "https://main.theclue.io/",
    githubLink: "https://github.com/sharif57/Crypto-Education-Frontend",
    category: "Education & Finance",
    role: "Frontend Developer",
    duration: "Jan 2025 - Feb 2025",
    teamSize: 2,
    status: "Completed",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", 'Shadcn Ui', "Chart.js", "API Integration"],
    features: [
      "Interactive learning modules",
      "Real-time crypto data",
      "Progress tracking",
      "Quiz system",
      "Certificate generation",
    ],
    tags: ["Education", "Crypto", "Finance", "Web App", 'Live Class', 'Chatbot', 'Tutoring Web'],
    contribution: "Developed interactive UI components and integrated cryptocurrency APIs.",
    develop: "Design and Development",
  },

  {
    id: 4,
    title: "Angry GPT",
    subtitle: "AI Bookstore & Chat Assistant",
    description:
      "An innovative platform combining AI-powered chatbot assistance with an online bookstore. Users can purchase books, receive personalized recommendations, and interact with an AI for guidance and support.",
    year: "2024",
    bgColor: "bg-green-100",
    image: "/Screenshot 2025-08-24 164510.png",
    liveLink: "https://angry-gpt-frontend.vercel.app/",
    githubLink: "https://github.com/sharif57/Angry-GPT-Frontend",
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
  },
  {
    id: 5,
    title: "Unlock Knowledge",
    subtitle: "AI-Powered Business Insights",
    description:
      "An AI-powered chatbot platform that helps businesses unlock knowledge, streamline workflows, and provide real-time insights to enhance decision-making.",
    year: "2025",
    bgColor: "bg-yellow-200",
    image: "/mon.png",
    liveLink: "https://morpheus-frontend-black.vercel.app/",
    githubLink: "https://github.com/sharif57/unlock-knowledge",
    category: "AI & Business",
    role: "Frontend Developer",
    duration: "May 2025 - Jun 2025",
    teamSize: 2,
    status: "Ongoing",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "OpenAI API",
      "Node.js",
      "MongoDB"
    ],
    features: [
      "AI-powered chatbot for business queries",
      "Data-driven insights generation",
      "Workflow automation",
      "Custom knowledge base integration",
      "Secure authentication"
    ],
    tags: ["AI", "Chatbot", "Business", "Insights", "Automation"],
    contribution:
      "Designed and developed chatbot UI, integrated AI models, and built workflow automation features.",
    develop: "Design and Development"
  },
 {
  id: 6,
  title: "HolyBot.ai",
  subtitle: "Christian AI Chatbot",
  description:
    "An AI-powered chatbot allowing users to ask questions about the Bible, upload religious documents and media, and engage in faith-based interaction.",
  year: "2025",
  bgColor: "bg-white", // (You could customize this visually.)
  image: "/holy.png",
  liveLink: "https://holybot.ai/",
  githubLink: 'https://github.com/sharif57/new-holy', // (Add if available.)
  category: "Religion & AI",
  role: "AI Integration / Frontend Developer",
  duration: "2025",
  teamSize: "N/A",
  status: "Active",
  technologies: ["Next.js?", "React?", "OpenAI API?", "Tailwind CSS?"], // Adjust based on details
  features: [
    "Ask theological questions (e.g., Bible verses, meaning)",
    "Upload documents & images for spiritual insight",
    "Interactive Q&A with spiritual guidance"
  ],
  tags: ["AI", "Christianity", "Chatbot", "Spiritual", "Bible"],
  contribution: "Designed UI for prompt input and display of scriptural responses.",
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
          <Link key={project.id} href={`/projects/${project.id}`}>

            <ProjectCard
              key={project.id}
              project={project}
              isHovered={hoveredId === project.id}
              isDisabled={hoveredId !== null && hoveredId !== project.id}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
            />
          </Link>
        ))}
      </div>

    </section>
  )
}
