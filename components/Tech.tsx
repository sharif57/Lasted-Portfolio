"use client";

import { useState } from "react";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
  { name: "HTML", icon: "/HTML.svg", href: "/HTML" },
  { name: "CSS", icon: "/CSS.svg", href: "/CSS" },
  { name: "Tailwind", icon: "/TailwindCSS.svg", href: "/tailwind" },
  { name: "Javascript", icon: "/JavaScript.svg", href: "/javascript" },
  { name: "Typescript", icon: "/TypeScript.svg", href: "/typescript" },
  { name: "React", icon: "/React.js.svg", href: "/react" },
  { name: "Next", icon: "/Next.js.svg", href: "/next" },
  { name: "Redux", icon: "/Redux.svg", href: "/redux" },
  { name: "Node.js", icon: "/Node.js.svg", href: "/node" },
  { name: "Express", icon: "/Express.js.svg", href: "/express" },
  { name: "MongoDB", icon: "/MongoDB.svg", href: "/mongodb" },
  { name: "MySQL", icon: "/MySQL.svg", href: "/mysql" },
  { name: "PostgreSQL", icon: "/PostgreSQL.svg", href: "/sql" },
  { name: "Firebase", icon: "/Firebase.svg", href: "/firebase" },
  { name: "Github", icon: "/download.png", href: "/github" },
  { name: "Git", icon: "/GIT.svg", href: "/git" },
];

export default function Tech() {
  const [pauseMarquee, setPauseMarquee] = useState(false);
  const [speed, setSpeed] = useState(80);
  const [direction, setDirection] = useState<"left" | "right">("left");

  // Optional: Pause marquee on hover
  const handleMouseEnter = () => setPauseMarquee(true);
  const handleMouseLeave = () => setPauseMarquee(false);

  return (
    <div className="container mx-auto  py-4 px-6">
      <div
        className=" "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Marquee
          speed={speed}
          pauseOnHover={true}
          pauseOnClick={true}
          direction={direction}
          gradient={false}
          play={!pauseMarquee}
        >
          <div className="flex space-x-4 px-8 ">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="  text-xl bg-white px-4 dark:bg-[#191920] dark:text-white py-2 rounded-full lg:text-xl flex items-center gap-3 text-black font-normal  hover:text-gray-800  transition-colors duration-300 "
              >
                <Image src={item.icon} alt={item.name} width={20} height={20} />
                {item.name}
              </Link>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
