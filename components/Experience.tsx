"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface WorkExperience {
  title: string;
  company: string;
  period: string;
  logo: string;
  bgColor: string;
  description: string[];
}

export default function WorkExperience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences: WorkExperience[] = [
    {
      title: "Software Engineer",
      company: "@OneShield Software",
      period: "Aug 2022 — Present",
      logo: "/placeholder.svg?height=40&width=40",
      bgColor: "bg-blue-500",
      description: [
        "Developed and maintained core insurance platform features",
        "Implemented responsive UI components using React and TypeScript",
        "Optimized database queries resulting in 30% performance improvement",
        "Collaborated with cross-functional teams to deliver features on schedule",
        "Mentored junior developers and conducted code reviews",
      ],
    },
    {
      title: "Founder",
      company: "@Design and Code",
      period: "Jan 2021 — Present",
      logo: "/placeholder.svg?height=40&width=40",
      bgColor: "bg-cyan-500",
      description: [
        "Founded a design and development studio focused on creating digital products",
        "Managed client relationships and project deliverables",
        "Designed and developed over 15 websites and applications",
        "Established company processes and workflows",
        "Grew team from 1 to 5 members within first year",
      ],
    },
    {
      title: "UI/UX Designer",
      company: "@Social3",
      period: "Aug 2022 — Sep 2023",
      logo: "/placeholder.svg?height=40&width=40",
      bgColor: "bg-blue-400",
      description: [
        "Created user interfaces for Web3 social platform",
        "Conducted user research and usability testing",
        "Designed responsive layouts for web and mobile applications",
        "Developed interactive prototypes using Figma",
        "Collaborated with developers to ensure design implementation accuracy",
      ],
    },
    {
      title: "UI/UX Design Lead",
      company: "@CrossKnot Community",
      period: "Oct 2021 — Apr 2022",
      logo: "/placeholder.svg?height=40&width=40",
      bgColor: "bg-cyan-400",
      description: [
        "Led design team of 3 designers for community platform",
        "Established design system and component library",
        "Facilitated design sprints and workshops",
        "Created user flows and information architecture",
        "Implemented accessibility improvements across platform",
      ],
    },
  ];

  const toggleExpand = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <section className="w-full  text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block w-5 h-5 text-[#9FEF00]">✦</span>
            <span className="text-sm uppercase text-[#9FEF00] tracking-wider font-medium">
              WORK HISTORY
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-medium text-black dark:text-white mb-6">Experience</h2>

          <p className="text-gray-400 max-w-xl mb-12">
            I have worked with some of the most innovative industry leaders to
            help build their top-notch products.
          </p>
        </div>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-b border-gray-800 overflow-hidden transition-all duration-300"
            >
              <div
                className="flex items-center justify-between py-6 cursor-pointer hover:bg-gray-900/30 px-2 rounded-md transition-colors"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${exp.bgColor}`}
                  >
                    <div className="w-6 h-6 bg-white/20 rounded-sm"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-black dark:text-white">{exp.title}</h3>
                    <p className="text-gray-400">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right text-gray-400 text-sm">
                    {exp.period}
                  </div>
                  <div>
                    {expandedIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </div>

              {/* Expandable description list */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedIndex === index
                    ? "max-h-[500px] opacity-100 pb-6"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="ml-16 space-y-2 list-disc text-gray-400 pl-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm md:text-base">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
