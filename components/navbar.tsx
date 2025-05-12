"use client";

import type React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./theme-toggle";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 py-4">
      <div
        className={cn(
          "flex items-center justify-between rounded-full bg-background/80 backdrop-blur-md transition-all duration-300",
          scrolled
            ? "w-[40%] py-2 px-4 shadow-md"
            : "container mx-auto py-3 px-6"
        )}
      >
        <Link href="/" className="text-xl font-bold">
          {/* <Image src="/personal.png" alt="Logo" width={100} height={50} /> */}
          <h1 className="text-xl font-medium">Sharif</h1>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink
            href="/"
            active={activeLink === "home"}
            onClick={() => setActiveLink("home")}
          >
            Home
          </NavLink>
          <NavLink
            href="/about"
            active={activeLink === "about"}
            onClick={() => setActiveLink("about")}
          >
            About
          </NavLink>
          <NavLink
            href="/projects"
            active={activeLink === "projects"}
            onClick={() => setActiveLink("projects")}
          >
            Projects
          </NavLink>
          <NavLink
            href="/contact"
            active={activeLink === "contact"}
            onClick={() => setActiveLink("contact")}
          >
            Contact
          </NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80">
              <nav className="flex flex-col gap-6 mt-12">
                <MobileNavLink
                  href="/"
                  active={activeLink === "home"}
                  onClick={() => setActiveLink("home")}
                >
                  Home
                </MobileNavLink>
                <MobileNavLink
                  href="/about"
                  active={activeLink === "about"}
                  onClick={() => setActiveLink("about")}
                >
                  About
                </MobileNavLink>
                <MobileNavLink
                  href="/projects"
                  active={activeLink === "projects"}
                  onClick={() => setActiveLink("projects")}
                >
                  Projects
                </MobileNavLink>
                <MobileNavLink
                  href="/contact"
                  active={activeLink === "contact"}
                  onClick={() => setActiveLink("contact")}
                >
                  Contact
                </MobileNavLink>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

interface NavLinkProps {
  href: string;
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function NavLink({ href, active, onClick, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "relative px-1 py-2 transition-colors",
        active
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground"
      )}
      onClick={onClick}
    >
      {children}
      {active && (
        <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-1.5 h-1.5 bg-green-500 rounded-full" />
      )}
    </Link>
  );
}

function MobileNavLink({ href, active, onClick, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-2xl font-medium transition-colors",
        active ? "text-foreground" : "text-muted-foreground"
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
