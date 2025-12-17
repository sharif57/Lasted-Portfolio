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
    id: 3,
    title: "Ridero Delivery",
    subtitle: "Multi-Role Smart Delivery Platform",
    description:
      "A full-featured delivery management platform enabling companies to create delivery requests, riders to track shipments in real time, and drivers to manage pickups and deliveries using live map tracking.",
    year: "2025",
    bgColor: "bg-gray-50",
    image: "/project-6.png",
    liveLink: "https://riderodelivery.com/",
    githubLink: "https://github.com/sharif57", // if private, keep null
    category: "Logistics & Delivery",
    role: "Frontend Developer / System Designer",
    duration: "2025",
    teamSize: "Small Team",
    status: "Active",
    technologies: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Google Maps API",
      "Socket.IO",
      "JWT Authentication"
    ],
    features: [
      "Three user roles: Rider, Company, Driver",
      "Company dashboard to create & manage delivery orders",
      "Driver panel to accept, pickup, and complete deliveries",
      "Rider dashboard to track delivery status",
      "Live map tracking for pickup & delivery locations",
      "Real-time location updates using sockets",
      "Order status flow: Pending → Picked → On the Way → Delivered",
      "Authentication & role-based access control",
      "Responsive design for mobile, tablet, and desktop"
    ],
    roles: {
      company: [
        "Create delivery requests",
        "Assign pickup & delivery locations",
        "Track driver in real time",
        "View delivery history & analytics"
      ],
      driver: [
        "Accept or reject delivery requests",
        "View optimized pickup & delivery routes",
        "Live location sharing on map",
        "Update delivery status"
      ],
      rider: [
        "Track delivery progress in real time",
        "View pickup & delivery locations on map",
        "Receive delivery status updates"
      ]
    },
    maps: {
      provider: "Google Maps",
      features: [
        "Live driver tracking",
        "Pickup & delivery markers",
        "Route visualization",
        "Distance & ETA calculation"
      ]
    },
    tags: [
      "Delivery",
      "Logistics",
      "Real-Time Tracking",
      "Maps",
      "Multi-Role System",
      "SaaS Platform"
    ],
    contribution:
      "Designed and developed responsive dashboards, integrated Google Maps for live tracking, implemented role-based UI flows, and optimized user experience across all devices.",
    develop: "Design & Development"
  },
  {
    id: 4,
    title: "Dhataharris Health-Care Platform",
    subtitle: "Doctor Consultation & Donation",
    description:
      "A modern healthcare platform that enables patients to reach doctors, access medical papers and reports, and support healthcare initiatives through donations.",
    year: "2025",
    bgColor: "bg-gray-200",
    image: "/Screenshot 2025-08-24 163330.png",
    liveLink: "https://enitiative.org/",
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
    title: "Angry GPT",
    subtitle: "AI Bookstore & Chat Assistant",
    description:
      "An innovative platform combining AI-powered chatbot assistance with an online bookstore. Users can purchase books, receive personalized recommendations, and interact with an AI for guidance and support.",
    year: "2024",
    bgColor: "bg-green-100",
    image: "/Screenshot 2025-08-24 164510.png",
    liveLink: "https://angrygpt.ai/",
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
    id: 6,
    title: "Unlock Knowledge",
    subtitle: "AI-Powered Business Insights",
    description:
      "An AI-powered chatbot platform that helps businesses unlock knowledge, streamline workflows, and provide real-time insights to enhance decision-making.",
    year: "2025",
    bgColor: "bg-yellow-200",
    image: "/mon.png",
    liveLink: "https://your-unlockknowledge-live-link.com",
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
    id: 7,
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
    technologies: ["Next.js", "React", "OpenAI API", "Tailwind CSS"], // Adjust based on details
    features: [
      "Ask theological questions (e.g., Bible verses, meaning)",
      "Upload documents & images for spiritual insight",
      "Interactive Q&A with spiritual guidance"
    ],
    tags: ["AI", "Christianity", "Chatbot", "Spiritual", "Bible"],
    contribution: "Designed UI for prompt input and display of scriptural responses.",
    develop: "Design and Development"
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
        {projects.slice(0, 4).map((project) => (
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
