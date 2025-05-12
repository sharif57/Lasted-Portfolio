import type React from "react";
import Link from "next/link";
import { Linkedin, Github, Instagram, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <section className="py-16 bg-[#f7f8fa] dark:bg-[#0c0a09] ">
      <div className="max-w-5xl mx-auto bg-white dark:bg-[#0c0a09]  rounded-2xl  shadow-sm p-12 md:p-16 text-center">
        <div className="flex justify-center mb-6">
          <div className="flex items-center  bg-[#f7f8fa] px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-700">Available for work</span>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-5xl font-semibold mb-10">
          Let&apos;s create your
          <br />
          next big idea.
        </h2>

        <div className="flex justify-center mb-10">
          <Link
            href="/contact"
            className="bg-black text-white px-8 py-3 rounded-full text-base font-medium hover:bg-gray-800 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Sharif Mahamud. All rights reserved.
          </p>
        </div>

        <div className="flex space-x-6">
          <SocialLink
            href="https://www.linkedin.com/in/sharif-mahamud/"
            icon={<Linkedin className="w-5 h-5" />}
            label="LinkedIn"
          />
          <SocialLink
            href="https://github.com"
            icon={<Github className="w-5 h-5" />}
            label="GitHub"
          />
          <SocialLink
            href="https://instagram.com"
            icon={<Instagram className="w-5 h-5" />}
            label="Instagram"
          />
          <SocialLink
            href="mailto:contact@example.com"
            icon={<Mail className="w-5 h-5" />}
            label="Email"
          />
          <SocialLink
            href="https://twitter.com"
            icon={<Twitter className="w-5 h-5" />}
            label="Twitter"
          />
        </div>
      </div>
    </section>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <Link
      href={href}
      className="text-gray-600 hover:text-black transition-colors"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </Link>
  );
}
