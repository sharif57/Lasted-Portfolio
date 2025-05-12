"use client"

import type { ReactNode } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface ExpertiseCardProps {
  title: string
  icon: ReactNode
  description: string
  isActive: boolean
  onClick: () => void
}

export default function ExpertiseCard({ title, icon, description, isActive, onClick }: ExpertiseCardProps) {
  return (
    <div
      className={`border rounded-lg transition-all duration-300 ${
        isActive ? "border-gray-300 shadow-sm" : "border-gray-200"
      }`}
    >
      <button className="w-full px-6 py-4 flex items-center justify-between" onClick={onClick}>
        <div className="flex items-center">
          <span className="mr-3">{icon}</span>
          <span className="text-lg font-medium">{title}</span>
        </div>
        {isActive ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
      </button>
      {isActive && (
        <div className="px-6 pb-4 pt-0 animate-fadeIn">
          <p className="text-gray-600">{description}</p>
        </div>
      )}
    </div>
  )
}
