"use client"

import type React from "react"

import { useState, useEffect } from "react"
import LoadingScreen from "./loading-screen"

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time - you can replace this with actual loading logic
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500) // 2.5 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen isComplete={!isLoading} />
  }

  return <div className="animate-in fade-in duration-500">{children}</div>
}
