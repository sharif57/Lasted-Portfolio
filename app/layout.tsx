import type React from "react"
import type { Metadata } from "next"
import {  Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/Contact"

const inter = Poppins({ weight: ["400"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio - SM",
  description: "Personal portfolio website",
    generator: 'Sharif Mahamud'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <body className={inter.className} > */}
      <body className={'font-clash'} >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
