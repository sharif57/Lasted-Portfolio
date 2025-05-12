"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("home")

  const handleLinkClick = (link: string) => {
    setActiveLink(link)
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-80">
        <nav className="flex flex-col gap-6 mt-12">
          <MobileNavLink href="/" active={activeLink === "home"} onClick={() => handleLinkClick("home")}>
            Home
          </MobileNavLink>
          <MobileNavLink href="/about" active={activeLink === "about"} onClick={() => handleLinkClick("about")}>
            About
          </MobileNavLink>
          <MobileNavLink
            href="/projects"
            active={activeLink === "projects"}
            onClick={() => handleLinkClick("projects")}
          >
            Projects
          </MobileNavLink>
          <MobileNavLink href="/contact" active={activeLink === "contact"} onClick={() => handleLinkClick("contact")}>
            Contact
          </MobileNavLink>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

interface MobileNavLinkProps {
  href: string
  active: boolean
  onClick: () => void
  children: React.ReactNode
}

function MobileNavLink({ href, active, onClick, children }: MobileNavLinkProps) {
  return (
    <Link
      href={href}
      className={cn("text-2xl font-medium transition-colors", active ? "text-foreground" : "text-muted-foreground")}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
