"use client"

import { useTheme } from "next-themes"
import Image, { type ImageProps } from "next/image"
import { useEffect, useState } from "react"

type ThemeImageProps = Omit<ImageProps, "src"> & {
  lightSrc: string
  darkSrc: string
}

export default function ThemeImage({ lightSrc, darkSrc, alt, ...props }: ThemeImageProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <Image src={theme === "dark" ? darkSrc : lightSrc} alt={alt} {...props} />
}
