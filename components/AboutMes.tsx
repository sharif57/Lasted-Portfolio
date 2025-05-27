import { Sparkles } from "lucide-react";
import React from "react";

export default function AboutMes() {
  return (
    <div className="w-full px-4 md:w-3/4 lg:w-1/2 mx-auto text-center py-4 md:py-6 lg:py-8">
      <div className="flex items-center gap-2 mb-4 md:mb-6 justify-center text-[#30AF5B]">
        <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-[#30AF5B]" />
        <span className="text-base md:text-lg lg:text-xl uppercase tracking-wide font-medium">
          Testimonials
        </span>
      </div>
      <p className="text-base md:text-lg lg:text-2xl text-wrap px-2 md:px-4">
        I'm Sharif Mahamud, a Full-Stack Web Developer with 1 year of hands-on
        experience in building responsive and user-friendly web applications
        using modern technologies like React.js, Next.js, Node.js, Express, and MongoDB.
        I enjoy turning ideas into real-world digital solutions with clean code
        and a strong focus on performance and user experience.
      </p>
    </div>
  );
}
