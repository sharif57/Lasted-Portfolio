"use client";

import { useRef, useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Pencil,
  Palette,
  Code,
  Shield,
  Sparkles,
} from "lucide-react";

export default function DesignProcess() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollButtons);
      // Initial check
      checkScrollButtons();

      // Check on window resize
      window.addEventListener("resize", checkScrollButtons);

      return () => {
        scrollContainer.removeEventListener("scroll", checkScrollButtons);
        window.removeEventListener("resize", checkScrollButtons);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = 320; // Approximate card width + gap
    const currentScroll = scrollContainerRef.current.scrollLeft;

    scrollContainerRef.current.scrollTo({
      left:
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount,
      behavior: "smooth",
    });
  };

  const processSteps = [
    {
      number: "01",
      title: "Research",
      description:
        "Creating something awesome, one needs to understand the details. Research is crucial.",
      icon: <Pencil className="w-5 h-5 text-[#9FEF00]" />,
    },
    {
      number: "02",
      title: "Wireframe",
      description:
        "After hashing out the details of the website, it's easy to throw the ideas onto pen & paper.",
      icon: <Pencil className="w-5 h-5 text-[#9FEF00]" />,
    },
    {
      number: "03",
      title: "Design",
      description:
        "The most fun part of all - adding pizzaz to the wireframes and bring it to life.",
      icon: <Palette className="w-5 h-5 text-[#9FEF00]" />,
    },
    {
      number: "04",
      title: "Development",
      description:
        "The design may be final but it needs to be functional and practical. Development is key.",
      icon: <Code className="w-5 h-5 text-[#9FEF00]" />,
    },
    {
      number: "05",
      title: "Quality Assurance",
      description:
        "Website load time, SEO optimization, and overall quality of the site is important.",
      icon: <Shield className="w-5 h-5 text-[#9FEF00]" />,
    },
  ];

  return (
    <section className="w-full  text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="h-5 w-5 text-[#30af5b]" />

          <span className="text-sm uppercase text-[#30af5b] tracking-wider font-medium">
            STEPS I FOLLOW
          </span>
        </div>

        <h2 className="text-5xl md:text-6xl text-black dark:text-white font-medium mb-6">
          My Design Process
        </h2>

        <p className="text-gray-400 max-w-xl mb-12">
          I have worked with some of the most innovative industry leaders to
          help build their top-notch products.
        </p>

        <div className="relative">
          {/* Scroll buttons */}
          <div className="hidden md:flex absolute -left-12 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-2 rounded-full bg-gray-800 ${
                !canScrollLeft
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-gray-700"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="hidden md:flex absolute -right-12 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-2 rounded-full bg-gray-800 ${
                !canScrollRight
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-gray-700"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-8 gap-6 scrollbar-hide snap-x"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="min-w-[280px] md:min-w-[320px] bg-white text-black dark:text-white dark:bg-[#0b0b0d] rounded-3xl p-6 border  flex flex-col snap-start"
              >
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-6">
                  {step.icon}
                </div>

                <h3 className="text-xl font-medium  mb-4">
                  {step.number}. {step.title}
                </h3>

                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Scroll indicator for mobile */}
          <div className="flex justify-center mt-4 gap-2 md:hidden">
            {processSteps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === 0 ? "bg-[#9FEF00]" : "bg-gray-700"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
