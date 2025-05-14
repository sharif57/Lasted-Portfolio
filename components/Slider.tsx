"use client";

import { useState } from "react";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import { Star } from "lucide-react";

const menuItems = [
  { name: "Websites", icon:<Star />,  href: "/websites" },
  { name: "Designing", href: "/designing" },
  { name: "Graphics",  icon:<Star />,  href: "/graphics" },
  { name: "Animations",  icon:<Star />,  href: "/animations" },
  { name: "Community",  icon:<Star />,  href: "/community" },
  { name: "Dashboard",  icon:<Star />,  href: "/dashboard" },
  { name: "Dashboard",  icon:<Star />,  href: "/dashboard" },
  { name: "Dashboard",  icon:<Star />,  href: "/dashboard" },
  { name: "Dashboard",  icon:<Star />,  href: "/dashboard" },
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
