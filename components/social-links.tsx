import Link from "next/link"

export default function SocialLinks() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 items-center gap-6">
      <SocialLink href="https://linkedin.com" label="LINKEDIN" />
      <SocialLink href="https://github.com" label="GITHUB" />
      <SocialLink href="https://instagram.com" label="INSTAGRAM" />
      <SocialLink href="mailto:example@gmail.com" label="GMAIL" />
    </div>
  )
}

interface SocialLinkProps {
  href: string
  label: string
}

function SocialLink({ href, label }: SocialLinkProps) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transform transition-transform group-hover:translate-x-1"
      >
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    </Link>
  )
}
