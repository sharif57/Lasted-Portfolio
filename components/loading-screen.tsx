// "use client"

// import { useEffect, useState } from "react"

// export default function LoadingScreen() {
//   const [progress, setProgress] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval)
//           return 100
//         }
//         return prev + 2
//       })
//     }, 50)

//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
//       <div className="text-center space-y-8">
//         {/* Logo or Brand */}
//         <div className="animate-pulse">
//           <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center">
//             <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
//           </div>
//         </div>

//         {/* Loading Text */}
//         <div className="space-y-4">
//           <h1 className="text-4xl font-bold text-white animate-fade-in">Welcome</h1>
//           <p className="text-blue-200 text-lg animate-fade-in delay-300">Loading your experience...</p>
//         </div>

//         {/* Progress Bar */}
//         <div className="w-64 mx-auto">
//           <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
//             <div
//               className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-300 ease-out"
//               style={{ width: `${progress}%` }}
//             ></div>
//           </div>
//           <p className="text-white/70 text-sm mt-2">{progress}%</p>
//         </div>

//         {/* Animated Dots */}
//         <div className="flex justify-center space-x-2">
//           <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
//           <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-100"></div>
//           <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-200"></div>
//         </div>
//       </div>
//     </div>
//   )
// }
"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Code, Palette, Zap, CheckCircle } from "lucide-react"

interface LoadingStep {
  icon: React.ElementType
  text: string
  completed: boolean
}

export default function LoadingScreen({ isComplete }: { isComplete: boolean }) {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [steps, setSteps] = useState<LoadingStep[]>([
    { icon: Code, text: "Initializing...", completed: false },
    { icon: Palette, text: "Loading projects...", completed: false },
    { icon: Zap, text: "Preparing experience...", completed: false },
    { icon: CheckCircle, text: "Almost ready...", completed: false },
  ])

  useEffect(() => {
    const stepDurations = [500, 800, 600, 700]
    let totalTime = 0

    stepDurations.forEach((duration, index) => {
      totalTime += duration
      setTimeout(() => {
        setCurrentStep(index + 1)
        setSteps((prev) => prev.map((step, i) => (i <= index ? { ...step, completed: true } : step)))
      }, totalTime)
    })

    // Progress animation
    const progressInterval = setInterval(
      () => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval)
            return 100
          }
          return prev + 1
        })
      },
      stepDurations.reduce((a, b) => a + b, 0) / 100,
    )

    return () => clearInterval(progressInterval)
  }, [])

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-800 ${isComplete ? "opacity-0 scale-110" : "opacity-100 scale-100"}`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-indigo-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <div className="text-center space-y-12 max-w-md w-full">
          {/* Logo/Name Section */}
          <div className="space-y-6">
            <div className="relative">
              <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full p-1 animate-spin-slow">
                <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white font-playfair">SM</span>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold text-white font-playfair tracking-wide">Sharif Mahamud</h1>
              <p className="text-blue-200 text-lg font-light tracking-wider">
                Full Stack Developer & Creative Designer
              </p>
            </div>
          </div>

          {/* Loading Steps */}
          <div className="space-y-6">
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-4 transition-all duration-500 ${
                    index <= currentStep - 1 ? "opacity-100 translate-x-0" : "opacity-50 translate-x-4"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      step.completed
                        ? "bg-green-500 text-white"
                        : index === currentStep
                          ? "bg-blue-500 text-white animate-pulse"
                          : "bg-slate-700 text-slate-400"
                    }`}
                  >
                    <step.icon className="w-4 h-4" />
                  </div>
                  <span
                    className={`text-sm transition-colors duration-300 ${
                      step.completed ? "text-green-400" : "text-slate-300"
                    }`}
                  >
                    {step.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="space-y-3">
              <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300 ease-out relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
                </div>
              </div>
              <div className="flex justify-between text-xs text-slate-400">
                <span>Loading Portfolio</span>
                <span>{progress}%</span>
              </div>
            </div>
          </div>

          {/* Animated Quote */}
          <div className="opacity-70">
            <p className="text-slate-300 text-sm italic font-light">
              {"Crafting digital experiences with passion and precision"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
