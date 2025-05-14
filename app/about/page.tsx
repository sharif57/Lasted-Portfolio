"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Call handler right away to update initial state
    handleScroll();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate opacity based on scroll position
  // Start fading in at 100px scroll, complete by 300px
  const calculateOpacity = () => {
    if (scrollY < 100) return 0.2; // Initial opacity (light gray)
    if (scrollY > 300) return 1; // Final opacity (black)

    // Linear interpolation between 100px and 300px scroll
    return 0.2 + ((scrollY - 100) * 0.8) / 200;
  };

  const opacity = calculateOpacity();

  return (
    <main className=" text-justify">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* About Me Section */}
        <section className="mb-20 text-center">
          <h2 className="flex items-center justify-center text-green-500 font-medium mb-8">
            <span className="mr-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0L10.2 5.8L16 6.8L12 11.3L13.1 17L8 14.3L2.9 17L4 11.3L0 6.8L5.8 5.8L8 0Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            ABOUT ME
          </h2>

            <p className="lg:text-3xl font-normal text-justify lg:text-center leading-relaxed text-muted-foreground text-lg">
            I&apos;m Sharif Mahamud, a passionate frontend developer with 1 year of
            experience in design & development, focusing on creating high quality &
            impactful digital experiences. I specialize in building responsive and
            user-friendly web applications using modern technologies.
            </p>
        </section>

        {/* <div className="relative w-[300px] h-[500px] mx-auto overflow-hidden">
          <Image
            src="/IMG_0091 (1).jpeg"
            alt="sharif mahamud"
            fill
            priority
            className="object-cover rounded-b-full"
            // style={{ opacity }}
          />
        </div> */}
      </div>
    </main>
  );
}
