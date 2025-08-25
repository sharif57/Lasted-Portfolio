
"use client"
import { useParams } from "next/navigation"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ProjectDetails() {
    const { id } = useParams()

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
            id: 5,
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
            technologies: ["Next.js", "React", "OpenAI API", "Tailwind CSS"], // Adjust based on details
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

    const project = projects.find((p) => p.id === Number.parseInt(id as string))


    if (!project) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
                    <Link href="/" className="text-[#30af5b] hover:text-orange-400">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        )
    }


    return (
        <div className="min-h-screen mt-[100px] text-white">

            {/* Header */}
            <header className="">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between h-auto sm:h-16">
                        <div className="flex items-center space-x-2 sm:space-x-4">
                            <Link href="/" className="flex items-center space-x-2 text-[#30af5b]" aria-label="Back to home">
                                <ArrowLeft className="w-5 h-5" />
                                <span className="font-medium">Back</span>
                            </Link>
                            <div className="h-6 w-px bg-gray-700"></div>
                            <h1 className="text-lg sm:text-xl font-medium dark:text-white text-black truncate">{project.title}</h1>
                        </div>
                        <div className="flex items-center space-x-2 sm:space-x-4 mt-4 sm:mt-0">
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg font-medium transition-colors"
                                aria-label="View live demo"
                            >
                                <ExternalLink className="w-4 h-4" />
                                <span>Live Demo</span>
                            </a>
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex dark:text-white text-black items-center space-x-2 border border-gray-600 hover:border-gray-500 px-4 py-2 rounded-lg font-medium transition-colors"
                                aria-label="View GitHub repository"
                            >
                                <Github className="w-4 h-4" />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <span className="px-3 py-1 bg-orange-500/20 dark:text-orange-400 text-black rounded-full text-sm font-medium">
                                        {project.category}
                                    </span>
                                    <span className="px-3 py-1 bg-green-500/20 dark:text-green-400 text-black rounded-full text-sm font-medium flex items-center space-x-1">
                                        <CheckCircle className="w-3 h-3" />
                                        <span>{project.status}</span>
                                    </span>
                                </div>
                                <h1 className="text-4xl lg:text-6xl dark:text-white text-black font-semibold leading-tight">{project.title}</h1>
                                <p className="text-xl text-orange-400 font-medium">{project.subtitle}</p>
                                <p className="text-lg text-muted-foreground  leading-relaxed">{project.description}</p>
                            </div>

                            {/* Project Meta */}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2 dark:text-white text-black">
                                    <div className="flex items-center space-x-2 text-gray-400">
                                        <Calendar className="w-4 h-4" />
                                        <span className="text-sm">Duration</span>
                                    </div>
                                    <p className="font-medium">{project.duration}</p>
                                </div>

                                <div className="space-y-2 dark:text-white text-black">
                                    <div className="flex items-center space-x-2 text-gray-400">
                                        <Clock className="w-4 h-4" />
                                        <span className="text-sm">Role</span>
                                    </div>
                                    <p className="font-medium">{project.role}</p>
                                </div>
                                <div className="space-y-2 dark:text-white text-black">
                                    <div className="flex items-center space-x-2 text-gray-400">
                                        <CheckCircle className="w-4 h-4" />
                                        <span className="text-sm">Year</span>
                                    </div>
                                    <p className="font-medium">{project.year}</p>
                                </div>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden  ">
                                <Image
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    width={1000}
                                    height={400}
                                    className="w-full h-full rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Overview Section */}
            <section className="py-16" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Technologies */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-semibold dark:text-white text-black">Technologies</h2>
                            <div className="space-y-3">
                                {project.technologies.map((tech, index) => (
                                    <div key={index} className="flex items-center space-x-3 p-3 dark:bg-gray-800 dark:text-white text-muted-foreground border rounded-lg">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                        <span className="font-normal">{tech}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Features */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-semibold dark:text-white text-black">Key Features</h2>
                            <div className="space-y-3">
                                {project.features.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-3 p-3 dark:bg-gray-800 dark:text-white text-muted-foreground border rounded-lg">
                                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                        <span className="text-muted-foreground">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tags & Contribution */}
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-semibold dark:text-white text-black mb-4">Tags</h2>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2 className=" text-2xl font-semibold dark:text-white text-black mb-4">My Contribution</h2>
                                <p className="text-muted-foreground  dark:text-white leading-relaxed">{project.contribution}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >



            {/* Features */}
            <section className="py-16 " >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl   font-semibold dark:text-white text-black mb-12 text-center">Features</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {project.features.map((feature, index) => (
                            <div key={index} className=" rounded-xl p-6  dark:bg-gray-800 dark:text-white text-muted-foreground border transition-colors">
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-card-foreground mb-2">{feature}</h3>
                                        <p className="text-gray-400 text-sm">Advanced implementation with modern best practices</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >


        </div >
    )
}
