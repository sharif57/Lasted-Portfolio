// "use client";

// import { useState } from "react";
// import { ChevronDown, ChevronUp, Sparkles } from "lucide-react";

// interface WorkExperience {
//   title: string;
//   company: string;
//   period: string;
//   logo: string;
//   bgColor: string;
//   description: string[];
// }

// export default function WorkExperience() {
//   const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

//   const experiences: WorkExperience[] = [
//     {
//       title: "Software Engineer",
//       company: "@OneShield Software",
//       period: "Aug 2022 — Present",
//       logo: "/placeholder.svg?height=40&width=40",
//       bgColor: "bg-blue-500",
//       description: [
//         "Developed and maintained core insurance platform features",
//         "Implemented responsive UI components using React and TypeScript",
//         "Optimized database queries resulting in 30% performance improvement",
//         "Collaborated with cross-functional teams to deliver features on schedule",
//         "Mentored junior developers and conducted code reviews",
//       ],
//     },
//     {
//       title: "Founder",
//       company: "@Design and Code",
//       period: "Jan 2021 — Present",
//       logo: "/placeholder.svg?height=40&width=40",
//       bgColor: "bg-cyan-500",
//       description: [
//         "Founded a design and development studio focused on creating digital products",
//         "Managed client relationships and project deliverables",
//         "Designed and developed over 15 websites and applications",
//         "Established company processes and workflows",
//         "Grew team from 1 to 5 members within first year",
//       ],
//     },
//     {
//       title: "UI/UX Designer",
//       company: "@Social3",
//       period: "Aug 2022 — Sep 2023",
//       logo: "/placeholder.svg?height=40&width=40",
//       bgColor: "bg-blue-400",
//       description: [
//         "Created user interfaces for Web3 social platform",
//         "Conducted user research and usability testing",
//         "Designed responsive layouts for web and mobile applications",
//         "Developed interactive prototypes using Figma",
//         "Collaborated with developers to ensure design implementation accuracy",
//       ],
//     },
//     {
//       title: "UI/UX Design Lead",
//       company: "@CrossKnot Community",
//       period: "Oct 2021 — Apr 2022",
//       logo: "/placeholder.svg?height=40&width=40",
//       bgColor: "bg-cyan-400",
//       description: [
//         "Led design team of 3 designers for community platform",
//         "Established design system and component library",
//         "Facilitated design sprints and workshops",
//         "Created user flows and information architecture",
//         "Implemented accessibility improvements across platform",
//       ],
//     },
//   ];

//   const toggleExpand = (index: number) => {
//     if (expandedIndex === index) {
//       setExpandedIndex(null);
//     } else {
//       setExpandedIndex(index);
//     }
//   };

//   return (
//     <section className="w-full  text-white py-16 px-4 md:px-8 lg:px-16">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between">
//         <div>
//           <div className="flex items-center gap-2 mb-4">
//           <Sparkles className="h-5 w-5 text-[#9FEF00]" />
//             <span className="text-sm uppercase text-[#9FEF00] tracking-wider font-medium">
//               WORK HISTORY
//             </span>
//           </div>

//           <h2 className="text-5xl md:text-6xl font-medium text-black dark:text-white mb-6">Experience</h2>

//           <p className="text-gray-400 max-w-xl mb-12">
//             I have worked with some of the most innovative industry leaders to
//             help build their top-notch products.
//           </p>
//         </div>

//         <div className="space-y-4">
//           {experiences.map((exp, index) => (
//             <div
//               key={index}
//               className="border-b border-gray-800 overflow-hidden transition-all duration-300"
//             >
//               <div
//                 className="flex items-center justify-between py-6 cursor-pointer  px-2 rounded-md transition-colors"
//                 onClick={() => toggleExpand(index)}
//               >
//                 <div className="flex items-center gap-4">
//                   <div
//                     className={`w-12 h-12 rounded-full flex items-center justify-center ${exp.bgColor}`}
//                   >
//                     <div className="w-6 h-6 bg-white/20 rounded-sm"></div>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-medium text-black dark:text-white">{exp.title}</h3>
//                     <p className="text-gray-400">{exp.company}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <div className="text-right text-gray-400 text-sm">
//                     {exp.period}
//                   </div>
//                   <div>
//                     {expandedIndex === index ? (
//                       <ChevronUp className="w-5 h-5 text-gray-400" />
//                     ) : (
//                       <ChevronDown className="w-5 h-5 text-gray-400" />
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Expandable description list */}
//               <div
//                 className={`overflow-hidden transition-all duration-300 ${
//                   expandedIndex === index
//                     ? "max-h-[500px] opacity-100 pb-6"
//                     : "max-h-0 opacity-0"
//                 }`}
//               >
//                 <ul className="ml-16 space-y-2 list-disc text-gray-400 pl-4">
//                   {exp.description.map((item, i) => (
//                     <li key={i} className="text-sm md:text-base">
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Briefcase, GraduationCap, ChevronRight, Calendar } from "lucide-react"

// interface ExperienceItem {
//   id: number
//   title: string
//   desc: string
//   type: "work" | "education"
//   period: string
//   organization: string
//   thumbnail: string
// }

// export default function WorkExperience() {
//   const [activeFilter, setActiveFilter] = useState<"all" | "work" | "education">("all")
//   const [expandedId, setExpandedId] = useState<number | null>(null)

//   const experienceData: ExperienceItem[] = [
//     {
//       id: 1,
//       title: "Frontend Developer",
//       organization: "Bdcalling IT Ltd",
//       desc: "Currently working as a Frontend Developer, specializing in building modern and responsive web applications using Next.js and React.",
//       type: "work",
//       period: "2022 - Present",
//       thumbnail: "/placeholder.svg?height=80&width=80",
//     },
//     {
//       id: 2,
//       title: "BSc in Computer Science",
//       organization: "Canadian International University of Bangladesh",
//       desc: "Currently pursuing Bachelor of Science in Computer Science, focusing on advanced programming concepts, software engineering, and modern development practices.",
//       type: "education",
//       period: "2024 - Present",
//       thumbnail: "/placeholder.svg?height=80&width=80",
//     },
//       {
//       id: 3,
//       title: "Diploma in Computer Science",
//       organization: "Tangail Polytechnic Institute (TPI)",
//       desc: "Currently pursuing a diploma in Computer Science and Technology at Tangail Polytechnic Institute (TPI), with a focus on web development and related skills.",
//       type: "education",
//       period: "2020 - 2024",
//       thumbnail: "/placeholder.svg?height=80&width=80",
//     },
//     {
//       id: 4,
//       title: "Web Development Level 2",
//       organization: "Programming Hero",
//       desc: "Currently enrolled in advanced web development course, focusing on Next.js, TypeScript, and enterprise-level application development.",
//       type: "education", 
//       period: "2024 - Present",
//       thumbnail: "/placeholder.svg?height=80&width=80",
//     },
//     {
//       id: 5,
//       title: "Web Development Course",
//       organization: "Programming Hero",
//       desc: "Completed an intensive 6-month web development course at Programming Hero, gaining hands-on experience in full-stack development with the MERN stack.",
//       type: "education",
//       period: "2021 - 2022",
//       thumbnail: "/placeholder.svg?height=80&width=80",
//     },
//     {
//       id: 6,
//       title: "Industrial Training",
//       organization: "Bdcalling Academy",
//       desc: "Undergoing industrial training at Bdcalling Academy to enhance expertise in advanced web technologies and industry best practices, with a focus on project-based learning.",
//       type: "education",
//       period: "2024",
//       thumbnail: "/placeholder.svg?height=80&width=80",
//     },
  
//   ]

//   const filteredData =
//     activeFilter === "all" ? experienceData : experienceData.filter((item) => item.type === activeFilter)

//   const toggleExpand = (id: number) => {
//     setExpandedId(expandedId === id ? null : id)
//   }

//   return (
//     <section className="text-white py-16 px-4 md:px-8 lg:px-16">
//       <div className="max-w-5xl mx-auto">
//         <div className="text-center mb-12">
//           <span className="inline-block px-4 py-1 rounded-full bg-[#9FEF00]/10 text-[#30af5b] dark:text-[#9FEF00] text-sm font-medium mb-4">
//             MY JOURNEY
//           </span>
//           <h2 className="text-4xl md:text-5xl font-medium mb-4">Experience & Education</h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             My professional journey and educational background that have shaped my skills and expertise.
//           </p>
//         </div>

//         {/* Filter tabs */}
//         <div className="flex justify-center mb-12">
//           <div className="inline-flex bg-gray-800 rounded-full p-1">
//             <button
//               onClick={() => setActiveFilter("all")}
//               className={`px-4 py-2 rounded-full text-sm font-normal transition-colors ${
//                 activeFilter === "all" ? "bg-[#9FEF00] text-black" : "text-white hover:bg-gray-700"
//               }`}
//             >
//               All
//             </button>
//             <button
//               onClick={() => setActiveFilter("work")}
//               className={`px-4 py-2 rounded-full text-sm font-normal transition-colors ${
//                 activeFilter === "work" ? "bg-[#9FEF00] text-black" : "text-white hover:bg-gray-700"
//               }`}
//             >
//               Work
//             </button>
//             <button
//               onClick={() => setActiveFilter("education")}
//               className={`px-4 py-2 rounded-full text-sm font-normal transition-colors ${
//                 activeFilter === "education" ? "bg-[#9FEF00] text-black" : "text-white hover:bg-gray-700"
//               }`}
//             >
//               Education
//             </button>
//           </div>
//         </div>

//         {/* Timeline */}
//         <div className="relative">
//           {/* Timeline line */}
//           <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-700 transform md:translate-x-[-0.5px]"></div>

//           <div className="space-y-12">
//             {filteredData.map((item, index) => (
//               <motion.div
//                 key={item.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
//               >
//                 {/* Timeline dot */}
//                 <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 rounded-full bg-gray-900 border-4 border-[#9FEF00] transform translate-x-[-14px] md:translate-x-[-14px] z-10 flex items-center justify-center">
//                   {item.type === "work" ? (
//                     <Briefcase className="w-3 h-3 text-[#30af5b] dark:text-[#9FEF00]" />
//                   ) : (
//                     <GraduationCap className="w-3 h-3 text-[#30af5b] dark:text-[#9FEF00]" />
//                   )}
//                 </div>

//                 {/* Content */}
//                 <div className="ml-12 md:ml-0 md:w-[calc(50%-20px)]">
//                   <div
//                     className={`dark:bg-[#0b0b0e] border bg-white rounded-xl p-6 hover:shadow-lg hover:shadow-[#9FEF00]/5 transition-all cursor-pointer ${
//                       expandedId === item.id ? "ring-2 ring-[#9FEF00]/50" : ""
//                     }`}
//                     onClick={() => toggleExpand(item.id)}
//                   >
//                     <div className="flex items-center gap-2 text-sm text-[#30af5b] dark:text-[#9FEF00] mb-2">
//                       <Calendar className="w-4 h-4" />
//                       <span>{item.period}</span>
//                     </div>

//                     <h3 className="text-xl font-medium text-black dark:text-white mb-1">{item.title}</h3>
//                     <p className="text-sm mb-4 text-black dark:text-white">{item.organization}</p>

//                     <div
//                       className={`overflow-hidden transition-all duration-300 ${
//                         expandedId === item.id || window.innerWidth >= 768
//                           ? "max-h-[500px] opacity-100"
//                           : "max-h-0 opacity-0 md:max-h-[500px] md:opacity-100"
//                       }`}
//                     >
//                       <p className="text-black dark:text-white">{item.desc}</p>
//                     </div>

//                     <button
//                       className="mt-4 text-sm text-[#9FEF00] flex items-center gap-1 md:hidden"
//                       onClick={(e) => {
//                         e.stopPropagation()
//                         toggleExpand(item.id)
//                       }}
//                     >
//                       {expandedId === item.id ? "Show less" : "Read more"}
//                       <ChevronRight
//                         className={`w-4 h-4 transition-transform ${expandedId === item.id ? "rotate-90" : ""}`}
//                       />
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Briefcase, GraduationCap, ChevronRight, Calendar } from "lucide-react"

interface ExperienceItem {
  id: number
  title: string
  desc: string
  type: "work" | "education"
  period: string
  organization: string
  thumbnail: string
}

export default function WorkExperience() {
  const [activeFilter, setActiveFilter] = useState<"all" | "work" | "education">("all")
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // This will only run on client side
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Set initial value
    handleResize()
    
    // Add event listener
    window.addEventListener('resize', handleResize)
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const experienceData: ExperienceItem[] = [
    {
      id: 1,
      title: "Frontend Developer",
      organization: "Bdcalling IT Ltd",
      desc: "Currently working as a Frontend Developer, specializing in building modern and responsive web applications using Next.js and React.",
      type: "work",
      period: "2024 - Present",
      thumbnail: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      title: "BSc in Computer Science",
      organization: "Canadian International University of Bangladesh",
      desc: "Currently pursuing Bachelor of Science in Computer Science, focusing on advanced programming concepts, software engineering, and modern development practices.",
      type: "education",
      period: "2024 - Present",
      thumbnail: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      title: "Diploma in Computer Science",
      organization: "Tangail Polytechnic Institute (TPI)",
      desc: "Currently pursuing a diploma in Computer Science and Technology at Tangail Polytechnic Institute (TPI), with a focus on web development and related skills.",
      type: "education",
      period: "2020 - 2024",
      thumbnail: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 4,
      title: "Web Development Level 2",
      organization: "Programming Hero",
      desc: "Currently enrolled in advanced web development course, focusing on Next.js, TypeScript, and enterprise-level application development.",
      type: "education", 
      period: "2025 - Present",
      thumbnail: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 5,
      title: "Web Development Course",
      organization: "Programming Hero",
      desc: "Completed an intensive 6-month web development course at Programming Hero, gaining hands-on experience in full-stack development with the MERN stack.",
      type: "education",
      period: "2023 - 2023",
      thumbnail: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 6,
      title: "Industrial Training",
      organization: "Bdcalling Academy",
      desc: "Undergoing industrial training at Bdcalling Academy to enhance expertise in advanced web technologies and industry best practices, with a focus on project-based learning.",
      type: "education",
      period: "2024",
      thumbnail: "/placeholder.svg?height=80&width=80",
    },
  ]

  const filteredData =
    activeFilter === "all" ? experienceData : experienceData.filter((item) => item.type === activeFilter)

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section className="text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-[#9FEF00]/10 text-[#30af5b] dark:text-[#9FEF00] text-sm font-medium mb-4">
            MY JOURNEY
          </span>
          <h2 className="text-4xl md:text-5xl font-medium text-black dark:text-white mb-4">Experience & Education</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and educational background that have shaped my skills and expertise.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-800 rounded-full p-1">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-full text-sm font-normal transition-colors ${
                activeFilter === "all" ? "bg-[#9FEF00] text-black" : "text-white hover:bg-gray-700"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter("work")}
              className={`px-4 py-2 rounded-full text-sm font-normal transition-colors ${
                activeFilter === "work" ? "bg-[#9FEF00] text-black" : "text-white hover:bg-gray-700"
              }`}
            >
              Work
            </button>
            <button
              onClick={() => setActiveFilter("education")}
              className={`px-4 py-2 rounded-full text-sm font-normal transition-colors ${
                activeFilter === "education" ? "bg-[#9FEF00] text-black" : "text-white hover:bg-gray-700"
              }`}
            >
              Education
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-700 transform md:translate-x-[-0.5px]"></div>

          <div className="space-y-12">
            {filteredData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 rounded-full bg-gray-900 border-4 border-[#9FEF00] transform translate-x-[-14px] md:translate-x-[-14px] z-10 flex items-center justify-center">
                  {item.type === "work" ? (
                    <Briefcase className="w-3 h-3 text-[#30af5b] dark:text-[#9FEF00]" />
                  ) : (
                    <GraduationCap className="w-3 h-3 text-[#30af5b] dark:text-[#9FEF00]" />
                  )}
                </div>

                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-[calc(50%-20px)]">
                  <div
                    className={`dark:bg-[#0b0b0e] border bg-white rounded-xl p-6 hover:shadow-lg hover:shadow-[#9FEF00]/5 transition-all cursor-pointer ${
                      expandedId === item.id ? "ring-2 ring-[#9FEF00]/50" : ""
                    }`}
                    onClick={() => toggleExpand(item.id)}
                  >
                    <div className="flex items-center gap-2 text-sm text-[#30af5b] dark:text-[#9FEF00] mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{item.period}</span>
                    </div>

                    <h3 className="text-xl font-medium text-black dark:text-white mb-1">{item.title}</h3>
                    <p className="text-sm mb-4 text-black dark:text-white">{item.organization}</p>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        expandedId === item.id || !isMobile
                          ? "max-h-[500px] opacity-100"
                          : "max-h-0 opacity-0 md:max-h-[500px] md:opacity-100"
                      }`}
                    >
                      <p className="text-black dark:text-white">{item.desc}</p>
                    </div>

                    <button
                      className="mt-4 text-sm text-[#9FEF00] flex items-center gap-1 md:hidden"
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleExpand(item.id)
                      }}
                    >
                      {expandedId === item.id ? "Show less" : "Read more"}
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${expandedId === item.id ? "rotate-90" : ""}`}
                      />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}