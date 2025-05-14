"use client";

import { useState } from "react";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import { Sparkles } from "lucide-react";

const menuItems = [
  { name: "Frontend", icon: <Sparkles />, href: "/frontend" },
  { name: "Backend", icon: <Sparkles />, href: "/backend" },
  { name: "Full Stack", icon: <Sparkles />, href: "/fullstack" },
  { name: "UI/UX", icon: <Sparkles />, href: "/ui-ux" },
  { name: "DevOps", icon: <Sparkles />, href: "/devops" },
  { name: "Cloud", icon: <Sparkles />, href: "/cloud" },
  { name: "Mobile Dev", icon: <Sparkles />, href: "/mobile" },
  { name: "Web Security", icon: <Sparkles />, href: "/security" },
  { name: "Database", icon: <Sparkles />, href: "/database" }
];

export default function Slider() {
  const [pauseMarquee, setPauseMarquee] = useState(false);
  const [speed, setSpeed] = useState(80);
  const [direction, setDirection] = useState<"left" | "right">("left");

  // Optional: Pause marquee on hover
  const handleMouseEnter = () => setPauseMarquee(true);
  const handleMouseLeave = () => setPauseMarquee(false);

  return (
    <div className="w-full   py-4 px-6">
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
          <div className="flex space-x-12 px-8  border-t-2 border-b-2 lg:py-10 py-5">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className=" text-xl lg:text-4xl flex items-center gap-3 text-gray-400 font-medium tracking-tighter hover:text-gray-800  transition-colors duration-300 px-4"
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
